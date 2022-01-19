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

	constructor(private fb : FormBuilder, private router: Router, private deezerService:DeezerService) {
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
}
