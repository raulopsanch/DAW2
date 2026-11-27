<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border: 1px;
            color: black;
        }
    </style>
</head>
<body>
<table>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
        </tr>
    <?php
        $archivo = fopen("datos.txt", "r");

        while (($linea = fgets($archivo)) !== false) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($linea) . "</td>";
            echo "</tr>";
        }

        fclose($archivo);
    ?>
    </table>
</body>
</html>