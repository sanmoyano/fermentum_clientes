// clase producto
class Cerveza { 
    constructor (nombre, ibu, alcohol, precio, barril1,barril2,barril3,barril4, stock) {
        this.nombre = nombre; 
        this.ibu = ibu;
        this.alcohol = alcohol; 
        this.precio = precio;
        this.barril1 = barril1;
        this.barril2 = barril2;
        this.barril3 = barril3;
        this.barril4 = barril4;
        this.stock = stock;
    }
    //metodos 

}

// class Barril {
//     constructor (litros) {
//         this.litros = litros;
//     }
// }

//instancias de objeto - cerveza
const cerveza1 = new Cerveza ("Golden", 16, 4.6, 110, 10, 20, 30, 50, 1000);
const cerveza2 = new Cerveza ("Scotch", 18, 4.6, 110, 10, 20, 30, 50, 1000);
const cerveza3 = new Cerveza ("Strong", 24, 7.4, 130, 10, 20, 30, 50, 1000);
const cerveza4 = new Cerveza ("APA", 28, 5.5, 145, 10, 20, 30, 50, 1000);
const cerveza5 = new Cerveza ("AAA", 26, 5.5, 145, 10, 20, 30, 50, 1000);
const cerveza6 = new Cerveza ("Session IPA", 32, 4.0, 145, 10, 20, 30, 50, 1000);
const cerveza7 = new Cerveza ("Caramel IPA", 52, 6.2, 160, 10, 20, 30, 50, 1000);
const cerveza8 = new Cerveza ("American IPA", 52, 6.4, 160, 10, 20, 30, 50, 1000);
const cerveza9 = new Cerveza ("Juicy IPA", 16, 6.6, 220, 10, 20, 30, 50, 1000);

// //instancia de objeto - barril 
// const barril1 = new Barril (10);
// const barril2 = new Barril (20);
// const barril3 = new Barril (30);
// const barril4 = new Barril (50);

// //barriles
// let barriles = [barril1,barril2,barril3,barril4];

// catalogo 
let catalogo = [cerveza1,cerveza2,cerveza3,cerveza4,cerveza5,cerveza6,cerveza7,cerveza8,cerveza9];
console.log (catalogo)

//subir catalogo
let card_cerveza = document.getElementById ('card_cerveza');

catalogo.forEach ((cerveza, indice) => {
    card_cerveza.innerHTML += `
    <div class="card" id="cerveza ${indice + 1}" style="width: 18rem;">
            <img src="./images/cerveza${indice +1}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-text">${cerveza.nombre}</h4>
            <h5 class="card-text">IBU: ${cerveza.ibu}</h5>
            <h5 class="card-text">Alcohol: ${cerveza.alcohol}</h5>
            <h5 class="card-text">Precio por litro: $${cerveza.precio}</h5>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="margin-bottom: 10px;">Seleccionar barril</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">${cerveza.barril1}</a></li>
                    <li><a class="dropdown-item" href="#">${cerveza.barril2}</a></li>
                    <li><a class="dropdown-item" href="#">${cerveza.barril3}</a></li>
                    <li><a class="dropdown-item" href="#">${cerveza.barril4}</a></li>
                </ul>
            </div>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>`
})
