<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Dados los siguientes arrays, combinalos en un único array plano, intercalando los elementos de ambos. Muestra el resultado por pantalla. Si un array tiene más elementos que otro, añade los elementos restantes al final del array resultante. (Hazlo sin utilizar ninguna función de PHP)


            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] */
            
            $nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            $letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

            $long1 = count($nums);
            $long2 = count($letras);

            $max = 0;

            if ($long1 > $long2) {
                $max = $long1;
            } else {
                $max = $long2;
            }
        ?>
        
    </body>
</html>