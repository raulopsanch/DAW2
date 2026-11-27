function ejecutar() {
    let rdo = "";
    const productos = document.querySelectorAll(".producto");

    productos.forEach((producto) => {
        const nombre = producto.dataset.nombre;
        const id = producto.dataset.id;
        const precio = producto.dataset.precio;
        const stock = producto.dataset.stock;

        rdo += `Producto: ${nombre}\n`;
        rdo += `ID: ${id}\n`;
        rdo += `Precio: ${precio}\n`;
        rdo += `Stock: ${stock}\n`;
        rdo += "\n";

        if (stock == 0) {
            producto.classList.add("sin-stock");
            producto.setAttribute("disponible", false);
            producto.querySelector("p:last-of-type").textContent = "AGOTADO";
        } else {
            producto.setAttribute("disponible", true);
        }

        if (precio < 500) {
            producto.classList.add("oferta");
            producto.setAttribute("esOferta", true);
        }
    });
    alert(rdo);
}
