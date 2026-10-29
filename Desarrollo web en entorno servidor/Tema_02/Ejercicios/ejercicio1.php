<?php
    // dado un número de 3 cifra sumar cada uno de los dígitos de dicho número

    /* $num = 528;
    $result = 0; */

    
?>

<?php
    //Poner el número del revés

    //$num = 1587;
    //$result = 0;

    /* for ($i = $num.length(); $i > 0; $i--) {
        $result += $num[$i] + "";
    }
    echo $resutl; */
?>

<?php
    // averiguar si un número es primo

    /* $num = rand(1, 1000);
    echo "$num <br/ >";

    if ($num == 1) {
        echo "No es primo";
    } elseif ($num <= 3) {
        echo "Es primo";
    } elseif ($num / 2 == 0) {
        echo "No es primo";
    }

    $limite = sqrt($num);

    for ($i = 5; $i <= $limite; $i++) {
        if ($num % $i == 0) {
            echo "No es primo";
            break;
        } else {
            echo "Es primo";
            break;
        }
    } */
?>

<?php
    // Mostrar los números primos entre 1 y 1000
    echo "1, 2, 3, 7, 11, ";
    
    for ($i = 13; $i <= 1000; $i++) {
        if ($i % 2 != 0 || $i % 3 != 0 $i % 7 != 0 || $i % 11 != 0) {
            echo "$i ";
        }
    }
?>