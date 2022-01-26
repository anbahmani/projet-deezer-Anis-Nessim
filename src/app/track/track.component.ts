import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Track } from '../models/Track';
import { DeezerService } from '../services/deezer.service';
import { TrackService } from '../services/track.service';
import { faHourglass,faCalendar, faHeart} from '@fortawesome/free-solid-svg-icons';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  public faHourglass = faHourglass;
  public faCalendar = faCalendar;
  public faHeart = faHeart;
  

	public track !: Track;
  private response:any;

  constructor(private deezerService:DeezerService, private trackService:TrackService) {}

  async ngOnInit() {
    const infoTrack$ =this.deezerService.getTrackFullInfo(this.trackService.getTrack().id);
    this.response = await firstValueFrom(infoTrack$);
	  this.track = this.response;
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
	
  }
}
