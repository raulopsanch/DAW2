function Ej1() {
  let cadena = prompt("Introduce el texto: ");
  alert(`El texto tiene ${cadena.length} caracteres`);
}

function Ej2() {
  let pwd = prompt("Introduce la clave: ").toLowerCase();

  if ("secreta" == pwd) {
    alert("Has acertado");
  } else {
    alert("No es correcta");
  }
}

function Ej3() {
  const cadena = "hola que tal yo bien";

  alert(cadena.substring(cadena.indexOf("t")));
}

function Ej4() {
  let dni = prompt("Introduce tu DNI: ");

  if (dni.length < 7) {
    let cerosFaltantes = 8 - dni.length;
    dni = "0".repeat(cerosFaltantes) + dni;
  }

  alert(dni);
}


function Ej5() {
    let cadena = prompt("Introduce un texto: ")

    alert(`La cadena tiene ${cadena.split(" ").length} palabras`)
}
