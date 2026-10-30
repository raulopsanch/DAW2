<?php
    $productos = [
        ["nombre" => "Camiseta", "precio" => 15],
        ["nombre" => "Pantalón", "precio" => 30],
        ["nombre" => "Gorra", "precio" => 10],
    ]

    // Total
    $total = array_sum(array_column($productos, "precio"));

    // Productos más de 12 € filter
    $caros = array_filter($productos)
?>