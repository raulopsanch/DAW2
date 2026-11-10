<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">;
</head>
<body>
    
        <?php
            echo '<div class="contenedor">';
                if (!$_GET['nombre']) {
                    echo "<h1>Debes Introducir un nombre</h1>";
                } else {
                    $nombre = $_GET["nombre"];

                    if (isset($_GET["deporte"]) && is_array($_GET["deporte"])) {
                        $deportes = $_GET["deporte"];
                        $cantidad = count($deportes);

                        echo "<h1>tu nombre es $nombre y has seleccionado $cantidad deporte/s, y son los siguientes: </h1>";

                        foreach($deportes as $deporte) {
                            echo "<p>" . ucfirst($deporte) . "</p>";
                        }
                    } else {
                        echo "<h1>tu nombre es $nombre y no has seleccionado ningún deporte.</h1>";
                    }
                }

                echo '<br/><a href="index.html">Volver a la página anterior</a>';
            echo '</div>';
        ?>
    
</body>
</html>