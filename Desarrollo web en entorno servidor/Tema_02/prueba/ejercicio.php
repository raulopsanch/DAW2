<?php
    $num1 = rand(0, 50);
    $num2 = rand(0, 50);
    $num3 = rand(0, 50);
    $num4 = rand(0, 50);

    echo "Número 1: " . $num1 . "<br />";
    echo "Número 2: " . $num2 . "<br />";
    echo "Número 3: " . $num3 . "<br />";
    echo "Número 4: " . $num4 . "<br />";
    echo "<br />";
    echo "<br />";

    if (($num1 > $num2) && ($num1 > $num3) && ($num1 > $num4)) {
        echo $num1 . " es el mayor de los cuatro números";
    } elseif (($num2 > $num1) && ($num2 > $num3) && ($num2 > $num4)) {
        echo $num2 . " es el mayor de los cuatro números";
    } elseif (($num3 > $num1) && ($num3 > $num2) && ($num3 > $num4)) {
        echo $num3 . " es el mayor de los cuatro números";
    } else {
        echo $num4 . " es el mayor de los cuatro números";
    }

    echo "<br />";
    echo "<br />";
    echo "Números ordenados de mayor a menor";

    if (($num1 > $num2) && ($num1 > $num3) && ($num1 > $num4) && ) {
        echo $num1 . " es el mayor de los cuatro números";
    } elseif (($num2 > $num1) && ($num2 > $num3) && ($num2 > $num4)) {
        echo $num2 . " es el mayor de los cuatro números";
    } elseif (($num3 > $num1) && ($num3 > $num2) && ($num3 > $num4)) {
        echo $num3 . " es el mayor de los cuatro números";
    } else {
        echo $num4 . " es el mayor de los cuatro números";
    }
?>