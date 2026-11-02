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

let fecha = new Date();

function agregarFilaTabla(textoMensaje, textoResultado) {
  let fila = document.createElement("tr");

  let tdMensaje = document.createElement("td");
  tdMensaje.textContent = textoMensaje;

  let tdResultado = document.createElement("td");
  tdResultado.textContent = textoResultado;

  let tdFecha = document.createElement("td");
  tdFecha.textContent = fecha.toLocaleString();

  fila.appendChild(tdMensaje);
  fila.appendChild(tdResultado);
  fila.appendChild(tdFecha);

  let tbody = document.getElementById("cuerpoTabla");
  if (tbody) {
    tbody.appendChild(fila);
  }
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

  agregarFilaTabla(
    `Mensaje: ${mensaje}`,
    `Codificado como: ${codificadoFinal}`,
  );
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
  agregarFilaTabla(
    `Mensaje: ${mensajeCodificado}`,
    `Decodificado como: ${mensajeDecodificado}`,
  );
}
