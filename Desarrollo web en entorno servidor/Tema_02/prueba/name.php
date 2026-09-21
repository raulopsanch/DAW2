<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $persona = [
                "name" => "Raúl",
                "primerApellido" => "López",
                "segundoApellido" => "Sánchez",
                "edad" => 38
            ];

            echo "<p>Hola, mi nombre es $persona[name] $persona[primerApellido] $persona[segundoApellido] y tengo $persona[edad] años.</p>";
        ?>
    </body>
</html>