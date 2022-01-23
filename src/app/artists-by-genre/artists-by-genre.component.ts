import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Artist } from '../models/Artist';
import { Genre } from '../models/Genre';
import { ArtistService } from '../services/artist.service';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-artists-by-genre',
  templateUrl: './artists-by-genre.component.html',
  styleUrls: ['./artists-by-genre.component.scss']
})
export class ArtistsByGenreComponent implements OnInit {

	@Input() currentGenre !: Genre;
	artists : Artist[] = [];
	response : any;
	numItemsScroll !: number;

  constructor(private deezerService:DeezerService, private router:Router, private artistService:ArtistService) { }

  async ngOnInit() {
	if (this.currentGenre != undefined)
	{
		const obs$ = this.deezerService.getArtistsByGenre(this.currentGenre.id);
    	this.response = await firstValueFrom(obs$);
    	this.artists = this.response.data;
	}
  }
  
	ngOnChanges() {
		this.updateArtists();
	}

	async updateArtists()
	{
		const obs$ = this.deezerService.getArtistsByGenre(this.currentGenre.id);
	    this.response = await firstValueFrom(obs$);
	    this.artists = this.response.data;
	}

	findNumItemsScroll() : number {
		let size = this.artists.length;
		return size;
	}

	public sendArtistAndNavigateToArtist(selectedArtist:Artist){
		this.artistService.setArtist(selectedArtist);
		this.router.navigateByUrl('/artist');
	}
}
