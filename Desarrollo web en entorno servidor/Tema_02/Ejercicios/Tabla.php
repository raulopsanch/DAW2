<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LA TABLA</title>
</head>

<body>
    <table border="1">
        <?php
        $contador = 1;
        $hasta = 10;

        for ($i = 1; $i <= $hasta; $i++) {
            echo "<tr>";
            for ($j = 1; $j <= $i; $j++) {
                echo "<td>$contador</td>";
                $contador++;
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>

</html>