import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../service/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pelicula: any[] = [];
  constructor(private _service:PeliculasService) {
    this.pelicula = _service.obtenerdatospelis();
  }

  ngOnInit(): void {
  }

}
