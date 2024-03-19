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
function add(pokemon) {
repository.push(pokemon);
}

function getAll() {
return repository;
}

function addListItem(pokemon) {
pokemonRepository.loadDetails(pokemon).then(function() {
  var $row = $(".row");
  var $card = $('<div class="card text-center" style="width:250px"></div>');
  var $image = $('<img class="card-img-top" alt="Image of pokemon" style="width:50%" />');
  $image.attr("src", pokemon.imageUrlFront);

  var $cardBody = $('<div class ="card-body"></div>');
  var $cardTitle= $("<h4 class='card-title'>" + pokemon.name + "</h4>");
  var $seeProfile = $(
    '<button type= "button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">See Details</button>'
    );
  
    $row.append($card);
    //Append the image to each card
    $card.append($image);
    $card.append($cardBody);
    $cardBody.append($cardTitle);
    $cardBody.append($seeProfile);
  
  $seeProfile.on("click", function(event){
    showDetails(pokemon);
  });
  });
}

//Function to show details of a Pokemon
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
      showModal (item);
  });
  }

      });
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

  // Function to show deatils of a Pokemon in a modal
  function showModal(pokemon) {

    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    //creating img in modal content
    let imageElementFront = $('<img class="modal-img" alt="Image of front pokemon" style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" alt="Image of back pokemon" style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);

    //creating element for height in modal content
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");

    //creating element for weight in modal content
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");

     //creating element for types in modal content
     let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");

     //creating element for abilities in modal content
     let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities  + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
  };

})();

      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerText = pokemon.name;
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);

    });
});
