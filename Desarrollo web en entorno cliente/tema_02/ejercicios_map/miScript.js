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