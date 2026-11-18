<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /* Crea un array multidimensional que almacene 4 libros. Cada libro debe tener:
            Título.
            Autor.
            Precio.
            Número de ejemplares.
        El programa debe:
            Mostrar todos los libros.
            Calcular el valor total de todos los ejemplares.
            Mostrar los libros que cuestan más de 20 €.
            Buscar un libro por su título.
            Mostrar qué libro tiene más ejemplares. */

            $libros = [
                ["titulo" => "El señor de los anillos: la comunidad del anillo", "autor" => "JRR Tolkien", "precio" => 25, "ejemplares" =>2000000],
                ["titulo" => "Ola de calor", "autor" => "Castle", "precio" => 15, "ejemplares" =>200000],
                ["titulo" => "Harry Potter y la Piedra Filosofal", "autor" => "JK Rowling", "precio" => 30, "ejemplares" =>20000000],
            ];

            echo "<h2>Todos los libros</h2>";
            echo "<pre>";
            print_r($libros);
            echo "</pre>";

            $total = 0;
            foreach($libros as $l) {
                $total += $l["precio"];
            }

            echo "<h2>Total de dinero en libros: </h2>";
            echo $total . "€";

            echo "<h2>Libros mayores de 20€</h2>";
            foreach ($libros as $l) {
                if ($l["precio"] > 20) {
                echo "<br /> Nombre: " . $l["titulo"] . " => " . $l["precio"] . "€";
                }
            }

            echo "<h2>Libro buscado</h2>";
            $libroBuscado = "ola de calor";

            foreach ($libros as $l) {
                if (strtolower($l["titulo"]) == strtolower( $libroBuscado)) {
                    echo "Título: " . $l["titulo"] . "<br />";
                    echo "Autor: " . $l["autor"] . "<br />";
                    echo "Precio: " . $l["precio"] . "€ <br />";
                    echo "Ejemplares: " . $l["ejemplares"] . " de libros<br />";
                }
            }
    ?>
</body>
</html>