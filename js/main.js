// "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
// path = pokemon/1 = arquivo
// query string = 'codigo' de busca

//definindo parametros em variaveis para melhor controle sobre tais
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;



//função para realizar a "converção dos elementos em html e colocando elementos dinamicamente"
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

//captura do elemento pai, para ser adicionado os demais elementos
const card = document.querySelector('#baseLayout')


//fetch = buscar;
//then = então;
//catch = truque;

//esses são alguns metodos para poder realizar ações dentro da requisição

//o fetch é reasponsavel pela busca do elemento
//o then é responsavel por tratar o elemento
//o catch é responsavel por apresentar o erro caso as promessas não sejam compridas


fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemonList)=> {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            card.innerHTML += convertElementsPoke(pokemon)};
    })
    .catch((erro)=>console.log(erro))