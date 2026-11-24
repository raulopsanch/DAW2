<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Introduce 3 números aleatorios en un archivo */

            $archivo = fopen("datos.txt", "w");
            $contador = 0;

            while($contador < 3) {
                $num = rand(1, 100);

                fwrite($archivo, $num . PHP_EOL);
                $contador++;
            }
            
            fclose($archivo);

            echo "archivo creado";
        ?>
    </body>
</html>