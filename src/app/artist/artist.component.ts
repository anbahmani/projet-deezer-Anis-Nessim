import { HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,RouterStateSnapshot } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DeezerService } from '../deezer.service';
import { Artist } from '../model/Artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id!: string ;
  public artist!: Artist;
  public response: any;
  constructor(private deezerService:DeezerService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
   }

  async ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id') || '' ;
    const obs$ = this.deezerService.getArtist(+(this.id));
    this.response = await firstValueFrom(obs$);
    this.artist = this.response.data;
    console.log(this.artist);
  }

}
