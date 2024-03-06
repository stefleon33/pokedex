let pokemonRepository = (function() {
    
    //pokemonList
    let repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    function getAll () {
        return repository;
    }
    function add (pokemon) {
        repository.push(pokemon);
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class")
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (_showDetails){
            console.log(pokemon);
        })
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        displayPokemonInfo: displayPokemonInfo,
        showDetails: showDetails
    }

}) ()


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
