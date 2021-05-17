import {Component, OnInit} from '@angular/core';
import {Pelis} from "../../models/pelis";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-pelis-form',
  templateUrl: './pelis-form.component.html',
  styleUrls: ['./pelis-form.component.css']
})
export class PelisFormComponent implements OnInit {

  peli: Pelis = {
    codPelicula: 0,
    titulo: '',
    anio: '',
    duracion: 0,
    pais: '',
    director: '',
    guion: '',
    productor: '',
    genero: '',
    portada: '',
    sinopsis: '',
    fechaLanzamiento: '',
    precioVenta: 0,
    precioAlquiler: 0
  }

  constructor( private peliculasService:PeliculasService ) { }

  ngOnInit(): void {
  }

  guardarPelicula(){
    delete this.peli.codPelicula;

    this.peliculasService.savePeli(this.peli).subscribe(
      res => {

      },
      err => console.error(err)
    )
}

}
