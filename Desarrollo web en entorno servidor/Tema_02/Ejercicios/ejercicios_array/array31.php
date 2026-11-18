<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Crea una estructura de datos para almacenar empleados con nombre, edad y salario. Muestra solamente los empleados que cobran más de 1500 €. */

            $empleados = [
                ["nombre" => "Raúl", "edad" => 38, "salario" => 1250],
                ["nombre" => "Cristina", "edad" => 37, "salario" => 1550],
                ["nombre" => "Javier", "edad" => 38, "salario" => 1650],
                ["nombre" => "Guadalupe", "edad" => 43, "salario" => 1750],
            ];

            foreach ($empleados as $emp) {
                if ($emp["salario"] > 1500) {
                    echo "Nombre: " . $emp["nombre"] . " => " . $emp["salario"] . "€<br />";
                }
            }
        ?>
    </body>
</html>