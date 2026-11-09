<?php
   /*  Teniendo el siguiente array: $array = [1, 2, 4, 5, 6, 7, 8, 9];
            Agrega el número 10 al final del array y muestra el resultado.
            Agrega el número 0 al principio del array y muestra el resultado.
            Agrega el número 11 en la posición 3 del array y muestra el resultado.
            Reemplaza el número en la posición 5 por el número 50 y muestra el resultado. */
    


    $array = [1, 2, 4, 5, 6, 7, 8, 9];

    echo "Agrega el número 10 al final del array y muestra el resultado.<br />";
    $array[] = 10;
    foreach( $array as $numero ) {
        echo $numero . "<br/>";
    }

    echo "<p></p>";

    echo "Agrega el número 0 al principio del array y muestra el resultado.<br />";
    array_unshift($array, 0);
    foreach( $array as $numero ) {
        echo $numero . "<br/>";
    }

    echo "<p></p>";

    echo "Agrega el número 11 en la posición 3 del array y muestra el resultado.<br />";
    array_splice($array, 2, 0, 11);
    foreach( $array as $numero ) {
        echo $numero . "<br/>";
    }

    echo "<p></p>";

    echo "Reemplaza el número en la posición 5 por el número 50 y muestra el resultado.<br />";
    $array[4] = 50;
    foreach( $array as $numero ) {
        echo $numero . "<br/>";
    }
?>