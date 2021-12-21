//VARIABLES
let btnMostrarPedido = document.getElementById ('boton_mostrar');//boton "Mostrar pedido"
let divCanvasCarrito = document.getElementById ('')

//MOSTRAR PEDIDO
// btnMostrarPedido.addEventListener ('click', () => console.log("click"))
btnMostrarPedido.addEventListener('click', () => { 
    let cervezasEnStorage = JSON.parse(localStorage.getItem('carrito')); //consulto el carrito en LS
    if (cervezasEnStorage == null) {

    }
})

