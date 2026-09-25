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
  let i = 0;
  let n = 0;
  let mensaje = "";

  while (i) {
    if (n % 2 == 0) {
      mensaje += i + ", ";
    }
    n++;
    i++;
  }
  alert(mensaje);
}
