import {  formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Album } from '../models/Album';
import { faCalendar, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart} from '@fortawesome/free-solid-svg-icons';
import { AlbumService } from '../services/album.service';
import { DeezerService } from '../services/deezer.service';
import { Track } from '../models/Track';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public faCalendar = faCalendar;
  public fasHeart = fasHeart;
  public farHeart = farHeart;

	private response : any;
	public album!:Album;
	public isInUserLibrary !: boolean; 


  constructor(	private deezerService:DeezerService,
				private albumService:AlbumService,
				public userService:UserService) { }

  async ngOnInit() {
    const infoAlbum$ = this.deezerService.getAlbumFullInfo(this.albumService.getAlbum().id);;
    this.response = await firstValueFrom(infoAlbum$);
	  this.album = this.response;
	  if (this.userService.accessToken != undefined){
		this.getAlbumFromUserLibrary();
	}
  }

  public secondesToMinutes(): string{
    let minutes = Math.floor(this.album.duration / 60).toString().concat(" min");
    return minutes;
  }

  public formatDuration(track:Track): string{
    let minutes = Math.floor(track.duration / 60).toString().concat("min ");
    let secondes = (track.duration % 60).toString();
    return (minutes.concat(secondes));
  }

  public dateRelease():string{
    let formattedDt = formatDate(this.album.release_date, 'dd/MM/yyyy', 'en_US');
    return formattedDt;
  }

  public addAlbumToLibrary(){
	this.deezerService.addAlbumToUserLibrary(this.userService.user.id, this.album.id, this.userService.accessToken);
	this.isInUserLibrary = true;
  }

  public removeAlbumFromLibrary(){
	this.deezerService.removeAlbumFromUserLibrary(this.userService.user.id, this.album.id, this.userService.accessToken);
	this.isInUserLibrary = false;
  }

  public async getAlbumFromUserLibrary(){
	const albums$ = this.deezerService.getAlbumsFromUserLibrary(this.userService.accessToken);
	if (albums$ != undefined) {
		const response : any = await firstValueFrom(albums$);
    	const albums = response.data;
		const albumId = this.album.id;
		this.isInUserLibrary = albums.some(function(alb : Album) {
			return alb.id === albumId;
		  });
	}
  }
}

