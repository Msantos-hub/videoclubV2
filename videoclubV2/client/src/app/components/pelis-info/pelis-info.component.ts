import { Component, OnInit, HostBinding } from '@angular/core';
import { Peliculas } from '../../models/pelis';
import { PeliculasService } from '../../services/peliculas.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelis-info',
  templateUrl: './pelis-info.component.html',
  styleUrls: ['./pelis-info.component.css']
})
export class PelisInfoComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  peli: Peliculas = {
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

  constructor(private peliculasService: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.peliculasService.getPelicula(params.id).subscribe(
        res => {
          console.log(res);
          this.peli = res;
        }
      )
    }
  }

}
