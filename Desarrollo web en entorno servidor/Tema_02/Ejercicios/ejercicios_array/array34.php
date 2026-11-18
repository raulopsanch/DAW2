<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /* Realiza un programa que escoja al azar 10 cartas de la baraja española y que diga cuántos puntos suman según el juego de la brisca. Emplea un array asociativo para obtener los puntos a partir del nombre de la carta. */

        $puntosBrisca = [
            "AS" => 11,
            "Dos" => 0,
            "Tres" => 10,
            "Cuatro" => 0,
            "Cinco" => 0,
            "Seis" => 0,
            "Siete" => 0,
            "Sota" => 2,
            "Caballo" => 3,
            "Rey" => 4,
        ];

        $palos = ["Oros", "Copas", "Espadas", "Bastos"];

        $baraja[] = [];

        foreach ($palos as $palo) {
            foreach ($puntosBrisca as $nombre => $puntos) {
                $baraja[] = [
                    "nombre" => $nombre,
                    "palo" => $palo
                ];
            }
        }

        shuffle($baraja);
        $mano = array_slice($baraja, 0, 10);

        $totalPuntos = 0;

        echo "<h3>Cartas obtenidas</h3>";
        echo "<ul>";
        foreach ($mano as $carta) {
            $nombreCarta = $carta["nombre"];
            $puntosCarta = $puntosBrisca[$nombreCarta];
            $totalPuntos += $puntosCarta;

            echo "<li>" . $nombreCarta . " de " . $carta["palo"] . " (" . $puntosCarta . " puntos)</li>";
        }
        echo "</ul>";

        echo "<strong>Total de puntos: " . $totalPuntos . "</strong>";
    ?>
</body>
</html>