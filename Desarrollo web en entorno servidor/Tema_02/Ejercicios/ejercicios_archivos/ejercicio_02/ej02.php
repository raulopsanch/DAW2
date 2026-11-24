<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $alumnos = [
                "Raúl" => 8,
                "Cris" => 9.5,
                "Javi" => 7.25,
                "Nana" => 8.75,
            ];

            $archivo = fopen("datos.txt", "w");

            foreach($alumnos as $alumno => $valor) {
                fwrite($archivo, $alumno . ":" . PHP_EOL . $valor . PHP_EOL);
            }
            fclose($archivo);
            echo "Archivo creado";
        ?>
    </body>
</html>