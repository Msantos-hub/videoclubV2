import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pelis } from '../models/pelis';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getPelis(){
    return this.http.get(`${this.API_URL}/peliculas`);
  }

  getOnePeli(id: string|number){
    return this.http.get(`${this.API_URL}/peliculas/${id}`);
  }
  savePeli(peli:Pelis){
    return this.http.post(`${this.API_URL}/peliculas`, peli);
  }

  deletePeli(id: string){
    return this.http.delete(`${this.API_URL}/pelis/${id}`);
  }

  updatePeli(id: string | number, updatePeli: Pelis): Observable<Pelis> {
    return this.http.put(`${this.API_URL}/pelis/${id}`, updatePeli);
  }

}
