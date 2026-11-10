<?php
    /* De forma aleatoria, obtén 10 nombres de personas, y otro con 10 apellidos.  Crea un array asociativo con los nombres y apellidos, y muéstralo por pantalla, indicando el nombre y apellido de cada persona */

    $nombres = ["Raúl", "Cris", "Guada", "Javi", "Nana", "José", "Samuel", "Yoli", "isma", "Rebeca"];
    $apellidos = ["López", "Pizarro", "Rosas", "García", "Núñez", "Pinto", "Gutierrez", "Durán", "Aguza", "Martínez"];
    $resultado = [];

    for ($i = 0; $i < count($nombres); $i++) {
        $resultado[$nombres[$i]] = $apellidos[$i];
    }

    foreach($resultado as $nombre => $apellido) {
        echo $nombre . " " . $apellido . "<br />";
    }    
?>