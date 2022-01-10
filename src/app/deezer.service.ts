import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http:HttpClient) { }

  public getArtist(){
    const url : string = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=Pnl";
    return this.http.get(url);
  }

  public getListGenre(){ 
    const url:string="https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
    return this.http.get(url);
  }
}
