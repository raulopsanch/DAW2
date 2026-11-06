<?php
$color = $_GET["fondo"];
if($color == "black"){
    $color_letra = "white";
} else {
    $color_letra = "black";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            width: 800px;
            margin: 0 auto;
            background-color: <?php echo "$color" ?>;

        }
        h1, label{
            border-bottom: 2px solid black;
            color: <?php echo "$color_letra";?>
            
        }
    </style>

</head>
<body>
    <h1>Cambiar color de la pagina</h1>
    <form action="" method="get">
        <label for="">ELEGIR FONDO</label>
        <select name="fondo" id="">
            <option value="white">Blanco</option>
            <option value="red">Rojo</option>
            <option value="green">Verde Lima</option>
            <option value="blue">Azul</option>
            <option value="yellow">Amarillo</option>
            <option value="cyan">Cian</option>
            <option value="fuchsia">Fucsia</option>
            <option value="black">Negro</option>
        </select>

        <button type="submit">Cambiar Color</button>
    </form>
</body>
</html>



