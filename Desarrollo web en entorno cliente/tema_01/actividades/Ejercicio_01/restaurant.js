let precio = parseFloat(prompt("Introduce el importe de la cuenta: "))

let propina = parseFloat(prompt("Introduce el porcentaje de propina: "))

let cuenta = precio + (precio * propina / 100)

let respuesta = confirm("¿Quieres mostrar la cuenta?")

if (respuesta) {
    alert(cuenta)
} else {
    console.log("Cálculo cancelado")
}
