// clase producto
class Cerveza { 
    constructor (nombre, ibu, alcohol, precio, stock) {
        this.nombre = nombre; 
        this.ibu = ibu;
        this.alcohol = alcohol; 
        this.precio = precio;
        this.stock = stock;
    }    

    // metodos 
    barrilSelect () {
        
    }

    devDatos () {
        return `${this.nombre} - ${this.ibu} - ${this.alcohol} - ${this.precio} - ${this.stock}`
    }
}

//instancias de objeto - cerveza
const cerveza1 = new Cerveza ("Golden Ale", 16, 4.6, 110, 1000);
const cerveza2 = new Cerveza ("Scotch", 18, 4.6, 110, 1000);
const cerveza3 = new Cerveza ("Strong Ale", 24, 7.4, 130, 1000);
const cerveza4 = new Cerveza ("APA", 28, 5.5, 145, 1000);
const cerveza5 = new Cerveza ("AAA", 26, 5.5, 145, 1000);
const cerveza6 = new Cerveza ("Session IPA", 32, 4.0, 145, 1000);
const cerveza7 = new Cerveza ("Caramel IPA", 52, 6.2, 160, 1000);
const cerveza8 = new Cerveza ("American IPA", 52, 6.4, 160, 1000);
const cerveza9 = new Cerveza ("Juicy IPA", 16, 6.6, 220, 1000);

// array con todo los estilos de cerveza
let catalogo = [cerveza1,cerveza2,cerveza3,cerveza4,cerveza5,cerveza6,cerveza7,cerveza8,cerveza9];

//subir el array de estilos al local storage 
localStorage.setItem('catalogo cervezas', JSON.stringify(catalogo))

//variable para manejar los div de las cervezas
let card_cerveza = document.getElementById ('card_cerveza');

//recorrer el array y subir las cards al html
catalogo.forEach ((cerveza, indice) => {
    card_cerveza.innerHTML += `
    <div class="card" id="cerveza ${indice + 1}" style="width: 18rem;">
            <img src="./images/cerveza${indice + 1}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-text">${cerveza.nombre}</h4>
            <h5 class="card-text">IBU: ${cerveza.ibu}</h5>
            <h5 class="card-text">Alcohol: ${cerveza.alcohol}</h5>
            <h5 class="card-text">Precio por litro: $${cerveza.precio}</h5>
            <h5 class="card-text">Stock: ${cerveza.stock} litros</h5>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="margin-bottom: 10px;">Seleccionar barril</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">10</a></li>
                    <li><a class="dropdown-item" href="#">20</a></li>
                    <li><a class="dropdown-item" href="#">30</a></li>
                    <li><a class="dropdown-item" href="#">50</a></li>
                </ul>
            </div>
            <button type="submit" class="btn btn-primary" id="boton_agregar ${cerveza.nombre}">Agregar al carrito</button>
        </div>
    </div>`
    
    
})

//array carrito, guardo toda la card
let carrito = []
//subir el array del carrito al local storage vacio
localStorage.setItem('carrito cervezas',JSON.stringify(carrito))

//acumulador de precio para mostrar el total a pagar
// let acumPrecio = 0

//funcion boton agregar al carrito
for (let cerveza of catalogo) {  // recorro el catalogo con todos los estilos
    
    let boton_agregar = document.getElementById (`boton_agregar ${cerveza.nombre}`) //variable del boton
    boton_agregar.addEventListener ('click', agregarCerveza)//evento agregar al carrito
    
    function agregarCerveza () { //funcion agregar cerveza al carrito
        carrito.push(cerveza.nombre)//pusheo toda la card del estilo al array carrito (por ahora) 
        localStorage.setItem('carrito cervezas', JSON.stringify(carrito)) //envio toda la card del estilo seleccionado al carrito en el local storage
        console.log(carrito)
        alert ("Haz agregado un estilo")

    }
}

//variable boton para mostrar el carrito
let botonCarrito = document.getElementById ('btn_carrito')
//variable del div donde voy a insertar el html del carrito
let divCarrito = document.getElementById ('card_carrito')

botonCarrito.onclick = () => {
    divCarrito.innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${carrito}</h5>
            <button type="submit" class="btn btn-danger" id="boton_eliminar">Eliminar</button>
        </div>
    </div>`
    
}


// document.getElementById('btn_carrito').addEventListener ('click', () => {
//     let carritoParseado = JSON.parse(localStorage.getItem(carrito))

//     carritoParseado.forEach ((estilo, indice) =>  {
//         divCarrito.innerHTML += `
//         <div class="card" style="width: 18rem;" id="${indice +1}">
//             <div class="card-body">
//                 <h5 class="card-title">${estilo.nombre}</h5>
//                 <button type="submit" class="btn btn-danger" id="boton_eliminar ${indice + 1}">Eliminar</button>
//             </div>
//         </div>`
//     })

    
// })

