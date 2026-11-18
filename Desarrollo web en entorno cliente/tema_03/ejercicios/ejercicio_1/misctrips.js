function ejercicio1() {
    const elementosLi = document.querySelectorAll("#lista li");
    let rdo = "";

    /* for (let i = 0; i < elementosLi.length; i++) {
        rdo += `${i + 1}. ${elementosLi[i].textContent}\n`;
    } */

    elementosLi.forEach(function (elemento, indice) {
        rdo += `${indice + 1}. ${elemento.textContent}\n`;
    })
   alert(rdo);
}