import {Component, HostBinding, OnInit} from '@angular/core';
import {Pelis} from '../../models/pelis';
import { PeliculasService } from '../../services/peliculas.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pelis-form',
  templateUrl: './pelis-form.component.html',
  styleUrls: ['./pelis-form.component.css']
})
export class PelisFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

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

  edit:boolean = false;

  constructor( private peliculasService:PeliculasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.peliculasService.getPelis(params.id).subscribe(
        res =>{ console.log(res);
          this.peli = res;
          this.edit = true;
        }
      )
    }
  }

  guardarPelicula(){
    delete this.peli.codPelicula;

    this.peliculasService.savePeli(this.peli).subscribe(
      res => {
          console.log(res);
          this.router.navigate(['/pelis'])
      },
      err => console.error(err)
    )
}

}
