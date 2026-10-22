<?php
    $nota = 6;
    echo "Nota: " . $nota;
    echo "<br />";
    echo "Calificación: ";

    switch (true) {
        case ($nota >= 0 && $nota < 5):
            echo "F";
            break;
        case ($nota >= 5 && $nota < 6):
            echo "D";
            break;
        case ($nota >= 6 && $nota < 7):
            echo "C";
            break;
        case ($nota >= 7 && $nota < 9):
            echo "B";
            break;
        case ($nota >= 9 && $nota <= 10):
            echo "A";
            break;
        default:
            echo "Error: nota inválida";

    }
    echo "<br/>";

    $result = match (true) {
        $nota >= 0 && $nota < 5 => "F",
        $nota >= 5 && $nota < 6 => "D",
        $nota >= 6 && $nota < 7 => "C",
        $nota >= 7 && $nota < 9 => "B",
        $nota >= 9 && $nota <= 10 => "A",
        default => "Error nota inválida"
    };

    echo "Calificación: " . $result;
?>