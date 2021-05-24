import {Component, OnInit, HostBinding} from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service'
import {Pelis} from '../../models/pelis';

@Component({
  selector: 'app-pelis-list',
  templateUrl: './pelis-list.component.html',
  styleUrls: ['./pelis-list.component.css']
})
export class PelisListComponent implements OnInit {

  @HostBinding('class') classes= 'row';

  pelis: any = [];

  constructor(private peliculasService: PeliculasService) {

  }

  ngOnInit(): void {
    this.getPelis();
  }

  getPelis(){
    this.peliculasService.getPelis().subscribe(
      res => {
        this.pelis=res;
      },
      err => console.log(err)
    )
  }

  deletePeli(id:string){
    this.peliculasService.deletePeli(id).subscribe(
      res => {
       console.log(res);
       this.getPelis();
      },
      err => console.log(err)
    )
  }
}
