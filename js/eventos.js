   //VARIABLES
let btnMostrarPedido = document.getElementById ('boton_mostrar'); //boton "Mostrar pedido"
let divCanvasCarrito = document.getElementById ('producto_carrito'); //seccion antes de las cards del carrito
let divTotalCarrito = document.getElementById ('total_carrito'); //seccion donde esta el boton "Calcular pedido"
let btnCalcTotal = document.getElementById ('boton_total'); //boton "Calcular pedido"
let btnVaciar = document.getElementById('vaciar_carrito'); //boton "Vaciar carrito"
let btnFinalizar = document.getElementById('finalizar_compra'); //boton "Finalizar"

//MOSTRAR PEDIDO
btnMostrarPedido.addEventListener('click', () => { 
    let cervezasEnStorage = JSON.parse(localStorage.getItem('carrito')); //consulto el carrito en LS
    if (cervezasEnStorage == null) {
        divCanvasCarrito.innerHTML = ""; //para que no se repita el h6
        divCanvasCarrito.innerHTML = `
            <h6>No se realizo ningún pedido aún.</h6>
        `
    } else {
        divCanvasCarrito.innerHTML = "";//para que no se repitan los productos
        //recorro el array de cervezas en el LS y lo cargo en el canvas del html
        cervezasEnStorage.forEach((estilo, indice) => {
            divCanvasCarrito.innerHTML += `
            <div id="cerveza${indice}" class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../images/${estilo.img}" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <!-- card del carrito descrip  -->
                        <div class="card-body">
                            <div class="titulo-estilo">
                                <h5 class="card-title">${estilo.nombre}</h5>    
                            </div>
                                <p class="card-title">$${estilo.precio}</p>
                                <p class="card-title" id="valor_barril">Barril de ${estilo.litros} litros</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
    };
    
    llamarCarrito ();
});

//EVENTOS
//vaciar carrito
btnVaciar.addEventListener ('click', () => {
    eliminar();
});
//finalizar compra
btnFinalizar.addEventListener ('click', () => {
    eliminar();
    alert("Gracias por su compra");
});


//FUNCIONES
//tengo que leer el array del carrito para poder sumar los subtotales
const llamarCarrito = () => {
    let arrayCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(arrayCarrito == null ) {
        //capturo el null y no hago nada.
    } else {
        let mapSubTot = arrayCarrito.map (estilo => {
            return  estilo.precio * estilo.litros; // me devuelve estos valores en un nuevo array
        });
        localStorage.setItem('subTotal', JSON.stringify(mapSubTot));// cargo el array en el LS
    }
};

//funcion sumar sub totales del array subTotales
const sumaSubTotales = () => {
    const subTotales = JSON.parse(localStorage.getItem('subTotal'));//consulto todos los subTotales y los asigno a una variable
    let suma = (valor1, valor2) => valor1 + valor2;
    return subTotales.reduce(suma);//me reduce todos los subTotales del array sumados a un solo valor
};


//funcion mostrar total
const mostrarTotal = () => {
    btnCalcTotal.addEventListener('click', () => {
        const subTotales = JSON.parse(localStorage.getItem('subTotal'));
        let h4 = document.createElement("h4");
        if (subTotales == null) {
            alert("No realizo su pedido")
        } else {
            h4.innerHTML += `
            <h4 id="h4_total"> Total: $${sumaSubTotales()} </h4>
            <p> Los precios incluyen IVA e impuestos al acohol. </p>
            `
            divTotalCarrito.appendChild(h4);

        }
    });
};
mostrarTotal ();

//funcion eleminar del carrito todo
function eliminar () {
    divCanvasCarrito.innerHTML = `
        <h6>No se realizo ningún pedido aún.</h6>`
    localStorage.clear('carrito, subTotal, carritoItems');
    $(() => {
        $('#total_carrito').empty()
    });
};



