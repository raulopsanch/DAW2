<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            $num = 5;
            $result = 1;
            $proceso = "";

            for ($i = 1; $i <= $num; $i++) {
                $result *= $i;
                if ($i < $num) {
                    $proceso .= $i . " x ";
                } else {
                    $proceso .= $i;
                }
            }

            echo "$num! = $proceso = $result";
        ?>
    </body>
</html>