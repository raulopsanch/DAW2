<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    <?php
        echo '<div class="contenedor">';
        if ( $_GET["operacion"] == "doblar" ) {
            echo "El doble de " . $_GET["numero"] . " es: " . $_GET["numero"] * 2;
        } elseif ( $_GET["operacion"] == "cuadrado" ) {
            echo "El cuadrado de " . $_GET["numero"] . " es: " . pow($_GET["numero"], 2);
        } elseif ( $_GET["operacion"] == "cubo" ) {
            echo "El cubo de " . $_GET["numero"] . " es: " . pow($_GET["numero"], 3);
        } elseif ( $_GET["operacion"] == "raiz" ) {
            echo "La raíz cuadrada de " . $_GET["numero"] . " es: " . sqrt($_GET["numero"]);
        }
        
        echo "<br />";

        echo '<a href = "index.html" >volver a la página anterior</a>';
        echo "</div>"
    ?>
<?php
?>