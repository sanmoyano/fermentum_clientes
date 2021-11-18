//CLASE PADRE
class Cerveza {
    constructor (nombre, ibu, alcohol, precio, stock) {
        this.nombre = nombre
        this.ibu = ibu
        this.alcohol = alcohol
        this.precio = precio    
        this.stock = stock 
    }
    pedido (litrosPedidos) {
        let saldo = this.precio * litrosPedidos
        const descuento = 10
        
        if ((litrosPedidos >= 30) || (saldo >= 5000)) {
            saldo -= (saldo * descuento)/100
            //mensaje al admin
            console.log (`El cliente pidio ${litrosPedidos} litros de ${this.nombre}. Tiene descuento y debe abonar $${saldo}`)
            //mensaje al usuario
            alert (`Tenes un descuento del %${descuento} por llevar mas de 200 litros o superar el monto de $5000 de ${this.nombre}. El saldo a pagar es $${saldo}`)
        } else {
            //mensaje al admin
            console.log (`El cliente pidio ${litrosPedidos} litros de ${this.nombre}. Debe abonar $${saldo}`)
            //mensaje al usuario
            alert (`El litro de ${this.nombre} cuesta $${this.precio}. Estas llevando ${litrosPedidos} de litros. El saldo a   pagar es $${saldo}`)
        }
        return (saldo)
        
    }
    totalApagar (saldo) {
        let saldoTotal = saldo
        acumuladorSaldo += saldoTotal
    }
    stockControl (litrosPedidos) {
        let stockFinal = this.stock - litrosPedidos
        //mensaje admin
        console.log (`Quedan ${stockFinal} litros de ${this.nombre}`)
    }
    retornarDatos () {
        return `
            ${this.nombre},
            ${this.ibu},
            ${this.alcohol},
            ${this.precio},
            ${this.stock}.
        `
    }
}

let acumuladorSaldo = 0
let acumuladorStock = 0
let litrosEnFabrica = 1500000

//INSTANCIAS DEL OBJETO
const golden = new Cerveza ("Golden", 16, 4.6, 110, 2000)
const scotch = new Cerveza ("Scotch", 18, 4.6, 110, 1000)
const strong = new Cerveza ("Strong", 24, 7.4, 130, 500)
const apa = new Cerveza ("APA", 28, 5.5, 145, 1300)
const aaa = new Cerveza ("AAA", 26, 5.5,  145, 1500)
const session = new Cerveza ("Session IPA", 32, 4.0, 145, 1500)
const american = new Cerveza ("American IPA", 54, 6.4, 160, 2500)
const caramel = new Cerveza ("Caramel IPA", 52, 6.2, 160, 1200)
const juicy = new Cerveza ("Juicy IPA", 20, 6.6, 220, 800)


//ARRAY - CATALOGO DE ESTILOS
const catalogo = [golden, scotch, strong, apa, aaa, session, american, caramel, juicy]
console.log (catalogo)

//consultar catalogo
function consultarCatalogo () {
    for (let i = 0; i < catalogo.length; i++) {
        alert (`Bienvenido, este es nuestro catalogo: ${catalogo[i].nombre}, $${catalogo[i].precio} por litro`)
    }
}

function acumuladorDeStock () {
    for (let i = 0; i < catalogo.length; i++) {
        acumuladorStock += catalogo[i].stock
        return (acumuladorStock)
    }
}

//ciclo de compra
function pedirEstilo () {
    consultarCatalogo ()
    do {
        let estiloPedido = prompt ("Selecciona alguno de nuestros 9 estilos: golden, scotch, strong, apa, aaa, caramel, american, session, juicy").toLowerCase ()
        if (estiloPedido == "golden") {
            golden.totalApagar (golden.pedido(parseInt(prompt("Ingresa la cantidad de litros deseada"))))
        } else if (estiloPedido == "scotch") {
            scotch.totalApagar (scotch.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada.")))) 
        } else if (estiloPedido == "strong") {
            strong.totalApagar (strong.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))))
        } else if (estiloPedido == "apa") {
            apa.totalApagar (apa.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada.")))) 
        } else if (estiloPedido == "aaa") {
            aaa.totalApagar (aaa.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada.")))) 
        } else if (estiloPedido == "session") {
            session.totalApagar (session.pedido(parseInt(prompt("Ingresa la cantidad de litros deseada."))))
        } else if (estiloPedido == "american") {
            american.totalApagar (american.pedido(parseInt(prompt("Ingresa la cantidad de litros deseada."))))
        } else if (estiloPedido == "caramel") {
            caramel.totalApagar (caramel.pedido(parseInt(prompt("Ingresa la cantidad de litros deseada."))))
        } else if (estiloPedido == "juicy") {
            juicy.totalApagar (juicy.pedido(parseInt(prompt("Ingresa la cantidad de litros deseada.")))) 
        } else {
            alert ("Por favor ingresa un estilo.")
        }
        var seguirComprando = prompt ("Desea seguir comprando? Y/N")
    } while ((seguirComprando != "n") && (litrosEnFabrica !=0))
    if (litrosEnFabrica == "0") {
        alert ("Nos quedamos sin stock") 
    } else {
        //mensaje al usuario
        alert (`Gracias por su compra, el saldo a pagar es $${acumuladorSaldo}`)
        //mensaje al admin
        console.log (`Ingreso una compra por $${acumuladorSaldo}`)
    }
}

//LLAMADO AL PROGRAMA
acumuladorDeStock ()
pedirEstilo ()




