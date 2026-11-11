let animalesEnArca = [
  { nombre: "León", tipo: "carnívoro", sexo: "macho" },
  { nombre: "León", tipo: "carnívoro", sexo: "hembra" },
  { nombre: "Elefante", tipo: "herbívoro", sexo: "macho" },
  { nombre: "Elefante", tipo: "herbívoro", sexo: "hembra" },
  { nombre: "Delfín", tipo: "acuático", sexo: "macho" },
  { nombre: "Delfín", tipo: "acuático", sexo: "hembra" },
  { nombre: "Tigre", tipo: "carnívoro", sexo: "macho" },
  { nombre: "Jirafa", tipo: "herbívoro", sexo: "hembra" },
  { nombre: "Cebra", tipo: "herbívoro", sexo: "macho" },
  { nombre: "Tiburón", tipo: "acuático", sexo: "hembra" },
];

let curiosidades = [
  "Este animal será el encargado de dar la bienvenida hoy a los nuevos visitantes.",
  "¡Este animal ha ganado una ración extra de comida!",
  "Este animal será el primero en salir del arca cuando llegue el momento.",
  "Este animal tendrá el mejor camarote del arca hoy.",
  "Este animal liderará el paseo matutino por la cubierta.",
];

let posiblesFechasDiluvio = [
  "15/03/2026",
  "22/06/2026",
  "10/09/2026",
  "25/03/2026",
  "01/06/2026",
];

function filtrarPorTipo(tipo) {
  return animalesEnArca.filter((animal) => animal.tipo === tipo);
}

function ejercicio1() {
  let tipo = prompt(
    "Ingrese el tipo de animal a filtrar (carnívoro(C), herbívoro(H), acuático(A)): ",
  ).toLowerCase();

  if (!tipo) {
    alert("Error. No hay un tipo de animal");
    return;
  }

  let tipoIngresado = tipo.trim().toLowerCase();
  let tipoBuscado = "";

  switch (tipoIngresado) {
    case "a":
      tipoBuscado = "acuático";
      break;
    case "c":
      tipoBuscado = "carnívoro";
      break;
    case "h":
      tipoBuscado = "herbívoro";
      break;
    default:
      tipoBuscado = tipoIngresado;
      break;
  }

  let encontrados = filtrarPorTipo(tipoBuscado);

  if (encontrados.length > 0) {
    let nombres = encontrados.map((animal) => animal.nombre).join("\n");
    alert(nombres);
  } else {
    alert("No hay animales de ese tipo");
  }
}

function ejercicio2() {
  let nombreInput = prompt("Introduce el nombre del animal: ");
  let tipoInput = prompt("Introduce el tipo del animal: ");
  let sexoInput = prompt("Introduce el sexo del animal: ");

  let animalEncontrado = animalesEnArca.find(
    (animal) =>
      animal.nombre.toLowerCase() === nombreInput.trim().toLowerCase() &&
      animal.sexo === sexoInput.trim().toLowerCase(),
  );

  if (animalEncontrado) {
    alert("Ya existe un animal con ese nombre y ese sexo");
  } else {
    let nuevoAnimal = {
      nombre: nombreInput.trim(),
      tipo: tipoInput.trim(),
      sexo: sexoInput.trim(),
    };

    animalesEnArca.push(nuevoAnimal);
    alert("¡Animal añadido con éxito al arca!");
  }

  /* let existe = false;

  for (animal of animalesEnArca) {
    if (
      animal.nombre.toLowerCase() === nombreInput.trim().toLowerCase() &&
      animal.sexo.toLowerCase() === sexoInput.trim().toLowerCase()
    ) {
      existe = true;
      break;
    }
  }
  if (existe) {
    alert("Ya existe un animal con ese nombre y ese sexo");
  } else {
    let nuevoAnimal = {
      nombre: nombreInput.trim(),
      tipo: tipoInput.trim(),
      sexo: sexoInput.trim(),
    };

    animalesEnArca.push(nuevoAnimal);
    alert("¡Animal añadido con éxito al arca!");
  } */
}

function ejercicio3() {
  let indiceAnimal = Math.floor(Math.random() * animalesEnArca.length);
  let animal = animalesEnArca[indiceAnimal];

  let indiceCuriosidad = Math.floor(Math.random() * curiosidades.length);
  let curiosidadAleatoria = curiosidades[indiceCuriosidad];

  let mensaje = `<h3>🐾 Animal Aleatorio Seleccionado:</h3>`;
  mensaje += `<p> <strong>Nombre:</strong> ${animal.nombre}</p> `;
  mensaje += `<p> <strong>Tipo:</strong> ${animal.tipo}</p > `;
  mensaje += `<p> <strong>Sexo:</strong> ${animal.sexo}</p > `;
  mensaje += `<p> <em>Curiosidad:</em> ${curiosidadAleatoria}</p > `;

  document.querySelector("#rdo").innerHTML = mensaje;
}

function ejercicio4() {
  const diasDemora = 146;
  let mensaje = "<h3>🌧️ Preparándonos para el Próximo Diluvio:</h3>";
  let fechasCorregidas = [];

  for (let fechaStr of posiblesFechasDiluvio) {
    let partes = fechaStr.split("/");
    let fechaOriginal = new Date(partes[2], partes[1] - 1, partes[0]);

    fechaOriginal.setDate(fechaOriginal.getDate() + diasDemora);

    if (fechaOriginal.getDay() === 0) {
      fechaOriginal.setDate(fechaOriginal.getDate() + 1);

      mensaje += `<p>La fecha ${fechaOriginal.toLocaleDateString()} de diluvio cae en domingo. Se ha ajustado al lunes siguiente</p>`;
    }

    fechasCorregidas.push(fechaOriginal.toLocaleDateString());
  }

  document.querySelector("#rdo").innerHTML = mensaje;

  alert(fechasCorregidas.join("\n"));
}
