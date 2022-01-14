import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artist} from '../models/Artist';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { Playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http:HttpClient) { }

  public getArtist(){
    var url : string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/pnl";
    return this.http.get(url);
  }

  public getListGenre(){ 
    const url:string="https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
    return this.http.get(url);
  }

  public getArtistsByName(name : string){
    var url : string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=";
	var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getTracksByName(name : string){
    var url : string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=";
    var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getAlbumsByName(name : string){
    var url : string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=";
    var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getPlaylistsByName(name : string){
    var url : string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=";
	var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }
}
