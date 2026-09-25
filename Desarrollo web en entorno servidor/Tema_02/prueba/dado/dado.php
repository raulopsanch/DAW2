<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $dado1 = 1;
            $dado2 = rand (1, 6);
            $result = $dado1 + $dado2;
            $mensaje = ($result == 7 || $dado1 == $dado2) ? "Has ganado" : "Has perdido";

            $imagenes = ["dado_1.jpg", "dado_2.jpg", "dado_3.jpg", "dado_4.jpg", "dado_5.jpg", "dado_6.jpg"];

            echo "<img src = " . $imagenes[dado_1];
            
            echo "<br />Dado2: " . $dado2;
            echo "<br />" . $mensaje;
        ?>
    </body>
</html>
