// Ejercicio1. Crear una función que pida una cadena por teclado y muestre su tamaño.
function Ej1() {
  let cadena = prompt("Introduce el texto: ");
  alert(`El texto tiene ${cadena.length} caracteres`);
}

/* Ejercicio2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)  */
function Ej2() {
  let pwd = prompt("Introduce la clave: ").toLowerCase();

  if ("secreta" == pwd) {
    alert("Has acertado");
  } else {
    alert("No es correcta");
  }
}

/* Ejercicio 3. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena desde "tal" al final.  */
function Ej3() {
  const cadena = "hola que tal yo bien";

  alert(cadena.substring(cadena.indexOf("t")));
}

/* Ejercicio 4. Crear una función que tenga como parámetro de entrada un DNI y le ponga un 0 o no al principio según corresponda (si tiene 7 caracteres, hay que ponerle un 0 delante). */
function Ej4() {
  let dni = prompt("Introduce tu DNI: ");

  if (dni.length < 7) {
    let cerosFaltantes = 8 - dni.length;
    dni = "0".repeat(cerosFaltantes) + dni;
  }

  alert(dni);
}

/* Ejercicio5. Crea una función que muestre por pantalla cuántas palabras tiene una frase, mostrando: “Esta frase tiene X palabras”.  */
function Ej5() {
  let cadena = prompt("Introduce un texto: ");

  alert(`La cadena tiene ${cadena.split(" ").length} palabras`);
}
