function ejercicio1() {
    const elementosLi = document.querySelectorAll("#lista li");
    let rdo = "";

    /* for (let i = 0; i < elementosLi.length; i++) {
        rdo += `${i + 1}. ${elementosLi[i].textContent}\n`;
    } */

    /* 1. Selecciona todos los li de la lista y recórrelos con un bucle for clásico mostrando 1. 
    Leche, 2. Pan, etc en un alert. (el número es el índice más 1). */
    elementosLi.forEach(function (elemento, indice) {
        rdo += `${indice + 1}. ${elemento.textContent}\n`;
    })
    alert(rdo);

    /* 2. Muestra el primer y el último elemento usando índices. Para el último no escribas el número a mano: calcúlalo con length. */
    alert(`\nPrimer elemento: ${elementosLi[0].textContent}`);
    alert(`\núltimo elemento: ${elementosLi[elementosLi.length -1 ].textContent}`);

    rdo = "";
    /* 3. Selecciona los elementos con clase urgente y recórrelos con forEach mostrando 
    URGENTE: Pan. */
    const urgentes = document.querySelectorAll(".urgente");
    urgentes.forEach(urgente => {
        rdo += `URGENTE: ${urgente.textContent}\n`;
    })
    alert(rdo);

    rdo = "";
    /* 4. Selecciona los elementos con clase caducado (no existe ninguno) y, usando length, muestra “No hay productos caducados”. Repite la comprobación con querySelector y explica en qué se diferencia lo que devuelve cada método cuando no encuentran nada. */
    const caducadosLista = document.querySelectorAll(".caducado");

    if (caducadosLista.length === 0) {
        rdo = "No hay productos caducado";
    }
    alert(rdo);
}