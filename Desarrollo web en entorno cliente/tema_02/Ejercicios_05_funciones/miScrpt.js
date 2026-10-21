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
