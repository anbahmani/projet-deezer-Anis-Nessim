import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Artist } from '../models/Artist';
import { ArtistService } from '../services/artist.service';
import { DeezerService } from '../services/deezer.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-artists',
  templateUrl: './user-artists.component.html',
  styleUrls: ['./user-artists.component.scss']
})
export class UserArtistsComponent implements OnInit {

  public artists !: Artist[];

  constructor(	private deezerService : DeezerService,
				private userService : UserService,
				private artistService : ArtistService,
				private router : Router) { }

  public ngOnInit(): void {
	  this.getArtists();
  }

  public async getArtists(){
	const artists$ = this.deezerService.getArtistsFromUserLibrary(this.userService.accessToken);
	if (artists$ != undefined) {
		const response : any = await firstValueFrom(artists$);
    	this.artists = response.data;
	}
  }

  public shortString(str:string) : string{
	return (str.length > 20) ? str.slice(0, 19).concat("...") : str;
  }

  public sendArtistAndNavigateToArtist(selectedArtist:Artist){
	this.artistService.setArtist(selectedArtist);
	this.router.navigateByUrl('/artist');
  }
}
