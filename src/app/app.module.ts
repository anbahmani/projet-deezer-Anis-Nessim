import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheMusiqueComponent } from './recherche-musique/recherche-musique.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RechercheMusiqueComponent,
    RechercheGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
