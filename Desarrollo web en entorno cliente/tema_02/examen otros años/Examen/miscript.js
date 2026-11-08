function ejercicio1() {
  let cadena =
    "fdsasVo14j1l1ettn567fsgrtboa iuyqverfvkiuarwqlkllkfe,iiuo prrraytqeersrra rrqearewl rrresghjiwsssgffuifdsafsernkjgtffbce 5555ejlkjjfmgettbrjjccdxi-l*ccopirtyo";
  let codificacion =
    "5-13-16-22-27-28-33-41-45-51-52-57-58-62-69-72-73-78-82-83-88-92-97-100-101-108-110-114-119-120-125-129-134-138-141-145-149-153-157";

  let posiciones = codificacion.split("-");
  let mensajeOculto = "";

  for (let i = 0; i < posiciones.length; i++) {
    let indice = parseInt(i);

    mensajeOculto += cadena.charAt(indice);
  }

  alert(`El mensaje oculto es: ${mensajeOculto}`);
}

function ejercicio2() {
  let deudas = [
    "Pedro:21/01/2024",
    "Luis:15/02/2024",
    "Antonio:04/04/2024",
    "Maria:05/06/2024",
    "Rafael:16/07/2024",
  ];
  let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let result = "";

  for (let i = 0; i < deudas.length; i++) {
    let partes = deudas[i].split(":");
    let nombre = partes[0];
    let fechaPartes = partes[1].split("/");

    let dia = parseInt(fechaPartes[0]);
    let mes = parseInt(fechaPartes[1] - 1);
    let anho = parseInt(fechaPartes[2]);

    let fecha = new Date(anho, mes, dia);

    fecha.setDate(fecha.getDate() + 15);
    fecha.setMonth(fecha.getMonth() + 1);

    if (fecha.getDay === 0) {
      fecha.setDate(fecha.getDate() + 1);
    }

    let nuevoDia = String(fecha.getDate()).padStart(2, "0");
    let nuevoMes = String(fecha.getMonth() + 1).padStart(2, "0");
    let nuevoAnho = fecha.getFullYear();

    let fechaFormateada = `${nuevoDia}/${nuevoMes}/${nuevoAnho}`;
    let nombreDiaSemana = semana[fecha.getDay()];

    result += `<p>${nombre}: Le caduca la deuda el ${nombreDiaSemana} con fecha ${fechaFormateada}</p>`;
  }
  document.querySelector("#resultado").innerHTML = result;
}

function ejercicio3() {
  let primerDigito = Math.floor(Math.random() * (7 - 6 + 1)) + 6;
  let tlfn = "";

  for (let i = 0; i < 4; i++) {
    let numsAleatorio = Math.floor(Math.random() * (99 - 0 + 1)) + 0;

    let bloqueFormateado = String(numsAleatorio).padStart(2, "0");

    tlfn += bloqueFormateado;
  }
  let numCompleto = primerDigito + tlfn;

  document.querySelector("#resultado").innerHTML += `<p>${numCompleto}</p>`;
}
