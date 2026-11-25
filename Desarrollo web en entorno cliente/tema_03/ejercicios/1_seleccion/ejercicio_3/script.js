function ejecutar() {
    /* 1. Selecciona todas las celdas con clase nota, recórrelas con for...of o forEach y calcula 
    la media. Recuerda que textContent devuelve texto, así que conviértelo con Number(). 
    Muéstrala con dos decimales en un alert.
    */
    const celdaNotas = document.querySelectorAll(".nota")
    let suma = 0;

    for (const nota of celdaNotas) {
        suma += Number(nota.textContent)
    }
    
    const media = suma / celdaNotas.length
    alert(`La nota media es: ${media.toFixed(2)}`)

    /* 2. Selecciona también las celdas alumno. Como ambas listas tienen el mismo orden, recórrelas con un for clásico o forEach y usa el mismo índice en las dos para mostrar Ana: 7.5…. (en un solo alert). */
    const alumnos = document.querySelectorAll(".alumno")
    const notas = document.querySelectorAll(".nota")

    let rdo = ""
    for(let i = 0; i < alumnos.length; i++) {
        rdo += `${i + 1}.- ${alumnos[i].textContent}: ${notas[i].textContent}\n`
    }
    alert(rdo)

    /* 3. Encuentra la nota más alta y muestra el nombre de quien la ha sacado. */
    let notaMax = notas[0].textContent
    let alumnoMax = alumnos[0].textContent

    for (let i = 1; i < notas.length; i++) {
        let notaActual = Number(notas[i].textContent)

        if (notaActual > notaMax) {
            notaMax = notaActual
            alumnoMax = alumnos[i].textContent
        }
    }

    alert(`La nota más alta la tiene: ${alumnoMax}`)

    /* 4. Cuenta cuántos alumnos han aprobado (nota igual o superior a 5) y muestra Aprobados: X de Y. */
    let aprobados = 0

    for (const celda of notas) {
        if (Number(celda.textContent) >= 5) {
            aprobados++;
        }
    }
    alert(`Aprobados: ${aprobados} de ${notas.length}`)

    /* 5. Reto: muestra una línea por alumno (en un solo alert) con el formato Marta: 9 (Aprobado) o Luis: 4.2 (Suspenso), usando plantillas literales y un operador 
    ternario. */
    rdo = ""
    for (let i = 0; i < notas.length; i++) {
        const nombre = alumnos[i].textContent
        const nota = Number(notas[i].textContent)
        

        const estado = nota >= 5 ? "(Aprobado)" : "(Suspenso)"

        rdo += `${nombre}: ${nota} ${estado}\n`
    }
    alert(rdo)
}