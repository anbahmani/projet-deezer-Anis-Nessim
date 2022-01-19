import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Genre } from '../models/Genre';
import { DeezerService } from '../services/deezer.service';


@Component({
  selector: 'app-recherche-genre',
  templateUrl: './recherche-genre.component.html',
  styleUrls: ['./recherche-genre.component.scss']
})
export class RechercheGenreComponent implements OnInit {
  public response: any;
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
