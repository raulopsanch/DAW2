function Ej1() {
  let peso = parseFloat(prompt("Introduce tu peso en kg: "));
  let altura = parseFloat(prompt("Introduce tu altura en metros: "));

  alert(imc(peso, altura));
}

function imc(peso, altura) {
  let masa = peso / altura;

  if (masa < 18.5) {
    return "Bajo peso";
  } else if (masa >= 18.5 && masa < 25) {
    return "nomal";
  } else if (masa >= 25 && masa < 30) {
    return "sobrepeso";
  } else {
    return "Sobrepeso";
  }
}

const obtenerEtiquetaStock = (unidades) =>
  unidades > 0 ? "En stock" : "Agotado";

function nombreDiaSemana(numeroDia) {
  switch (numeroDia) {
    case 1:
      return "Lunes";
      break;
    case 2:
      return "Martes";
      break;
    case 3:
      return "Miércoles";
      break;
    case 4:
      return "jueves";
      break;
    case 5:
      return "Viernes";
      break;
    case 6:
      return "Sábado";
      break;
    case 7:
      return "Domingo";
      break;
    default:
      return "Día no válido";
  }
}
function Ej3() {
  let dia = parseInt(prompt("Introduce un número: "));
  alert(nombreDiaSemana(dia));
}

/* Ejercicio 4. Explica, sin ejecutarlo, qué imprimirá este código y por qué (presta atención
  a los break):
  function categoria(puntos) {
  let resultado;
  switch (true) {
  case puntos >= 100:
  resultado = 'Oro';
  break;
  case puntos >= 50:
  resultado = 'Plata';
  case puntos >= 0:
  resultado = 'Bronce';
  break;
  default:
  resultado = 'Sin categoría';
  }
  return resultado;
  }
  console.log(categoria(60)); */
/*Se ejecutaría el "case >= 50", pero al no tener la sentencia break detrás se ejecutaría el "case >= 0" y reescribiría el resutado y ahí ya pararía porque si tiene el break*/

/*  Ejercicio 5. Escribe un bucle for que recorra los números del 1 al 30 y muestre por
  consola "Fizz" si el número es múltiplo de 3, "Buzz" si es múltiplo de 5, "FizzBuzz" si
  es múltiplo de ambos, y el propio número en cualquier otro caso. */
function Ej5() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " FizzBuzz" + "\n");
    } else if (i % 3 == 0) {
      console.log(i + " Fizz" + "\n");
    } else if (i % 5 == 0) {
      console.log(i + " Buzz" + "\n");
    } else console.log(i + "\n");
  }
}

/*   Ejercicio 6. Identifica el error en el siguiente código y corrígelo:
  let intentos = 0;
  while (intentos < 3) {
  console.log('Intento fallido');
  } */
let intentos = 0;
while (intentos < 3) {
  console.log("Intento fallido");
  intentos++; //El fallo era que no incrementaba la variable intentos
}

/*  Ejercicio 7. Usando for y continue, escribe un bucle que recorra los números del 1 al 20
  y sume solo aquellos que sean múltiplos de 3, mostrando el resultado final por consola. */
function Ej7() {
  let suma = 0;

  for (let i = 1; i < 21; i++) {
    if (i % 3 !== 0) {
      continue;
    } else {
      suma += i;
    }
  }
  alert(`Suma de los múltipos de 3 (1-20): ${suma}`);
}

/*Ejercicio 1. Obtener de un array solo las cadenas que tengan una longitud mayor a 5
caracteres. palabras = ['manzana', 'pera', 'banana', 'uva', 'sandía', 'kiwi'];*/
function Ej8() {
  let palabras = ["manzana", "pera", "banana", "uva", "sandía", "kiwi"];

  const mayor5 = palabras.filter((palabra) => palabra.length > 5);
  alert(mayor5);
}

/* Ejercicio 2. Filtrar un array de elementos y mostrar solo los que estén en las posiciones
pares (en los índices pares del array). Usad este array: numeros = [10, 20, 30, 40, 50, 60,
70, 80, 90]; */
function Ej9() {
  let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const indicesPares = numeros.filter((numero, indice) => indice % 2 === 0);
  alert(indicesPares);
}

/* Ejercicio 3. Encuentra el número mayor del array: numeros = [12, 45, 67, 89, 23, 56, 34,
  78] */
function Ej10() {
  let numeros = [12, 45, 67, 89, 23, 56, 34, 78];

  const mayor = numeros.reduce((acumulador, actual) =>
    actual > acumulador ? actual : acumulador
  );
  alert(mayor);
}

/*  Ejercicio 4. Sumarle el IVA a todos los elementos del array.
  const precios = [100, 200, 300, 400, 500]; */
function Ej11() {
  const precios = [100, 200, 300, 400, 500];

  const preciosIva = precios.map((precio) =>
    Number((precio * 1.21).toFixed(2))
  );
  alert(preciosIva);
}

/* Ejercicio 5. Array de nombres y ponerlos todos en mayúsculas.
  const nombres = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria']; */
function Ej12() {
  const nombres = ["Juan", "Pedro", "Luis", "Ana", "Maria"];

  const nomMayusc = nombres.map((nombre) => nombre.toUpperCase());
  alert(nomMayusc);
}

/* Ejercicio 6. Dado un array de objetos que representan productos, crea un array con solo
  los nombres de los productos.
  const productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Teclado", precio: 50 },
  { id: 3, nombre: "Ratón", precio: 25 },
  ]; */
function Ej13() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Teclado", precio: 50 },
    { id: 3, nombre: "Ratón", precio: 25 },
  ];

  const nomProducts = productos.map((producto) => producto.nombre);
  alert(nomProducts);
}

/*  Ejercicio 7. Usando for y continue, escribe un bucle que recorra los números del 1 al 20
 y sume solo aquellos que sean múltiplos de 3, mostrando el resultado final por consola */
function Ej14() {
  let suma = 0;

  for (let i = 1; i < 21; i++) {
    if (i % 3 !== 0) {
      continue;
    } else {
      suma += i;
    }
  }
  alert(`Suma de los múltipos de 3 (1-20): ${suma}`);
}
