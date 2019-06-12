import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Importamos algo para poder hacer peticiones HTTP
import {HttpClientModule} from '@angular/common/http';

// Servicios
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './component/tarjetas/tarjetas.component';
import { LoadingComponent } from './component/shared/loading/loading.component';


// Importar rutas

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
