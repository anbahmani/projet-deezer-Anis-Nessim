import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { ChartComponent } from './chart/chart.component';
import { ErrorComponent } from './error/error.component';
import { GeneralSearchMusicComponent } from './general-search-music/general-search-music.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {  SearchGenreComponent } from './search-genre/search-genre.component';
import { TrackComponent } from './track/track.component';
import { UserArtistsComponent } from './user-artists/user-artists.component';
import { UserTracksComponent } from './user-tracks/user-tracks.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { UserPlaylistsComponent } from './user-playlists/user-playlists.component';

const routes: Routes = [
  {path:'accueil', component: AccueilComponent},
  {path:'rechercheGenre', component: SearchGenreComponent},
  {path:'recherche', component:GeneralSearchMusicComponent},
  {path:'artist', component: ArtistComponent},
  {path:'album', component: AlbumComponent},
  {path:'track', component: TrackComponent},
  {path:'playlist', component: PlaylistComponent},
  {path:'chart', component: ChartComponent},
  {path:'user-artists', component: UserArtistsComponent},
  {path:'user-tracks', component: UserTracksComponent},
  {path:'user-albums', component: UserAlbumsComponent},
  {path:'user-playlists', component: UserPlaylistsComponent},
  {path:'error', component:ErrorComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'}, 
  {path:'**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
