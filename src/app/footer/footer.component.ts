import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
