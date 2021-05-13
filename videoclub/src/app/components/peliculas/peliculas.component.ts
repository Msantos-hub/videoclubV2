import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../service/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peli: any[] = [];


  constructor(
    private ruta: ActivatedRoute,
    private _service: PeliculasService
  ) {
    this.ruta.params.subscribe(params => {console.log(params['id'])
                                          this.peli = this._service.obtenercodigopeli(params['id']);
    });
  }

  ngOnInit(): void {
  }
}
