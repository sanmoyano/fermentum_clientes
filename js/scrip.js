//variables para manejar los elementos html
let divCerveza = document.getElementById('card_cerveza'); //cards de todas las cervezas
let btnCarrito = document.getElementById('boton_carrito');//boton agregar carrito
let carritoCanvas = document.getElementById('producto_carrito');//canvas carrito
let btnFinalizar = document.getElementById('boton_finalizar');//boton finalizar 
//variable acumulador total
let acumTot = 0;


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
            document.getElementById(`agregar_carrito ${indice}`).addEventListener ('click', () => {
                if (estilos.find(estilo => estilo.nombre == producto.nombre )) { //consultar si el producto ya esta cargado LS
                    let index = estilos.findIndex(estilo => estilo.nombre == producto.nombre);
                    estilos[index].cant ++; //si esta, sumar productos en cantidad
                    localStorage.setItem('carrito', JSON.stringify(estilos)); //sumarlo al lS
                } else {
                    let estilo = new Cerveza (producto.id, producto.nombre, producto.ibu, producto.alcohol, producto.precio, producto.stock, producto.img, producto.barril10, producto.barril20, producto.barril30, producto.barril50);
                    estilos.push(estilo);//si no esta, crear producto y agregarlo al array
                    localStorage.setItem('carrito', JSON.stringify(estilos));//devolverlo al lS
                }
            })
        })

    })

    btnCarrito.addEventListener('click', () => {
        let estilosStorage = JSON.parse(localStorage.getItem('carrito'));
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
                                    <option value="10">${producto.barril10} litros</option>
                                    <option value="20">${producto.barril20} litros</option>
                                    <option value="30">${producto.barril30} litros</option>
                                    <option value="50">${producto.barril50} litros</option>
                                </select>
                            </label>
                            <button id="eliminar_carrito${indice}" class="btn btn-danger"><i class="fas fa-times-circle"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        barrilSelect ()
    })

    //funcion para cargar el barril seleccionado
    const barrilSelect = () => {
        const dataProductosCarrito = JSON.parse(localStorage.getItem('carrito'));
        dataProductosCarrito.forEach((producto, indice) => {
            document.getElementById (`select_barril${indice}`).addEventListener('change', (e) => {
                const seleccion = e.target.value;
                let total = seleccion * producto.precio
                console.log(total)

            })
        })
    }

































