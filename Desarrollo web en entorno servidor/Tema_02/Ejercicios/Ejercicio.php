<?php
    for ($i = 0; $i < 11; $i++) {
        for ($j = 0; $j < $i; $j++) {
            echo " * ";
        }
        echo "<br />";
    }

    echo "<br /> <br />";

    for ($k = 0; $k < 11; $k++) {
        for ($l = 0; $l < $k; $l++) {
            echo $k . "\t";
        }
        echo "<br />";
    }
?>