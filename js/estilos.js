class Cerveza {
    constructor (id, nombre, ibu, alcohol, precio, stock, img, litros) {
        this.id = id;
        this.nombre = nombre;
        this.ibu = ibu;
        this.alcohol = alcohol;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.litros = litros;
        this.cant = 1;
    }
    //metodos
    subTotal () {
        let subTot = this.precio * this.litros
        subTotales.push(subTot)
    }
}

//array para guardar los productos
let estilos = [];
//array para cargar subtotales de barril*precio
let subTotales = [0];
//array litros pedidos 
let litrosPedidos = [];