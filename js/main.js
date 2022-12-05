

function convertElementsPoke(pokemon){
    return `
    <div class="cartao-poke">
        <p class="num-poke">#001</p>
        <h2 class="nome-poke">${pokemon.name}</h2>
        <ol class="tipo">
            <li class="tipo1 tipo-poke">planta</li>
            <li class="tipo-poke tipo2">veneno</li>
        </ol>
        <img class="img-poke"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
    </div>
    `
}

const card = document.querySelector('#baseLayout')


pokeApi.getpokemons().then((pokemonList)=> {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            card.innerHTML += convertElementsPoke(pokemon)};
    })