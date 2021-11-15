//clase padre de estilos
class Cerveza {
    constructor (nombre, ibu, alcohol, precio, stock) {
        this.nombre = nombre
        this.ibu = ibu
        this.alcohol = alcohol
        this.precio = precio    
        this.stock = stock
    }
    
    pedido (litrosPedidos) { 
        let saldo =  this.precio * litrosPedidos
        console.log (`El litro de ${this.nombre} cuesta $${this.precio}. Estas llevando ${litrosPedidos} de litros. El saldo a pagar es $${saldo}`)
        
        if (litrosPedidos >= 200) {
            const descuento = 30
            saldo -= (saldo * descuento)/100
            console.log (`Tenes un descuento del %${descuento} por llevar 200 litros o mas de ${this.nombre}. El saldo a pagar es $${saldo}`)
            return this.pedido
        }
    }
}

//instancias del objeto
const golden = new Cerveza ("Golden", 16, 4.6, 110, 2000)
const scotch = new Cerveza ("Scotch", 18, 4.6, 110, 1000)
const strong = new Cerveza ("Strong", 24, 7.4, 130, 500)
const apa = new Cerveza ("APA", 28, 5.5, 145, 1300)
const aaa = new Cerveza ("AAA", 26, 5.5,  145, 1500)
const session = new Cerveza ("Session IPA", 32, 4.0, 145, 1500)
const american = new Cerveza ("American IPA", 54, 6.4, 160, 2500)
const caramel = new Cerveza ("Caramel IPA", 52, 6.2, 160, 1200)
const juicy = new Cerveza ("Juicy IPA", 20, 6.6, 220, 800)

//array donde cargo todo los estilos de cervezas
let estilos = [golden, scotch, strong, apa, aaa, session, american, caramel, juicy]

//variable stock total en fabrica 
let litrosEnFabrica = golden.stock + scotch.stock + strong.stock + apa.stock + aaa.stock + session.stock + american.stock + caramel.stock + juicy.stock
console.log (`Litros en fabrica: ${litrosEnFabrica}`)

// funcion consulta stock 
function consultarStock () {
    let consulta = prompt ("Bienvenido. Desea consultar el stock de nuestras cervezas? Y/N").toLowerCase ()
    if (consulta == "y") {
        alert (`Tenemos de todo:    golden ${golden.stock} litros
                                    soctch ${scotch.stock} litros
                                    strong ${strong.stock} litros
                                    apa ${apa.stock} litros
                                    aaa ${aaa.stock} litros
                                    session ${session.stock} litros
                                    american ${american.stock} litros
                                    caramel ${caramel.stock} litros
                                    juicy ${juicy.stock} litros`)
    }
}

//funcion ciclo para pedir estilo 
function pedirEstilo () {
    do {
        let estiloPedido = prompt ("Selecciona alguno de nuestros 9 estilos: golden, scotch, strong, apa, aaa, caramel, american, session, juicy").toLowerCase ()
        if (estiloPedido == "golden") {
            golden.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "scotch") {
            scotch.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "strong") {
            strong.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "apa") {
            apa.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "aaa") {
            aaa.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "session") {
            session.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "american") {
            american.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "caramel") {
            caramel.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else if (estiloPedido == "juicy") {
            juicy.pedido (parseInt(prompt("Ingresa la cantidad de litros deseada."))) 
        } else {
            alert ("Por favor ingresa un estilo.")
        }
        var seguirComprando = prompt ("Desea seguir comprando? Y/N")
    } while (seguirComprando == "y" && litrosEnFabrica != 0)
    if (litrosEnFabrica == 0) {
        alert ("Nos quedamos sin stock")
    } else {
        alert ("Gracias por su compra.")
    }
}

//ejecucion del codigo
consultarStock ()
pedirEstilo ()

