import {  formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Album } from '../models/Album';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AlbumService } from '../services/album.service';
import { DeezerService } from '../services/deezer.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public faCalendar = faCalendar;

  public response : any;
	public album!:Album;

  constructor(private deezerService:DeezerService, private albumService:AlbumService) { }

  async ngOnInit() {
    const infoAlbum$ = this.deezerService.getAlbumFullInfo(this.albumService.getAlbum().id);;
    this.response = await firstValueFrom(infoAlbum$);
	  this.album = this.response;
 
  }

  public secondesToMinutes(): string{
    let minutes = Math.floor(this.album.duration / 60).toString().concat(" min");
    return minutes;
  }

  public dateFr():string{
    let formattedDt = formatDate(this.album.release_date, 'dd/MM/yyyy', 'en_US');
    return formattedDt;
  }
}

