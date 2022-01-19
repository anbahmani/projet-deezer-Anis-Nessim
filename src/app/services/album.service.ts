import { Injectable } from '@angular/core';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

	private album !: Album;

	public getAlbum() : Album{
		return this.album;
	}

	public setAlbum(album : Album) {
		this.album = album;
	}
}
