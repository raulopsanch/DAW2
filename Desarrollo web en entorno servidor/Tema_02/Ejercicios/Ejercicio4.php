<?php
    $a = 20;
    $b = 5;
    $op = "+";

    $result = match ($op) {
        "+" => $a + $b,
        "-" => $a - $b,
        "x" => $a * $b,
        "/" => $b == 0 ? $a / $b : "Error: no se puede dividir entre 0",
        default => "Operador no válido"
    };

    echo "$a $op $b = $result";
?>