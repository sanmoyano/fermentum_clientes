//VARIABLES
let btnMostrarPedido = document.getElementById ('boton_mostrar');//boton "Mostrar pedido"
let divCanvasCarrito = document.getElementById ('producto_carrito');//seccion antes de las cards del carrito
let btnCalcTotal = document.getElementById ('boton_total');//boton "Calcular pedido"

//MOSTRAR PEDIDO
// btnMostrarPedido.addEventListener ('click', () => console.log("click"))
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
                                <h5 class="card-title">${estilo.nombre}</h5>
                                <p class="card-title">$${estilo.precio}</p>

                            <!-- selec barril -->
                            <div id="litros_pedidos">
                                <div class="dropdown">
                                    <label>
                                        <select id="select_barril${indice}" class="btn btn-secondary" style="margin-left: 10px; margin-right: 10px;">
                                            <option value="none">Selec. barril</option>
                                            <option id="select_litros" value="10">${estilo.barril10} litros</option>
                                            <option id="select_litros" value="20">${estilo.barril20} litros</option>
                                            <option id="select_litros" value="30">${estilo.barril30} litros</option>
                                            <option id="select_litros" value="50">${estilo.barril50} litros</option>
                                        </select>
                                    </label>
                                    <!-- eliminar del carrito  -->
                                    <button id="eliminar_carrito${indice}" class="btn btn-danger"><i class="fas fa-times-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        });

        seleccionarBarril ();
        sumaSubTotales ();
        mostrarTotal ();
    };
});

//FUNCIONES
//funcion seleccionar barril 
const seleccionarBarril = () => {
    const estilosEnCarrito = JSON.parse(localStorage.getItem('carrito'));//consulto los estilos en carrito del LS y los asigno a una variable
    //recorro esos estilos del carrito del LS
    estilosEnCarrito.forEach ((estilo, indice) => {
        let dropSelectBarril = document.getElementById(`select_barril${indice}`); //llamo al dropdown y lo asigno a una variable
        //asigno evento change para seleccionar las opcione
        dropSelectBarril.addEventListener ('change', (e) => {
            const barrilSelect = e.target.value; //capturo la seleccion en una variable 
            const estiloSubTot = barrilSelect * estilo.precio; // capturo el resultado de multiplicar precio por la seleccion
            subTotales.push(estiloSubTot); //cargo el subtotal en el array de subTotales
            localStorage.setItem('subTotal', JSON.stringify(subTotales));//envio el array de subTotales al LS
        });
        
    });
};

//funcion sumar sub totales del array subTotales
const sumaSubTotales = () => {
    const subTotales = JSON.parse(localStorage.getItem('subTotal'));//consulto todos los subTotales y los asigno a una variable
    let suma = (valor1, valor2) => valor1 + valor2;
    return subTotales.reduce(suma);//me reduce todos los subTotales del array sumados a un solo valor
};

//funcion mostrar total 
const mostrarTotal = () => {
    // btnCalcTotal.addEventListener('click', () => console.log("clck"))
    btnCalcTotal.addEventListener('click', () => {
        const subTotales = JSON.parse(localStorage.getItem('subTotal'));
        if (subTotales == null) {
            document.getElementById('total_carrito').append('<h4>Total: $0,00 </h4>');
        } else {
            document.getElementById('total_carrito').append(`<button class="btn btn-dark">`)
        }
    });
};


