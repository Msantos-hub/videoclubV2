import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PelisFormComponent } from './components/pelis-form/pelis-form.component';
import { PelisListComponent } from './components/pelis-list/pelis-list.component';

import { PeliculasService } from './services/peliculas.service';
import { PelisInfoComponent } from './components/pelis-info/pelis-info.component';
import { FilterPipe } from './pipe/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PelisFormComponent,
    PelisListComponent,
    PelisInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
