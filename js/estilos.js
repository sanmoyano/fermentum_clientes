class Cerveza {
    constructor (id, nombre, ibu, alcohol, precio, stock, img, barril10, barril20,barril30,barril50){
        this.id = id;
        this.nombre = nombre;
        this.ibu = ibu;
        this.alcohol = alcohol;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.barril10 = barril10;
        this.barril20 = barril20; 
        this.barril30 = barril30;
        this.barril50 = barril50;
        this.cant = 1;
    }
}

//array para guardar los productos
let estilos = [];
//array para cargar subtotales de barril*precio
let subTotales = [];