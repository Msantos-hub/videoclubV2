import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PeliculasService} from './service/peliculas.service';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {HomeModule} from './components/home/home.module';


@NgModule({
  declarations: [
    AppComponent, PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
