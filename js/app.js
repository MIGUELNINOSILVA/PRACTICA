//Carga el contenido cuando haya cargado la página
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarContenido();
});

//Selectores
const container = document.querySelector('.container');

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
        console.log(arraySeleccionado);
      } else {
        console.log(`No se encontró ningún objeto con el id ${idSeleccionado}`);
      }
}