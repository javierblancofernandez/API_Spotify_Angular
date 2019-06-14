import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDxIvAV37LJP7FOCWspIZeNmjWSqtVc9wYun9LEbbJRcRB89DTRty6kp9aNevWBJfi0sJjqdx7eBdBnDNo'
    });
    return this.http.get(url, { headers });

  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBZWh-oo-8F9HEqeNIK2VZci-H7xyNWgiplAVxjusZQG8uxzo1_29gDJlENFOsR8gNXSe3DiARVZeTkaSU'
    // });

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));



  }
  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artists'].items));
  }
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe(map(data => data['tracks']));
  }
}




