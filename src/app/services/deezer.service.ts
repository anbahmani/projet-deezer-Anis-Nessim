import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';
import { Playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http:HttpClient) { }


  public getListGenre(){ 
    const url:string='http://localhost:8080/https://api.deezer.com/genre';
    return this.http.get(url);
  }

  public getArtistsByName(name : string, indexNum ?: number){
    var url : string = 'http://localhost:8080/https://api.deezer.com/search/artist?q=';
	var request = url.concat(name).toString();
    return this.http.get(request.concat('&limit=5').toString());
  }

  public getArtistFullInfo(id: number) {
    var url : string = 'http://localhost:8080/https://api.deezer.com/artist/'.concat(id.toString());
    return this.http.get(url);
  }

  public getTracksByName(name : string){
    var url : string = 'http://localhost:8080/https://api.deezer.com/search/track?q=';
    var request = url.concat(name).toString();
    return this.http.get(request.concat('&limit=5').toString());
  }

  getTrackFullInfo(id: number) {
    var url : string = 'http://localhost:8080/https://api.deezer.com/track/'.concat(id.toString());
    return this.http.get(url);
  }

  public getAlbumsByName(name : string){
    var url : string = 'http://localhost:8080/https://api.deezer.com/search/album?q=';
    var request = url.concat(name).toString();
    return this.http.get(request.concat('&limit=5').toString());
  }

  public getAlbumFullInfo(id : number) {
    var url : string = 'http://localhost:8080/https://api.deezer.com/album/'.concat(id.toString());
    return this.http.get(url);
  }

  public getPlaylistsByName(name : string){
    var url : string = 'http://localhost:8080/https://api.deezer.com/search/playlist?q=';
	var request = url.concat(name).toString();
    return this.http.get(request.concat('&limit=5').toString());
  }

  public getArtist(id:number){
    const url:string='http://localhost:8080/https://api.deezer.com/artist/'.concat(id.toString());
    return this.http.get(url);
  }

  public getTopByArtist(id:number){ 
    const url:string='http://localhost:8080/https://api.deezer.com/artist/'.concat(id.toString().concat('/top'));
    return this.http.get(url);
  }

  public getArtistsByGenre(id : number){
	  var url : string = 'http://localhost:8080/https://api.deezer.com/genre/';
	  var request = url.concat(id.toString()).toString();
	  return this.http.get(request.concat('/artists').toString());
  }

  public getAlbumsByArtist(id : number){
	var url : string = 'http://localhost:8080/https://api.deezer.com/artist/';
	var request = url.concat(id.toString()).toString();
	return this.http.get(request.concat('/albums').toString());
  }

  public getTrackList(request:URL){
	return this.http.get('http://localhost:8080/'.concat(request.toString()));
  }

  public getPlaylistFullInfo(id : number){
    var url : string = 'http://localhost:8080/https://api.deezer.com/playlist/'.concat(id.toString());
    return this.http.get(url);
  }

  public getChartInfo(){
    var url : string = 'http://localhost:8080/https://api.deezer.com/chart/';
    return this.http.get(url);
  }

  public getResponseFromUrl(request:URL){
	return this.http.get('http://localhost:8080/'.concat(request.toString()));
  }

  public addArtistToUserLibrary(userId : number, artistId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.post('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/artists')
					.concat('?access_token=').concat(accessToken)
					.concat('&artist_id=').concat(artistId.toString()), null)
	  				.subscribe();
	  }
  }

  public addAlbumToUserLibrary(userId : number, albumId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.post('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/albums')
					.concat('?access_token=').concat(accessToken)
					.concat('&album_id=').concat(albumId.toString()), null)
	  				.subscribe();
	  }
  }


  public addTrackToUserLibrary(userId : number, trackId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.post('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/tracks')
					.concat('?access_token=').concat(accessToken)
					.concat('&track_id=').concat(trackId.toString()), null)
	  				.subscribe();
	  }
  }



  public getArtistsFromUserLibrary(accessToken : string | undefined){
	if (accessToken != undefined){
		return this.http.get('http://localhost:8080/https://api.deezer.com/user/me/artists'
						.concat('?access_token=').concat(accessToken))
	}
	return undefined;
  }

  public getAlbumsFromUserLibrary(accessToken : string | undefined){
	if (accessToken != undefined){
		return this.http.get('http://localhost:8080/https://api.deezer.com/user/me/albums'
						.concat('?access_token=').concat(accessToken))
	}
	return undefined;
  }

  public getTracksFromUserLibrary(accessToken : string | undefined){
	if (accessToken != undefined){
		return this.http.get('http://localhost:8080/https://api.deezer.com/user/me/tracks'
						.concat('?access_token=').concat(accessToken))
	}
	return undefined;
  }


  public removeArtistFromUserLibrary(userId : number, artistId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.delete('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/artists')
					.concat('?access_token=').concat(accessToken)
					.concat('&artist_id=').concat(artistId.toString()))
	  				.subscribe();
	  }
  }

  public removeAlbumFromUserLibrary(userId : number, albumId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.delete('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/albums')
					.concat('?access_token=').concat(accessToken)
					.concat('&album_id=').concat(albumId.toString()))
	  				.subscribe();
	  }
  }

  public removeTrackFromUserLibrary(userId : number, trackId : number, accessToken : string | undefined){
	if (accessToken != undefined){
		this.http.delete('http://localhost:8080/https://api.deezer.com/user/'
					.concat(userId.toString())
					.concat('/tracks')
					.concat('?access_token=').concat(accessToken)
					.concat('&track_id=').concat(trackId.toString()))
	  				.subscribe();
	  }
  }

}

