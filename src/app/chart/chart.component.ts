import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Album } from '../models/Album';
import { Chart } from '../models/Chart';
import { AlbumService } from '../services/album.service';
import { ArtistService } from '../services/artist.service';
import { ChartService } from '../services/chart.service';
import { DeezerService } from '../services/deezer.service';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private response: any;
  public chart!: Chart;

  constructor(private deezerService: DeezerService, private router: Router, private albumService: AlbumService,
    private artistService: ArtistService, private trackService: TrackService) { }

  async ngOnInit() {
    const infoChart$ = this.deezerService.getChartInfo();;
    this.response = await firstValueFrom(infoChart$);
    this.chart = this.response;
  }

  public async sendAlbumAndNavigateToAlbum(selectedAlbumId: number) {
    const album$ = this.deezerService.getAlbumFullInfo(selectedAlbumId);;
    this.response = await firstValueFrom(album$);
    this.albumService.setAlbum(this.response);
    this.router.navigateByUrl('/album');
  }

  public async sendArtistAndNavigateToArtist(selectedArtistId: number) {
    const artist$ = this.deezerService.getArtistFullInfo(selectedArtistId);;
    this.response = await firstValueFrom(artist$);
    this.artistService.setArtist(this.response);
    this.router.navigateByUrl('/artist');
  }

  public async sendTrackAndNavigateToTrack(selectedTrackId: number) {
    const track$ = this.deezerService.getTrackFullInfo(selectedTrackId);;
    this.response = await firstValueFrom(track$);
    this.trackService.setTrack(this.response);
    this.router.navigateByUrl('/track');
  }
}
