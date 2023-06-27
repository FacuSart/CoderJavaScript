let total = 0;
let carrito = [];
let opcion;
let i = 0;
let productos = [
    {nombre:'Creatina', marca:'Nutrilab', precio: 900},{nombre:'Creatina', marca:'ENA', precio: 2000},{nombre:'Creatina', marca:'Xbody', precio: 1000},{nombre:'Creatina', marca:'AMZ', precio: 1500},
    {nombre:'Proteina', marca:'ENA', precio: 1500},{nombre:'Proteina', marca:'Star Nutrition', precio: 2000},{nombre:'Proteina', marca:'Xbody', precio: 900},{nombre:'Proteina', marca:'ENA X-pro', precio: 1000}
];



const agregarCarrito = (precio,cantidad) =>{
    if(cantidad > 0){
        total += precio * cantidad;
        alert("Total del carrito: " + total);
        return total;
    }else{
        alert("Cantidad invalida");
    }
}

const itemsCarrito = (nombre, marca, precio, cantidad) =>{
    carrito[i] = new Item(nombre, marca, precio, cantidad)
    for(let j = 0; j<carrito.length;j++){

        if(carrito[j].nombre == carrito[i].nombre && carrito[j].marca == carrito[i].marca && j !== i){
            carrito[j].cantidad += carrito[i].cantidad
            carrito.pop()
            break;
        }
    }
    i++;

    console.log(carrito.length)
    return carrito[i-1];
}
const vaciarCarrito = () =>{
    let respuesta;
    do{
        respuesta = prompt("Seguro que quiere vaciar su carrito? (si/no)");
        switch (respuesta){
            case "si":
                total = 0;
                carrito = [];
                i = 0;
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

const mostrarCarrito = () =>{
    if(total !== 0){
        alert("El total de su carrito es de: $"+total);
        carrito.forEach((item) => {alert("x"+item.cantidad+" "+item.nombre+" "+ item.marca +" $"+item.precio * item.cantidad)})
    }else{
        alert("Su carrito está vacío");
    }
    
}

const mostrarMenu = () =>{

    opcion = parseInt(prompt("El total de su carrito es de: $"+total+ "\nQue operación desea realizar: \n 1_Comprar Producutos. \n 2_Vaciar Carrito. \n 3_Mostrar Carrito."));

    switch (opcion){
        case 1:
            let continuar = "";
            do{
                let opcionCompra = parseInt (prompt("Creatinas: \n 1_Creatina Nutrilab: $900 \n 2_Creatina ENA: $2000 \n 3_Creatina Xbody: $1000 \n 4_Creatina AMZ: $1500 \n Proteinas: \n 5_Proteina ENA: $1500 \n 6_Proteina Star Nutrition: $2000 \n 7_Proteina Xbody: $900 \n 8_Proteina ENA x-pro: $1000 \n "));
                let cantidad = 0;
                function definirCant (){
                    cantidad = parseInt(prompt("Ingrese cantidad"))
                }
                while(0 < opcionCompra && opcionCompra <= productos.length){
                    definirCant();
                    agregarCarrito(productos[opcionCompra-1].precio, cantidad, itemsCarrito(productos[opcionCompra-1].nombre, productos[opcionCompra-1].marca, productos[opcionCompra-1].precio, cantidad))
                    break;
                }
                if(opcionCompra <= 0 || opcionCompra >productos.length){
                    alert("Opción no válida, intente nuevamente");
                    mostrarMenu();
                }
                

                do{
                    continuar = prompt("Desea continuar comprando? (si/no)")
                    if(continuar !== "no" && continuar !== "si"){
                        alert("Opción no válida, intente nuevamente");
                    }
                }while(continuar !== "no" && continuar !== "si");

            }while(continuar !== "no");
            break;
        case 2:
            vaciarCarrito();
            break;     
        case 3:
            mostrarCarrito();
            break;    
        default:
            alert("Opción no válida, intente nuevamente");
            mostrarMenu();
            break;

    }
}

let boton = document.getElementById("boton__item");
boton.onclick = () => {agregarCarrito(productos[1].precio,1, itemsCarrito(productos[1].nombre, productos[1].marca ,productos[1].precio, 1))}
alert("Bienvenido a la tienda")
mostrarMenu();
