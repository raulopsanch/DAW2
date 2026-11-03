class Persona {
  #nombre;
  #apellidos;
  #direccion;
  #ciudad;
  constructor(nombre, apellidos, direccion, ciudad) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#direccion = direccion;
    this.#ciudad = ciudad;
  }

  get ciudad() {
    return this.#ciudad;
  }

  set ciudad(nuevo) {
    if (nuevo != "zafra") {
      alert("Error");
      return;
    }
    this.#ciudad = nuevo;
  }
}
function ejemplo() {
  const p1 = new Persona("Pepe", "López", "mi calle", "Zafra");

  p1.ciudad = "Badajoz";
}
