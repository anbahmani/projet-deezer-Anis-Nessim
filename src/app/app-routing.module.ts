import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArtistComponent } from './artist/artist.component';
import { ErrorComponent } from './error/error.component';
import { GeneralSearchMusicComponent } from './general-search-music/general-search-music.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { RechercheMusiqueComponent } from './recherche-musique/recherche-musique.component';

const routes: Routes = [
  {path:'accueil', component: AccueilComponent},
  {path:'rechercheMusique', component: RechercheMusiqueComponent},
  {path:'rechercheMusique/artist', component: ArtistComponent},
  {path:'rechercheGenre', component: RechercheGenreComponent},
  {path:'recherche', component:GeneralSearchMusicComponent},
  {path:'recherche/artist', component: ArtistComponent},
  {path:'error', component:ErrorComponent},
	{path:'', redirectTo:'/accueil', pathMatch:'full'}, 
	{path:'**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
