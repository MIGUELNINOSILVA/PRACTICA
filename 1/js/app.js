//Carga el contenido cuando haya cargado la página
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarContenido();
});

//Selectores
const container = document.querySelector('.container');
const contador = document.querySelector('.contador');
const datosArray = document.querySelector('.datos-array');

//Funciones
function mostrarContenido() {
    db.forEach(integrante => {
        const {nombre, edad, id, img} = integrante;
        const tarjeta = document.createElement('p');
        tarjeta.innerHTML =`
        <div class="tarjeta">
            <div class="img-tarjeta">
                <img src="img/foto.jpg" alt="">
            </div>
            <div class="contenido-tarjeta">
                <p class="nombre-tarjeta">${nombre}</p>
                <p class="edad-tarjeta">${edad}</p>
                <p class="id-tarjeta">${id}</p>
                <button class="button-tarjeta" onclick="AgregarLista('${nombre}')">Mostrar más</button>
            </div>
            
        </div>        
        `;

        container.appendChild(tarjeta);
    });
}

let arraySeleccionado = [];

function AgregarLista(nombre) {
    let idSeleccionado = nombre;

        let resultado = db.findIndex(integrante => integrante.nombre === idSeleccionado);
    if (resultado !== -1) {
        // Si se encontró un objeto, lo agregamos al array seleccionado
        let found = db.find(element => element.nombre === idSeleccionado);
        arraySeleccionado.push(found);
        mostrarLista();
        filtrarRepetidos(arraySeleccionado);
      } else {
        console.log(`No se encontró ningún objeto con el id ${idSeleccionado}`);
      }
    }




function mostrarLista() {
    // Crear un nuevo conjunto con elementos únicos
    let conjuntoUnico = new Set(arraySeleccionado);
    // Eliminar los elementos previamente mostrados
    datosArray.innerHTML = '';

    // Iterar sobre el conjunto único y mostrar cada elemento
    conjuntoUnico.forEach(elemento => {
        const {nombre, edad, id} = elemento;
        const elementosSeleccionados = document.createElement('p');
        elementosSeleccionados.innerHTML = `
        <div class="tarjeta">
        <div class="img-tarjeta">
            <img src="img/foto.jpg" alt="">
        </div>
        <div class="contenido-tarjeta">
            <p class="nombre-tarjeta">${nombre}</p>
            <p class="edad-tarjeta">${edad}</p>
            <p class="id-tarjeta">${id}</p>
            <p class="cantidad">Cantidad seleccionada: </p>
        </div>
        
        </div> 
        `;
        datosArray.appendChild(elementosSeleccionados);
    });
    contador.textContent = conjuntoUnico.length
    console.log(conjuntoUnico.length);
}


function filtrarRepetidos(arraySeleccionado) {
    let contadorTotal = 0;
    db.forEach(integrante => {
        const {nombre} = integrante;
        const found = arraySeleccionado.find(element => element.nombre === nombre);
        if (found) {
            contadorTotal += found.contador;
        }
    });
    contador.textContent = contadorTotal;
    document.querySelector('.contador').textContent = contador.textContent
}

