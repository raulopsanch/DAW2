<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <img src = "dado_1.jpg" width="50" height="50"/>
        <img src = "dado_2.jpg" width="50" height="50"/>
        <img src = "dado_3.jpg" width="50" height="50"/>
        <img src = "dado_4.jpg" width="50" height="50"/>
        <img src = "dado_5.jpg" width="50" height="50"/>
        <img src = "dado_6.jpg" width="50" height="50"/>
        <br />
        <?php
            $dado1 = 1;
            $dado2 = rand (1, 6);
            $result = $dado1 + $dado2;
            $mensaje = ($result == 7 || $dado1 == $dado2) ? "Has ganado" : "Has perdido";

            $imagenes = ["dado_1.jpg", "dado_2.jpg", "dado_3.jpg", "dado_4.jpg", "dado_5.jpg", "dado_6.jpg"];

            if ($dado1 == 1 || $dado2 == 1) {
                $imgDadoUno = $imagenes[0];
                echo "<img src = '$imgDadoUno' width='50' height='50' />";
                $imgDadoDos = $imagenes[0];
                echo "<img src = '$imgDadoUno' width='50' height='50' />";
            }
            echo "<br />Dado2: " . $dado2;
            echo "<br />" . $mensaje;
        ?>
    </body>
</html>
