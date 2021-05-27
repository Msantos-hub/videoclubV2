import {Component, OnInit, HostBinding} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelis-list',
  templateUrl: './pelis-list.component.html',
  styleUrls: ['./pelis-list.component.css']
})
export class PelisListComponent implements OnInit {

  @HostBinding('class') classes= 'row';

  peliculas: any = [];

  constructor(private peliculasService: PeliculasService) {

  }

    ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas(){
    this.peliculasService.getPeliculas().subscribe(
      res => {
        console.log(res)
        this.peliculas=res;
      },
      err => console.log(err)
    )
  }

  deletePelicula(id:string){
    this.peliculasService.deletePelicula(id).subscribe(
      res => {
       console.log(res);
       this.getPeliculas  ();
      },
      err => console.log(err)
    )
  }
}
