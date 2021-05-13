import { Injectable } from '@angular/core';

export interface Peliculas {
  codPelicula: number;
  titulo: string;
  anio: string;
  duracion: number;
  pais: string;
  director: string;
  guion: string;
  productor: string;
  genero: string;
  portada: string;
  sinopsis: string;
  fechaLanzamiento: string;
  precioVenta: number;
  precioAlquiler: number;
  numEjemplares: number;
  numEjemplaresPrestados: number;
}

@Injectable()
export class PeliculasService {
  pelicula: any[] = [
    {
      codPelicula: 1,
      titulo: 'Casablanca',
      anio: '1942',
      duracion: 102,
      pais: 'Estados Unidos',
      director: 'Michael Curtiz',
      guion: 'Julius J. Epstein',
      productor: 'Warner Bros',
      genero: 'Drama',
      portada: './assets/caratulas/Casablanca.jpg',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Durante la Segunda Guerra Mundial, Casablanca era una ciudad a la que llegaban huyendo del nazismo ' +
        'gentes de todas partes: llegar era fácil, pero salir era casi imposible, especialmente si el nombre del fugitivo ' +
        'figuraba en las listas de la Gestapo.',
      fechaLanzamiento: '2018-05-29',
      precioVenta: 3.00,
      precioAlquiler: 1.50,
      numEjemplares: 10,
      numEjemplaresPrestados: 0
    },
    {
      codPelicula: 2,
      titulo: 'Ordet',
      anio: '1955',
      duracion: 125,
      pais: 'Dinamarca',
      director: 'Carl Theodor Dreyer',
      guion: 'Carl Theodor Dreyer',
      productor: 'Palladium Films',
      genero: 'Drama',
      portada: './assets/caratulas/Ordet.jpg',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Hacia 1930, en un pequeño pueblo de Jutlandia occidental, vive el viejo granjero Morten Borgen. ' +
        'Tiene tres hijos: Mikkel, Johannes y Anders. El primero está casado con Inger, tiene dos hijas pequeñas ' +
        'y espera el nacimiento de su tercer hijo. Johannnes es un antiguo estudiante de Teología que, por haberse ' +
        'imbuido de las ideas de Kierkegaard e identificarse con la figura de Jesucristo, es considerado por todos como un loco.',
      fechaLanzamiento: '2018-05-30',
      precioVenta: 3.00,
      precioAlquiler: 1.50,
      numEjemplares: 10,
      numEjemplaresPrestados: 0
    },
    {
      codPelicula: 3,
      titulo: 'Ciudadano Kane',
      anio: '1941',
      duracion: 119,
      pais: 'Estados Unidos',
      director: 'Orson Welles',
      guion: 'Orson Welles',
      productor: 'RKO',
      genero: 'Drama',
      portada: './assets/caratulas/Ciudadano Kane.jpg',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Un importante magnate estadounidense, Charles Foster Kane, dueño de una importante cadena de periódicos, ' +
        'de una red de emisoras, de dos sindicatos y de una inimaginable colección de obras de arte, muere en Xanadú, ' +
        'su fabuloso castillo de estilo oriental. La última palabra que pronuncia antes de expirar, ”Rosebud”, ' +
        'cuyo significado es un enigma, despierta una enorme curiosidad tanto en la prensa como entre la población',
      fechaLanzamiento: '2019-05-29',
      precioVenta: 3.00,
      precioAlquiler: 1.50,
      numEjemplares: 10,
      numEjemplaresPrestados: 0
    },
    {
      codPelicula: 4,
      titulo: 'Centauros del Desierto',
      anio: '1956',
      duracion: 119,
      pais: 'Estados Unidos',
      director: 'John Ford',
      guion: 'Frank S. Nugent',
      productor: 'Warner Bros',
      genero: 'Wester',
      portada: './assets/caratulas/Centauros.jpg',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Texas. En 1868, tres años después de la guerra de Secesión, ' +
        'Ethan Edwards, un hombre solitario, vuelve derrotado a su hogar. La persecución de los comanches que ' +
        'han raptado a una de sus sobrinas se convertirá en un modo de vida para él y para Martin, un muchacho' +
        ' mestizo adoptado por su familia.',
      fechaLanzamiento: '2016-05-29',
      precioVenta: 3.00,
      precioAlquiler: 1.50,
      numEjemplares: 10,
      numEjemplaresPrestados: 0
    },
    {
      codPelicula: 5,
      titulo: 'Senderos de Gloria',
      anio: '1957',
      duracion: 89,
      pais: 'Estados Unidos',
      director: 'Stanley Kubrick',
      guion: 'Frank S. Nugent',
      productor: 'Bryna Productions',
      genero: 'Belica',
      portada: './assets/caratulas/Senderos de Gloria.jpg',
      // tslint:disable-next-line:max-line-length
      sinopsis: 'Primera Guerra Mundial (1914-1918). En 1916, en Francia, el general Boulard ordena la conquista de ' +
        'una inexpugnable posición alemana y encarga esa misión al ambicioso general Mireau. ' +
        'El encargado de dirigir el ataque será el coronel Dax. La toma de la colina resulta un infierno, y ' +
        'el regimiento emprende la retirada hacia las trincheras. El alto mando militar, irritado por la derrota, ' +
        'decide imponer al regimiento un terrible castigo que sirva de ejemplo a los demás soldados.',
      fechaLanzamiento: '2018-05-29',
      precioVenta: 3.00,
      precioAlquiler: 1.50,
      numEjemplares: 10,
      numEjemplaresPrestados: 0
    },
  ];
  constructor() { }

  obtenerdatospelis(){
    return this.pelicula;}
    obtenercodigopeli(i){
    return this.pelicula[i];
    }
}
