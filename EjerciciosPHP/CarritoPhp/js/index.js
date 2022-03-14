
let listProductos = [];
let numberFormat2 = new Intl.NumberFormat('en-US');

function annadirAlCarrito(){

    console.log("Producto Añadido");

    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let iva = document.getElementById('iva').value;
    let descuento = document.getElementById('descuento').value;

    listProductos.push( 
        {
            "precio":numberFormat2.format(precio),
            "nombre":nombre,
            "cantidad":cantidad,
            "iva":iva,
            "descuento":descuento,
        }
     )
   

    let producto = document.getElementById('cart');
    producto.innerHTML += `  

    <div class="itembox">
        <div id="box">
            <div class="top"></div>
            <div>

                <span></span>
                <span>
                    <i class="tape"></i>
                </span>
                <span style=""></span>
                <span>
                    <i class="tape"></i>
                </span>

                <div class="infotape">
                    <div class="infoProduct" >
                        <h4>Nombre: `+nombre+`</h4>
                        <P>Precio:  `+numberFormat2.format(precio)+`</P>
                        <P>Cantidad: `+cantidad+`</P>
                        <P>Iva:  `+iva+`%</P>
                        <P>Descuento:  `+descuento+`%</P>
                    </div>
                </dvi>




            </div>


        </div>
        
  
        
    

        

    </div>    
    <h4>`+nombre+`</h4>
    `;

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('iva').value = '';
    document.getElementById('descuento').value = '';

}

function calcularFactura(){

    Swal.fire({
        title: 'Espere porfavor',
        html: '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',
        imageAlt: 'Custom image',
        showConfirmButton: false,
    });

    setTimeout(() => {
        location.replace('procesarCompraController.php?lista='+JSON.stringify(listProductos));      
    }, 2000);


//  <div class="info" >
//     <h4>Nombre: `+nombre+`</h4>
//     <P>Precio:  `+numberFormat2.format(precio)+`</P>
//     <P>Cantidad: `+cantidad+`</P>
//     <P>Iva:  `+iva+`%</P>
//     <P>Descuento:  `+descuento+`%</P>
// </div> 
    
    // let precioTotal = 0;
    // let cantidadTotal = 0;
    // listProductos.forEach((currentValue) => {
            
    //     precioTotal += currentValue.precio * currentValue.cantidad;
    //     cantidadTotal += currentValue.cantidad;

    // })

    // let producto = document.getElementById('factura');
    // producto.innerHTML = ` <h3>Precio Total: $`+ (precioTotal) +`</h3> `+ ` <h3>Cantidad Total: `+ cantidadTotal +`</h3>`+ ` <h3>Precio con Iva: `+ cantidadTotal + (cantidadTotal*0.19) +`</h3>`;
}


/* <div class="itembox">
                        
<div id="box">
    <div class="top"></div>
    <div>
        <span></span>
        <span>
            <i class="tape"></i>
        </span>
        <span style="--i:Hola Mundo"></span>
        <span>
            <i class="tape"></i>
        </span>
    </div>

</div>

<div class="info">
        <h4>Nombre: Manzana</h4>
        <P>Precio: $500</P>
        <P>Cantidad: $500</P>
        <P>Iva: 5%</P>
        <P>Descuento: 10%</P>
</div>

<h4>Nombre: Manzana</h4>

</div> */