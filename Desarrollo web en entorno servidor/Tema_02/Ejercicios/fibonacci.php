<?php
    $a = 0;
    $b = 1;
    $result = $a + $b;

    echo $a . " " . $b . " " . $result . " ";

    for ($i = 0; $i < 12; $i++) {
        $a = $b;
        $b = $result;
        $result = $a + $b;

        echo $result . " ";
    }

?>