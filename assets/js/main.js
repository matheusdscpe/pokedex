const card = document.querySelector('#baseLayout')
const btNextPg = document.querySelector('#nextPg')
const btnBackPg = document.querySelector('#backPg')
const btnRelodPg = document.querySelector('#relodPg')


import { largura, verificaLimit } from "./dispositivos.js";
// const limit = 8;
let limit = verificaLimit(largura);
let offset = 0;



function convertElementsPoke(pokemon) {
    return `
    <li class="cartao-poke ${pokemon.type}">
        <span class="num-poke">#${pokemon.number}</span>
        <span class="nome-poke">${pokemon.name}</span>
        <ol class="tipo">
            ${pokemon.types.map((type) => `<li class="tipo-poke ${type}">${type}</li>`).join('')}
        </ol>
        <img class="img-poke"
            src="${pokemon.sprite}"
            alt="${pokemon.name}">
    </li>
    `
}

nextPage(offset, limit)

function nextPage(offset, limit) {
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => {
        card.innerHTML = pokemons.map(convertElementsPoke).join("")
        console.log(offset, limit)

    })
}

function backPage(offset, limit) {
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => {
        card.innerHTML = pokemons.map(convertElementsPoke).join("")
        console.log(offset, limit)
    })
}

function reloadPage() {
    location.reload();
}



btNextPg.addEventListener('click', () => {
    offset += limit;
    nextPage(offset, limit);
});

btnBackPg.addEventListener('click', () => {
    if(offset<=0){
        offset = 0
    }else{
        offset -= limit;
    }
    backPage(offset, limit);
});


btnRelodPg.addEventListener('click', reloadPage);