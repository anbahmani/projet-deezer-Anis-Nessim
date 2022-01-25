import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	connectionPage!:any;
	response!:any;

  constructor(private userService:UserService) {}

  ngOnInit(): void {
  }

}
