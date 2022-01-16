import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http:HttpClient) { }

  public getArtist(id:number){
    const url:string="https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/".concat(id.toString());
    return this.http.get(url);
  }

  public getListGenre(){ 
    const url:string="https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
    return this.http.get(url);
  }

  public getArtistTest(){ 
    const url:string="https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27";
    return this.http.get(url);
  }
  
}
