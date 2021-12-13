//consulto el div para manejar las cards del html
let divCerveza = document.getElementById('card_cerveza');

//consulto mi base de datos de producto local y la cargo en el html
fetch ('../JSON/productos.json')
    .then (promesa => promesa.json())
    .then (dataProductos => {
        dataProductos.forEach(producto => {
            divCerveza.innerHTML += `
            <div class="card" id="producto${producto.id}" style="width: 18rem;">    
                <img src="../images/${producto.img}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <h4 class="card-text">Ibu: ${producto.ibu}</h4>
                    <h4 class="card-text">Alcohol: ${producto.alcohol}</h4>
                    <h4 class="card-text">Precio/L: $${producto.precio}</h4>
                </div>
                <div class="dropdown">
                    <select id="select_barril" class="btn btn-secondary" style="margin-bottom: 10px;">
                        <option value:"none">Seleccionar barril</option>
                        <option value:"10">10 litros</option>
                        <option value:"20">20 litros</option>
                        <option value:"30">30 litros</option>
                        <option value:"50">50 litros</option>
                    </select>
                </div>
                <button id="agregar_carrito ${producto.nombre}" class="btn btn-warning">Agregar estilo</button>
            </div>`
        });        

        //array carrito vacio y creo funcion para cargarlo en el localStorage.
        let carrito = [];
        function setLocal () {
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert ("Agregaste un estilo");
            // console.log(carrito)
        }
        //varaible para sumar totales.
        let acumTot = 0;

        //recorro el array de productos  para cargarlos en el array carrito y enviar al localStorage
        for (let producto of dataProductos) {
            let btnAgregar = document.getElementById(`agregar_carrito ${producto.nombre}`);
            btnAgregar.addEventListener ('click', agregarProd);
            
            //funcion agregar al carrito el producto 
            function agregarProd () {
                carrito.push(producto.nombre);
                setLocal ();
            }    
        }

        //recorro el array para agregar el precio al carrito 
        for (let producto of dataProductos) {
            let btnAgregar = document.getElementById(`agregar_carrito ${producto.nombre}`);
            btnAgregar.addEventListener ('click', agregarPrecio);

            //funcion agegar precio al acumulador 
            function agregarPrecio () {
                acumTot += producto.precio
                carrito.push(acumTot)
                setLocal ()
            }
        }

        //creo la variable para el boton carrito
        let btnCarrito = document.getElementById('boton_carrito');
        //consulto div carrito
        let divCarrito = document.getElementById('canvas_carrito');

        //tengo que crear una funcion que recorra el array donde se guardan los productos enviados al carrito y agregarlo al boton de "Mostrar pedido"
        (mostrarPedido) => {
            for (let i = 0; i < carrito.length; i += 1) {
                divCarrito.innerHTML += `
                <p>${carrito[i]}</p>
                `
            }
        }

        btnCarrito.addEventListener('click', mostrarPedido)




        //capturo dropdown --- ver como capturar "seleccionar barril"
        // $('#select_barril').on ('change', (e) => {
        //     let value = e.target.value
        //     console.log(value)
        // })
        
    })



































