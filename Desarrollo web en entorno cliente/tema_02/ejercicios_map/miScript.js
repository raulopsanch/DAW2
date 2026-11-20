function ej1() {
    const ventas = [
        { producto: "Teclado", unidades: 3 },
        { producto: "Ratón", unidades: 5 },
        { producto: "Monitor", unidades: 2 },
        { producto: "Teclado", unidades: 4 },
        { producto: "Ratón", unidades: 1 },
        { producto: "Cable HDMI", unidades: 10 },
        { producto: "Monitor", unidades: 1 },
        ];        
    let totales = new Map();

    for (const venta of ventas) {
        const nombreProducto = venta.producto;
        
        if(totales.has(nombreProducto)) {
            let cantidad = totales.get(nombreProducto);
            totales.set(nombreProducto, cantidad + venta.unidades);
        } else {
            totales.set(nombreProducto, venta.unidades);
        }
    }

    let result = "";
    for (const [producto, unidades] of totales) {
        result += `${producto} -> ${unidades} unidades vendidas\n`;
    }

    alert(result);

    //productos distintos
    alert(`Productos distintos: ${totales.size}`);

    // Producto más vendido
    let mejorProducto = "";
    let mayorUnidades = 0;

    for (const [producto, unidades] of totales) {
        if (unidades > mayorUnidades) {
            mejorProducto = producto;
            mayorUnidades = unidades;
        }
    }

    alert(`${mejorProducto}: ${mayorUnidades} unidades`);

    // comprobar impresora y ver ratón
    alert(totales.has("Impresora") ? "Impresora se ha vendido" : "Impresora no se ha vendido");

    alert(`Ventas de ratón: ${totales.get("Ratón")} unidades`);

}

// Ejercicio Map 2
const carrito = new Map();

function añadir(id, nombre, precio) {
    let clave = Number(id);

    if (carrito.has(clave)) {
        let producto = carrito.get(clave);
        producto.cantidad += 1;
    } else {
        carrito.set(clave, {
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
}

function quitar(id) {
    const clave = Number(id);
    
    return carrito.delete(clave);
}

function resumen() {
    let result = "";
    for (const producto of carrito.values()) {
        let subTotal = producto.cantidad * producto.precio;
        result += `${producto.cantidad} x ${producto.nombre} = ${subTotal} €\n`;
    }
    alert(result);
}

function añadirInteractivo() {
    let id = prompt("ID del producto: ");

    if (!id) return;

    let clave = Number(id);

    let existente = carrito.get(clave);
    let nombre = existente ? existente.nombre : prompt("Nombre del producto: ");
    let precio = existente ? existente.precio : Number(prompt("Precio del producto: "));

    if (nombre && !Number.isNaN(precio)) {
        añadir(clave, nombre, precio);
        alert("Producto añadido");
    } 
}

function quitarInteractivo() {
    let id = prompt("ID del producto: ");

    if (!id) return;

    let eliminado = quitar(id);
    alert(eliminado ? "Producto eliminado" : "No existe el producto");
}



/* añadir(101, "Teclado", 45);  
añadir(205, "Ratón", 19);
añadir(101, "Teclado", 45);
añadir(330, "Monitor", 149);*/
