import { HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router,RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as farHeart} from '@fortawesome/free-solid-svg-icons';
import { DeezerService } from '../services/deezer.service';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { ArtistService } from '../services/artist.service';
import { Album } from '../models/Album';
import { AlbumService } from '../services/album.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public farHeart =farHeart;
  public fasHeart = fasHeart;
  
  id!: string ;
  public artist!: Artist;
  private response: any;
  private response2!: any;
  public listTop!: Track[];
  public albums!:Album[];
  public isInUserLibrary !: boolean;

  constructor(	private deezerService:DeezerService,
				private router:Router, 
				private artistService:ArtistService, 
				private albumService:AlbumService,
				public userService:UserService) {}

  async ngOnInit() {
    this.artist = this.artistService.getArtist();
	this.getTopList();
	this.getAlbums();
	if (this.userService.accessToken != undefined){
		this.getArtistFromUserLibrary();
	}
  }

  private async getTopList(){
	const liste$ = this.deezerService.getTopByArtist(+(this.artist.id));
    this.response = await firstValueFrom(liste$);
    this.listTop = this.response.data;
  }

  private async getAlbums(){
	const listeAlbums$ = this.deezerService.getAlbumsByArtist(+(this.artist.id));
    this.response2 = await firstValueFrom(listeAlbums$);
    this.albums = this.response2.data;
  }

  public secondesToMinutes(track:Track): string{
		let minutes = Math.floor(track.duration / 60).toString().concat("min ");
		let secondes = (track.duration % 60).toString();
		return (minutes.concat(secondes));
  }

  public sendAlbumAndNavigateToAlbum(selectedAlbum : Album){
    this.albumService.setAlbum(selectedAlbum);
    this.router.navigateByUrl('/album');
  }

  public shortString(str:string) : string{
	return (str.length > 20) ? str.slice(0, 19).concat("...") : str;
  }

  public addArtistToLibrary(){
	this.deezerService.addArtistToUserLibrary(this.userService.user.id, this.artist.id, this.userService.accessToken);
	this.isInUserLibrary = true;
  }

  public removeArtistFromLibrary(){
	this.deezerService.removeArtistFromUserLibrary(this.userService.user.id, this.artist.id, this.userService.accessToken);
	this.isInUserLibrary = false;
  }

  public async getArtistFromUserLibrary(){
	const artists$ = this.deezerService.getArtistsFromUserLibrary(this.userService.accessToken);
	if (artists$ != undefined) {
		const response : any = await firstValueFrom(artists$);
    	const artists = response.data;
		const artistId = this.artist.id;
		this.isInUserLibrary = artists.some(function(art : Artist) {
			return art.id === artistId;
		  });
	}
  }
}
