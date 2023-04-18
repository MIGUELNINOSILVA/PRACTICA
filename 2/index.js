// Fetch
//Fetch está basado en promesas
const url = 'https://pokeapi.co/api/v2/pokemon/3';

//Fetch es una alternativa para trabajar por HTTP, basado en promesas

//Esta recibe como parámetro la URL
fetch(url)
//PROMESAS
//El servidor nos va a dar un response, y esta la convertimos a JSON
.then(respone => respone.json())
.then(data => {
    //Crear un template para mostrar esos datos
    const element = document.querySelector('.element');
    element.innerHTML = `
        <p>${data.name}</p>
        <p>${data.order}</p>
        <img src="${data.sprites.front_default}">
    `
})
//En caso de error
.catch(err => console.log(err))