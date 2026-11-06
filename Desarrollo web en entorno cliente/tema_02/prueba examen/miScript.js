let letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
];

function verFecha() {
  let fecha = new Date();

  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();
  let hora = fecha.getHours();
  let minuto = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  return `${dia} - ${mes} - ${año} --- ${hora}:${minuto}:${segundos}`;
}

function codificar() {
  let mensaje = prompt("Introduce un mensaje para codificar (solo letras): ");

  let resultadoCodificado = [];

  if (!mensaje) return;

  for (let i = 0; i < mensaje.length; i++) {
    let caracter = mensaje[i].toUpperCase();

    let posicion = letras.indexOf(caracter);

    if (posicion === -1) {
      alert(`El carácter "${mensaje[i]} no se puede codificar.`);
      return;
    }

    resultadoCodificado.push(posicion);
  }

  let codificadoFinal = resultadoCodificado.join("-");

  document.querySelector("#contenedor").innerHTML +=
    `<p>Mensaje: ${mensaje}&nbsp;&nbsp;&nbsp;&nbsp;Codificado/Decodificado: ${codificadoFinal}&nbsp;&nbsp;&nbsp;&nbsp;Fecha: ${verFecha()}</p>`;
}

function decodificar() {
  let mensajeCodificado = prompt(
    "Introduce un mensaje codificado (números separados por guiones): ",
  );
  if (!mensajeCodificado) return;

  let partes = mensajeCodificado.split("-");
  let mensajeDecodificado = "";

  for (let i = 0; i < partes.length; i++) {
    let valor = partes[i];
    let indice = parseInt(valor);

    if (isNaN(indice) || indice < 0 || indice >= letras.length) {
      alert(`El valor "${valor}" no es válido para decodificar.`);
      return;
    }
    mensajeDecodificado += letras[indice];
  }

  document.querySelector("#contenedor").innerHTML +=
    `<p>Mensaje: ${mensajeCodificado}&nbsp;&nbsp;&nbsp;&nbsp;Codificado/Decodificado: ${mensajeDecodificado}&nbsp;&nbsp;&nbsp;&nbsp;Fecha: ${verFecha()}</p>`;
}
b;
