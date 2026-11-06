/* class Persona {
  #nombre;
  #apellidos;
  #direccion;
  #ciudad;
  constructor(nombre, apellidos, direccion, ciudad) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#direccion = direccion;
    this.#ciudad = ciudad;
  }

  get ciudad() {
    return this.#ciudad;
  }

  set ciudad(nuevo) {
    if (nuevo != "zafra") {
      alert("Error");
      return;
    }
    this.#ciudad = nuevo;
  }
}
function ejemplo() {
  const p1 = new Persona("Pepe", "López", "mi calle", "Zafra");

  p1.ciudad = "Badajoz";
} */

/* Ejercicios · Programación orientada a objetos */
/* Ejercicio 1. Crea una clase llamada Persona. Esta clase deberá tener una propiedad
"nombre", de tipo string. También tendrá un método "saludar", que escribirá en la
pantalla "Hola, soy " seguido de su nombre. Se crearán dos objetos de tipo Persona, se
le asignará un nombre a cada uno y se les pedirá que saluden. */
class Persona {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevo) {
    this.#nombre = nuevo;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}
function ej1() {
  let p1 = new Persona("Raúl");
  let p2 = new Persona("Cristina");

  alert(p1.saludar());
  alert(p2.saludar());
}
/* Ejercicio 2. Para guardar información sobre libros, vamos a comenzar por crear una
clase "Libro", que contendrá propiedades "autor", "titulo", "ubicacion" (todos ellos
strings) y métodos Get y Set adecuados para leer su valor y cambiarlos(el título siempre
se guarda en el objeto en mayúsculas y se muestra con *** delante y detrás). Se creará
un objeto de la clase Libro vacío, le daremos valores a sus tres propiedades (usando los
set) y luego los mostrará por pantalla (usando los get) con el formato:
Titulo (Autor) Ubicación*/
class Libro {
  #autor;
  #titulo;
  #ubicacion;

  constructor() {
    this.#autor = "";
    this.#titulo = "";
    this.#ubicacion = "";
  }

  get autor() {
    return this.#autor;
  }
  set autor(nuevo) {
    this.#autor = nuevo;
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevo) {
    this.#titulo = nuevo;
  }

  get ubicacion() {
    return this.#ubicacion;
  }
  set ubicacion(nuevo) {
    this.#ubicacion = nuevo;
  }

  toString() {
    return `*${this.titulo.toUpperCase()}* (${this.autor}) - ${this.ubicacion}`;
  }
}
function ej2() {
  let miLibro = new Libro();
  miLibro.autor = "Gabriel García Márquez";
  miLibro.titulo = "100 años de soledad";
  miLibro.ubicacion = "Estanterías 1-3";

  alert(miLibro.toString());
}

/*Ejercicio 3. Crear una clase Corredor que tenga las propiedades nombre, dirección,
teléfono, país y kilómetros, donde se almacenará el nombre de un usuario, su dirección,
teléfono, país de origen (para saber el prefijo a añadir al teléfono +34 en España) y los
kilómetros de ejercicio que ha realizado. A la hora de mostrar el teléfono, si el país es
España le añadirá +34 y si es Portugal añadirá +35 (solo tendremos en cuenta estos 2
países) hay que tener en cuenta que el país puede tener la primera letra en mayúsculas,
todo en mayúsculas... y hay que controlarlo a la hora de añadir +34 o +35 en el
teléfono. A la hora de mostrar los kilómetros, éstos se almacenarán en metros por
defecto, por lo que si son menores a 1000 los mostrará en metros mostrando: 750m por ejemplo y si son 1500 metros, mostrará: 1,5Km. Se mostrarán los datos en el propio 
.html, dentro de un div llamado resultado.
Para las pruebas, crear un array con 2 corredores, uno de Portugal y otro de España.
let corredores = [
 new Corredor("Manolo", "Ancha 12", "656756463", "España", 23),
 new Corredor("Isa", "San Francisco 5", "666748392", "Portugal", 1320),
 ];
Realiza pruebas añadiendo otro corredor con el pais España con todo en minúsculas y 
debe funcionar*/
class Corredor {
  #nombre;
  #direccion;
  #telefono;
  #pais;
  #metros;

  constructor(
    nombre = "",
    direccion = "",
    telefono = "",
    pais = "",
    metros = 0,
  ) {
    this.#nombre = nombre;
    this.#direccion = direccion;
    this.#telefono = telefono;
    this.#pais = pais;
    this.#metros = metros;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevo) {
    this.#nombre = nuevo;
  }

  get direccion() {
    return this.#direccion;
  }
  set direccion(nuevo) {
    this.#direccion = nuevo;
  }

  get telefono() {
    if (this.#pais.toLowerCase() === "españa") {
      return `+34${this.#telefono}`;
    } else if (this.#pais.toLowerCase() === "portugal") {
      return `+35${this.#telefono}`;
    }
  }
  set telefono(nuevo) {
    this.#telefono = nuevo;
  }

  get pais() {
    return (
      this.#pais.charAt(0).toUpperCase() + this.#pais.slice(1).toLowerCase()
    );
  }
  set pais(nuevo) {
    this.#pais = nuevo;
  }

  get kilometros() {
    if (this.#metros < 1000) {
      return `${this.#metros} metros`;
    } else {
      let km = this.#metros / 1000;
      return `${km.toFixed(2)} kilómetros`;
    }
  }
  set kilometros(nuevo) {
    this.#metros = nuevo;
  }

  toString() {
    return `Nombre: ${this.nombre}&nbsp;&nbsp;&nbsp;&nbsp;Dirección: ${this.direccion}&nbsp;&nbsp;&nbsp;&nbsp;Tlfn: ${this.telefono}&nbsp;&nbsp;&nbsp;&nbsp;metros/kilometros: ${this.kilometros}`;
  }
}
function ej3() {
  let corredores = [
    new Corredor("Manolo", "Ancha 12", "656756463", "España", 23),
    new Corredor("Isa", "San Francisco 5", "666748392", "Portugal", 1320),
  ];

  for (const user of corredores) {
    document.querySelector("#resultado").innerHTML +=
      `<p>${user.toString()}</p>`;
  }
}
