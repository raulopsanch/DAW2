<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        
        $archivo = fopen("datos.txt", "a");

        echo "<table>";
        echo "<tr>"; 
        echo "<th>Nombre</th><th>Apllidos</th><th>Edad</th>";
        fwrite($archivo, $_GET["nombre"] . " ||| " . $_GET["apellido"] . " ||| " . $_GET["edad"] . " años" . PHP_EOL);

        echo "</tr>";
        echo "</table>";
        fclose($archivo);

        echo "Datos introducidos";
    ?>
</body>
</html>