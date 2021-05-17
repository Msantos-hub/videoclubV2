import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PelisFormComponent } from './components/pelis-form/pelis-form.component';
import { PelisListComponent } from './components/pelis-list/pelis-list.component';

import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PelisFormComponent,
    PelisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
