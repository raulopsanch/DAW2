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
function Ej2() {}

/* Ejercicio 3. Crea un array de elementos y muestra dichos elementos por pantalla
separados por "#", ahora haz lo mismo con uno bidimensional:
let anidado1 = ["anidado1", "anidado2", "anidado3"]
let anidado2 = ["a1", "a2", "a3"]
let matriz = [anidado1, anidado2]
Recorre la matriz y muestra los elementos separados por “#”, mostrando el mensaje:
“Indice X: elem1#elem2#elem3” */
function Ej3() {
  let anidado1 = ["anidado1", "anidado2", "anidado3"];
  let anidado2 = ["a1", "a2", "a3"];
  let matriz = [anidado1, anidado2];
}
