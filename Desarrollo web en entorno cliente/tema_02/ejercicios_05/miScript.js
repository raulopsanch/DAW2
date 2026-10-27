/* Ejercicio 1. Escribe una función clasificarImc(imc) que reciba un índice de masa
corporal (número) y devuelva, usando if / else if / else, uno de estos textos: "Bajo peso"
(menos de 18.5), "Normal" (entre 18.5 y 24.9), "Sobrepeso" (entre 25 y 29.9) u
"Obesidad" (30 o más). */
function Ej1() {
  let peso = parseFloat(prompt("Introduce tu peso (en kg): "));
  let altura = parseFloat(prompt("Introduce tu altura (en m): "));
  let imc = peso / (altura * altura);

  alert(clasificarImc(imc));
}

function clasificarImc(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

/* Ejercicio 2. Reescribe la siguiente función usando el operador ternario, de forma que
ocupe una sola línea dentro del cuerpo de la función:
function obtenerEtiquetaStock(unidades) {
    if (unidades > 0) {
        return 'En stock';
    } else {
        return 'Agotado';
    }
} */
const obtenerEtiquetaStock = (unidades) => {
  return unidades > 0 ? "En stock" : "Agotado";
};

/* Ejercicio 3. Escribe una función nombreDiaSemana(numeroDia) que reciba un número
del 1 al 7 y devuelva, usando switch, el nombre del día correspondiente (1 = "Lunes" ...
7 = "Domingo"). Si el número no está entre 1 y 7, debe devolver "Día no válido". */
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
    case 4:
      return "Jueves";
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
      break;
  }
}
function Ej3() {
  let dia = parseInt(prompt("Introduce un número entre 1 y 7: "));
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
/*Resultado: Al asignar 60 a la variable puntos entraría en el segundo case que no tiene un break, con lo cual pasaría al último case y pondría 'Bronce' en lugar de 'plata' y ahí ya pararía porque si hay un break */

/* Ejercicio 5. Escribe un bucle for que recorra los números del 1 al 30 y muestre por
consola "Fizz" si el número es múltiplo de 3, "Buzz" si es múltiplo de 5, "FizzBuzz" si
es múltiplo de ambos, y el propio número en cualquier otro caso. */
function Ej5() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " FizzBuzz\n");
    } else if (i % 3 == 0) {
      console.log(i + " Fizz\n");
    } else if (i % 5 == 0) {
      console.log(i + " Buzz\n");
    } else {
      console.log(i + "\n");
    }
  }
}

/* Ejercicio 6. Identifica el error en el siguiente código y corrígelo:
let intentos = 0;
while (intentos < 3) {
console.log('Intento fallido');
} */
// let intentos = 0;
// while (intentos < 3) {
//   console.log("Intento fallido");
//   intentos++;
// }

/* Ejercicio 7. Usando for y continue, escribe un bucle que recorra los números del 1 al 20
y sume solo aquellos que sean múltiplos de 3, mostrando el resultado final por consola. */
function Ej7() {
  let suma = 0;
  for (let i = 1; i < 21; i++) {
    if (i % 3 != 0) {
      continue;
    }
    suma += i;
  }
  alert(`Suma de múltiplos de 3: ${suma}`);
}

//Ejercicios · Map, Filter, Reduce
/* Ejercicio 1. Obtener de un array solo las cadenas que tengan una longitud mayor a 5
caracteres. palabras = ['manzana', 'pera', 'banana', 'uva', 'sandía', 'kiwi']; */
function Ej8() {
  let palabras = ["manzana", "pera", "banana", "uva", "sandía", "kiwi"];

  const frutas = palabras.filter((fruta) => fruta.length > 5);
  alert(frutas);
}

/* Ejercicio 2. Filtrar un array de elementos y mostrar solo los que estén en las posiciones
pares (en los índices pares del array). Usad este array: numeros = [10, 20, 30, 40, 50, 60,
70, 80, 90]; */
function Ej9() {
  let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const indicesPares = numeros.filter((_, indice) => indice % 2 == 0);
  alert(indicesPares);
}

/* Ejercicio 3. Encuentra el número mayor del array: numeros = [12, 45, 67, 89, 23, 56, 34,
78] */
function Ej10() {
  let numeros = [12, 45, 67, 89, 23, 56, 34, 78];

  const mayor = numeros.reduce((maximo, num) => {
    if (num > maximo) {
      return num;
    }
    return maximo;
  }, numeros[0]);
  alert(mayor);

  //numeros.sort((a, b) => b - a));
  //alert(numeros[0]);
}

/* Ejercicio 4. Sumarle el IVA a todos los elementos del array.
const precios = [100, 200, 300, 400, 500]; */
function Ej11() {
  const precios = [100, 200, 300, 400, 500];

  const preciosConIva = precios.map((precio) =>
    Number((precio * 1.21).toFixed(2))
  );
  alert(preciosConIva);
}

/* Ejercicio 5. Array de nombres y ponerlos todos en mayúsculas.
const nombres = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria']; */
function Ej12() {
  const nombres = ["Juan", "Pedro", "Luis", "Ana", "Maria"];

  const nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());
  alert(nombresMayuscula);
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

  const nombres = productos.map((producto) => producto.nombre);
  alert(nombres);
}

/* Ejercicio 7. Usando for y continue, escribe un bucle que recorra los números del 1 al 20
y sume solo aquellos que sean múltiplos de 3, mostrando el resultado final por consola */
function Ej14() {
  let total = 0;
  for (let i = 1; i < 21; i++) {
    if (i % 3 !== 0) {
      continue;
    }
    total += i;
  }
  alert(total);
}

//Ejercicios páginas 51 - 52
/* Ejercicio 1. Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”,
“aaa7” y “hola”. Recorre el array y muestra por consola el resultado de aplicar las
funciones parseInt, parseFloat, isNan, Number y String, a cada uno de los elementos del
array. ¿Hay algún resultado que no esperabas? */
function Ej15() {
  let array = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];
  let rdo = "";

  for (const item of array) {
    rdo += `parseInt a ${item} = ${parseInt(item)}\n`;
    rdo += `\nparseFloat a ${item} = ${parseFloat(item)}\n`;
    rdo += `\nisNan a ${item} = ${isNaN(item)}\n`;
    rdo += `\nNumber a ${item} = ${Number(item)}\n`;
    rdo += `\nCadena a ${item} = ${String(item)}\n`;
  }

  alert(rdo);
}

/* Ejercicio 2. Crea una función llamada "DibujarLinea3", que dibuje una línea con 3
asteriscos en la pantalla. */
function Ej16() {
  let asteriscos = DibujarLinea3();
  alert(asteriscos);
  document.querySelector("#rdo").innerHTML = asteriscos;
}

function DibujarLinea3() {
  return "* * *";
}

/* Ejercicio 3. Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado
(en la pantalla) formado por 3 filas con 3 asteriscos cada una (esta función deberá
llamar a la función creada en el ejercicio anterior). */
function Ej17() {
  document.querySelector("#rdo").innerHtml = "";
  for (let i = 0; i < 3; i++) {
    let asteriscos = DibujarLinea3();
    document.querySelector("#rdo").innerHTML += asteriscos + "<br/>";
  }
}

/*Ejercicio 4. Crea una función llamada "DibujarLinea", que dibuje una línea con X 
asteriscos (en la pantalla). La función tendrá un parámetro de entrada con el número de 
asteriscos a mostrar */
function dibujarLinea(num) {
  let contador = 0;
  let result = "";
  while (contador < num) {
    result += "* ";
    contador++;
  }
  return result;
}
function Ej18() {
  let num = parseInt(prompt("Introduce un número: "));
  let asteriscos = dibujarLinea(num);
  document.querySelector("#rdo").innerHTML += asteriscos;
}

/* Ejercicio 5. Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado 
formado por X filas con X asteriscos cada una (esta función deberá llamar a la función 
creada en el ejercicio anterior). El script pedirá al usuario el tamaño del cuadrado, y 
llamará a la función con ese dato */
function dibujarCuadrado(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += dibujarLinea(num) + "<br />";
  }
  return result;
}
function Ej19() {
  let num = parseInt(prompt("Introduce un número: "));
  let asteriscos = dibujarCuadrado(num);

  document.querySelector("#rdo").innerHTML += asteriscos;
}

/* Ejercicio 6. Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo 
del ancho y alto que se indiquen como parámetros. El script pedirá al usuario el tamaño 
del rectángulo, y llamará a la función con ese dato. */
function dibujarRectangulo(base, altura) {
  let result = "";

  for (let i = 0; i < altura; i++) {
    result += dibujarLinea(base);

    result += "<br />";
  }
  return result;
}
function Ej20() {
  let altura = parseInt(prompt("Introduce la altura: "));
  let base = parseInt(prompt("Introduce la base: "));
  let rectangulo = dibujarRectangulo(base, altura);

  document.querySelector("#rdo").innerHTML = rectangulo;
}

/* Ejercicio 7. Crea una función "Cubo" que devuelva el cubo de un número real que se 
indique como parámetro. La función tendrá que comprobar que el parámetro es un 
número (o que se pueda convertir a un número), en caso contrario, devolverá false. 
Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle 
“hola” como parámetro. ¿Qué ocurre? */
function esNumeroValido(valor) {
  if (
    typeof valor == "boolean" ||
    valor === "" ||
    (typeof valor === "string" && valor.trim() === "")
  ) {
    return false;
  }
  return true;
}
function Cubo(num) {
  if (!esNumeroValido(num)) {
    return false;
  }

  let numero = Number(num);

  return Math.pow(numero, 3);
}
function Ej21() {
  let valor = prompt("Introduce un valor: ");

  alert(Cubo(valor));
}

/* Ejercicio 8. Crea una función "Menor" que devuelva el menor de dos números que 
recibirá como parámetros. */
function menor(a, b) {
  if (a > b) {
    return `${a} es mayor`;
  } else if (b > a) {
    return `${b} es mayor`;
  } else {
    return "Son iguales";
  }
}
function Ej22() {
  let num1 = parseFloat(prompt("Introduce el primer número: "));
  let num2 = parseFloat(prompt("Introduce el segundo número: "));

  alert(menor(num1, num2));
}

/* Ejercicio 9. Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo:
La función PideNumero, pedirá al usuario que introduzca un número y devuelve el 
número introducido.
Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente 
devuelven los valores correspondientes.
La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y 
mostrará la siguiente información en la consola:
‘El número X es POSITIVO/NEGATIVO’
‘La mitad de X es Y’
Fuera de las funciones, solo habrá una llamada a la función HazTodo. */
function pideNumero(num) {
  return num;
}
function esPositivo(num) {
  let positivo = num > 0 ? `${num} es positivo` : `${num} es negativo`;

  return positivo;
}
function CalculaMitad(num) {
  return `La mitad de ${num} es ${num / 2}`;
}
function hazTodo(num) {
  let result = "";

  result += pideNumero(num) + "\n" + esPositivo(num) + "\n" + CalculaMitad(num);

  return result;
}
function Ej23() {
  let num = parseFloat(prompt("Introduce un número: "));

  alert(hazTodo(num));
}

/* Ejercicio 10. Escribe una función que dado un string, devuelva un array con las palabras 
que forman el string. ¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se 
puede solucionar? */
function Ej24() {
  let result = "";
  let texto = prompt("Introduce una cadena de texto: ");
  let arrayText = texto.split(" ");
  /* Cuando se ponen 3 espacios seguidos añade como una palabra en medio, que es un gran espacio.
  para solucionarlo quitamos las palabras que estén vacías usando filter,  */
  let array = arrayText.filter((palabra) => palabra !== "");

  for (let i = 0; i < array.length; i++) {
    result += array[i] + "\n";
  }

  alert(result);
}

/* Ejercicio 11. Escribe una función que se le pase un nombre completo (string) y 
devuelve el nombre abreviado (es decir, el nombre y la primera letra del primer 
apellido, seguido de un punto). Escribe también el código necesario para probarla. */
function nombreAbreviado(nombreCompleto) {
  let partes = nombreCompleto.trim().split(" ");

  if (partes.length < 2) {
    return nombreCompleto;
  }

  let nombre = partes[0];
  let apellido = partes[1].charAt(0).toUpperCase();

  return nombre + " " + apellido + ".";
}
function Ej25() {
  let nombre = prompt("Introduce tu nombre: ");
  let resultado = nombreAbreviado(nombre);

  alert(resultado);
}

/* Ejercicio 12. Crea una función que oculte parte de una dirección de email. Por ejemplo, 
si se le pasa “1234567890@gmail.com”, devolverá “12345…@gmail.com”, es decir, 
sustituye la 2ª mitad del email (antes de la @) por “...”. Escribe también el código 
necesario para probarla. */
function ocultarEmail(email) {
  let partes = email.split("@");
  let usuario = partes[0];
  let dominio = partes[1];

  let mitad = Math.floor(usuario.length / 2);

  let usuarioOculto = usuario.substring(0, mitad) + "***";

  return usuarioOculto + "@" + dominio;
}
function Ej26() {
  let email = prompt("Introduce tu email: ");

  let result = ocultarEmail(email);

  alert(result);
}

/* Ejercicio 13. Define una función que sustituya los espacios en blanco por un guión y,
además, convierta todo el texto en minúsculas. Escribe también el código necesario para
probarla. */
function cambioTexto(texto) {
  let cambio = texto.split(" ").join("-").toLowerCase();
  return cambio;
}
function ej27() {
  let text = prompt("Introduce un texto: ");

  alert(cambioTexto(text));
}

/* Ejercicio 14. Escribe una función que reciba dos parámetros, string1 y string2, y que
devuelva true si string1 contiene a string2, o false en caso contrario. */
function compararString(string1, string2) {
  if (string1.includes(string2)) {
    return true;
  }
  return false;
}
function ej28() {
  let text1 = "Hola me llamo Raúl";
  let text2 = "Raúl";

  alert(compararString(text1, text2));
}

/* Ejercicio 15. Crea una función que genere un número aleatorio, entre dos valores dados.
Utiliza esta función para simular el funcionamiento de un dado. */
function aleatorio(num1, num2) {
  let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

  return numAleatorio;
}

function ej29() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  if (num1 < num2) {
    alert(aleatorio(num1, num2));
  } else {
    alert("Error. El primer número debe ser más chivo");
  }
}

/* Ejercicio 16. Define una función que devuelva una cadena de texto con el día actual.
Además, hay que pasarle el separador. Suponiendo que el separador es “-”, el formato
de salida será “dd-mm-yyyy”. */
