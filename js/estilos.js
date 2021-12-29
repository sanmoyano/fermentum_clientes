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
        return this.precio * this.litros
    }
}

//array para guardar los productos
let estilos = [];
//array para cargar subtotales de barril*precio
let subTotales = [];
