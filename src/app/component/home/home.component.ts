import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  musica: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.musica = data;
      this.loading = false;
    });
  }



  // getMusica() {
  //   this.spotify.getNewReleases().subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
