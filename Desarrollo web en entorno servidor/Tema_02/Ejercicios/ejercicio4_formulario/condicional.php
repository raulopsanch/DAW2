<?php
    $nombre = $_GET["nombre"];
    $edad = $_GET["edad"];

    echo "Nombre: " . $nombre . " --- Edad: " . $edad . " años";

    switch (true) {
        case $edad > 0 && $edad < 5:
            echo "Primera infancia";
            break;
        case $edad > 5 && $edad <= 11:
            echo "Infancia";
            break;
        case $edad > 11 && $edad < 18:
            echo "Adolescencia";
            break;
        case $edad > 17 && $edad < 17:
            echo "Juventud";
            break;
        case $edad > 26 && $edad < 60:
            echo "Adultez";
        case $edad > 59:
            echo "Persona mayor";
            break;
        default:
            echo "Edad inválida";
            break;
    }
    
    echo '<a href= "index.html">Volver a la página anterior</a>'
?>