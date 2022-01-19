import { Injectable } from '@angular/core';
import { Track } from '../models/Track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

	private track !: Track;

	public getTrack() : Track{
		return this.track;
	}

	public setTrack(track : Track) {
		this.track = track;
	}
}
