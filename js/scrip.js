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
                <button id="agregar_carrito${indice}" class="btn btn-warning" style="margin-top: 10px;">Agregar estilo</button>


                <!-- selec barril -->
                <div id="litros_pedidos">
                    <div class="dropdown">
                        <label>
                            <select id="select_barril${indice}" class="btn btn-secondary" style="margin-bottom: 12px;">
                                <option value="none">Selecionar barril</option>
                                    <option id="select_litros" value="10">10 litros</option>
                                    <option id="select_litros" value="20">20 litros</option>
                                    <option id="select_litros" value="30">30 litros</option>
                                    <option id="select_litros" value="50">50 litros</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            `
            
        });
        
        //recorro el array de nuevo para agregar productos al carrito
        dataEstilos.forEach((estilo, indice) => {
            //llamo al boton agregar estilo y lo meto en una variable 
            let btnAgregarCarrito = document.getElementById(`agregar_carrito${indice}`);
            btnAgregarCarrito.addEventListener ('click', () => {
                //consultar si la cerveza del array se encuentra en el LS
                if (estilos.find(cerveza => cerveza.nombre == estilo.nombre )) {
                    let buscoCervezaEnArrayEstilos = estilos.findIndex (cerveza => cerveza.nombre == estilo.nombre);
                    estilos[buscoCervezaEnArrayEstilos].cant 
                    localStorage.setItem('carrito', JSON.stringify(estilos));
                } else { 
                    let cerveza = new Cerveza (estilo.id, estilo.nombre, estilo.ibu, estilo.alcohol, estilo.precio, estilo.stock, estilo.img, estilo.litros); //si la cerveza no esta, la creo
                    estilos.push(cerveza); // y hago el push de la cerveza al array de estilos
                    localStorage.setItem('carrito', JSON.stringify(estilos));
                    alert("Seleccione un barril")
                };
            }); //se agrega con la propiedad litros en 0 
        });
        
        //recorro el array para seleccionar el barril
        dataEstilos.forEach((estilo, indice) => {
            let dropDownSelectBarril = document.getElementById(`select_barril${indice}`); //llamo al boton
            dropDownSelectBarril.addEventListener ('change', (e) => {
                e.preventDefault()
                estilo['litros'] = parseInt(e.target.value);
                if (estilos.find(cerveza => cerveza.nombre == estilo.nombre)) {
                    let buscoEstilo = estilos.findIndex(cerveza => cerveza.nombre == estilo.nombre);
                    estilos[buscoEstilo].litros = parseInt (e.target.value); // remplazo el valor viejo del array por uno nuevo.
                    localStorage.setItem('carrito',JSON.stringify(estilos));// lo subo al array que ya existe
                    alert(`Agrego ${estilo.litros} litros de ${estilo.nombre} `)
                } else {
                    estilo['litros'] = parseInt(e.target.value);
                    estilos.push(estilo);
                    localStorage.setItem('carrito', JSON.stringify(estilos));
                    alert(`Agrego ${estilo.litros} litros de ${estilo.nombre} `)// a prueba de error, si no se agrega el estilo antes se agrega al seleccionar el barril y tambien se modifica la cantidad de litros
                }
            });
        });
    });    

//FUNCIONES






