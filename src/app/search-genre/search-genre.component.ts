import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Genre } from '../models/Genre';
import { DeezerService } from '../services/deezer.service';


@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.scss']
})
export class SearchGenreComponent implements OnInit {
  private response: any;
  public genres: Genre[] = [];
  public selectedGenre !: Genre;
  constructor(private deezerService:DeezerService) { }

  async ngOnInit() {
    const obs$ = this.deezerService.getListGenre();
    this.response = await firstValueFrom(obs$);
    this.genres = this.response.data;
  }

  setSelectedGenre(selectedGenre : Genre) {
	  this.selectedGenre = selectedGenre;
  }
}
