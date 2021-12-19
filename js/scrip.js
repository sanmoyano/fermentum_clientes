//variables para manejar los elementos html
let divCerveza = document.getElementById('card_cerveza'); //cards de todas las cervezas
let btnCarrito = document.getElementById('boton_carrito');//boton agregar carrito
let carritoCanvas = document.getElementById('producto_carrito');//canvas carrito
let btnFinalizar = document.getElementById('boton_finalizar');//boton finalizar 
let divTotalCarrito = document.getElementById('total_carrito');//total
//variable acumulador total
let acumTot = 0;
//array de sub totales de cada producto en el carrito 
let arraySubTotales = []

//consulto mi base de datos de producto local y la cargo en el html
fetch ('../JSON/productos.json')
    .then (promesa => promesa.json())
    .then (dataProductos => {
        dataProductos.forEach ((producto, indice) => {
            divCerveza.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;">    
                <img src="../images/${producto.img}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <h4 class="card-text">Ibu: ${producto.ibu}</h4>
                    <h4 class="card-text">Alcohol: ${producto.alcohol}</h4>
                    <h4 class="card-text">Precio/L: $${producto.precio}</h4>
                </div>
                <button id="agregar_carrito ${indice}" class="btn btn-warning" style="margin-top: 10px;">Agregar estilo</button>
            </div>`
        });        

        //agregar un producto al carrito
        dataProductos.forEach ((producto, indice) => {
            //boton agregar al carrito 
            document.getElementById(`agregar_carrito ${indice}`).addEventListener ('click', () => {
                //un if para consultar si el producto se encuentra cargado en el localStorage 
                if (estilos.find(estilo => estilo.nombre == producto.nombre )) { //consultar si el producto ya esta cargado LS
                    let index = estilos.findIndex(estilo => estilo.nombre == producto.nombre);//consulto en el array estilos 
                    estilos[index].cant ++; //si esta, sumar productos en cantidad
                    localStorage.setItem('carrito', JSON.stringify(estilos)); //sumarlo al lS
                } else {
                    let estilo = new Cerveza (producto.id, producto.nombre, producto.ibu, producto.alcohol, producto.precio, producto.stock, producto.img, producto.barril10, producto.barril20, producto.barril30, producto.barril50);
                    estilos.push(estilo);//si no esta, crear producto y agregarlo al array
                    localStorage.setItem('carrito', JSON.stringify(estilos));//devolverlo al lS
                    alert("Agregaste un estilo al pedido");
                }
            })
        })
    })

    //boton mostrar pedido
    btnCarrito.addEventListener('click', () => {
        let estilosStorage = JSON.parse(localStorage.getItem('carrito'));//consulto si el carrtio del LS esta vacio
        if (estilosStorage == null) {
            carritoCanvas.innerHTML = "";
            carritoCanvas.innerHTML += `
            <h6>No realizo ningun pedido.</h6>
            `
        } else { //si esta vacio creo las cards para mostrar los productos del carrito
            carritoCanvas.innerHTML = "";
            estilosStorage.forEach ((producto, indice) => {
                carritoCanvas.innerHTML += `
                <div class="card mb-3" id="estilos${indice}" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../images/${producto.img}" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-title">$${producto.precio} /L</p>
                            </div>
                            <div class="dropdown">
                                <label>
                                    <select id="select_barril${indice}" class="btn btn-secondary" style="margin-left: 10px; margin-right: 10px;">
                                        <option value="none">Selec. barril</option>
                                        <option id="select_litros" value="10">${producto.barril10} litros</option>
                                        <option id="select_litros" value="20">${producto.barril20} litros</option>
                                        <option id="select_litros" value="30">${producto.barril30} litros</option>
                                        <option id="select_litros" value="50">${producto.barril50} litros</option>
                                    </select>
                                </label>
                                <button id="eliminar_carrito${indice}" class="btn btn-danger"><i class="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
            barrilSelect ();
            sumarArraySubTotales ();
        }
    })


//funcion para cargar el barril seleccionado y calcular el precio de cada articulo
const barrilSelect = () => {
    const dataProductosCarrito = JSON.parse(localStorage.getItem('carrito'));
    dataProductosCarrito.forEach((producto, indice) => {
        document.getElementById (`select_barril${indice}`).addEventListener('change', (e) => {
            const seleccion = e.target.value; //capturo el valor del barril seleccionado y lo meto en una variable 
            const multiplicacion = seleccion * producto.precio; // creo una variable con la seleccion y la multiplico por el precio    
            // console.log(multiplicacion)

            arraySubTotales.push(multiplicacion)//envio los totales a un array de totales 
            localStorage.setItem('subTot', JSON.stringify(arraySubTotales));//los envio al localStorage 
            // console.log(arraySubTotales)            
        })
    })
}

function sumarArraySubTotales () {
    const subTotalesArray = JSON.parse(localStorage.getItem('subTot'));
    let suma = (valor1, valor2) => valor1 + valor2; 
    console.log(subTotalesArray.reduce(suma))
}


































