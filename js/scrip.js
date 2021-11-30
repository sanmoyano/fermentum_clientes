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
const cerveza9 = new Cerveza ("Juicy IPA", 16, 6.6, 220, 10, 1000);

// catalogo 
let catalogo = [cerveza1,cerveza2,cerveza3,cerveza4,cerveza5,cerveza6,cerveza7,cerveza8,cerveza9];
// console.log (catalogo)

//carrito 
let carrito = []

//subir al local storage 
function saveLocal () {
    let aJson = JSON.stringify (catalogo)
    localStorage.setItem ("cervezas", aJson)
}
saveLocal ()


//subir catalogo
let card_cerveza = document.getElementById ('card_cerveza');
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
            <button type="button" class="btn btn-primary" id="boton_agregar ${indice + 1}">Agregar al carrito</button>
        </div>
    </div>`
    
    let btn_agregar = document.getElementById (`boton_agregar ${indice + 1}`);
    btn_agregar.addEventListener ('submit', (e) => {
        e.preventDefault ()

    })

})
















// let acumuladorTotal = 0

// for (let cerveza of catalogo) {
//     const btnAgregar = document.getElementById (`boton ${cerveza.precio}`);
//     // console.log (btnAgregar);

//     let total = document.getElementById (`cerveza ${cerveza.precio}`);
//     btnAgregar.onclick = function () {
//         total += cerveza.precio;
//         alert (`Se agrego al carrito ${cerveza.nombre}`)
//         console.log (`Se agrego al carrito ${cerveza.nombre} a ${total}`);

//         return total;
//     }
// }
