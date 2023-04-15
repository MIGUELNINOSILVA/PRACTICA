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
                <p class="nombre-tarjeta">Nombre</p>
                <p class="edad-tarjeta">Edad</p>
                <p class="id-tarjeta">id</p>
                <button class="button-tarjeta">Mostrar más</button>
            </div>
            
        </div>        
        `;

        container.appendChild(tarjeta);
    });
}