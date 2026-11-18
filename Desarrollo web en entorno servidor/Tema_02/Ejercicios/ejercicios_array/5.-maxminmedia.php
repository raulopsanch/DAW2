<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            /* Genera un array aleatorio de 33 elementos con números comprendidos entre el 0 y 100 y calcula:
            El mayor
            El menor
            La media */

            $nums = [];

            for($i = 0; $i < 33; $i++) {
                $numAleatorio = rand(0, 100);
                array_push($nums, $numAleatorio);
            }

            $max = $nums[0];
            $min = $nums[0];
            $suma = 0;
            
            foreach($nums as $num) {
                $sum += $num;
                if ($num > $max) {
                    $max = $num;
                }

                if ($num < $min) {
                    $min = $num;
                }
            }

            $media = $sum / count($nums);

            echo "<pre>";
                print_r($nums);
            echo "</pre>";

            echo "Máximo: $max <br />";
            echo "Mínimo: $min <br />";
            echo "Media: " . round($media, 2);
        ?>
    </body>
</html>