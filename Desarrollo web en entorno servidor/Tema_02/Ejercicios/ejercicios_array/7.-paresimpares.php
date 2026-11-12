<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array.  El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array   (del 0 en adelante) y todos los números impares a las celdas restantes. Muestra el array resultante  con un print_r() */
            
            $array = [];

            for ($i = 0; $i < 50; $i++) {
                $nums = rand(0, 99);
                if ($nums % 2 == 0) {
                    array_unshift($array, $nums);
                } else {
                    array_push($array, $nums);
                }
            }

            print_r($array);
        ?>
    </body>
</html>