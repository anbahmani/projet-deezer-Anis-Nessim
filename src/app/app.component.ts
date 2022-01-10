import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DeezerService } from './deezer.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';       
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet-deezer-Anis-Nessim';
  public response: any;

  constructor(private deezerService:DeezerService){

  }

  public async ngOnInit() {
    const obs$ = this.deezerService.getArtist();
    this.response = await firstValueFrom(obs$);
  }
}
