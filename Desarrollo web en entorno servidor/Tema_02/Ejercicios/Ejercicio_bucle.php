<?php

    $suma = 0;
    $sumaPares = 0;
    $sumaImpares = 0;
    $sumaMultiplos5 = 0;

    for ($i = 1; $i <= 100; $i++) {
        if ($i % 2 == 0) {
            $sumaPares += $i;
        }

        if ($i % 2 == 1) {
            $sumaImpares += $i;
        }

        if ($i % 5 == 0) {
            $sumaMultiplos5 += $i;
        }

        $suma += $i; 
    }

    echo "La suma total de los números del 1 al 100 es: $suma <br />";
    echo "La suma de los números pares es: $sumaPares <br />";
    echo "La suma de los números impares es: $sumaImpares <br />";
    echo "La suma de los múltiplos de 5 es: $sumaMultiplos5 <br />";
    
?>