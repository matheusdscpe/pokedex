const pokeApi = {};


function convertPokeApiToPokeModel(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type] = types
    pokemon.types = types;
    pokemon.type = type;
    pokemon.sprite = pokeDetail.sprites.front_default
    return pokemon
}


pokeApi.getpokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
                .then((response)=>response.json())
                .then(convertPokeApiToPokeModel)
}



pokeApi.getpokemons = (offset = 0, limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response)=> response.json())
        .then((jsonBody)=> jsonBody.results)
        .then((pokemon)=> pokemon.map(pokeApi.getpokemonDetails))
        .then((pokemonDetailRequest)=>Promise.all(pokemonDetailRequest))
        .then((pokemonDetails)=>pokemonDetails)
        .catch((erro) => console.erro(erro))
}



