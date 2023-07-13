let carrito = [];
let total = 0;
index = JSON.parse(localStorage.getItem('index'));
let carritoJSON;
let nuevoItem;
let productos = [
    {nombre:'Creatina', marca:'Nutrilab', precio: 1200},{nombre:'Creatina', marca:'ENA', precio: 3000},{nombre:'Creatina', marca:'Xbody', precio: 1500},{nombre:'Creatina', marca:'AMZ', precio: 2000},
    {nombre:'Proteina', marca:'ENA', precio: 4000},{nombre:'Proteina', marca:'Star Nutrition', precio: 4000},{nombre:'Proteina', marca:'Xbody', precio: 3000},{nombre:'Proteina', marca:'ENA X-pro', precio: 5000}
];
carrito = JSON.parse(localStorage.getItem('carrito'))

const bodyTabla = document.getElementById("tbody");
const totalTabla = document.getElementById("total")

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
let botonComprarCarrito = document.getElementById("comprarCarrito");
botonComprarCarrito.onclick = () => {comprarCarrito()}

function actualizarCarrito (){
  localStorage.setItem('index',index);
  localStorage.setItem('carrito',(JSON.stringify(carrito)));
}

function crearTabla(item){
    item.cantidad=1;

    //Verifico si el item seleccionado por el usuario ya esta en la tabla y carrito
    nuevoItem = verificarItem(item);
    //Si existe reemplazo la cantidad y el subtotal de ese producto
    if(nuevoItem){
        let cantidadExistente = document.getElementById(`cant${nuevoItem.nombre}${nuevoItem.marca}`)
        let subTotal = document.getElementById(`precio${nuevoItem.nombre}${nuevoItem.marca}`)
        cantidadExistente.innerHTML = item.cantidad + parseInt(cantidadExistente.innerHTML)
        subTotal.innerHTML = (item.precio * item.cantidad) + parseInt(subTotal.innerHTML)
        total += item.precio
        
        item.cantidad = cantidadExistente.innerHTML
        carrito[nuevoItem.index].cantidad = item.cantidad

        totalTabla.innerHTML = `TOTAL: $${total}`;
        
    }else{
      item.index = index;
      bodyTabla.innerHTML = bodyTabla.innerHTML + `
          <tr>
              <td>${item.nombre}</td>
              <td>${item.marca}</td>
              <td>${item.precio}</td>
              <td id="cant${item.nombre}${item.marca}">${item.cantidad}</td>
              <td id="precio${item.nombre}${item.marca}">${item.precio}</td>
              <td class="p-1"><button type="button" class="btn btn-danger" onclick="removerItem(${item.index})">Remover</button></td>
          </tr>
          `;

      total += item.precio
      totalTabla.innerHTML = `TOTAL: $${total}`;
      index++;
      localStorage.setItem('index',index)
      carrito[index-1]=item;       
    }
    carritoJSON = JSON.stringify(carrito)
    localStorage.setItem('carrito',carritoJSON)
    
}



function verificarItem(item){
  ///Si el indice es distinto a 0, es decir que no es el primer item que se ingresa, verifico si en el carrito ya está el item seleccionado por el usuario. Si está, lo devuelvo
    if(index !== 0){
        nuevoItem = carrito.find((elemento) => (elemento.nombre === item.nombre)&& (elemento.marca === item.marca))
        if(nuevoItem){
            return nuevoItem;
        }
    }
}

function vaciarCarrito(){
  bodyTabla.innerHTML = ``;
  total = 0;
  carrito = [];
  index = 0;
  actualizarCarrito();
  totalTabla.innerHTML = `TOTAL: $${total}`;

}


for(item of carrito){
    bodyTabla.innerHTML = bodyTabla.innerHTML + `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.marca}</td>
                <td>${item.precio}</td>
                <td id="cant${item.nombre}${item.marca}">${item.cantidad}</td>
                <td id="precio${item.nombre}${item.marca}">${item.precio * item.cantidad}</td>
                <td class="p-1"><button type="button" class="btn btn-danger" onclick="removerItem(${item.index})">Remover</button></td>
            </tr>
            `;
    total += item.precio * item.cantidad
    
    totalTabla.innerHTML = `TOTAL: $${total}`;
}



function removerItem(index){
  console.log(carrito.length)
  if(carrito.length === 1){
    bodyTabla.innerHTML = ``,
    total = 0,
    carrito = [],
    index = 0,
    actualizarCarrito(),
    totalTabla.innerHTML = `TOTAL: $${total}`
  }else{
    total -= carrito[index].precio * carrito[index].cantidad
    carrito.splice(index,1)
    bodyTabla.innerHTML=``;
    for(let i = index;i<carrito.length;i++){
      carrito[i].index -= 1;
    }
    actualizarCarrito();
    for(item of carrito){
      bodyTabla.innerHTML = bodyTabla.innerHTML + `
              <tr>
                  <td>${item.nombre}</td>
                  <td>${item.marca}</td>
                  <td>${item.precio}</td>
                  <td id="cant${item.nombre}${item.marca}">${item.cantidad}</td>
                  <td id="precio${item.nombre}${item.marca}">${item.precio * item.cantidad}</td>
                  <td class="p-1"><button type="button" class="btn btn-danger" id="removeItem" onclick="removerItem(${item.index})">Remover</button></td>
              </tr>
              `;
      totalTabla.innerHTML = `TOTAL: $${total}`;
    } 
  }
}
