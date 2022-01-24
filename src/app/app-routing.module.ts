import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { ErrorComponent } from './error/error.component';
import { GeneralSearchMusicComponent } from './general-search-music/general-search-music.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  {path:'accueil', component: AccueilComponent},
  {path:'rechercheGenre', component: RechercheGenreComponent},
  {path:'recherche', component:GeneralSearchMusicComponent},
  {path:'artist', component: ArtistComponent},
  {path:'album', component: AlbumComponent},
  {path:'track', component: TrackComponent},
  {path:'recherche/playlist', component: PlaylistComponent},
  {path:'error', component:ErrorComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'}, 
  {path:'**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
