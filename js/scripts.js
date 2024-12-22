console.log("ok good")

const productos = [
{
articulo: "Articulo 10002",
descripcion: "Mate Torpedo exclusivo calado de maestro platero",
descripcion_expandida: "Mate Torpedo exclusivo revestido en cuero de primera calidad y engarzado con plata trabajada",
imagen: "imagenes/mate1.JPG",
precio: "10980",
},
{
articulo: "Articulo 10003",
descripcion: "Mate Imperial exclusivo cuero crudo de maestro platero ",
descripcion_expandida: "Mate Imperial exclusivo revestido en cuero de primera calidad y engarzado con plata trabajada",
imagen: "imagenes/mate2.JPG",
precio: "14980",
},
{
articulo: "Articulo 10004",
descripcion: "Bombillon Pico de loro desarmable acero inoxidable caño grueso",
descripcion_expandida: "Bombillon Pico de loro desarmable para su mejor limpieza acero inoxidable caño grueso",
imagen: "imagenes/bombilla1.JPG",
precio: "9980",
},
{
articulo: "Articulo 10005",
descripcion: "Bombillon recto cincelado desarmable acero inoxidable caño grueso",
descripcion_expandida: "Bombillon recto cincelado desarmable para su mejor limpieza acero inoxidable caño grueso",
imagen: "imagenes/bombilla.JPG",
precio: "8796",
},
]

console.log(productos[3].articulo);
/* 
let aticuloHTML ="";

for(let indice = 0 > productos.length; indice++){
}*/

let aticuloHTML = "";

for(let indice = 0; indice < productos.length; indice++){
aticuloHTML += `
                    <div class="articulo">
                      <img src=${productos[indice].imagen}
                      <h2>${productos[indice].articulo}</h2>
                      <h3>precio $${productos[indice].precio}</h3>
                     
                      <input class="btnAgregarCarrito" type="button" value="Agregar al carrito">
                      <input Class="btnAgregarDescripcion" type="button" value="ver + info">

                    </div>
`;
}

console.log(aticuloHTML);

const contenedorArticulos = document.getElementById("contenedorArticulos");
contenedorArticulos.innerHTML = aticuloHTML


// guardar en variables los elementos html que vamos a modificar
const btnesAgregar = document.querySelectorAll(".btnAgregarCarrito");

console.log(btnesAgregar); 

const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("#carrito p");
console.log(totalCarrito);

let totalAPagar = 0;

let mensDescrip = document.getElementById("mensDescrip")



//****Agregar listener a los botones de los articulos  */

for(let indice = 0; indice < btnesAgregar.length; indice++){

function agregarElemCarrito() {

console.log("clic" + indice);
const elementoLi = document.createElement("li");

elementoLi.innerText = `${productos[indice].articulo} ${productos[indice].descripcion} $ ${productos[indice].precio}`;
console.log(elementoLi);
listaCarrito.appendChild(elementoLi);

console.log(productos[indice].precio);

totalAPagar += parseFloat( productos[indice].precio) ;

console.log(totalAPagar);
totalCarrito.innerText = "Total a pagar: $ " + totalAPagar;
mensajePagarCarrito.innerText = "";



}



btnesAgregar[indice].addEventListener("click", agregarElemCarrito);

};

const btnBorrar =  document.querySelector("#btnBorrar");
console.log(btnBorrar);

/*const mensajePagarCarro = document.getElementById("mensajeCarro");*/
const mensajePagarCarrito = document.getElementById("mensajeCarrito");


function borrarCarro(){
 listaCarrito.innerHTML = "";
 totalAPagar = 0;
 totalCarrito.innerText = "Total a pagar: $ " + totalAPagar;
  mensajePagarCarrito.innerText = "";
  listaDescripcion.innerText = "";
};
console.log(totalAPagar);




const btnPagar = document.querySelector("#btnPagar");

btnBorrar.addEventListener("click", borrarCarro );


function irFacturacion(){

  

/*if(listaCarrito.innerText === ""){
  mensajePagarCarro.innerText = "no has seleccionado ningun producto"
} else {

  window.location.href = "./facturacion.html"

   
}*/
if (listaCarrito.innerText === "") {
  mensajePagarCarrito.innerText = "No has seleccionado ningún producto..."
} else {
  window.location.href = "./facturacion.html"
}
}







btnPagar.addEventListener("click" , irFacturacion  );




/**                   intento 55555                


let descArticulosHTML =`






` 

mensDescrip.insertAdjacentText = ${productos[indice].descripcion_expandida;  

mensDescrip     **/






const btnesAgregarDescripcion = document.querySelectorAll(".btnAgregarDescripcion ");


console.log(btnesAgregarDescripcion);

const listaDescripcion = document.querySelector("#mensDescrip ul");

console.log(listaDescripcion);

for(let indice = 0; indice < btnesAgregarDescripcion.length; indice++){

function agregarElementoDescripcion(){
console.log("click que ande lpm");
const elemDescrLI  = document.createElement("li");
elemDescrLI.innerText =`Descripcion ${productos[indice].descripcion_expandida}`;
listaDescripcion .appendChild(elemDescrLI);





console.log(elemDescrLI);





}







  btnesAgregarDescripcion[indice].addEventListener("click", agregarElementoDescripcion)







}







