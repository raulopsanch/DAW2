<?php
    $numero = rand(100,999);

    $centena = (int)($numero / 100);
    $unidades = $numero % 10;

    if ($centena === $unidades) {
        echo $numero . " es capicúa";
    } else {
        echo $numero . " no es capicúa";
    }
?>