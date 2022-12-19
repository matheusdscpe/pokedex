const card = document.querySelector('#baseLayout')
const btnAddPoke = document.querySelector('#addPoke')
const limit = 5;
let offset = 0;

function convertElementsPoke(pokemon){
    return `
    <li class="cartao-poke ${pokemon.type}">
        <span class="num-poke">#${pokemon.number}</span>
        <span class="nome-poke">${pokemon.name}</span>
        <ol class="tipo">
            ${pokemon.types.map((type)=>`<li class="tipo-poke ${type}">${type}</li>`).join('')}
        </ol>
        <img class="img-poke"
            src="${pokemon.sprite}"
            alt="${pokemon.name}">
    </li>
    `
}

function addPoke(offset, limit){
    
    
    pokeApi.getpokemons(offset, limit).then((pokemons=[])=>{
        card.innerHTML+=pokemons.map(convertElementsPoke).join("")})

}

addPoke(offset, limit)

btnAddPoke.addEventListener('click', ()=>{
    offset += limit;
    addPoke(offset, limit);
});