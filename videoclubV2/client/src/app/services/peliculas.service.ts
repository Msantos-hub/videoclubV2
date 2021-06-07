import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas } from '../models/pelis';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getPeliculas(){
    return this.http.get(`${this.API_URI}/peliculas`);
  }

  getPelicula(id: string | number){
    return this.http.get(`${this.API_URI}/peliculas/${id}`);
  }

  savePelicula(peli: Peliculas){
    return this.http.post(`${this.API_URI}/peliculas`, peli);
  }

  deletePelicula(id: string | number){
    return this.http.delete(`${this.API_URI}/peliculas/${id}`);
  }

    updatePelicula(id: number | undefined , update: Peliculas): Observable<Peliculas> {
    return this.http.put(`${this.API_URI}/peliculas/${id}`, update);
  }

}
