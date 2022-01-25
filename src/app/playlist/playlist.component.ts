import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { DeezerService } from '../services/deezer.service';
import { PlaylistService } from '../services/playlist.service';
import { faUser,faCalendar,faHeart} from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { Track } from '../models/Track';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  public faUser = faUser; 
  public faCalendar = faCalendar; 
  public faHeart = faHeart;

	public playlist!:Playlist;
  protected response:any;

  constructor(private deezerService:DeezerService, private playlistService:PlaylistService) { }

  async ngOnInit() {
    const infoPlaylist$ = this.deezerService.getPlaylistFullInfo(this.playlistService.getPlaylist().id);
    this.response = await firstValueFrom(infoPlaylist$);
	  this.playlist = this.response;
  }

  public dateFr():string{
    let formattedDt = formatDate(this.playlist.creation_date, 'dd/MM/yyyy', 'en_US');
    return formattedDt;
  }

  public formatDuration(track:Track): string{
    let minutes = Math.floor(track.duration / 60).toString().concat("min ");
    let secondes = (track.duration % 60).toString();
    return (minutes.concat(secondes));
  }

}
