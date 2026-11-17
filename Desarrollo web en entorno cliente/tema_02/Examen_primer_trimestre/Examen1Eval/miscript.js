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
  if (!ciudad) return [];
  const ciudadBuscada = ciudad.trim().toLowerCase();

  return cartas.filter(c => c.ciudad.toLowerCase() === ciudadBuscada).sort((a,b) => a.edad-b.edad);
}

function ejercicio1() {
  const inputCiudad = prompt("Introduce una ciudad: ");

  if (inputCiudad === null || inputCiudad.trim() ==="") {
    return;
  }

  let resultado = filtrarPorCiudad(inputCiudad);

  if (resultado.length === 0) {
    alert(`No hay cartas de "${inputCiudad.trim()}"`);
  } else{
    let mensaje = "";
    
    resultado.forEach(c => {
      mensaje += `${c.nombre} (${c.edad} años): ${c.juguetes.join(', ')}\n`;
    });
    alert(mensaje);
  }
}

// ============================================================================
//  EJERCICIO 2 · Presupuesto por carta (3 puntos)
// ============================================================================

function ejercicio2() {
  const resultadosDiv = document.querySelector("#resultados");resultadosDiv.innerHTML = '';

  let totalGeneral = 0;
  let noDisponibles = [];

  cartas.forEach(carta => {
    let presupuestoCarta = 0;
    carta.juguetes.forEach(nombreJuguete => {
      const itemCatalogo = catalogo.find(cat => cat.nombre.toLowerCase() === nombreJuguete.toLowerCase());
      if (itemCatalogo) {
        presupuestoCarta += itemCatalogo.precio;
      } else {
        let nombreLimpio = nombreJuguete.trim();
        if (!noDisponibles.includes(nombreLimpio)) {
          noDisponibles.push(nombreLimpio);
        }
      }
    });

    totalGeneral += presupuestoCarta;
    const p = document.createElement('p');
    p.textContent = `${carta.nombre}: ${presupuestoCarta.toFixed(2)}€`;
    resultadosDiv.appendChild(p);
  });

  const pTotal = document.createElement('p');
  pTotal.innerHTML = `<strong>Total: ${totalGeneral.toFixed(2)}€</strong>`;
  resultadosDiv.appendChild(pTotal);

  if (noDisponibles.length > 0) {
    const h2 = document.createElement('h2');
    h2.textContent = "Juguetes no encontrado";
    resultadosDiv.appendChild(h2);

    const ul = document.createElement('ul');
    noDisponibles.forEach(juguete => {
      const li = document.createElement('li');
      li.textContent =juguete;
      ul.appendChild(li);
    });
    resultadosDiv.appendChild(ul);
  }
}

// ============================================================================
//  EJERCICIO 3 · ¿Quién escribió a tiempo? (2 puntos)
// ============================================================================

function ejercicio3() {
  const DIAREYES = 20270106

  const resultadosDiv = document.querySelector("#resultados");
  resultadosDiv.innerHTML = "";

  const h3 = document.createElement('h3');
  h3.textContent = "¿Quién escribió a tiempo?";
  resultadosDiv.appendChild(h3);

  cartas.forEach(carta => {
    const partes = carta.fechaEnvio.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const año = parseInt(partes[2], 10);

    const fechaEnvio = new Date(año, mes -1, dia);
    fechaEnvio.setDate(fechaEnvio.getDate() + 30);

    const fAño = fechaEnvio.getFullYear();
    const fMes = String(fechaEnvio.getMonth() + 1).padStart(2, '0');
    const fDia = String(fechaEnvio.getDate()).padStart(2, '0');
    const fechaCalculadaNum = parseInt(`${fAño}${fMes}${fDia}`, 10);

    const p = document.createElement('p');
    if (fechaCalculadaNum > DIAREYES) {
      p.innerHTML = `${Carta.nombre}, tu nombre va <span class="rojo">retrasada</span>`;
    } else {
      p.innerHTML = `${carta.nombre}, tu carta está a tiempo`;
    }
    resultadosDiv.appendChild(p);
  });
}

// ============================================================================
//  EJERCICIO 4 · Clase Carta (2,5 puntos)
// ============================================================================

class Carta {
  static EDAD_MAXIMA = 14;
  static MAX_JUGUETES = 3;
  static #ultimoId = 0;

  #id;
  #nombre;
  #ciudad;
  #fechaEnvio;
  #edad;
  #juguetes;

  constructor(nombre, edad, ciudad) {
    Carta.#ultimoId++;
    this.#id = Carta.#ultimoId;
    this.#nombre = nombre;
    this.#ciudad = ciudad; 

    const hoy = new Date();
    const d = String(hoy.getDate()).padStart(2, '0');
    const m = String(hoy.getMonth() + 1).padStart(2, '0');
    const a = hoy.getFullYear();
    this.#fechaEnvio = `${d}/${m}/${a}`;

    this.edad = edad;
    this.#juguetes = [];
  }

  get juguetes() {
    return this.#juguetes;
  }
  
  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    // 2. Añadido 'Carta.' delante de EDAD_MAXIMA y 'Error' con mayúscula
    if (nuevaEdad < 1 || nuevaEdad > Carta.EDAD_MAXIMA) {
      throw new Error(`${nuevaEdad} no es válida. La edad tiene que estar entre 1 y ${Carta.EDAD_MAXIMA}.`);
    }
    this.#edad = nuevaEdad;
  }

  agregarJuguete(juguete) {
    if (!juguete || juguete.trim() === "") {
      return false;
    }
    const jClean = juguete.trim();
    if (this.#juguetes.length >= Carta.MAX_JUGUETES) {
      return false;
    }
    if (this.#juguetes.includes(jClean)) {
      return false;
    }
    this.#juguetes.push(jClean);
    return true;
  }

  toString() {
    return `#${this.#id}\n${this.#nombre} (${this.#edad} años, ${this.#ciudad}): ${this.#juguetes.join(', ')}`;
  }
}

const cartasSesion = [];

function ejercicio4() {
  const nombre = prompt("Introduce el nombre:");
  if (nombre === null || nombre.trim() === "") return;

  const edadStr = prompt("Introduce la edad:");
  if (edadStr === null || edadStr.trim() === "") return;
  const edad = parseInt(edadStr, 10);

  const ciudad = prompt("Introduce la ciudad:");
  if (ciudad === null || ciudad.trim() === "") return;

  let nuevaCarta;
  try {
    nuevaCarta = new Carta(nombre.trim(), edad, ciudad.trim());
  } catch (error) {
    alert(error.message);
    return;
  }

  let i = 1;
  while (i <= Carta.MAX_JUGUETES) {
    const juguete = prompt(`Juguete ${i} de ${Carta.MAX_JUGUETES} (vacío o Cancelar para terminar)`);

    if (juguete === null || juguete.trim() === "") {
      break;
    }

    const añadido = nuevaCarta.agregarJuguete(juguete);
    if (!añadido) {
      if (nuevaCarta.juguetes.includes(juguete.trim())) {
        alert(`El juguete ${juguete.trim()} ya está en la carta y se vuelve a pedir.`);
      } else {
        break;
      }
    } else {
      i++;
    }
  }

  // 3. El volcado al DOM y el push se sacan FUERA del bucle while
  const resultadosDiv = document.querySelector("#resultados");
  resultadosDiv.innerHTML = '';

  if (nuevaCarta.juguetes.length === 0) {
    alert("La carta no tiene juguetes: no se envía a los Reyes");
  } else {
    cartasSesion.push(nuevaCarta);
    
    const h3 = document.createElement('h3');
    h3.textContent = "Cartas creadas en esta sesión";
    resultadosDiv.appendChild(h3);

    cartasSesion.forEach(carta => {
      const p = document.createElement('p');
      p.style.whiteSpace = "pre-line"; // Respeta los saltos de línea (\n) del toString
      p.textContent = carta.toString();
      resultadosDiv.appendChild(p);
    });
  }
}


