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
        }
        //varaible para sumar totales.
        let acumTot = 0;
        //cargo la variable en un array y la subo al local
        let total = [acumTot];
        function setTotal () {
            localStorage.setItem('total', JSON.stringify(total));
        }

        //recorro el array de productos  para cargarlos en el array carrito y enviar al localStorage
        for (let producto of dataProductos) {
            let btnAgregar = document.getElementById(`agregar_carrito ${producto.nombre}`);
            btnAgregar.addEventListener ('click', agregarProd);
            
            //funcion agregar al carrito el producto 
            function agregarProd () {
                carrito.push(producto.nombre);
                alert ("Agregaste un estilo");
                setLocal ();
            }    
        }

        //capturar del dropdown el valor de los barriles 
        let barriles = document.getElementById('select_barril');
        //tengo que capturar el valor de barriles y asignarlo a nueva variable para multiplicarlo a acumTot
        barriles.addEventListener ('change', (e) => {
            const value = document.getElementById ('total_carrito');
            value.textContent = `El barril es de ${e.target.value}`;
            
        })

        //recorro el array para agregar el precio al carrito 
        for (let producto of dataProductos) {
            let btnAgregar = document.getElementById(`agregar_carrito ${producto.nombre}`);
            btnAgregar.addEventListener ('click', agregarPrecio);

            //funcion agegar precio al acumulador 
            function agregarPrecio () {
                acumTot += producto.precio;
                total.push(acumTot);
                setTotal ();
            }
        }

        //creo la variable para el boton carrito y la capturo
        let btnCarrito = document.getElementById('boton_carrito');
        //consulto div carrito y lo capturo
        let divCarrito = document.getElementById('producto_carrito');

        //tengo que crear una funcion que recorra el array donde se guardan los productos enviados al carrito y agregarlo al boton de "Mostrar pedido"
        const mostrarPedido = () => {
            for (let i = 0; i < carrito.length; i += 1) { //como agregar el barril seleccionado y multiplicarlo por el total
                divCarrito.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${carrito[i]}</h5>
                        <p class="card-text">Aca va el barril pedido</p>
                        <button id="boton_eliminar" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                `
            }
        }
        //agregar evento al boton "mostrar pedido"
        btnCarrito.addEventListener('click', mostrarPedido);

        
    })



































