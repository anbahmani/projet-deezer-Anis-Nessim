import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	public accessToken!:string|undefined;

  constructor(private http:HttpClient) { }

  public getAccesToken(params:URLSearchParams){
	let headers = new HttpHeaders(
		{
		  'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
		  'Authorization': 'Basic' + btoa("524342" + ':' + "fb9c36712711e050599dd49fe79c3e3d"),
		  'grand-type': 'password',
		  'username': "524342",
		  'password': "fb9c36712711e050599dd49fe79c3e3d"
		}
	  );
	return this.http.post('http://localhost:8080/https://connect.deezer.com/oauth/access_token.php', params.toString(),
	 { headers: headers, responseType: 'text'})
	}
}