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

            echo "<br />";
            echo "<br />";

            $dado1 = rand (1, 6);
            $dado2 = rand (1, 6);
            $result = $dado1 + $dado2;

            $mensaje = ($result == 7 || $dado1 == $dado2) ? "Has ganado" : "Has perdido";

            echo "Dado1: " . $dado1;
            echo "<br />Dado2: " . $dado2;
            echo "<br />" . $mensaje;
        ?>
    </body>
</html>