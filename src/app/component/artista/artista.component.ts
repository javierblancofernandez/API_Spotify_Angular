import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  tracks: any[] = [];
  loading: boolean;
  constructor(private activateRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activateRoute.params.subscribe(params => {
      this.loading = true;
      console.log('params', params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }
  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe(artista => {
      console.log('artista', artista);
      this.artista = artista;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      console.log("canciones", tracks);
      this.tracks = tracks;
    });

  }
 
}
