let total = 0;

const agregarCarrito = (precio) =>{
    let cantidad = prompt("Ingrese cantidad");
    if(cantidad > 0){
        total = total + precio * cantidad;
        alert("Total del carrito: " + total);
        return total;
    }else{
        alert("Cantidad invalida");
    }
}

const vaciarCarrito = () =>{
    let respuesta;
    do{
        respuesta = prompt("Seguro que quiere vaciar su carrito? (si/no)");
        switch (respuesta){
            case "si":
                total = 0;
                alert("Carrito vaciado");
                break;
            case "no":
                alert("Carrito no vaciado");
                break;
            default:
                alert("Opción inválida, intente nuevamente");  
                break;  
        }
    }while(respuesta != "no" && respuesta != "si");
}