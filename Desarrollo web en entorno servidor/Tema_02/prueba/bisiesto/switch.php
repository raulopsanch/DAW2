<?php
    $mes = rand(1, 12);
    $año = rand(1, 2026);

    switch ($mes) {
        case 1:
            echo "Enero tiene 31 días y es el año $año";
            break;
        case 2:
            include"bisiesto.php";
            break;
        case 3:
            echo "Marzo tiene 31 días y es el año $año";
            break;
        case 4:
            echo "Abril tiene 30 días y es el año $año";
            break;
        case 5:
            echo "Mayo tiene 31 días y es el año $año";
            break;
        case 6:
            echo "Junio tiene 30 días y es el año $año";
            break;
        case 7:
            echo "Julio tiene 31 días y es el año $año";
            break;
        case 8:
            echo "Agosto tiene 31 días y es el año $año";
            break;
        case 9:
            echo "Septiembre tiene 30 días y es el año $año";
            break;
        case 10:
            echo "Octubre tiene 31 días y es el año $año";
            break;
        case 11:
            echo "Noviembre tiene 30 días y es el año $año";
            break;
        case 12:
            echo "Diciembre tiene 31 días y es el año $año";
            break;
    }
?>