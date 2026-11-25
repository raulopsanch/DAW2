function responder(pregunta) {
    const preguntas = document.querySelectorAll("#faq h3")
    const indice = Array.from(preguntas).indexOf(pregunta)
    const respuesta = pregunta.nextElementSibling

    alert(`Pregunta: ${pregunta.textContent}`)
    alert(`Respuesta: ${respuesta.textContent}`)

    if(indice < preguntas.length - 1){
        alert(`Siguiente pregunta: ${preguntas[indice+1].textContent}`)
    } else {
        alert("Es la última pregunta")
    }

    alert(`Preguntas en total: ${preguntas.length}`)
}