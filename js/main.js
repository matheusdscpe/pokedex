
function convertElementsPoke(pokemon){
    return `
    <div class="cartao-poke ${pokemon.type}">
        <span class="num-poke">#${pokemon.number}</span>
        <span class="nome-poke">${pokemon.name}</span>
        <ol class="tipo">
            ${pokemon.types.map((type)=>`<li class="tipo-poke ${type}">${type}</li>`).join('')}
        </ol>
        <img class="img-poke"
            src="${pokemon.sprite}"
            alt="${pokemon.name}">
    </div>
    `
}

const card = document.querySelector('#baseLayout')

pokeApi.getpokemons().then((pokemons=[])=>card.innerHTML+=pokemons.map(convertElementsPoke).join(""))
