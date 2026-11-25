function ejecutar() {
    /* Muestra el primer elemento de los elementos "li" */
    alert(document.querySelector("li").textContent)

    /* Muesta el elemento 3, índice 2 de los elementos "li" */
    alert(document.querySelectorAll("li")[2].textContent)

    /* Primer elemento frutas y primer elemento verdura */
    const fruta = document.querySelector("#frutas li")
    alert(`Primera fruta: ${fruta.textContent}`)

    const verdura = document.querySelector("#verduras li")
    alert(`Primera verdura: ${verdura.textContent}`)

    const elementosLi = document.querySelectorAll("#frutas li");
    let rdo = ""

    elementosLi.forEach(function(elemento, indice) {
        rdo += `${indice + 1}.- ${elemento.textContent}\n`
    });
    alert(rdo)

    /* Totales */
    const totalLi = document.querySelectorAll("li").length
    alert(`Total de elementos "li": ${totalLi}`)

    const totalOferta = document.querySelectorAll("li.oferta").length
    alert(`Total de elementos "li" con clase "oferta": ${totalOferta}`)

    const totalOfertaFrutas = document.querySelectorAll("#frutas li.oferta").length
    alert(`Total de frutas con oferta: ${totalOfertaFrutas}`)

    const totalOfertaverduras = document.querySelectorAll("#verduras li.oferta").length
    alert(`Total de verduras con oferta: ${totalOfertaverduras}`)
    
    const seccionCarnes = document.querySelectorAll("#carnes")

    const mensaje = seccionCarnes?.textContent ?? "La sección no existe";

    alert(mensaje);
}