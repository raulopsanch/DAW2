<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            // nombre => [precio, stock]
            $tienda = [
                ["nombre" =>"ordenador", "precio" => 250, "stock" => 15],
                ["nombre" => "teclado", "precio" => 1500, "stock" => 25],
                ["nombre" => "raton", "precio" => 25, "stock" => 150],
                ["nombre" => "pantalla", "precio" => 350, "stock" => 80]
            ];

            $sum = 0;

            foreach ($tienda as $t) {
                $sum += $t['precio'] * $t['stock'];
            }
        ?>
    </body>
</html>