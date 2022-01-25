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

  constructor(private route: ActivatedRoute, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
	  if (this.router.url.toString().startsWith("/accueil?code=") && this.userService.accessToken == undefined){
		this.route.queryParams
		.subscribe(params => {
			this.getAccessToken(params['code']);
		}
 	 );
	}
  }

  public async getAccessToken(accessCode:string){
	let params = new URLSearchParams();
    params.append('app_id', "524342");
    params.append('secret', "fb9c36712711e050599dd49fe79c3e3d");
    params.append('code', accessCode);
	const responseAccessToken = this.userService.getAccesToken(params);
	const dataAccessToken = await firstValueFrom(responseAccessToken);
	this.userService.accessToken = dataAccessToken.substring(dataAccessToken.indexOf("=") + 1, dataAccessToken.lastIndexOf("&"));
	const responseUser = this.userService.getCurrentUser();
	if (responseUser != undefined){
		const dataUser = await firstValueFrom(responseUser);
		this.userService.user = dataUser;
	}
  }
}
