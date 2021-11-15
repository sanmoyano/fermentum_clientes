//clase padre de estilos
class Cerveza {
    constructor (nombre, ibu, alcohol, precio, stock) {
        this.nombre = nombre
        this.ibu = ibu
        this.alcohol = alcohol
        this.precio = precio    
        this.stock = stock
    }
    //Metodos
    pedido (litrosPedidos) { 
        let saldo =  this.precio * litrosPedidos
        console.log (`El litro de ${this.nombre} cuesta $${this.precio}. Estas llevando ${litrosPedidos} de litros. El saldo a pagar es $${saldo}`)
        
        if (litrosPedidos >= 200) {
            const descuento = 30
            saldo -= (saldo * descuento)/100
            console.log (`Tenes un descuento del %${descuento} por llevar 200 litros o mas de ${this.nombre}. El saldo a pagar es $${saldo}`)
        }
    }
    controlStock () {
        acumuladorStock += this.precio
    }
    total () {
        acumuladorSaldo += saldo
    }
}

//instancias del objeto
const golden = new Cerveza ("Golden", 16, 4.6, 110, 1000)
const scotch = new Cerveza ("Scotch", 18, 4.6, 110, 1000)
const strong = new Cerveza ("Strong", 24, 7.4, 130, 1000)
const apa = new Cerveza ("APA", 28, 5.5, 145, 1000)
const aaa = new Cerveza ("AAA", 26, 5.5,  145, 1000)
const session = new Cerveza ("Session IPA", 32, 4.0, 145, 1000)
const american = new Cerveza ("American IPA", 54, 6.4, 160, 1000)
const caramel = new Cerveza ("Caramel IPA", 52, 6.2, 160, 1000)
const juicy = new Cerveza ("Juicy IPA", 20, 6.6, 220, 1000)

//array donde cargo todo los estilos de cervezas
let estilos = [golden, scotch, strong, apa, aaa, session, american, caramel, juicy]

