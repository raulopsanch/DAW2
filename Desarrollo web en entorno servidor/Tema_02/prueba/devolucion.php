<?php
    $importe = rand(1, 100);
    echo "Importes: " . $importe;
    echo "<br>";

    $monedas50 = intdiv($importe, 50);
    $resto = $importe % 50;

    $monedas20 = intdiv($resto, 20);
    $resto %= 20;

    $monedas10 = intdiv($resto, 10);
    $resto %= 10;

    $monedas5 = intdiv($resto, 5);
    $resto %= 5;

    $monedas2 = intdiv($resto, 2);
    $resto %= 2;

    $monedas1 = $resto;


    echo "Monedas de 50 céntimos: " . $monedas50 . "<br>";  
    echo "Monedas de 20 céntimos: " . $monedas20 . "<br>";
    echo "Monedas de 10 céntimos: " . $monedas10 . "<br>";
    echo "Monedas de 5 céntimos: " . $monedas5 . "<br>";
    echo "Monedas de 2 céntimos: " . $monedas2 . "<br>";
    echo "Monedas de 1 céntimo: " . $monedas1 . "<br>";


?>