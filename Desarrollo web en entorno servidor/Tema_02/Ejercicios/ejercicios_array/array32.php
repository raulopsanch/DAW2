<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /* Crea una estructura que almacene productos y sus unidades vendidas. Calcula el dinero obtenido por las ventas y muestra el producto que más unidades ha vendido. */

        $carrito = [
            ["nombre" => "cocacola", "unidades" => 6, "precio_unitario" => 0.75],
            ["nombre" => "agua", "unidades" => 5, "precio_unitario" => 1.75],
            ["nombre" => "aceite", "unidades" => 5, "precio_unitario" => 2.50],
            ["nombre" => "mantequilla", "unidades" => 2, "precio_unitario" => 1.50],
        ];

        $total = 0;
        $max = $carrito[0];

        foreach($carrito as $c) {
            $total += $c["unidades"] * $c["precio_unitario"];

            if ($c["unidades"] > $max["unidades"]) {
                $max = $c;
            }
        }

        echo "Has obtenido un total de: " . $total . "€<br />";
        echo "Has vendido " . $max["unidades"] . " unidades de " . $max["nombre"];
    ?>
</body>
</html>