import { HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute,RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
import { DeezerService } from '../services/deezer.service';
import { Artist } from '../model/Artist';
import { Track } from '../models/Track';

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

  constructor(private deezerService:DeezerService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });
   }

  async ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id') || '' ;
    const obs$ = this.deezerService.getArtist(+(this.id));
    this.response = await firstValueFrom(obs$);
    this.artist = this.response;
    const liste$ = this.deezerService.getTopByArtist(+(this.id));
    this.response2 = await firstValueFrom(liste$);
    this.listeTop = this.response2.data;

  }
}
