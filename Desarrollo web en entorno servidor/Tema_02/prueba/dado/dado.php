<?php
    $n1 = rand(1,6);
    $n2 = rand(1,6);

    $array = ["dado_1.jpg", "dado_2.jpg", "dado_3.jpg", "dado_4.jpg", "dado_5.jpg", "dado_6.jpg",];

    $ruta1 = $array[$n1 - 1];
    echo "<img src = $ruta1 width = '100px'>";

    $ruta1 = $array[$n2 - 1];
    echo "<img src = $ruta1 width = '100px'>";

    echo "<br>";

    $mensaje1 = ($n1 == $n2)
        ? "Pareja"
        : "No son pareja, vuelve a intentarlo";
    echo $mensaje1;
    echo "<br>";
    $mensaje2 = ($n1 + $n2 == 7)
        ? "Enhorabuena, la suma de los números es 7"
        : "Has fallado, la suma de los números no es 7";
    echo $mensaje2;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dado</title>
    </head>
    <body>
        <br>
        <button onclick="location.reload();">Girar dados</button>
    </body>
</html>