'use strict';

// ============================================================================
//  2º DAW – Desarrollo Web en Entorno Cliente
//  Examen Primer Trimestre · Los Reyes Magos se modernizan
// ============================================================================

// ============================================================================
//  DATOS DE PARTIDA
// ============================================================================

const cartas = [
  { nombre: 'Lucía', edad: 7, ciudad: 'Zafra', juguetes: ['bicicleta', 'patines', 'puzle'], fechaEnvio: '02/12/2026' },
  { nombre: 'Hugo', edad: 10, ciudad: 'Mérida', juguetes: ['consola', 'videojuego', 'auriculares'], fechaEnvio: '15/11/2026' },
  { nombre: 'Martina', edad: 5, ciudad: 'Zafra', juguetes: ['muñeca', 'cocinita', 'plastilina'], fechaEnvio: '28/12/2026' },
  { nombre: 'Leo', edad: 8, ciudad: 'Badajoz', juguetes: ['patinete', 'balón', 'dron'], fechaEnvio: '03/01/2027' },
  { nombre: 'Sofía', edad: 12, ciudad: 'Mérida', juguetes: ['móvil', 'auriculares'], fechaEnvio: '20/10/2026' },
  { nombre: 'Mateo', edad: 6, ciudad: 'Almendralejo', juguetes: ['dinosaurio de verdad', 'bicicleta', 'puzle'], fechaEnvio: '30/12/2026' },
  { nombre: 'Valeria', edad: 9, ciudad: 'Zafra', juguetes: ['patines', 'libro', 'balón'], fechaEnvio: '05/01/2027' },
  { nombre: 'Daniel', edad: 11, ciudad: 'Badajoz', juguetes: ['consola', 'balón'], fechaEnvio: '07/01/2027' },
  { nombre: 'Carmen', edad: 4, ciudad: 'Almendralejo', juguetes: ['cocinita', 'muñeca', 'hermanito'], fechaEnvio: '10/12/2026' },
  { nombre: 'Pablo', edad: 13, ciudad: 'Mérida', juguetes: ['dron', 'consola', 'bicicleta'], fechaEnvio: '06/01/2027' },
  { nombre: 'Noa', edad: 8, ciudad: 'Zafra', juguetes: ['patinete', 'bicicleta', 'libro'], fechaEnvio: '22/11/2026' },
];

const catalogo = [
  { nombre: 'bicicleta', precio: 129.99, stock: 2 },
  { nombre: 'patines', precio: 45.50, stock: 1 },
  { nombre: 'puzle', precio: 12.95, stock: 10 },
  { nombre: 'consola', precio: 299.00, stock: 1 },
  { nombre: 'videojuego', precio: 59.90, stock: 5 },
  { nombre: 'auriculares', precio: 39.99, stock: 3 },
  { nombre: 'muñeca', precio: 24.95, stock: 4 },
  { nombre: 'cocinita', precio: 79.00, stock: 1 },
  { nombre: 'plastilina', precio: 6.50, stock: 20 },
  { nombre: 'patinete', precio: 149.00, stock: 2 },
  { nombre: 'balón', precio: 19.99, stock: 5 },
  { nombre: 'dron', precio: 89.00, stock: 1 },
  { nombre: 'libro', precio: 14.95, stock: 8 },
];

// ============================================================================
//  EJERCICIO 1 · Cartas por ciudad (2,5 puntos)
// ============================================================================
function filtrarPorCiudad(ciudad) {
  let niños = cartas.filter(carta => carta.ciudad.toLowerCase() === ciudad.toLowerCase());
let result = "";
  if (niños.length > 0) {
    for (const niño of niños) {
      result += niño.juguetes;
    }
  } else if (!ciudad) {
    alert(" ");
  }  else {
    alert(`No hay jugetes de ${ciudad}`);
  }
  alert(result);
}
function ejercicio1() {
  let ciudad = prompt("introduce una ciudad: ").toLowerCase();
  if (!ciudad) {
    alert("")
  } else {
    filtrarPorCiudad(ciudad);
  }
}

// ============================================================================
//  EJERCICIO 2 · Presupuesto por carta (3 puntos)
// ============================================================================

function ejercicio2() {
  const noDisponibles = [];
  let result = 0
  for (let i = 0; i < cartas.length; ) {
    for (let j = 0; j < catalogo.length; j++) {
      if (cartas[i].find(catalogo[j])) {
        result += catalogo[j].precio
      } else {
        noDisponibles.push(catalogo[j].nombre)
        let result = ""
        for (const juguete of noDisponibles) {
          resultado += juguete + "\n"
        }
        document.querySelector("#resultados").innerHTML = "<h2>Juguetes no encontrados</h2><p>resultado</p>" 
      }
    }
  }
}

// ============================================================================
//  EJERCICIO 3 · ¿Quién escribió a tiempo? (2 puntos)
// ============================================================================

function ejercicio3() {
  const DIAREYES = 20270106
  for (const fechas of cartas) {
    let fecha = new Date(fechas.fechaEnvio)
    fecha.setDate(fecha.getDate() + 30);
    let [dia, mes, año] = fecha.split("/")
    let modificado = new Date(año, mes, dia)

    let result = "";
    modificado = parseInt(modificado);
    if(modificado > DIAREYES) {
      alert(`${fechas.nombre} tu carta va retrasada`)
      result += fechas.nombre + " <span class= rojo>retrasada</span>" +"\n"
    } else {
      result += fechas.monbre + "\n"
    }
  }
  document.querySelector("#resultados").innerHTML = result
}

// ============================================================================
//  EJERCICIO 4 · Clase Carta (2,5 puntos)
// ============================================================================

class Carta {
  static EDAD_MAXIMA = 14;
  static MAX_JUGUETES = 3;
  static #ultimoId = 1;
  #id
  #nombre
  #ciudad
  #fechaEnvio
  #edad
  #juguetes
  constructor(nombre, edad, ciudad) {
    this.#nombre = nombre
    this.edad = edad
    this.#ciudad = ciudad
    this.#id = ++Carta.#ultimoId
    this.#juguetes = []
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevo) {
    this.#nombre = nuevo;
  }

  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    if(nuevaEdad > this.EDAD_MAXIMA) {
      throw new Error(`La edad ${nuevaEdad} no es válida`)
    }
    this.#edad = nuevaEdad;
  }

  get ciudad() {
    return this.#ciudad;
  }
  set ciudad(nuevo) {
    this.#ciudad = nuevo;
  }

  agregarJuguetes(juguete) {
    let i = 0
    do {
      juguete = prompt("Introduce un juguete: ")

      if(juguete.length == 0 || this.#juguetes.includes(juguete)) {
        return false
      }
      this.#juguetes.push(juguete)
      return true
      i++
    } while(i < this.MAX_JUGUETES)
  }

  toString() {
    return `${this.#id} - ${this.nombre}(${this.edad} años, ${this.ciudad}): `
  }
}

function ejercicio4() {
  try {
    let prueba = []
    let carta1 = new Carta("María", 15, "Zafra")
    prueba.push(carta1)
  } catch(error) {
    alert(error.message)
  }

  let result = "";
  for (const carta of prueba) {
    result += carta;
  }
  alert(result)
}