<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Rellena un array de 100 elementos de manera aleatoria con valores de M y F. Una vez completado  vuelve a recorrerlo y calcula cuántos elementos hay de cada uno de los valores almacenando el resultado en un array asociativo [ 'M' => 0, 'F' => 0 ] (no utilices variables para contar los elementos). Al final  muestra el resultado por pantalla. */
            $opciones = ["F", "M"];
            $result = [];

            for ($i = 0; $i < 100; $i++) {
                $result[] = $opciones[array_rand($opciones)];
            }

            $conteo = [
                'M' => 0,
                'F' => 0
            ];

            foreach($result as $valor) {
                $conteo[$valor]++;
            }
            echo "<pre>";
            print_r($result);
            echo "</pre>";
        ?>
        <h3>Resultados del recuento:</h3>
        <p>Total de 'M': <?php echo $conteo['M']?></p>
        <p>Total de 'F': <?php echo $conteo['F']?></p>
    </body>
</html>