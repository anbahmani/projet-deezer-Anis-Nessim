import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { AlbumService } from '../services/album.service';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

	public album!:Album;
  constructor(private deezerService:DeezerService, private albumService:AlbumService) { }

  ngOnInit(): void {
	  this.album = this.albumService.getAlbum();
  }

}
