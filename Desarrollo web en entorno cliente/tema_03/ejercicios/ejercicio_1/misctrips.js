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

    alert(`\nPrimer elemento: ${elementosLi[0].textContent}`);
    alert(`\núltimo elemento: ${elementosLi[elementosLi.length -1 ].textContent}`);

    rdo = "";
    const urgentes = document.querySelectorAll(".urgente li");
    urgentes.forEach(urgente => {
        rdo += `URGENTE: ${urgente.textContent}`;
    })
    alert(rdo);

}