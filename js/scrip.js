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
            // dropDownSelectBarril.addEventListener ('change', (e) => console.log (`Selecciono ${estilo.nombre} ${parseInt(e.target.value)}`));
            dropDownSelectBarril.addEventListener ('change', (e) => {
                let dropLitros = parseInt(e.target.value); //capturo el valor seleccionado de e en una variable.
                if(estilos.find(estilo => estilo.litros == 0 )){ 
                    let indexLitros = estilos.findIndex(cerveza => cerveza.litros == 0);
                    console.log(indexLitros)
                    estilos[indexLitros].litros = dropLitros;
                    estilo['litros'] = dropLitros;
                    localStorage.setItem('carrito', JSON.stringify(estilos)); //si es igual a 0 lo agrego
                
                } else if (estilos.find(estilo => estilo.litros != 0))  {
                    let indexLitros = estilos.findIndex(cerveza => cerveza.litros != 0);
                    console.log(indexLitros)
                    estilos[indexLitros].litros = dropLitros;
                    estilo['litros'] = dropLitros;
                    localStorage.setItem('carrito', JSON.stringify(estilos)); //si es distinto de 0 o si ya hay un valor antes lo reemplazo

                } else {
                    estilo['litros'] = dropLitros;
                    localStorage.setItem('carrito', JSON.stringify(estilos));
                }
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
                    estilos[buscoCervezaEnArrayEstilos].cant; //si la cerveza esta, sumo las cantidades 
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





