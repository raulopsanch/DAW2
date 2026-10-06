<?php
$n1 = rand(0,5);
$n2 = rand(0,5);

$array = ["Caras_dado/cara1.jpg", "Caras_dado/cara2.jpg", "Caras_dado/cara3.jpg", "Caras_dado/cara4.jpg", "Caras_dado/cara5.jpg", "Caras_dado/cara6.jpg",];

$ruta1 = $array[$n1];
echo "<img src = $ruta1 width = '100px'>";

$ruta1 = $array[$n2];
echo "<img src = $ruta1 width = '100px'>";



// switch ($n1) {
//     case '1':
//         //$ruta1 = "Caras_dado/cara1.jpg";
//         $ruta1 = $array[$n1];
//         $descripcion1 = "Cara 1 del dado";
//         echo "<img src = $ruta1 width = '100px'>";
//         break;
//     case '2':
//         $ruta2 = Caras_dado/cara2.jpg;
//         $descripcion2 = "Cara 2 del dado";
//         echo "<img src = $ruta2 width = '100px'>";
//         break;
//     case '3':
//         $ruta3 = "Caras_dado/cara3.jpg";
//         $descripcion3 = "Cara 3 del dado";
//         echo "<img src = $ruta3 width = '100px'>";
//         break;
//     case '4':
//         $ruta4 = "Caras_dado/cara4.jpg";
//         $descripcion4 = "Cara 4 del dado";
//         echo "<img src = $ruta4 width = '100px'>";
//         break;
//     case '5':
//         $ruta5 = "Caras_dado/cara5.jpg";
//         $descripcion5 = "Cara 5 del dado";
//         echo "<img src = $ruta5 width = '100px'>";
//         break;
//     case '6':
//         $ruta6 = "Caras_dado/cara6.jpg";
//         $descripcion6 = "Cara 6 del dado";
//         echo "<img src = $ruta6 width = '100px'>";
//         break;
//}


// switch ($n2) {
//     case '1':
//         $ruta1 = "Caras_dado/cara1.jpg";
//         $descripcion1 = "Cara 1 del dado";
//         echo "<img src = $ruta1 width = '100px'>";
//         break;
//     case '2':
//         $ruta2 = "Caras_dado/cara2.jpg";
//         $descripcion2 = "Cara 2 del dado";
//         echo "<img src = $ruta2 width = '100px'>";
//         break;
//     case '3':
//         $ruta3 = "Caras_dado/cara3.jpg";
//         $descripcion3 = "Cara 3 del dado";
//         echo "<img src = $ruta3 width = '100px'>";
//         break;
//     case '4':
//         $ruta4 = "Caras_dado/cara4.jpg";
//         $descripcion4 = "Cara 4 del dado";
//         echo "<img src = $ruta4 width = '100px'>";
//         break;
//     case '5':
//         $ruta5 = "Caras_dado/cara5.jpg";
//         $descripcion5 = "Cara 5 del dado";
//         echo "<img src = $ruta5 width = '100px'>";
//         break;
//     case '6':
//         $ruta6 = "Caras_dado/cara6.jpg";
//         $descripcion6 = "Cara 6 del dado";
//         echo "<img src = $ruta6 width = '100px'>";
//         break;
// }


echo "<br>";

$mensaje1 = ($n1 == $n2)
    ? "Pareja"
    : "No son pareja, vuelve a intentarlo";
echo $mensaje1;
echo "<br>";
$mensaje2 = ($n1 + $n2 == 7)
    ? "Enhorabuena, la suma de los números es 7"
    : "Has fallado, la suma de los números no es 7";
echo $mensaje2;

// if($n1 == $n2) {
//     echo "Pareja";
// } else {
//     echo "No son pareja, vuelve a intentarlo";
// }

// echo "<br>";

//  if($n1 + $n2 == 7) {
//         echo "Enhorabuena, la suma de los números es 7";
//     } else {
//         echo "Has fallado, la suma de los números no es 7";
//     }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dado</title>
</head>
<body>
    <br>
    <button onclick="location.reload();">Girar dados</button>
</body>
</html>