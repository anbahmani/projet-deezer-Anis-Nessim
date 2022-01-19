import { Injectable } from '@angular/core';
import { Playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

	private playlist !: Playlist;

	public getPlaylist() : Playlist{
		return this.playlist;
	}

	public setPlaylist(playlist : Playlist) {
		this.playlist = playlist;
	}
}
