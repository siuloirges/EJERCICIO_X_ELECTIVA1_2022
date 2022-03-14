
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>

    <div class="padre">

    <div class="window">
    <?php 
@$lista = $_REQUEST['lista'];

$valorNeto = 0.0;
$descuentoTotal = 0.0;
$totalIva = 0.0;
$valorTotal = 0.0; 


// echo $lista ;
$list = json_decode($lista,true);   

// echo $list
foreach ($list as $clave => $valor){

    $neto = 0;
    $des = 0;
    $iva = 0;
    $subTotal = 0;

    $neto = doubleval(str_replace([',','.'],'',$valor['precio'])) * doubleval(str_replace([',','.'],'',$valor['cantidad']));
    $des =  ( $neto * doubleval(str_replace([',','.'],'',$valor['descuento'])) ) / 100;
    $iva = ( $neto * doubleval(str_replace([',','.'],'',$valor['iva'])) ) / 100;
    $subTotal = ($neto - $des) + $iva;



    $valorNeto +=  $neto;
    $descuentoTotal +=  $des;
    $totalIva += $iva;
    $mensaje = '#'.($clave+1).' - '.$valor['cantidad'].' '.$valor['nombre'].' de '.$valor['precio'].' pesos COP menos  %'.$valor['descuento'].' de descuento, mas un iva de %'.$valor['iva'].' dan un total de: '.$subTotal.' <br>';

    echo $mensaje;


    $largo = intval(strlen($mensaje));

    for($i = 0; $i<= $largo;$i++){
            echo ' .';
    }
    echo '<br><br>';

}

$valorTotal = ($valorNeto - $descuentoTotal) + $totalIva;

echo '<br> Total Neto: ';
echo $valorNeto;
echo '<br> Total Descuento: ';
echo $descuentoTotal;
echo '<br> Total iva: ';
echo $totalIva;
echo '<br> Total Pagar: ';
echo $valorTotal;
// echo $lista;
?>

    </div>
    </div>
    
</body>


<style>
    .window{
        display: block !important;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        padding: 50px;
    }
    body {
        
    }
</style>
</html>