const productosDisponibles = [
    { nombre: "Chaqueta de Chef Manga Larga", precio: 7000 },
    { nombre: "Chaqueta de Chef Manga Larga Mujer", precio: 7000 },
    { nombre: "Chaqueta de Chef Manga Corta Mujer", precio: 6500 },
    { nombre: "Chaqueta de Chef Manga Cortra Hombre", precio: 6500 },
    { nombre: "Delantal Pechera Clasico con Regulador", precio: 4500 },
    { nombre: "Delantal Jean Negro", precio: 4500 },
    { nombre: "Delantal de Cintura Bengalina", precio: 4800 },
    { nombre: "Delantal de cuero con reguladores", precio: 9500 },
    { nombre: "Micro Soplete a Gas", precio: 10500 },
    { nombre: "Ahumador Lacor Instant", precio: 15500 },
    { nombre: "Balanza Digital", precio: 3500 },
    { nombre: "Funda de cuchillos 17 piezas", precio: 12500 }
];

let carrito = [];
let totalVenta = 0;

function agregarAlCarrito() {
    let producto = document.getElementById("producto").value;
    if (!producto) {
        alert("Debe seleccionar un producto");
        return;
    }
    
    let productoEncontrado = productosDisponibles.find((p) => p.nombre === producto);
    if (!productoEncontrado) {
        alert("Producto no disponible");
        return;
    }
    let cantidad = parseInt(document.getElementById("cantidad").value);
    if (isNaN(cantidad)) {
        alert("Cantidad no válida");
        return;
    }
    
    carrito.push({ producto: productoEncontrado, cantidad });
    totalVenta += productoEncontrado.precio * cantidad;

    
    document.getElementById("total").innerHTML = totalVenta;

    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("totalVenta", JSON.stringify(totalVenta));

    
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = 1;

     mostrarCarrito() 
}


function mostrarCarrito() {


    
    let carritoGuardado = localStorage.getItem("carrito");
    let totalVentaGuardado = localStorage.getItem("totalVenta");

    
    if (carritoGuardado === null || totalVentaGuardado === null) {
        return;
    }

    carrito = JSON.parse(carritoGuardado);
    totalVenta = JSON.parse(totalVentaGuardado);


    
    carrito = JSON.parse(carritoGuardado);
    totalVenta = JSON.parse(totalVentaGuardado);

    
    if (!carrito || !totalVenta) {
        return;
    }

    
    document.getElementById("total").innerHTML = totalVenta;

    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("totalVenta", JSON.stringify(totalVenta));

    
    let tabla = "<table><tr><th>Producto</th><th>Cantidad</th><th>Precio</th></tr>";
    carrito.forEach((item) => {
        tabla += `<tr><td>${item.producto.nombre}</td><td>${item.cantidad}</td><td>${item.producto.precio}</td></tr>`;
    });
    tabla += "</table>";
    document.getElementById("carrito").innerHTML = tabla;


}

function borrarLocalStorage() {
    localStorage.clear();
    location.reload();
}


mostrarCarrito();