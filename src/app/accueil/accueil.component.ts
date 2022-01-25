import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
		this.route.queryParams
		.subscribe(params => {
			this.getAccessToken(params['code']);
		}
 	 );
  }

  public async getAccessToken(accessCode:string){
	let params = new URLSearchParams();
    params.append('app_id', "524342");
    params.append('secret', "fb9c36712711e050599dd49fe79c3e3d");
    params.append('code', accessCode);
	const response = this.userService.getAccesToken(params);
	const data = await firstValueFrom(response);
	let accessToken = data.substring(data.indexOf("=") + 1, data.lastIndexOf("&"));
	this.userService.setAccessToken(accessToken);
	console.log(this.userService.accessToken);
  }
}
