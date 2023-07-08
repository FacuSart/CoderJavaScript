let carrito = [];
let total = 0;
let aux = 0;

let productos = [
    {nombre:'Creatina', marca:'Nutrilab', precio: 1200},{nombre:'Creatina', marca:'ENA', precio: 3000},{nombre:'Creatina', marca:'Xbody', precio: 1500},{nombre:'Creatina', marca:'AMZ', precio: 2000},
    {nombre:'Proteina', marca:'ENA', precio: 4000},{nombre:'Proteina', marca:'Star Nutrition', precio: 4000},{nombre:'Proteina', marca:'Xbody', precio: 3000},{nombre:'Proteina', marca:'ENA X-pro', precio: 5000}
];

const bodyTabla = document.getElementById("tbody");
const totalTabla=document.getElementById("total")

function vaciarCarrito(){
    bodyTabla.innerHTML = ``;
    aux = 0;
    total = 0
    totalTabla.innerHTML = `TOTAL: $${total}`;
}


function crearTabla(item){
    aux++
    item.cantidad=(prompt("Ingresar cantidad deseada"))
    item.cantidad = parseInt(item.cantidad)
    
    bodyTabla.innerHTML = bodyTabla.innerHTML + `
        <tr>
            <th scope="row">${aux}</th>
            <td>${item.nombre}</td>
            <td>${item.marca}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad} (${item.cantidad} x $${item.precio})</td>
        </tr>
        `;
        total += item.precio * item.cantidad
        
        totalTabla.innerHTML = `TOTAL: $${total}`;
    
    
}

let creaNutri = document.getElementById("creaNutri")
creaNutri.onclick = ()=>{crearTabla(productos[0])}
let creaEna = document.getElementById("creaEna")
creaEna.onclick = ()=>{crearTabla(productos[1])}
let creaXbody = document.getElementById("creaXbody")
creaXbody.onclick = ()=>{crearTabla(productos[2])}
let creaAMZ = document.getElementById("creaAMZ")
creaAMZ.onclick = ()=>{crearTabla(productos[3])}
let proteEna = document.getElementById("proteEna")
proteEna.onclick = ()=>{crearTabla(productos[4])}
let proteStar = document.getElementById("proteStar")
proteStar.onclick = ()=>{crearTabla(productos[5])}
let proteXbody = document.getElementById("proteXbody")
proteXbody.onclick = ()=>{crearTabla(productos[6])}
let proteEnaPro = document.getElementById("proteEnaPro")
proteEnaPro.onclick = ()=>{crearTabla(productos[7])}

let botonVaciarCarrito = document.getElementById("vaciarCarrito");
botonVaciarCarrito.onclick = () => {vaciarCarrito()}
