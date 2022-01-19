import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DeezerService } from '../services/deezer.service';
import { Artist} from '../models/Artist';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { Playlist } from '../models/Playlist'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ArtistService } from '../services/artist.service';
import { AlbumService } from '../services/album.service';
import { TrackService } from '../services/track.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-general-search-music',
  templateUrl: './general-search-music.component.html',
  styleUrls: ['./general-search-music.component.scss']
})
export class GeneralSearchMusicComponent implements OnInit {

	faSearch = faSearch;
	
	public artists: Artist[] = [];
	public tracks: Track[] = [];
	public	albums: Album[] = [];
	public	playlists: Playlist[] = [];
	public response: any;
	searchForm !: FormGroup;
	emptySearch : boolean = true;

	constructor(private fb : FormBuilder, private router: Router, 
				private deezerService:DeezerService, 
				private artistService:ArtistService,
				private albumService:AlbumService,
				private trackService:TrackService,
				private playlistService:PlaylistService) {
	 }
  
	ngOnInit() : void {
	  this.initForm();
	}
  
	 initForm() {
	  this.searchForm = this.fb.group({
		search : ['', [Validators.required]]
		});
	 }


	 isEmptySearch() : boolean {
		 return this.emptySearch;
	 }

	async onKeypressEvent(event: any){
		if (event.target.value == "")
		{
			this.emptySearch = true;
			return ;
		}
		this.emptySearch = false;
		const obs_artists$ = this.deezerService.getArtistsByName(event.target.value);
   		this.response = await firstValueFrom(obs_artists$);
   		this.artists = this.response.data;
		const obs_tracks$ = this.deezerService.getTracksByName(event.target.value);
   		this.response = await firstValueFrom(obs_tracks$);
   		this.tracks = this.response.data;
		const obs_albums$ = this.deezerService.getAlbumsByName(event.target.value);
   		this.response = await firstValueFrom(obs_albums$);
   		this.albums = this.response.data;
		const obs_playslits$ = this.deezerService.getPlaylistsByName(event.target.value);
   		this.response = await firstValueFrom(obs_playslits$);
   		this.playlists = this.response.data;
	}

	public sendArtist(selectedArtist:Artist){
		this.artistService.setArtist(selectedArtist);
	}

	public sendTrack(selectedTrack:Track){
		this.trackService.setTrack(selectedTrack);
	}

	public sendAlbum(selectedAlbum:Album){
		this.albumService.setAlbum(selectedAlbum);
	}

	public sendPlaylist(selectedPlaylist:Playlist){
		this.playlistService.setPlaylist(selectedPlaylist);
	}
}
