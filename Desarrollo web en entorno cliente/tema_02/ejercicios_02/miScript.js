"use strict";

/* Actividad 1. Si nos fijamos en estas líneas de código num1 = 5; resultado = num1 = 3; // ¿Cuánto vale aquí ‘resultado’? resultado = num1 == 3; // ¿Cuánto vale aquí ‘resultado’? Nota: Vamos a aprovechar esta actividad para aprender a utilizar el depurador del navegador y ‘observar’ una variable.  */
function Ej1() {
  let num1 = 5;
  let resultado = (num1 = 3); // ¿Cuánto vale aquí ‘resultado’?
  resultado = num1 == 3; // ¿Cuánto vale aquí ‘resultado’?
}

/* Actividad 2. Escribir el código necesario para que realice esta operación “v1 * v2 + v3” y muestre el resultado por consola. Siendo los valores de v1, v2 y v3:  v1=2 v2=4 v3=5 A continuación, hacer lo mismo, pero con esta operación “v1 + v2 * v3”. Antes de ejecutarlo, pensad qué resultado obtendremos. ¿Has acertado? ¿Qué orden sigue JS para realizar las operaciones? ¿Cómo podemos cambiarlo?  */
function Ej2() {
  let v1 = 2;
  let v2 = 4;
  let v3 = 5;

  let resultado = v1 + v2 * v3;
}

// Actividad 3. ¿Cuál sería el resultado de las siguientes operaciones? a=5; a/=2; a+=1; a*=3; a--; a++;
function Ej3() {
  let a = 5;
  a /= 2;
  a += 1;
  a--;
  a++;
}

/* Actividad 4. Suma tres números tecleados por usuario y calcula la media, mostrando en la consola: 
“La suma es: RESULTADO_SUMA” 
“La media es: MEDIA”  */
function Ej4() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));
  let num3 = parseInt(prompt("Introduce el tercer número: "));

  let resultado_suma = num1 + num2 + num3;
  let media = resultado_suma / 3;

  console.log(`El resultado de la suma es: ${resultado_suma}`);
  console.log(`El resultado de la media es: ${media}`);
}

// Actividad 5. Pide al usuario una cantidad de "millas náuticas" y muestra la equivalencia en metros.
function Ej5() {
  let millas = parseFloat(prompt("Introduce el primer número: "));

  let metros = millas * 1609.34;
}

/* Dado el siguiente código: 
 let a = 5; 
 let b = a++; 
 Y este otro: 
 let a = 5; 
 let b = ++a; 
 ¿Tendrá la variable ‘b’ el mismo valor en ambos scripts? ¿Por qué?  */
function Ej6() {
  let a = 5;
  let b = ++a;

  a = 5;
  b = a++;
}

/* ¿Que mostrará el siguiente código en la consola? ¿Por qué? 
 let foo = ‘hola’; 
 console.log( parseInt(foo) );  */
function Ej7() {
  let foo = "hola";
  console.log(parseInt(foo));
}

function Ej8() {
  alert(`Esto es un texto con "comillas dobles" y 'comillas simples',
    y además, formado por varias líneas.`);
}

/* Actividad 9. Escribe una función generarCodigoDescuento() que devuelva una cadena con el formato DESC- seguido de un número entero aleatorio de 4 cifras (entre 1000 y 9999).  */
function Ej9() {
  let ran = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  alert(`Desc - ${ran}`);
}
