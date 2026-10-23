<?php
    for ($i = 0; $i < 10; $i++) {
        echo "*";
        for ($j = 0; $j < $i; $j++) {
            echo "*";
        }
        echo "<br />";
    }
    echo "<br />";
    echo "<br />";
?>



<?php
    // Calcular la suma de las cifras de un número
    $num = rand(10, 99999);
    //$texto = (String) $num;
    $result = 0;

    while ($num > 0) {
        $result += $num % 10;
    }
    
    
    echo "El resultado de sumar los número de $num es $result";

?>

<!-- Fibonacci -->
<?php
    $i = 0;
    $j = 1;
    $siguiente= $i + $b;

    $contador = 0;
    while($contador < 11) {
        
    }

?> 