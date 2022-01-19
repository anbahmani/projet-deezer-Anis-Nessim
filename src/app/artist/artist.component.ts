import { HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute,RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
import { DeezerService } from '../services/deezer.service';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { ArtistService } from '../services/artist.service';

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

  constructor(private deezerService:DeezerService,private route: ActivatedRoute, private artistService:ArtistService) {

   }

  async ngOnInit() {
    this.artist = this.artistService.getArtist();
	console.log(this.artistService.getArtist());
    const liste$ = this.deezerService.getTopByArtist(+(this.artist.id));
    this.response2 = await firstValueFrom(liste$);
    this.listeTop = this.response2.data;
  }
}
