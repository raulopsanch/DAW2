function Ej1() {
  let num = parseInt(prompt("Introduce un número: "));

  alert(`${num} es ${num % 2 == 0 ? "par" : "impar"}`);
}

function Ej2() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(`${num1} es ${num1 > num2 ? "es mayor" : "es menor"}`);
}

function Ej3() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(
    `${num1} ${num1 % num2 == 0 ? " es múltipo" : " no es múltiplo "} de ${num2}`);
}

function Ej4() {
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  alert(`${num2 != 0 ? num1 / num2 : "No se puede dividir por 0"}`);
}

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

function Ej7() {
  let mensaje = "";
  for (let i = 1; i < 51; i++) {
    if (i % 3 == 0) {
      mensaje += i + ", ";
    }
  }
  alert(mensaje);
}

function Ej8() {
  let mensaje = "";
  for (let i = 100; i < 201; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
      mensaje += i + ", ";
    }
  }
  alert(mensaje);
}

function Ej9() {
  let mensaje = "";

  for (let i = 0; i < 11; i++) {
    mensaje += 9 + " X " + i + "= " + 9 * i + "\n";
  }
  alert(mensaje);
}

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


function Ej11() {
  let mensaje = "";
  
  for (let i = 15; i >= 5; i--) {
    mensaje += i + " ";
  }

  alert(mensaje);
}


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
    }

    if (intentos == 3) {
      alert("Usuario o contrasña incorrectos");
    }
  }
}


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

function Ej17() {
  let contador = 1;

  while (true) {
    alert("Hola");
    contador++;

    if (contador > 10) {
      break;
    }
  }
}