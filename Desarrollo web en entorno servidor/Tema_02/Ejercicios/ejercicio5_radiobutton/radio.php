<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php
        echo '<div class= "contenedor">';

            if(!$_GET["nombre"]) {
                echo "<h2>Debes introducir el nombre.</h2><br />";
            } else {
                $nombre = $_GET["nombre"];

                if(isset($_GET['estudio'])) {
                    $estudio = $_GET["estudio"];

                    echo "<h2>Tu nombre es $nombre</h2><br />";
                    echo "<h2>Tus estudios son: $estudio</h2>";
                }
            }

            echo '<a href="index.html">Volver a la página anterior</a>';
        echo "</div>";
    ?>
</body>
</html>