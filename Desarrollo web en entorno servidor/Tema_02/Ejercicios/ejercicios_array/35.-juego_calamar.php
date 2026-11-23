<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $num = rand(1, 100);
        $personas = [
            "nombre" =>"Raúl", "mumero" => $num,
            "nombre" => "Cristi", "numero" => $num,
            "Javi" => $num,
            "David" => $num,
            "Laura" => $num,
            "Rebeca" => $num,
            "Marta" => $num,
            "jesús" => $num,
            "Samuel" => $num,
            "Yoli" => $num,
        ];

        foreach($personas as $nom => $valor) {
            $num = rand(1, 100);
            $valor['numero'] = $num;
        }
        

        echo "<pre>";
        print_r($personas);
        echo "</pre>";

    ?>
</body>
</html>