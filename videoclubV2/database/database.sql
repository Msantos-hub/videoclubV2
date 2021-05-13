CREATE DATABASE IF NOT EXISTS videoclubweb DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE videoclubweb;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE peliculas (
  codPelicula tinyint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  titulo varchar(60) NOT NULL,
  anio char(4) DEFAULT NULL,
  duracion tinyint(3) UNSIGNED DEFAULT NULL,
  pais varchar(30) DEFAULT NULL,
  director varchar(30) DEFAULT NULL,
  guion varchar(30) DEFAULT NULL,
  productor varchar(30) DEFAULT NULL,
  genero varchar(30) DEFAULT NULL,
  portada varchar(200) DEFAULT NULL,
  sinopsis varchar(800) DEFAULT NULL,
  fechaLanzamiento date DEFAULT NULL,
  precioVenta decimal(4,2) DEFAULT NULL,
  precioAlquiler decimal(4,2) DEFAULT NULL
 ) ENGINE=InnoDB;

CREATE TABLE socios(
	codSocio smallint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	clave char(9) NOT NULL,
	nombre varchar(30) NOT NULL,
	telefono char(9),
	numPeliculasRetiradas smallint UNSIGNED
)Engine=InnoDB;

CREATE TABLE prestamos(
	codSocio smallint UNSIGNED,
	codPelicula tinyint UNSIGNED,
	fechaPrestamo date,
	constraint prestamosSocios foreign key (codSocio) REFERENCES socios(codSocio),
	constraint prestamosPeliculas foreign key (codPelicula) REFERENCES peliculas(codPelicula)
)Engine=InnoDB;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO peliculas (codPelicula, titulo, anio, duracion, pais, director, guion,
productor, genero, portada, sinopsis,
fechaLanzamiento, precioVenta, precioAlquiler) VALUES
(1, 'Casablanca', '1942', 102, 'Estados Unidos', 'Michael Curtiz', 'Julius J. Epstein',
'Warner Bros', 'Drama', 'Casablanca.jpg', 'Durante la Segunda Guerra Mundial, Casablanca era una ciudad a la que llegaban huyendo del nazismo gentes de todas partes: llegar era fácil, pero salir era casi imposible, especialmente si el nombre del fugitivo figuraba en las listas de la Gestapo.',
'2018-05-29', '3.00', '1.50'),
(2, 'Ordet', '1955', 125, 'Dinamarca', 'Carl Theodor Dreyer', 'Carl Theodor Dreyer',
'Palladium Films', 'Drama', 'ordet.jpg', 'Hacia 1930, en un pequeño pueblo de Jutlandia occidental, vive el viejo granjero Morten Borgen. Tiene tres hijos: Mikkel, Johannes y Anders. El primero está casado con Inger, tiene dos hijas pequeñas y espera el nacimiento de su tercer hijo. Johannnes es un antiguo estudiante de Teología que, por haberse imbuido de las ideas de Kierkegaard e identificarse con la figura de Jesucristo, es considerado por todos como un loco.',
'2018-05-30', '3.00', '1.50'),
(3, 'Ciudadano Kane', '1941', 119, 'Estados Unidos', 'Orson Welles', 'Orson Welles',
'RKO', 'Drama', 'Ciudadano kane.jpg', 'Un importante magnate estadounidense, Charles Foster Kane, dueño de una importante cadena de periódicos, de una red de emisoras, de dos sindicatos y de una inimaginable colección de obras de arte, muere en Xanadú, su fabuloso castillo de estilo oriental. La última palabra que pronuncia antes de expirar, ”Rosebud”, cuyo significado es un enigma, despierta una enorme curiosidad tanto en la prensa como entre la población',
'2019-05-29', '3.00', '1.50'),
(4, 'Centauros del Desierto', '1956', 119, 'Estados Unidos', 'John Ford', 'Frank S. Nugent',
'Warner Bros','Wester', 'Centauros del desierto.jpg', 'Texas. En 1868, tres años después de la guerra de Secesión, Ethan Edwards, un hombre solitario, vuelve derrotado a su hogar. La persecución de los comanches que han raptado a una de sus sobrinas se convertirá en un modo de vida para él y para Martin, un muchacho mestizo adoptado por su familia.',
'2016-05-29', '3.00', '1.50'),
(5, 'Senderos de Gloria', '1957', 89, 'Estados Unidos', 'Stanley Kubrick', 'Stanley Kubrick',
'Bryna Productions', 'Belica', 'Senderos de Gloria.jpg', 'Primera Guerra Mundial (1914-1918). En 1916, en Francia, el general Boulard ordena la conquista de una inexpugnable posición alemana y encarga esa misión al ambicioso general Mireau. El encargado de dirigir el ataque será el coronel Dax. La toma de la colina resulta un infierno, y el regimiento emprende la retirada hacia las trincheras. El alto mando militar, irritado por la derrota, decide imponer al regimiento un terrible castigo que sirva de ejemplo a los demás soldados.',
'2018-05-29', '3.00', '1.50');


