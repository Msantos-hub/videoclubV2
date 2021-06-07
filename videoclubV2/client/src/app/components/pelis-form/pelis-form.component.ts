import { Component, OnInit, HostBinding } from '@angular/core';
import { Peliculas } from '../../models/pelis';
import { PeliculasService } from '../../services/peliculas.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pelis-form',
  templateUrl: './pelis-form.component.html',
  styleUrls: ['./pelis-form.component.css']
})
export class PelisFormComponent implements OnInit {
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

  edit: boolean=false;

  constructor(private peliculasService: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.peliculasService.getPelicula(params.id)
        .subscribe(
        res =>
        {console.log(res);
        this.peli=res;
        this.edit=true;
        },
        err => console.log(err)
      )
    }
  }

  savePelicula(){
    delete this.peli.codPelicula;
    this.peliculasService.savePelicula(this.peli).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/peliculas']);
      },
      err => console.log(err)
    );
}

  updatePelicula(){
      this.peliculasService.updatePelicula(this.peli.codPelicula, this.peli)
        .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/peliculas'])
        },
        err => console.log(err)
      );
  }


}
