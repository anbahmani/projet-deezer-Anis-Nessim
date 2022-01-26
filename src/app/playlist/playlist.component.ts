import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { DeezerService } from '../services/deezer.service';
import { PlaylistService } from '../services/playlist.service';
import { faUser, faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { Track } from '../models/Track';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  public faUser = faUser;
  public faCalendar = faCalendar;
  public faHeart = faHeart;
  public isInUserLibrary !: boolean; 
  public playlist!: Playlist;
  private response: any;

  constructor(	private deezerService: DeezerService,
				private playlistService: PlaylistService,
				public userService:UserService) { }

  async ngOnInit() {
    const infoPlaylist$ = this.deezerService.getPlaylistFullInfo(this.playlistService.getPlaylist().id);
    this.response = await firstValueFrom(infoPlaylist$);
    this.playlist = this.response;
  }

  public dateCreation(): string {
    let formattedDt = formatDate(this.playlist.creation_date, 'dd/MM/yyyy', 'en_US');
    return formattedDt;
  }

  public formatDuration(track: Track): string {
    let minutes = Math.floor(track.duration / 60).toString().concat("min ");
    let secondes = (track.duration % 60).toString();
    return (minutes.concat(secondes));
  }

  public addPlaylistToLibrary(){
	this.deezerService.addPlaylistToUserLibrary(this.userService.user.id, this.playlist.id, this.userService.accessToken);	
	this.isInUserLibrary = true;
  }

  public removePlaylistFromLibrary(){
	this.deezerService.removePlaylistFromUserLibrary(this.userService.user.id, this.playlist.id, this.userService.accessToken);
	this.isInUserLibrary = false;
  }

  public async getPlaylistFromUserLibrary(){
	const playlists$ = this.deezerService.getPlaylistsFromUserLibrary(this.userService.accessToken);
	if (playlists$ != undefined) {
		const response : any = await firstValueFrom(playlists$);
    	const playlists = response.data;
		const playlistId = this.playlist.id;
		this.isInUserLibrary = playlists.some(function(play : Playlist) {
			return play.id === playlistId;
		  });
	}
  }
}
