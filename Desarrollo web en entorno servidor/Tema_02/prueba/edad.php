<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $name = ["Raúl", "Iván", "Antorio"];
            $elegido = rand(0, 2);
            $elegido2 = array_rand($name); //Cuenta automáticamente los objetos del array
            $edad = rand(1, 25);

            $mensaje = ($edad >= 18) ? "Mayor de edad" : "Menor de edad";

            echo $name[$elegido] . " tiene " . $edad . " años. Es " . $mensaje;
            echo "<br/> " . $name[$elegido2];
        ?>
    </body>
</html>