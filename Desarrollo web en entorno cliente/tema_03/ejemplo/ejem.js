function mostrarOcultar() {
    const productos = ["silla", "Mesa", "Sofá", "Patines", "Coche"];
    const template = document.querySelector("#template-producto");
    const rdo = document.querySelector("#resultado");

    for (const producto of productos) {
        const clon = template.textContent.clonNode(true);
        clon.querySelector(".nombre").textContent = producto;
        clon.querySelector(".precio").textContent = "50#";
    }

    rdo.append(clon);
}
