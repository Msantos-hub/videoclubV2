import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service'
import {Pelis} from "../../models/pelis";

@Component({
  selector: 'app-pelis-list',
  templateUrl: './pelis-list.component.html',
  styleUrls: ['./pelis-list.component.css']
})
export class PelisListComponent implements OnInit {

  pelis: any = [];

  constructor(private peliculasService: PeliculasService) {

  }

  ngOnInit(): void {
    this.peliculasService.getPelis().subscribe(
      res => {
        this.pelis=res;
      },
      err => console.log(err)
    )
  }

}
