// Actividad 1. Crea un programa que pida al usuario un número y diga si es par.
function Ej1() {
  let num = parseInt(prompt("Introduce un número: "));

  alert(`${num} es ${num % 2 == 0 ? "par" : "impar"}`);
}

// Actividad 2. Crea un programa que pida al usuario dos números y diga cuál es el mayor de ellos.
function Ej2() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(`${num1} es ${num1 > num2 ? "es mayor" : "es menor"}`);
}

/* Actividad 3. Crea un programa que pida al usuario dos números y diga si el primero es múltiplo del segundo.  */
function Ej3() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(
    `${num1} ${
      num1 % num2 == 0 ? " es múltipo" : " no es múltiplo "
    } de ${num2}`,
  );
}

/* Actividad 4. Crea un programa que pida al usuario dos números. Si el segundo no es cero, mostrará el resultado de dividir el primero entre el segundo. Por el contrario, si el segundo número es cero, escribirá "Error: No se puede dividir entre cero".  */
function Ej4() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(`${num2 != 0 ? num1 / num2 : "No se puede dividir por 0"}`);
}

/* Actividad 5. Crea un programa que pida al usuario dos números y diga si son iguales o, en caso contrario, cuál es el mayor de ellos. */
function Ej5() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  if (num1 == num2) {
    alert(`Ambos números sin iguales`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor`);
  } else {
    alert(`${num2} es mayor`);
  }
}

/* Actividad 6. Necesitamos un programa que muestre los números del 10 al 20, ambos inclusive. Y a continuación, muestre los números del 20 al 10, es decir, de mayor a menor.  */
function Ej6() {
  let mensaje = "";
  for (let i = 10; i < 21; i++) {
    mensaje += i + ", ";
  }
  alert(mensaje);

  mensaje = "";
  for (let j = 20; j >= 10; j--) {
    mensaje += j + ", ";
  }
  alert(mensaje);
}

// Actividad 7. Crea un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos de 3.
function Ej7() {
  let mensaje = "";
  for (let i = 1; i < 51; i++) {
    if (i % 3 == 0) {
      mensaje += i + ", ";
    }
  }
  alert(mensaje);
}

/* Actividad 8. Crea un programa que muestre los números del 100 al 200 (ambos incluidos) que sean divisibles entre 7 y a la vez entre 3. */
function Ej8() {
  let mensaje = "";
  for (let i = 100; i < 201; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
      mensaje += i + ", ";
    }
  }
  alert(mensaje);
}

/* Actividad 9. Crea un programa que muestre la tabla de multiplicar del 9: 
  9 x 0 = 0 
  9 x 1 = 9 
  9 x 2 = 18 
  … 
  9 x 10 = 90  */
function Ej9() {
  let mensaje = "";

  for (let i = 0; i < 11; i++) {
    mensaje += 9 + " X " + i + "= " + 9 * i + "\n";
  }
  alert(mensaje);
}

//Actividad 10. Crea un programa que muestre los primeros ocho números pares: 2 4 6 8 10 12 14 16.
function Ej10() {
  let i = 1;
  let pares = 0;
  let mensaje = "";

  while (pares < 8) {
    if (i % 2 == 0) {
      mensaje += i + ", ";
      pares++;
    }
    i++;
  }
  alert(mensaje);
}

//Actividad 11. Crea un programa que muestre los números del 15 al 5, descendiendo
function Ej11() {
  let mensaje = "";

  for (let i = 15; i >= 5; i--) {
    mensaje += i + " ";
  }

  alert(mensaje);
}

/* Actividad 12. Crea un programa que pida al usuario el ancho (por ejemplo, 4) y el alto (por ejemplo, 3) y muestre un rectángulo formado por esa cantidad de asteriscos:
 ****
 ****
 ****  */
function Ej12() {
  let alto = parseInt(prompt("Introduce el alto: "));
  let ancho = parseInt(prompt("Introduce el ancho: "));
  let resultado = "";
  for (let i = 0; i < alto; i++) {
    for (let j = 0; j < ancho; j++) {
      resultado += "*";
    }
    resultado += "\n";
  }
  alert(resultado);
}

/* Actividad 13. Lo mismo que el ejercicio anterior, pero esta vez mostrará una diagonal con otro carácter:    
    O*** 
    *O** 
    **O* 
    ***O  */
function Ej13() {
  let alto = parseInt(prompt("Introduce el alto: "));
  let ancho = parseInt(prompt("Introduce el ancho: "));
  let resultado = "";

  for (let i = 0; i < alto; i++) {
    for (let j = 0; j < ancho; j++) {
      if (i === j) {
        resultado += "0";
      } else {
        resultado += "*";
      }
    }
    resultado += "\n";
  }
  alert(resultado);
}

/* Actividad 14. Crea un programa que pida al usuario su identificador y contraseña de manera indefinida hasta que introduzca el identificador “alibaba” y la contraseña “sesamo”. Si al tercer intento no ha introducido los datos correctos, mostrará un mensaje diciendo que el identificador/contraseña no son correctos. */
function Ej14() {
  let intentos = 0;
  let usuario = "";
  let contraseña = "";

  while (usuario != "alibaba" || contraseña != "sesamo") {
    usuario = prompt("Introduce el usuario: ");
    contraseña = prompt("Introduce la contraseña: ");
    intentos++;

    if (usuario == "alibaba" && contraseña == "sesamo") {
      alert("¡Acceso concedido!");
      break;
    }

    if (intentos < 3) {
      alert("Usuario o contrasña incorrectos");
      break;
    }
  }
}

/* Actividad 15. Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se repetirá mientras el número introducido no sea cero.  */
function Ej15() {
  let numero;

  do {
    numero = parseInt(prompt("Introduce un número: "));
    if (numero != 0) {
      let cuadrado = numero * numero;
      alert(`El cuadrado de ${numero} es ${cuadrado}`);
    } else {
      alert("Saliendo del programa");
    }
  } while (numero != 0);
}

/* Actividad 16. Crea un programa que contenga un bucle sin fin que muestra el mensaje "Hola" con alert. Cuando llegue a 10 vueltas, se detendrá.  */
function Ej16() {
  let contador = 1;

  while (true) {
    alert("Hola");
    contador++;

    if (contador > 10) {
      break;
    }
  }
}
