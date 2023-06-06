let total = 0;

let opcion;

const agregarCarrito = (precio) =>{
    let cantidad = parseInt(prompt("Ingrese cantidad"));
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
                alert( "Carrito vaciado" );
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

// const mostrarCarrito = () =>{
//     alert("El total de su carrito es de: $"+total);
// }

alert("Bienvenido a la tienda")

const mostrarMenu = () =>{

    opcion = parseInt(prompt("El total de su carrito es de: $"+total+ "\nQue operación desea realizar: \n 1_Comprar Producutos. \n 2_Vaciar Carrito."));


    switch (opcion){
        case 1:
            let continuar = "";
            do{
                let opcionCompra = parseInt (prompt("Creatinas: \n 1_Creatina Nutrilab: $900 \n 2_Creatina Star Nutrition: $2000 \n 3_Creatina Xbody: $1000 \n 4_Creatina AMZ: $1500 \n Proteinas: \n 5_Proteina ENA: $1500 \n 6_Proteina Star Nutrition: $2000 \n 7_Proteina Xbody: $900 \n 8_Proteina ENA x-pro: $1000 \n "));
                switch(opcionCompra){
                    case 1:
                        agregarCarrito(900);
                        break;
                    case 2:
                        agregarCarrito(2000);
                        break;
                    case 3:
                        agregarCarrito(1000);
                        break;
                    case 4:
                        agregarCarrito(1500);
                        break;
                    case 5:
                        agregarCarrito(1500);
                        break;
                    case 6:
                        agregarCarrito(2000);
                        break;
                    case 7:
                        agregarCarrito(900);
                        break;
                    case 8:
                        agregarCarrito(1000);
                        break;
                    default:
                        alert("Opción inválida, intente nuevamente...");
                        break;
                }
            continuar = prompt("Desea continuar comprando? (si/no)")
            }while(continuar == "si")
            break;
        case 2:
            vaciarCarrito();
            break;    
        // case 3:
        //     mostrarCarrito();
        //     break;       
    }
}
mostrarMenu();
