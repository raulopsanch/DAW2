function ej05() {
    const dni = prompt("Introduce tu dni: ")

    if (dni.length() < 10) {
        "0".repeat(10 - dni.length())
    } 
}

ej05()