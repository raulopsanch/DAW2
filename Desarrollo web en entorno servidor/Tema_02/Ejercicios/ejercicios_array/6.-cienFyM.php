<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
    <body>
        <?php
            /* Rellena un array de 100 elementos de manera aleatoria con valores de M y F. Una vez completado  vuelve a recorrerlo y calcula cuántos elementos hay de cada uno de los valores almacenando el resultado en un array asociativo [ 'M' => 0, 'F' => 0 ] (no utilices variables para contar los elementos). Al final  muestra el resultado por pantalla. */
            $array = ["F", "M"];
            $fym = [];
            for ($i = 0; $i < 100; $i++) {
                $aleatorio = array_rand($FYM);
                $fym[$i] = $aleatorio;
            }

            print_r($array);
        ?>
    </body>
</html>