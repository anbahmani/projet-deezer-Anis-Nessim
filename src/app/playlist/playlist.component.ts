import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { DeezerService } from '../services/deezer.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

	public playlist!:Playlist;

  constructor(private deezerService:DeezerService, private playlistService:PlaylistService) { }

  ngOnInit(): void {
	  this.playlist = this.playlistService.getPlaylist();
  }

}
