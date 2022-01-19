import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

	private artist !: Artist;

	public getArtist() : Artist{
		return this.artist;
	}

	public setArtist(artist : Artist) {
		this.artist = artist;
	}
}
