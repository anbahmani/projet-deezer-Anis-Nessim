import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Track } from '../models/Track';
import { DeezerService } from '../services/deezer.service';
import { TrackService } from '../services/track.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-tracks',
  templateUrl: './user-tracks.component.html',
  styleUrls: ['./user-tracks.component.scss']
})
export class UserTracksComponent implements OnInit {

	public tracks !: Track[];

  constructor(	private deezerService : DeezerService,
				private userService : UserService,
				private trackService : TrackService,
				private router : Router) { }

  public ngOnInit(): void {
	  this.getTracks();
  }

  public async getTracks(){
	const tracks$ = this.deezerService.getTracksFromUserLibrary(this.userService.accessToken);
	if (tracks$ != undefined) {
	const response : any = await firstValueFrom(tracks$);
	this.tracks = response.data;
	}
  }

  public shortString(str:string) : string{
	return (str.length > 20) ? str.slice(0, 19).concat("...") : str;
  }

  public sendTrackAndNavigateToTrack(selectedTrack:Track){
	this.trackService.setTrack(selectedTrack);
	this.router.navigateByUrl('/track');
  }
}
