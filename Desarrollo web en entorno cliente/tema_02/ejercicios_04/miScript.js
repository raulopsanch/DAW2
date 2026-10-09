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
