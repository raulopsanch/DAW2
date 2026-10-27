<?php
    echo "<p>Fibonacci</p>";
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

    echo "<br />";
    echo "<br />";
    echo "<br />";
    echo "<br />";
?>

<?php
    echo "<p>Fibonacci</p>";
    $a = 0;
    $b = 1;


    for ($i = 1; $i <= 15; $i++) {
        echo $a . " ";

        $result = $a + $b;
        $a = $b;
        $b = $result;
    }

    echo "<br />";
    echo "<br />";
    echo "<br />";
    echo "<br />";
?>

<?php
    echo "<p>Factorial de un número</p>";

    $numero = 5;
    $result = 1;
    
    echo "Factorial de $numero: ";
    
    for ($i = 2; $i <= $numero; $i++) {
        $result *= $i;
    }
    echo $result;

    echo "<br />";
    echo "<br />";
    echo "<br />";
    echo "<br />";
?>


<?php
    //numero primo

    $num = rand(1, 200);

    if ($num <= 3) {
        echo "$num es primo";
    }

    
    
?>