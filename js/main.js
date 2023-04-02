
//En mi proyecto vamos a realizar una funcion que nos permita realizar una venta haciendo que el usuario ingrese los productos y los precios.
function realizarVenta() {

    //Definimos los productos que tenemos a la venta creando la variable "productosDisponible"
    let productosDisponibles = ["CHAQUETA", "DELANTAL", "ACCESORIO"]; 

    //Definimos el inicio de la variable "totalVenta" en cero para el carrito
    let totalVenta = 0; 

// Vamos a usar un "while" en la funcion para crear un ciclo infinito para ingresar los productos que queremos comprar
    while (true) {
        
    //Usamos un prompt para definir la variable producto    
    let producto = prompt("Ingrese un producto (o 'fin' para finalizar la venta):").toUpperCase();

    // Si se ingresa "fin", se termina la venta
    if (producto === "fin") { 
        break;
    }
    // Usamos el operador "!" para decir que si no está en la lista de productos nos tire un alert diciendo que no esta disponible el productop
    if (!productosDisponibles.includes(producto)) { 
        alert("Producto no disponible");
        continue;
    }
// Utilizamos un prompt con parseFloat para que el usuario interactue con la pagina y defina el precio del producto buscado (mas adelante en el proyecto definiremos precios)
    let precio = parseFloat(prompt(`Ingrese el precio de ${producto}:`)); 

    // Usamos el condicional "if" por si no se ingresa un precio válido, se pide ingresarlo nuevamente
    if (isNaN(precio)) { 
        alert("Precio no válido");
        continue;
    }
    // Se suma el precio del producto al total de la venta
    totalVenta += precio; 
    }

// Definimos la variable "descuento" inicializando el descuento en cero
    let descuento = 0; 

    // El ciclo "for" lo utilizamos para aplicar descuentos por cantidad de productos comprados
    for (let i = 1; i <= 3; i++) { 
        // Si se compró al menos i productos y el total de la venta supera i * 100, se aplica un descuento del 5%
      if (i <= productosDisponibles.length && totalVenta >= i * 100) { 
        descuento = 0.05 * totalVenta;
    }
    }
    // Se calcula el total de la venta con el descuento aplicado y en el alert mostramos el total de la venta, el descuento aplicado y el total con descuento  
    let totalConDescuento = totalVenta - descuento; 
    alert(`Total de la venta: ${totalVenta}\n Descuento aplicado: ${descuento}\n Total con descuento: ${totalConDescuento}`); 
}

realizarVenta()