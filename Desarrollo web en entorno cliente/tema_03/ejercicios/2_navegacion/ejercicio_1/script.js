/**
 * 
 * @param {HTMLElement} boton 
 */
function añadir(boton) {
    const producto = boton.closest(".producto");
    const nombre = producto.querySelector("h3").textContent
    const precio = producto.querySelector(".precio").textContent
    alert(`Añadido: ${nombre}: ${precio}`);

    const categoria = boton.closest(".categoria")
    const titulo = categoria.firstElementChild.textContent
    // const titulo2 = categoria.querySelector("h2").textContent
    alert(titulo)

    const total = producto.querySelectorAll(".producto").length
    alert(total);

    
}