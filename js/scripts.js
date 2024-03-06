let pokemonRepository = (function() {
    
    //pokemonList
    let repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Function to display Pokemon information
    function displayPokemonInfo(pokemon) {
        document.write(`${pokemon.name} (${pokemon.height} feet) `);
        if (pokemon.height > 6) {
            document.write(" - Wow, that's big!");
        } else if (pokemon.height < 2) {
            document.write(" - Dang,they are tiny!");
        }
        document.write('<br>');
    }

    function add(pokemon){
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return repository;
    }
    function add(pokemon) {
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
        button.addEventListener("click", function (_event) {
            showDetails(pokemon);
        })
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
      
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        displayPokemonInfo: displayPokemonInfo,
        showDetails: showDetails
    }

}) ()


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
