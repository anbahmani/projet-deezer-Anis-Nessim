import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Track } from '../models/Track';
import { DeezerService } from '../services/deezer.service';
import { TrackService } from '../services/track.service';
import { faHourglass,faCalendar, faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  public faHourglass = faHourglass;
  public faCalendar = faCalendar;
  public fasHeart = fasHeart;
  public farHeart = farHeart;

  public isInUserLibrary !: boolean; 
  public track !: Track;
  private response:any;

  constructor(	private deezerService:DeezerService,
				private trackService:TrackService,
				public userService:UserService) {}

  async ngOnInit() {
    const infoTrack$ =this.deezerService.getTrackFullInfo(this.trackService.getTrack().id);
    this.response = await firstValueFrom(infoTrack$);
	  this.track = this.response;
	  if (this.userService.accessToken != undefined){
		this.getTrackFromUserLibrary();
	}
  }

  public secondesToMinutes(): string{
    let minutes = Math.floor(this.track.duration / 60).toString().concat("min ");
    let secondes = (this.track.duration % 60).toString();
    return (minutes.concat(secondes));
}

  public dateRelease():string{
  	let formattedDt = formatDate(this.track.album.release_date, 'dd/MM/yyyy', 'en_US');
  	return formattedDt;
  }

  public addTrackToLibrary(){
	this.deezerService.addTrackToUserLibrary(this.userService.user.id, this.track.id, this.userService.accessToken);
	this.isInUserLibrary = true;
  }

  public removeTrackFromLibrary(){
	this.deezerService.removeTrackFromUserLibrary(this.userService.user.id, this.track.id, this.userService.accessToken);
	this.isInUserLibrary = false;
  }

  public async getTrackFromUserLibrary(){
	const tracks$ = this.deezerService.getTracksFromUserLibrary(this.userService.accessToken);
	if (tracks$ != undefined) {
		const response : any = await firstValueFrom(tracks$);
    	const tracks = response.data;
		const trackId = this.track.id;
		this.isInUserLibrary = tracks.some(function(tr : Track) {
			return tr.id === trackId;
		  });
	}
  }
}
