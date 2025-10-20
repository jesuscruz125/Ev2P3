const botonBuscar = document.getElementById("botonBuscar");
const inputNombre = document.getElementById("nombre");
const id = document.getElementById("id");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listaHabilidades = document.getElementById("listaHabilidades");
const listaEstadisticas = document.getElementById("listaEstadisticas");
const expBase = document.getElementById("expBase");
const videoGames = document.getElementById("videoGames");
const heldItems = document.getElementById("heldItems");
const moves = document.getElementById("moves");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

async function buscarPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputNombre.value);
    const infoPokemon = await respuesta.json();

    //poner el id en el parrafo llamado id
    id.innerText = infoPokemon.id;

    //mostrar imagen
    imagen.src = infoPokemon.sprites.other.home.front_default;

    if (imagen.src) {
        imagen.style.border = "2px solid black"; 
    } else {
        imagen.style.border = "none";           
    }

    //Altura
    altura.innerText = infoPokemon.height;

    //Peso
    peso.innerText = infoPokemon.weight;


    //sonido
    sonido.src = infoPokemon.cries.latest;

    //habilidades 
    listaHabilidades.innerHTML = "";
    infoPokemon.abilities.forEach(a => {
            const item = document.createElement("li");
            item.innerText = a.ability.name;
            listaHabilidades.appendChild(item);
    });


    //Estadisticas
    // listaEstadisticas.innerHTML = "";
    // infoPokemon.stats.forEach(a => {
    //     const item = document.createElement("li");
    //     item.innerText = a.stat.name;
    //     listaEstadisticas.appendChild(item);
        
    // });

    listaEstadisticas.innerHTML = "";
    infoPokemon.stats.forEach(a => {
    const item = document.createElement("li");
    item.innerText = `${a.stat.name}: ${a.base_stat}`;
    listaEstadisticas.appendChild(item);
    });

    // listaEstadisticas.innerHTML = "";
    // infoPokemon.stats.forEach(a => {
    //     const item = document.createElement("li");
    //     item.innerText = a.base_stat;
    //     listaEstadisticas.appendChild(item);
        
    // });

    //Experiencia base 
    expBase.innerText = infoPokemon.base_experience;

    //Juegos donde aparece
    videoGames.innerHTML = "";
    infoPokemon.game_indices.forEach(a => {
        const item = document.createElement("li");
        item.innerHTML = a.version.name;
        videoGames.appendChild(item);
    });


    //Objetos sostenidos
    heldItems.innerHTML = "";
    infoPokemon.held_items.forEach(a => {
        const item = document.createElement("li");
        item.innerText = a.item.name;
        heldItems.appendChild(item);

    });


    //Movimientos
    moves.innerHTML = "";
    infoPokemon.moves.forEach(a => {
        const item = document.createElement("li");
        item.innerText = a.move.name;
        moves.appendChild(item);
    });



}

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarPokemon();
});