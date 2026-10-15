/* Ejercicio 1. Crea una función que recorra una cadena y separe los caracteres con un
guión (Que no aparezca guión al final). */
function Ej1() {
  let cadena = "hola";
  let result = "";
  //cadena.split("").join("-");

  for (let caracter of cadena) {
    if (result !== "") {
      result += "-";
    }
    result += caracter;
  }
  alert(result);
}

/* Ejercicio 2. Función que defina una cadena, la corte y la meta en un array. Luego debe
recorrer el array e indicar que en el índice X del array está tal cadena. */
function Ej2() {
  let cadena = "Hola soy Raúl y estoy haciendo un ejercicio de JavaScript";
  let array = cadena.split(" ");
  let text = "";

  for (let i = 0; i < array.length; i++) {
    text += i + " " + array[i] + "\n";
  }
  alert(text);
}

/* Ejercicio 3. Crea un array de elementos y muestra dichos elementos por pantalla
separados por "#", ahora haz lo mismo con uno bidimensional:
let anidado1 = ["anidado1", "anidado2", "anidado3"]
let anidado2 = ["a1", "a2", "a3"]
let matriz = [anidado1, anidado2]
Recorre la matriz y muestra los elementos separados por “#”, mostrando el mensaje:
“Indice X: elem1#elem2#elem3” */
function Ej3() {
  let frutas = ["pera", "manzana", "naranja", "uva", "cereza"];
  let anidado1 = ["anidado1", "anidado2", "anidado3"];
  let anidado2 = ["a1", "a2", "a3"];
  let matriz = [anidado1, anidado2];

  alert(frutas.join("#"));

  for (let indice in matriz) {
    alert(`${indice}: ${matriz}`);
  }
}

// Ejercicio 4. Mostrar los elementos de un array del final al principio usando pop
function Ej4() {
  let frutas = ["pera", "manzana", "naranja", "uva", "cereza"];

  while (frutas.length > 0) {
    alert(frutas.pop());
  }
}

/* Ejercicio 5. Nos dan un array de frutas [“banana”, “naranja”, “mango”, “limon”]. Crear
un script que pregunte al usuario qué fruta quiere buscar en el array, si no existe dicha
fruta mostrará “Esta fruta no existe en el array” en caso contrario mostrará “Sí hay
aguacate en el array”. La fruta se puede poner en mayúsculas y minúsculas y la seguirá
encontrando. */
function Ej5() {
  let frutas = ["banana", "naranja", "mango", "limon"];
  let respuesta = prompt("Introduce una fruta: ");

  if (frutas.includes(respuesta.toLowerCase())) {
    alert(`si hay ${respuesta} en el array`);
  } else {
    alert("Esta fruta no existe en el array");
  }
}

/* Ejercicio 6. Si tenemos una cadena en minúsculas “miel”. ¿Cómo podemos
transformarla en una cadena con la primera letra en mayúsculas(Miel)? */
function Ej6() {
  let text = "miel";
  let cadena = "";

  cadena += text[0].toUpperCase() + text.slice(1);

  alert(cadena);
}

/* Ejercicio 7. Nos dan la lista de la compra en un array([“Leche”, “Café”, “Té”, “Miel”).
  Crea un botón para añadir “Carne” al principio de la lista de la compra y “Azúcar” al
  final de la lista. Si ya se ha añadido “Carne” o “Azúcar” no se vuelve a añadir, se
  muestra el mensaje “Ya se ha añadido este producto a la lista de la compra”.
  Crea un botón “Alergias” que pida un producto al que eres alérgico y lo elimina de la
  lista de la compra, indicando “He eliminado X producto de la cesta porque eres
  alérgico”, si no se encuentra el producto en la cesta, mostrará “No existen alergias en la
  cesta”.
  Crea un botón “Modificar” que pida un producto a buscar y si lo encuentra modifique su
  valor, por ejemplo, que busque “Té” y te permita modificarlo a “Té verde”. */
let listaCompra = ["Leche", "Café", "Té", "Miel"];

function AñadirCesta() {
  if (listaCompra.includes("Carne") || listaCompra.includes("Azúcar")) {
    alert("Ya se ha añadido este producto a la lista de la compra");
    return;
  }
  listaCompra.unshift("Carne");
  listaCompra.push("Azúcar");
}

function Alergias() {
  let producto = prompt("Introduce un producto: ");

  if (listaCompra.includes(producto)) {
    alert(`He eliminado ${producto} producto de la cesta porque eres alérgico`);
    let indice = listaCompra.indexOf(producto);
    listaCompra.splice(indice, 1);
  } else {
    alert("No existen alergias en la cesta");
  }
}

function Modificar() {
  let producto = prompt("Introduce un producto: ");

  if (listaCompra.includes(producto)) {
    let newProducto = prompt("Introduce un producto: ");
    let indice = listaCompra.indexOf(producto);
    listaCompra[indice] = newProducto;
  } else {
    alert("No existe el producto en la cesta");
  }
}

/* Ejercicio 8. Crea un programa que pida al usuario 6 números y luego los muestre en
orden inverso (pista: usa un array para almacenarlos y "for" para mostrarlos). */
function Ej8() {
  let numeros = [];
  let texto = "";
  let textoInverso = "";

  for (let i = 0; i < 6; i++) {
    let n = parseInt(prompt("Introduce un número: "));
    numeros.push(n);
  }

  for (let i = 0; i < numeros.length; i++) {
    texto += numeros[i] + " ";
  }
  alert(texto);

  for (let j = numeros.length - 1; j >= 0; j--) {
    textoInverso += numeros[j] + " ";
  }
  alert(textoInverso);
}

/* Ejercicio 9. Crea un programa que pregunte al usuario cuantos números va a introducir
(por ejemplo, 5), le pida todos esos números, los guarde en un array y finalmente
calcule y muestre la media de esos números. */
function Ej9() {
  let nums = [];
  let sum = 0;
  let cantidad = parseInt(prompt("¿De qué tamaño quieres el array?: "));

  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt("Introduce un número: "));
    nums.push(num);
  }

  let i = 0;
  for (const numero of nums) {
    sum += numero;
  }

  alert(`La media del array es: ${sum / nums.length}`);
}

/* Ejercicio 10. Crea un array de 100 elementos. El valor del primer elemento será 1, valor
del segundo elemento será 2, y así sucesivamente, de tal forma que el último elemento
del array tendrá el valor 100. Calcula la media de todos los elementos del array. */
function Ej10() {
  let nums = [];
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    nums.push(i);
  }

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
  }

  alert(`La media del array es: ${sum / 100}`);
}

/* Ejercicio 11. Un programa que pida al usuario 10 números, calcule su media y luego
muestre los que están por encima de la media. */
function Ej11() {
  let numeros = [];
  let suma = 0;
  let text = "";

  for (let i = 0; i < 10; i++) {
    let n = parseInt(prompt("Introduce un número: "));
    numeros.push(n);
  }

  for (let j = 0; j < numeros.length; j++) {
    suma += numeros[j];
  }

  let media = suma / numeros.length;

  for (const numero of numeros) {
    if (numero > media) {
      text += numeros[k] + " ";
    }
  }

  alert(text);
}

/* Ejercicio 12. Desarrolla un programa que pedirá nombres al usuario hasta que se
introduzca un nombre vacío, momento en el que dejarán de pedirse más nombres y se
mostrará en pantalla la lista de los nombres que se han introducido ordenados
alfabéticamente. */
function Ej12() {
  let nombres = [];
  let texto = "";

  do {
    let name = prompt("Introduce un nombre");
    nombres.push(name);
  } while (name.length != 0);

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == 0) {
      texto += nombres[i];
    } else {
      texto += ", " + nombres[i];
    }
  }
  alert(texto);
}

/* Ejercicio 13. Escribe un script para generar un array de dos dimensiones (matriz). Se le
pedirá al usuario primero el tamaño de la matriz (que será cuadrada). 
Y a continuación le irá pidiendo el valor de cada celda.*/
function Ej13() {
  let tamanio_matriz = parseInt(prompt("Introduce el tamaño de la matriz: "));
  let matriz = [];

  for (let i = 0; i < tamanio_matriz; i++) {
    let fila = [];
    for (let j = 0; j < tamanio_matriz; j++) {
      let valor = parseInt(prompt("Introduce un número: "));
      fila.push(valor);
    }
    matriz.push(fila);
  }

  let result = "";
  for (let k = 0; k < matriz.length; k++) {
    result += matriz[k].join("  ") + "\n";
  }
  alert(result);
}

/* Ejercicio 14. Crear un programa que pida una nota (número) y muestre la calificación según la nota. Si la nota no es entre 0 y 10 mostrará el error “Nota errónea”: 
    0-3: Muy deficiente 
    3-5: Insuficiente 
    5-6: Suficiente 
    6-7: Bien 
    7-9: Notable 
    9-10: Sobresaliente  */
function Ej14() {
  let nota = parseFloat(prompt("Introduce una nota: "));

  switch (true) {
    case nota >= 0 && nota < 3:
      alert("Muy deficiente");
      break;
    case nota >= 3 && nota < 5:
      alert("Insuficiente");
      break;
    case nota >= 5 && nota < 6:
      alert("Suficiente");
      break;
    case nota >= 6 && nota < 7:
      alert("Bien");
      break;
    case nota >= 7 && nota < 9:
      alert("Notable");
      break;
    case nota <= 10:
      alert("Sobresaliente");
      break;
    default:
      alert("Nota errónea");
  }
}

/* Ejercicio 15. Programa que pida 2 números y muestre todos los números impares que hay entre estos 2 números introducidos (ambos inclusive) separados por un guión. Sin usar arrays y sin que quede un guión al final.  */
function Ej15() {
  let num1 = parseInt(prompt("Introduce un número: "));
  let num2 = parseInt(prompt("Introduce un número: "));
  let texto = "";

  for (let i = num1; i <= num2; i++) {
    if (i % 2 == 1) {
      if (i == num1 || i == num1 + 1) {
        texto += i;
      } else {
        texto += " - " + i;
      }
    }
  }
  alert(texto);
}

/* Ejercicio 16. Realiza un script que pida cadenas de texto hasta que se pulse cancelar en
un confirm. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con
un guión. */
function Ej16() {
  let cadenas = [];
  let result = "";

  let cadena = prompt("Introduce una cadena: ");

  while (true) {
    cadenas.push(cadena);
    let confirmado = confirm("¿Desea continuar?");
    if (!confirmado) {
      break;
    }
    cadena = prompt("Introduce una cadena: ");
  }

  for (const texto of cadenas) {
    result += texto + "\n";
  }

  alert(result);
}

/* Ejercicio 17. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente
forma:
  1
  22
  333
  4444
  55555
  666666 */
function Ej17() {
  let result = "";

  for (let i = 1; i <= 30; i++) {
    let linea = i.toString().repeat(i);

    result += linea + "\n";
  }
  alert(result);
}

/* Ejercicio 18. Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 o de 9 que cada 5 líneas impresas muestre una línea horizontal. Ejemplo: 
4 es múltiplo de 4 
8 es múltiplo de 4 
9 es múltiplo de 9 
12 es múltiplo de 4 
16 es múltiplo de 4  
————————————————————- 
18 es múltiplo de 9 
20 es múltiplo de 4 
24 es múltiplo de 4 
27 es múltiplo de 9 
28 es múltiplo de 4  */
function Ej18() {
  let mult4 = " es múltiplo de 4";
  let mult9 = " es múltiplo de 9";
  let lineasImpresas = 0;
  let result = "";

  for (let i = 1; i <= 500; i++) {
    if (i % 4 == 0) {
      result += i + mult4 + "\n";
      lineasImpresas++;
    } else if (i % 9 == 0) {
      result += i + mult9 + "\n";
      lineasImpresas++;
    }

    if (lineasImpresas === 5) {
      result += "————————————————————- \n";
      lineasImpresas = 0;
    }
  }
  alert(result);
}

/* Ejercicio 19. Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */
function Ej19() {
  let filas = parseInt(prompt("Introduce el número de filas: "));
  let columnas = parseInt(prompt("Introduce el número de columnas: "));
  let total = filas * columnas;
  let tabla = [];
  let result = "";
}
