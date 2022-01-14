import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheMusiqueComponent } from './recherche-musique/recherche-musique.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { GeneralSearchMusicComponent } from './general-search-music/general-search-music.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RechercheMusiqueComponent,
    RechercheGenreComponent,
    GeneralSearchMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
