//VARIABLES
let divCardCervezas = document.getElementById('card_cerveza'); //card de todas las cervezas
let barrilPedido;
//CONSULTA DE MI ARCHIVO JSON 
fetch('../JSON/productos.json')
    .then(promesa => promesa.json())
    .then (dataEstilos => {
        //recorro el array y lo muestro en el html agregando sus propiedades
        dataEstilos.forEach((estilo, indice) => {
            divCardCervezas.innerHTML += `
            <div id="estilos${indice}" class="card" style="width: 18rem;">    
                <img src="../images/${estilo.img}" class="card-img-top"> 
                <div class="card-body">
                    <h3 class="card-title">${estilo.nombre}</h3>
                    <h4 class="card-text">Ibu: ${estilo.ibu}</h4>
                    <h4 class="card-text">Alcohol: ${estilo.alcohol}</h4>
                    <h4 class="card-text">Precio/L: $${estilo.precio}</h4>
                </div>

                <!-- selec barril -->
                            <div id="litros_pedidos">
                                <div class="dropdown">
                                    <label>
                                        <select id="select_barril${indice}" class="btn btn-secondary" style="margin-top: 12px;">
                                            <option value="none">Selec. barril</option>
                                            <option id="select_litros" value="10">10 litros</option>
                                            <option id="select_litros" value="20">20 litros</option>
                                            <option id="select_litros" value="30">30 litros</option>
                                            <option id="select_litros" value="50">50 litros</option>
                                        </select>
                                    </label>
                                    <!-- eliminar del carrito  -->
                                </div>
                            </div>
                <button id="agregar_carrito${indice}" class="btn btn-warning" style="margin-top: 10px;">Agregar estilo</button>
            </div>
            `
            
        });

        //recorro el array para seleccionar el estilo
        dataEstilos.forEach((estilo, indice) => {
            let dropDownSelectBarril = document.getElementById(`select_barril${indice}`); //llamo al boton y lo asigno a una variable
            dropDownSelectBarril.addEventListener ('change', (e) => {
                let barrilPedido = parseInt(e.target.value);// agregar este valor a la propiedad litros del objeto  
                estilo["litros"] = barrilPedido 
                let subTotal = estilo.precio * barrilPedido
                subTotales.push(subTotal)
                localStorage.setItem('subTotal', JSON.stringify(subTotales))
                // if (estilos.find(cerveza => cerveza.litros == estilo.litros)) {
                //     let buscoLitrosEnArray = estilos.findIndex ()
                // }
            });
        });

        //recorro el array de nuevo para agregar productos al carrito
        dataEstilos.forEach((estilo, indice) => {
            //llamo al boton agregar estilo y lo meto en una variable 
            let btnAgregarCarrito = document.getElementById(`agregar_carrito${indice}`);
            btnAgregarCarrito.addEventListener ('click', () => {
                carritoItems (); 
                //consultar si la cerveza del array se encuentra en el LS
                if (estilos.find(cerveza => cerveza.nombre == estilo.nombre )) {
                    let buscoCervezaEnArrayEstilos = estilos.findIndex (cerveza => cerveza.nombre == estilo.nombre);
                    estilos[buscoCervezaEnArrayEstilos].cant ++; //si la cerveza esta, sumo las cantidades 
                    localStorage.setItem('carrito', JSON.stringify(estilos)); //creo el array y lo cargo al LS junto con el objeto
                } else { 
                    let cerveza = new Cerveza (estilo.id, estilo.nombre, estilo.ibu, estilo.alcohol, estilo.precio, estilo.stock, estilo.img, estilo.litros); //si la cerveza no esta, la creo
                    estilos.push(cerveza); // y hago el push de la cerveza al array de estilos
                    localStorage.setItem('carrito', JSON.stringify(estilos)); // creo el array y lo cargo al LS junto con el objeto
                };
            });
        });
    });    

//FUNCIONES
//sumar items en boton "mostrar pedidos"
const carritoItems = () => {
    let estiloItems = localStorage.getItem('carritoItems');
    estiloItems = parseInt(estiloItems); 
    if (estiloItems) {
        localStorage.setItem('carritoItems', estiloItems+ 1);
        document.querySelector('#boton_mostrar span').textContent = estiloItems + 1;
        alert("Agregaste un nuevo estilo al pedido");

    } else {
        localStorage.setItem('carritoItems', 1)
        alert("Agregaste un nuevo estilo al pedido");
        document.querySelector('#boton_mostrar span').textContent = 1;
    }
}


// //variables para manejar los elementos html
// let divCerveza = document.getElementById('card_cerveza'); //cards de todas las cervezas
// let btnCarrito = document.getElementById('boton_carrito');//boton agregar carrito
// let carritoCanvas = document.getElementById('producto_carrito');//canvas carrito
// let btnFinalizar = document.getElementById('finalizar_compra');//boton finalizar 
// let divTotalCarrito = document.getElementById('total_carrito');//total

// //array de sub totales de cada producto en el carrito 
// let arraySubTotales = []



//     //boton mostrar pedido
//     btnCarrito.addEventListener('click', () => {
//         let estilosStorage = JSON.parse(localStorage.getItem('carrito'));//consulto si el carrtio del LS esta vacio
//         if (estilosStorage == null) {
//             carritoCanvas.innerHTML = "";
//             carritoCanvas.innerHTML += `
//             <h6>No realizo ningun pedido.</h6>
//             `
//         } else { //si esta vacio creo las cards para mostrar los productos del carrito
//             carritoCanvas.innerHTML = "";
//             estilosStorage.forEach ((producto, indice) => {
//                 carritoCanvas.innerHTML += `
//                 <div class="card mb-3" id="estilos${indice}" style="max-width: 540px;">
//                     <div class="row g-0">
//                         <div class="col-md-4">
//                             <img src="../images/${producto.img}" class="img-fluid rounded-start">
//                         </div>
//                         <div class="col-md-8">
//                             <div class="card-body">
//                                 <h5 class="card-title">${producto.nombre}</h5>
//                                 <p class="card-title">$${producto.precio} /L</p>
//                             </div>
//                             <div class="dropdown">
//                                 <label>
//                                     <select id="select_barril${indice}" class="btn btn-secondary" style="margin-left: 10px; margin-right: 10px;">
//                                         <option value="none">Selec. barril</option>
//                                         <option id="select_litros" value="10">${producto.barril10} litros</option>
//                                         <option id="select_litros" value="20">${producto.barril20} litros</option>
//                                         <option id="select_litros" value="30">${producto.barril30} litros</option>
//                                         <option id="select_litros" value="50">${producto.barril50} litros</option>
//                                     </select>
//                                 </label>
//                                 <button id="eliminar_carrito${indice}" class="btn btn-danger"><i class="fas fa-times-circle"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 `
//             })
//             barrilSelect ();
//             eliminarDelCarrito ();
//             sumarArraySubTotales ();
//         }
//     })

//     //Agregar precio final y modificar el canvas
//     $(() => {
//         $("#boton_carrito").click(function totalApagar() {
//             let subTotales = JSON.parse(localStorage.getItem('subTot'));
//             if (subTotales == null) {
//                 $("#total_carrito").append(`<h4>TOTAL: $0,00</h4>`);
//             } else {
//                 $("#total_carrito").append(`<h4>TOTAL: $${sumarArraySubTotales()}</h4>`);
//             }
//         })
//     })

//     //finalizar compra
//     // btnFinalizar.addEventListener('click', () => console.log ("click"))
//     btnFinalizar.addEventListener ('click', () => {
//         let estilosEnCarrito = JSON.parse(localStorage.getItem('carrito'));
//         if (estilosEnCarrito == null) {
//             alert ("Debe agregregar al menos un estilo al pedido")
//         } else {
//             alert ("Gracias por su compra");
//             carritoCanvas.innerHTML = "";
//             carritoCanvas.innerHTML += `
//             <h6>No realizo ningun pedido.</h6>
//             `
//             localStorage.clear()
//             sessionStorage.clear()
//         }
//     })

//     //eliminar del carrito
//     const eliminarDelCarrito = () => {
//         const dataProductosCarrito = JSON.parse(localStorage.getItem('carrito'));
//         dataProductosCarrito.forEach((producto, indice) => {
//             document.getElementById(`eliminar_carrito${indice}`).addEventListener ('click', () => {
//                 carritoCanvas.parentNode.removeChild(carritoCanvas)
//                 estilos.splice(indice,1)
//                 arraySubTotales.splice(indice,1)
//                 localStorage.setItem('carrito', JSON.stringify(estilos));
//                 localStorage.setItem('subTot', JSON.stringify(arraySubTotales));
//             })
//         })
//     }

// //funcion para cargar el barril seleccionado y calcular el precio de cada articulo
// const barrilSelect = () => {
//     const dataProductosCarrito = JSON.parse(localStorage.getItem('carrito'));
//     dataProductosCarrito.forEach((producto, indice) => {
//         document.getElementById (`select_barril${indice}`).addEventListener('change', (e) => {
//             const seleccion = e.target.value; //capturo el valor del barril seleccionado y lo meto en una variable 
//             const multiplicacion = seleccion * producto.precio; // creo una variable con la seleccion y la multiplico por el precio    
//             // console.log(multiplicacion)

//             arraySubTotales.push(multiplicacion)//envio los totales a un array de totales 
//             localStorage.setItem('subTot', JSON.stringify(arraySubTotales));//los envio al localStorage 
//             // console.log(arraySubTotales)            
//         })
//     })
// }

// //funcion para sumar todos los subtotales del array 
// function sumarArraySubTotales () {
//     const subTotalesArray = JSON.parse(localStorage.getItem('subTot'));
//     let suma = (valor1, valor2) => valor1 + valor2; 
//     return subTotalesArray.reduce(suma);
// }


