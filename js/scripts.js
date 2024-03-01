let pokemonRepository = (function() {
    
    //pokemonList
    let pokemonList = [
        {pokedex: '0001', name: 'Bulbasaur', height: 2.04, weight: 15.2, type: ['grass', 'poison'], category:'Seed', abilities:'Overgrow'}, 
        {pokedex: '0004', name: 'Charmander', height: 2, weight: 18.7, type: 'fire', category:'Lizard', abilities:'Blaze'}, 
        {pokedex: '0007', name: 'Squirtle', height: 1.08, weight: 19.8, type: 'water', category:'Tiny Turtle', abilities:'Torrent'},
        {pokedex: '0002', name: 'Ivysaur', height: 3.03, weight: 28.7, type:['grass', 'poison'], category:'Seed', abilities:'Overgrow'},
        {pokedex: '0005', name: 'Charmeleon', height: 3.07, weight: 41.9, type: 'fire', category:'Flame', abilities:'Blaze'},
        {pokedex: '0008', name: 'Wartortle', height: 3.03, weight: 49.6, type: 'water', category:'Turtle', abilities:'Torrent'},
        {pokedex: '0003', name: 'Venusaur', height: 6.07, weight: 220.5, type:['grass', 'poison'], category:'Seed', abilities:'Overgrow'},
        {pokedex: '0006', name: 'Charizard', height: 5.07, weight: 199.5, type: 'fire', category:'Flame', abilities:'Blaze'},
        {pokedex: '0009', name: 'Blastoise', height: 5.03, weight: 188.5, type: 'water', category:'Shellfish', abilities:'Torrent'},
        ];

// Function to display Pokemon information
function displayPokemonInfo(pokemon) {
    document.write (`${pokemon.name} (${pokemon.height} feet) `);
     if (pokemon.height > 6) {
         document.write(" - Wow, that's big!");
     } else if (pokemon.height < 2) {
         document.write(" - Dang,they are tiny!");
     }
     document.write('<br>');
 }

// Display information for each Pokemon in the list
pokemonList.forEach(displayPokemonInfo); 

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
    
    return {
        getAll: getAll,
        add: add
    }

}) ()

document.write(pokemonRepository.getAll())
