// primero crear clase de objeto - cerveza
class Cerveza {
    constructor (nombre, ibu, alcohol, precio, stock){
        this.nombre = nombre
        this.ibu = ibu
        this.alcohol = alcohol
        this.precio = precio
        this.stock = precio
    }
    //metodos del objeto - solo funcionan cuando llamo al objeto.
    datosEstilo () {
        return`${this.nombre} - ${this.ibu} - ${this.alcohol} - ${this.precio} - ${this.stock}`
    }
}

//crear todos los estilos del catalogo - instancias del objeto
const cerveza1 = new Cerveza ("Golden Ale", 16, 4.6, 110, 1000)
const cerveza2 = new Cerveza ("Scotch", 18, 4.6, 110, 1000)
const cerveza3 = new Cerveza ("Strong Ale", 24, 7.4, 130, 1000)
const cerveza4 = new Cerveza ("APA", 28, 5.5, 145, 1000)
const cerveza5 = new Cerveza ("AAA", 26, 5.5, 145, 1000)
const cerveza6 = new Cerveza ("Session IPA", 32, 4.0, 145, 1000)
const cerveza7 = new Cerveza ("Caramel IPA", 52, 6.2, 160, 1000)
const cerveza8 = new Cerveza ("American IPA", 52, 6.4, 160, 1000)
const cerveza9 = new Cerveza ("Juicy IPA", 16, 6.6, 220, 1000)

//creo un array para almacenar todos los estilos 
let catalogo = [cerveza1,cerveza2,cerveza3,cerveza4,cerveza5,cerveza6,cerveza7,cerveza8,cerveza9]
//mando el array al local storage y lo convierto en JSON
localStorage.setItem('catalogo', JSON.stringify(catalogo))

/*HTML*/
//hago un div con id para manejar las cards de las cervezas y subir todos los objetos del array. 
let divCard = document.getElementById('card_cerveza') //lo consulto


//Recorro el array catalogo para cargar todos los objetos al div anterior. 
catalogo.forEach((estilo, indice) => {
    divCard.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="./images/cerveza${indice + 1}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-text">${estilo.nombre}</h4>
            <h5 class="card-text">IBU: ${estilo.ibu}</h5>
            <h5 class="card-text">Alcohol: ${estilo.alcohol}</h5>
            <h5 class="card-text">Precio: $${estilo.precio}</h5>
            <h5 class="card-text">Stock: ${estilo.stock} litros</h5>
        </div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar barril</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" id="selec_barril" href="#">10</a></li>
                <li><a class="dropdown-item" id="selec_barril" href="#">20</a></li>
                <li><a class="dropdown-item" id="selec_barril" href="#">30</a></li>
                <li><a class="dropdown-item" id="selec_barril" href="#">50</a></li>
            </ul>
        </div>
        <button type="submit" class="btn btn-success" style="margin-top: 10px;" id="agregar_carrito ${estilo.nombre}">Agregar</button>
    </div>`    

})

//creo un array simil carrito, para se guarde lo que se agregue desde el evento del boton agregar carrito
let carrito = []

//cargo el carrito vacio en el localStorage - lo hago funcion para usarlo cuando se carge cada objeto. 
function carritoLocal () {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

//funcion agregar producto al array carrito
for (let estilo of catalogo) {
    let btn_agregar = document.getElementById(`agregar_carrito ${estilo.nombre}`)
    btn_agregar.addEventListener ('click', agregarEstilo)

    function agregarEstilo () {
        carrito.push (estilo.nombre) 
        carritoLocal ()
        alert ("Agregaste un estilo al carrito")
    }
}


// //hago una variable para obtener los objetos del array carrito parseados
// let carritoParseado = JSON.parse(localStorage.getItem(carrito))



//creo un div con id para manejar los elementos del array en carrito
let divCarrito = document.getElementById('carrito')

//creo un div con un boton para mostrar el carrito
let divMostrar = document.getElementById('mostrar_carrito')

//genero el evento para hacer click y mostrar el carrito
divMostrar.addEventListener ('click', () => {
    //recorro el array del carrito para mostrar los objetos dentro
    carrito.forEach ((estilo, indice) => {
        divCarrito.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${estilo.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${estilo.precio}</h6>
                <button type="button" class="btn btn-danger" style="margin-top: 10px;" id="eliminar_carrito ${indice + 1}">Eliminar</button>
            </div>
        </div>`
    })
})



