import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DeezerService } from '../deezer.service';
import { Artist } from '../model/Artist';

@Component({
  selector: 'app-recherche-musique',
  templateUrl: './recherche-musique.component.html',
  styleUrls: ['./recherche-musique.component.scss']
})
export class RechercheMusiqueComponent implements OnInit {
  public artists : Artist[] = [];

  public response: any;
  constructor(private deezerService:DeezerService) { }

  async ngOnInit() {
    const obs$ = this.deezerService.getArtistTest();
    this.response = await firstValueFrom(obs$);
    this.artists = this.response;
  }
}
