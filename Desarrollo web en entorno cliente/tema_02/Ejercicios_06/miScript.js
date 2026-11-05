class Persona {
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
}

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

/*Ejercicio 3. Crear una clase Corredor que tenga las propiedades nombre, dirección,
teléfono, país y kilómetros, donde se almacenará el nombre de un usuario, su dirección,
teléfono, país de origen (para saber el prefijo a añadir al teléfono +34 en España) y los
kilómetros de ejercicio que ha realizado. A la hora de mostrar el teléfono, si el país es
España le añadirá +34 y si es Portugal añadirá +35 (solo tendremos en cuenta estos 2
países) hay que tener en cuenta que el país puede tener la primera letra en mayúsculas,
todo en mayúsculas... y hay que controlarlo a la hora de añadir +34 o +35 en el
teléfono. A la hora de mostrar los kilómetros, éstos se almacenarán en metros por
defecto, por lo que si son menores a 1000 los mostrará en metros mostrando: 750m por */
