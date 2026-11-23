<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nombres = [ "Raúl","Cristi", "Javi", "David", "Laura", "Rebeca", "Marta", "jesús", "Samuel", "Yoli" ];

        $jugadores = [];

        foreach ($nombres as $nombre) {
            do {
                $numero = rand(1, 100);
            } while (in_array($numero, $jugadores, true));
            $jugadores[$nombre] = $numero;
        }

        echo "<h2>Números asignados:</h2>";
        foreach($jugadores as $jugador => $numero) {
            echo "$jugador: $numero<br/>";
        }

        echo "<hr/>";

        $bombo = range(1, 100);
        shuffle($bombo);
        $numerosExtraidos = [];
        $ronda = 1;

        while(count($jugadores) > 1 && !empty($bombo))

        $ganadorNombre = array_key_first($jugadores);
        $ganadorNumero = $jugadores[$ganadorNombre];

        echo "El jugador ganador es <strong>$ganadorNombre</strong>";
    ?>
</body>
</html>