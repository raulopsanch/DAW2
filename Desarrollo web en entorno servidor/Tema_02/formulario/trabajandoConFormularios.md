# El lenguaje PHP

## PHP

![PHP](imagenes/phplogo.png)


## Trabajando con formularios

Los datos se envían via URL con el formato `var1=valor1&var2=valor2…`. Por ejemplo: `ejemplo.php?nombre=Bruce+apellido1=Wayne`

Se divide en dos pasos:

1. Generar un formulario con `action='archivo.php' method='GET'`
2. En el archivo `.php` leer los datos con `$_GET['nombreVar']`

Vamos a separar siempre que podamos el código HTML del de PHP.
Por ejemplo, el formulario lo colocamos en `saluda.html`:

``` html
<form action="saluda.php" method="get">
    <p><label for="nombre">Nombre: </label>
    <input type="text" name="nombre" id="nombre"></p>
    <p><label for="apellido1">Primer apellido:</label> 
    <input type="text" name="apellido1" id="apellido1"></p>
    <p><input type="submit" value="enviar"></p>
</form>
```

Y recogemos los datos en `saluda.php`:

``` php
<?php
$nombre = $_GET["nombre"];
$apellido1 = $_GET["apellido1"];

echo "Hola $nombre $apellido1";
?>
```

Si lo quisiéramos realizar todo en un único archivo (*lo cual no es recomendable*), podemos hacerlo así:

``` html+php
<form action="" method="get">
    <p><label for="nombre">Nombre: </label>
    <input type="text" name="nombre" id="nombre"></p>
    <p><label for="apellido1">Primer apellido:</label>
    <input type="text" name="apellido1" id="apellido1"></p>
    <input type="submit" value="enviar">
</form>
<p>
    <?php
    if(isset($_GET['nombre'])) {
        $nombre = $_GET["nombre"];
        $apellido1 = $_GET["apellido1"];

        echo "Hola $nombre $apellido1";
    }
    ?>
</p>
```

El trabajo con formularios lo estudiaremos en profundidad en la unidad 4, y veremos que además de `GET`, podemos enviar los datos con `POST`.
