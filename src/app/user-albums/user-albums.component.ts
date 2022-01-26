import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Album } from '../models/Album';
import { AlbumService } from '../services/album.service';
import { DeezerService } from '../services/deezer.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  public albums !: Album[];

  constructor(	private deezerService : DeezerService,
				private userService : UserService,
				private albumService : AlbumService,
				private router : Router) { }

  public ngOnInit(): void {
	  this.getAlbums();
  }

  public async getAlbums(){
	const albums$ = this.deezerService.getAlbumsFromUserLibrary(this.userService.accessToken);
	if (albums$ != undefined) {
		const response : any = await firstValueFrom(albums$);
    	this.albums = response.data;
	}
  }

  public shortString(str:string) : string{
	return (str.length > 20) ? str.slice(0, 19).concat("...") : str;
  }

  public sendAlbumAndNavigateToAlbum(selectedAlbum:Album){
	this.albumService.setAlbum(selectedAlbum);
	this.router.navigateByUrl('/album');
  }
}
