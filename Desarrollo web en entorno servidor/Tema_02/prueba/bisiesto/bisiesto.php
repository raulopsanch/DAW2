<?php
    if (($año % 4 == 0 && $año % 100 != 0) || $año % 400 == 0) {
        echo "Febrero tiene 29 días y es el año $año";
    } else {
        echo "Febrero tiene 28 días y es el año $año";
    }
?>