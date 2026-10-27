<!--<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LA TABLA2</title>
</head>

<body>-->
    <?php  
        $tabla="<table border='1'>" ;  
        
        $contador = 1;
        $hasta = 10;

        for ($i = 1; $i <= $hasta; $i++) {
            $tabla.="<tr>";
            for ($j = 1; $j <= $i; $j++) {
                $tabla.="<td>$contador</td>";
                $contador++;
            }
             $tabla.="</tr>";
        }
         $tabla.="</table>";
         echo $tabla;
        ?>
<!--   
</body>

</html>-->