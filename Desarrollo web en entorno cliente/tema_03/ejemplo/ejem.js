function mostrarOcultar() {
    const template = document.querySelector("#template-producto");

    const clon = template.textContent.clonNode(true);

    clon.querySelector(".nombre").textContent = "Silla";

    clon.querySelector(".precio").textContent = "45.75€";
}
