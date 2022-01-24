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
	public responseArtists: any;
	public responseTracks: any;
	public responseAlbums: any;
	public responsePlaylists: any;
	public canGetMoreArtists:boolean = true;
	public canGetMoreAlbums:boolean = true;
	public canGetMoreTracks:boolean = true;
	public canGetMorePlaylists:boolean = true;
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
   		this.responseArtists = await firstValueFrom(obs_artists$);
   		this.artists = this.responseArtists.data;
		if (this.responseArtists.next == undefined)
			this.canGetMoreArtists = false;
		const obs_tracks$ = this.deezerService.getTracksByName(event.target.value);
   		this.responseTracks = await firstValueFrom(obs_tracks$);
   		this.tracks = this.responseTracks.data;
		const obs_albums$ = this.deezerService.getAlbumsByName(event.target.value);
   		this.responseAlbums = await firstValueFrom(obs_albums$);
   		this.albums = this.responseAlbums.data;
		const obs_playslits$ = this.deezerService.getPlaylistsByName(event.target.value);
   		this.responsePlaylists = await firstValueFrom(obs_playslits$);
   		this.playlists = this.responsePlaylists.data;
	}

	public sendArtistAndNavigateToArtist(selectedArtist:Artist){
		this.artistService.setArtist(selectedArtist);
		this.router.navigateByUrl('/artist');
	}

	public sendTrackAndNavigateToTrack(selectedTrack:Track){
		this.trackService.setTrack(selectedTrack);
		this.router.navigateByUrl('/track');
	}

	public sendAlbumAndNavigateToAlbum(selectedAlbum:Album){
		this.albumService.setAlbum(selectedAlbum);
		this.router.navigateByUrl('/album');
	}

	public sendPlaylistAndNavigateToPlaylist(selectedPlaylist:Playlist){
		this.playlistService.setPlaylist(selectedPlaylist);
		this.router.navigateByUrl('/artist');
	}

	public checkNextFromResponse(url:string) : boolean{
		return !(url == undefined);
	}

	public async getArtistsFromNextPage() {
		if (this.canGetMoreArtists)
		{	const obs_artists$ = this.deezerService.getResponseFromUrl(this.responseArtists.next);
   			this.responseArtists = await firstValueFrom(obs_artists$);
			const newArtists = this.responseArtists.data;
			this.artists = this.artists.concat(newArtists);
			this.canGetMoreArtists = this.checkNextFromResponse(this.responseArtists.next);
		}
	}

	public async getTracksFromNextPage() {
		if (this.canGetMoreTracks)
		{	const obs_tracks$ = this.deezerService.getResponseFromUrl(this.responseTracks.next);
   			this.responseTracks = await firstValueFrom(obs_tracks$);
			const newTracks = this.responseTracks.data;
			this.tracks = this.tracks.concat(newTracks);
			this.canGetMoreTracks = this.checkNextFromResponse(this.responseTracks.next);
		}
	}

	public async getAlbumsFromNextPage() {
		if (this.canGetMoreAlbums)
		{	const obs_albums$ = this.deezerService.getResponseFromUrl(this.responseAlbums.next);
   			this.responseAlbums = await firstValueFrom(obs_albums$);
			const newAlbums = this.responseAlbums.data;
			this.albums = this.albums.concat(newAlbums);
			this.canGetMoreAlbums = this.checkNextFromResponse(this.responseAlbums.next);
		}
	}

	public async getPlaylistsFromNextPage() {
		if (this.canGetMorePlaylists)
		{	const obs_PLaylists$ = this.deezerService.getResponseFromUrl(this.responsePlaylists.next);
   			this.responsePlaylists = await firstValueFrom(obs_PLaylists$);
			const newPLaylists = this.responsePlaylists.data;
			this.playlists = this.playlists.concat(newPLaylists);
			this.canGetMorePlaylists = this.checkNextFromResponse(this.responsePlaylists.next);
		}
	}
}
