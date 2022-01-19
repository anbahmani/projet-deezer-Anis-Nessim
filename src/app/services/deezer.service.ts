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


  public getListGenre(){ 
    const url:string="http://localhost:8080/https://api.deezer.com/genre";
    return this.http.get(url);
  }

  public getArtistsByName(name : string){
    var url : string = "http://localhost:8080/https://api.deezer.com/search/artist?q=";
	var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getTracksByName(name : string){
    var url : string = "http://localhost:8080/https://api.deezer.com/search/track?q=";
    var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getAlbumsByName(name : string){
    var url : string = "http://localhost:8080/https://api.deezer.com/search/album?q=";
    var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getPlaylistsByName(name : string){
    var url : string = "http://localhost:8080/https://api.deezer.com/search/playlist?q=";
	var request = url.concat(name).toString();
    return this.http.get(request.concat("&limit=5").toString());
  }

  public getArtist(id:number){
    const url:string="http://localhost:8080/https://api.deezer.com/artist/".concat(id.toString());
    return this.http.get(url);
  }

  public getArtistTest(){ 
    const url:string="http://localhost:8080/https://api.deezer.com/artist/27";
    return this.http.get(url);
  }

  public getTopByArtist(id:number){ 
    const url:string="http://localhost:8080/https://api.deezer.com/artist/".concat(id.toString().concat("/top"));
    return this.http.get(url);
  }

  public getArtistsByGenre(id : number){
	  var url : string = "http://localhost:8080/https://api.deezer.com/genre/";
	  var request = url.concat(id.toString()).toString();
	  return this.http.get(request.concat("/artists").toString());
  }
}
