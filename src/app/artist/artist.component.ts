import { HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router,RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
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
  id!: string ;
  public artist!: Artist;
  public response: any;
  public response2!: any;
  public listeTop!: Track[];
  public albums!:Album[];

  constructor(	private deezerService:DeezerService,
				private router:Router, 
				private artistService:ArtistService, 
				private albumService:AlbumService,
				private userService:UserService) {}

  async ngOnInit() {
    this.artist = this.artistService.getArtist();
    const liste$ = this.deezerService.getTopByArtist(+(this.artist.id));
    this.response = await firstValueFrom(liste$);
    this.listeTop = this.response.data;
	  const listeAlbums$ = this.deezerService.getAlbumsByArtist(+(this.artist.id));
    this.response2 = await firstValueFrom(listeAlbums$);
    this.albums = this.response2.data;
  }

  public secondesToMinutes(track:Track): string{
		let minutes = Math.floor(track.duration / 60).toString().concat("min");
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

  public async addArtistToLibrary(){
	  console.log(this.userService.user);
	this.deezerService.addArtistToUserLibrary(this.userService.user.id, this.artist.id, this.userService.accessToken);
  }
}
