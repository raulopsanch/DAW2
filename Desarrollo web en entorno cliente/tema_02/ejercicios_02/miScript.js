'use strict'


function Ej1() {
  let num1 = 5;
  let resultado = (num1 = 3); // ¿Cuánto vale aquí ‘resultado’?
  resultado = num1 == 3; // ¿Cuánto vale aquí ‘resultado’?
}


function Ej2() {
  let v1 = 2;
  let v2 = 4;
  let v3 = 5;

  let resultado = v1 + v2 * v3;
}


function Ej3() {
  let a = 5;
  a /= 2;
  a += 1;
  a --;
  a++;
}


function Ej4() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));
  let num3 = parseInt(prompt("Introduce el tercer número: "));
 
  let resultado_suma = num1 + num2 + num3;
  let media = resultado_suma / 3;
  
  console.log(`El resultado de la suma es: ${resultado_suma}`);
  console.log(`El resultado de la media es: ${media}`);
}


function Ej5() {
  let millas = parseFloat(prompt("Introduce el primer número: "));

  let metros = millas * 1609.34;
}


function Ej6() {
  let a = 5;
  let b = ++a;

  a = 5;
  b = a++;
}


function Ej7() {
  let foo = "hola";
  console.log(parseInt(foo));
}


function Ej8() {
  alert(`Esto es un texto con "comillas dobles" y 'comillas simples',
    y además, formado por varias líneas.`);
}


function Ej9() {
  let ran = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  alert(`Desc - ${ran}`);
}