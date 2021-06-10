import { Pipe, PipeTransform } from '@angular/core';
import {PeliculasService} from "../services/peliculas.service";

@Pipe({
  name: 'filtro'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPeli = [];
    for(const peli of value){
      if(peli.titulo.indexof(arg) > -1){
        resultPeli.push(peli);
      }
    }
    return resultPeli;
  }
}
