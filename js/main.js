

// Creamos un array de objetos con los productos disponibles y sus precios
let productosDisponibles = [
    { nombre: "chaqueta", precio: 1000 },
    { nombre: "delantal", precio: 2000 },
    { nombre: "accesorio", precio: 1000 },
];

// Definimos la función para aplicar descuentos
function aplicarDescuento(cantidad, total) {
    let descuento = 0;
     // Si se compró al menos cantidad productos y el total de la venta supera cantidad * 100, se aplica un descuento del 5%
    if (cantidad <= productosDisponibles.length && total >= cantidad * 100) {
        descuento = 0.05 * total;
    }
    return descuento;
}

function realizarVenta() {
    let totalVenta = 0;
    let carrito = [];

    while (true) {
        let producto = prompt(
            "Ingrese un producto (o 'fin' para finalizar la venta):"
        );
        if (producto === "fin") {
            break;
        }
// Buscamos el producto en el array de objetos y lo agregamos al carrito con su precio
        let productoEncontrado = productosDisponibles.find(
            (p) => p.nombre === producto
        );
        if (!productoEncontrado) {
            alert("Producto no disponible");
            continue;
        }

        let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto}:`));
        if (isNaN(cantidad)) {
            alert("Cantidad no válida");
            continue;
        }
// Agregamos el producto al carrito con su precio
        carrito.push({ producto: productoEncontrado, cantidad });
        totalVenta += productoEncontrado.precio * cantidad;
    }

// Calculamos el descuento utilizando la función de orden superior "aplicarDescuento"
    let descuento = aplicarDescuento(carrito.length, totalVenta);
    let totalConDescuento = totalVenta - descuento;

    // Creamos el menú en el alert
    let envioBonificado = totalVenta > 20000;
    let mensajeTotal = `Total de la venta: ${totalVenta}\n`;
    if (descuento > 0) {
        mensajeTotal += `Descuento aplicado: ${descuento}\n`;
    }
    if (envioBonificado) {
        mensajeTotal += "Envío bonificado\n";
    }
    mensajeTotal += `Total con descuento: ${totalConDescuento}`;
    alert(mensajeTotal);

    let menu =
        "1. Ver productos en el carrito\n2. Ver el total de la venta\n3. Finalizar la venta";
    let opcion;
    do {
        opcion = prompt(menu);
        switch (opcion) {
            case "1":
                let productosCarrito = "";
                for (let item of carrito) {
                    productosCarrito += `${item.cantidad} ${item.producto.nombre}(s)\n`;
                }
                alert(productosCarrito);
                break;
            case "2":
                alert(mensajeTotal);
                break;
            case "3":
                alert("Gracias por su compra");
                break;
            default:
                alert("Opción no válida");
                break;
        }
    } while (opcion !== "3");
}

realizarVenta();