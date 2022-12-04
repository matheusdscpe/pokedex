// "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
// path = pokemon/1 = arquivo
// query string = 'codigo' de busca


const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;


fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> console.log(jsonBody))
    .catch((erro)=>console.log(erro))