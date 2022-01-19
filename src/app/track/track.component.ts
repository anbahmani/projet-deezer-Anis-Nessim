import { Component, OnInit } from '@angular/core';
import { Track } from '../models/Track';
import { DeezerService } from '../services/deezer.service';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

	public track !: Track;

  constructor(private deezerService:DeezerService, private trackService:TrackService) {}

  ngOnInit(): void {
	this.track = this.trackService.getTrack();
  }
}
