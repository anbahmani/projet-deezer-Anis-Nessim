import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Playlist } from '../models/Playlist';
import { DeezerService } from '../services/deezer.service';
import { PlaylistService } from '../services/playlist.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-playlists',
  templateUrl: './user-playlists.component.html',
  styleUrls: ['./user-playlists.component.scss']
})
export class UserPlaylistsComponent implements OnInit {

	public playlists !: Playlist[];

  constructor(	private deezerService : DeezerService,
				private userService : UserService,
				private playlistService : PlaylistService,
				private router : Router) { }
  
  public async ngOnInit(){
	const playlists$ = this.deezerService.getPlaylistsFromUserLibrary(this.userService.accessToken);
	
	if (playlists$ != undefined) {
		const response : any = await firstValueFrom(playlists$);
		this.playlists = response.data;
		const playlistToReturn : Array<Playlist> = new Array<Playlist>();
	this.playlists.forEach((uniquePlaylist : Playlist)=>{
		if(!uniquePlaylist.is_loved_track){
			playlistToReturn.push(uniquePlaylist)
		}
		this.playlists = playlistToReturn;
	});
	}
	console.log(this.playlists)
  }
  /*
  public async getPlaylists(){
	const playlists$ = this.deezerService.getPlaylistsFromUserLibrary(this.userService.accessToken);
	if (playlists$ != undefined) {
		const response : any = await firstValueFrom(playlists$);
		this.playlists = response.data;
	}
  }*/
  
  public shortString(str:string) : string{
	return (str.length > 20) ? str.slice(0, 19).concat("...") : str;
  }
  
  public sendPlaylistAndNavigateToPlaylist(selectedPlaylist:Playlist){
	this.playlistService.setPlaylist(selectedPlaylist);
	this.router.navigateByUrl('/playlist');
  }
}
