import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;

  constructor(public userService:UserService, private router: Router) {}

  ngOnInit(): void {
  }
}
