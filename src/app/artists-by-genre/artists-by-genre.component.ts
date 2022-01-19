import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Artist } from '../models/Artist';
import { Genre } from '../models/Genre';
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

  constructor(private deezerService:DeezerService) { }

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
}
