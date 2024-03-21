var pokemonRepository=function(){var t=[];function e(e){t.push(e)}function a(){return t}function n(t){let e=$(".modal-body"),a=$(".modal-title");$(".modal-header"),a.empty(),e.empty();let n=$("<h1>"+t.name+"</h1>"),o=$('<img class="modal-img" alt="Image of front pokemon" style="width:50%">');o.attr("src",t.imageUrlFront);let i=$('<img class="modal-img" alt="Image of back pokemon" style="width:50%">');i.attr("src",t.imageUrlBack);let r=$("<p>height : "+t.height+"</p>"),l=$("<p>weight : "+t.weight+"</p>"),p=$("<p>types : "+t.types+"</p>"),s=$("<p>abilities : "+t.abilities+"</p>");a.append(n),e.append(o),e.append(i),e.append(r),e.append(l),e.append(p),e.append(s)}return{add:e,getAll:a,addListItem:function t(e){pokemonRepository.loadDetails(e).then(function(){var t=$(".row"),a=$('<div class="card text-center align-items-center border border-primary" style="width:250px"><span class="sr-only">Card with an image and name of a Pokemon with a button that can be clicked for more details.</span></div>'),o=$('<img class="card-img-top" alt="Image of pokemon" style="width:50%" />');o.attr("src",e.imageUrlFront);var i=$('<div class ="card-body"></div>'),r=$("<h3 class='card-title'>"+e.name+"</h3>"),l=$('<button type= "button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">See Details</button>');t.append(a),a.append(o),a.append(i),i.append(r),i.append(l),l.on("click",function(t){(function t(e){pokemonRepository.loadDetails(e).then(function(){n(e)})})(e)})})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){var a={name:t.name,detailsUrl:t.url};e(a),console.log(a)})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrlFront=t.sprites.front_default,e.imageUrlBack=t.sprites.back_default,e.height=t.height,e.weight=t.weight,e.types=[];for(var a=0;a<t.types.length;a++)e.types.push(t.types[a].type.name);e.abilities=[];for(var a=0;a<t.abilities.length;a++)e.abilities.push(t.abilities[a].ability.name)}).catch(function(t){console.error(t)})},showModal:n}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});