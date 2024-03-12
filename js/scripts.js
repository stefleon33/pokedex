let pokemonRepository = (function () {

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

    let modalContainer = document.querySelector('#modal-container');

    // Function to show deatils of a Pokemon in a modal
    function showModal(pokemon) {
      
    //Clear all exisiting modal content
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      //Close button details
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name; 

      let contentElement = document.createElement('p');

       //Creating elements to display Pokemon details in the modal
       let nameElement = document.createElement('h1');
       nameElement.textContent = pokemon.name;

       let imageElement = document.createElement('img');
       imageElement.classList.add('modal-img');
       imageElement.style.width = '50%';
       imageElement.setAttribute('src',pokemon.imageUrl)

       let heightElement = document.createElement('p');
       heightElement.textContent = `Height: ${pokemon.height}`;

       let weightElement = document.createElement('p');
       weightElement.textContent = `Weight: ${pokemon.weight}`;

       let typesElement = document.createElement('p');
       let typesNames = pokemon.types.map(typesItem => typesItem.type.name).join(", ");
       typesElement.textContent = `Type(s): ${typesNames}`;

       let abilitiesElement = document.createElement('p');
       let abilitiesNames = pokemon.abilities.map(abilitiesItem => abilitiesItem.ability.name)
                       .join(", ");
       abilitiesElement.textContent = `Abilities: ${abilitiesNames}`;

      
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
      //Appending elements to the modal
      contentElement.appendChild(imageElement);
      contentElement.appendChild(heightElement);
      contentElement.appendChild(weightElement);
      contentElement.appendChild(typesElement);
      contentElement.appendChild(abilitiesElement);
      modal.appendChild(closeButtonElement);
      

      modalContainer.classList.add('is-visible');

      function hideModal(){
        modalContainer.classList.remove('is-visible');
      }

      window.addEventListener('keydown', (e) =>{
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
          hideModal();
        }
      });

      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
    }
        

    //Function to add a Pokemon to the list
    function add(pokemon){
         repository.push(pokemon);
    }

    //Function to get the list of all Pokemon
    function getAll() {
        return repository;
    }
    function add(pokemon) {
        repository.push(pokemon);
    }

    function addListItem(pokemon) {
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

    //Function to fetch and load the Pokemon list from the API
    function loadList() {
        return fetch(apiUrl)
        .then(function (response) {
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
      
    //Function to  fetch and load details for a specific Pokemon  
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.weight = details.weight;
          item.types = details.types;
          item.abilities = details.abilities;
        }).catch(function (e) {
          console.error(e);
        });
      }

    //Function to show details of a Pokemon
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showModal (pokemon);
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

})()

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);

      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerText = pokemon.name;

      listItem.addEventListener("click", () =>{
        pokemonRepository.showDetails(pokemon);
        $("#modal-container").modal("show");
      });
    });
  });
