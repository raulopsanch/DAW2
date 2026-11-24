/**
 * 
 * @param {HTMLElement} boton 
 */

function detalle(boton) {
    const tarea = boton.parentElement
    alert(`Tarea: ${tarea.querySelector("span").textContent}`)

    const anterior = tarea.previousElementSibling
    if (anterior) {
        alert(`Tarea anterior: ${anterior.textContent}`)
    } else {
        alert(`No hay tarea anterior`)
    }

    const total = tarea.querySelectorAll("").length
    alert(total);
}