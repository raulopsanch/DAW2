<?php
    echo "Nombre: " . $_GET["nombre"] . "<br />";
    echo "Apellidos: " . $_GET["apellidos"] . "<br />";
    echo "Edad: " . $_GET["edad"] . "<br />";
    echo "Estado civil: " . $_GET["estado"] . "<br />";
    echo "Deporte/s favorito/s: "; 

    $deportes = $_GET["deportes[]"];

    if ($deportes != "") {
        foreach($deportes as $key => $value) {
            echo $value . " ";
        }
    } else {
        echo "No hay deportes favoritos";
    }
?>