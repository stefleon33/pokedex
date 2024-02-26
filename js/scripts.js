let pokemonList = [
    {pokedex: '0001', name: 'Bulbasaur', height: 2.04, weight: 15.2, type: ['grass', 'poison'], category:'Seed', abilities:'Overgrow'}, 
    {pokedex: '0002', name: 'Ivysaur', height: 3.03, weight: 28.7, type:['grass', 'poison'], category:'Seed', abilities:'Overgrow'},
    {pokedex: '0003', name: 'Venusaur', height: 6.07, weight: 220.5, type:['grass', 'poison'], category:'Seed', abilities:'Overgrow'},
    {pokedex: '0004', name: 'Charmander', height: 2, weight: 18.7, type: 'fire', category:'Lizard', abilities:'Blaze'}, 
    {pokedex: '0005', name: 'Charmeleon', height: 3.07, weight: 41.9, type: 'fire', category:'Flame', abilities:'Blaze'},
    {pokedex: '0006', name: 'Charizard', height: 5.07, weight: 199.5, type: 'fire', category:'Flame', abilities:'Blaze'},
    {pokedex: '0007', name: 'Squirtle', height: 1.08, weight: 19.8, type: 'water', category:'Tiny Turtle', abilities:'Torrent'},
    {pokedex: '0008', name: 'Wartortle', height: 3.03, weight: 49.6, type: 'water', category:'Turtle', abilities:'Torrent'},
    {pokedex: '0009', name: 'Blastoise', height: 5.03, weight: 188.5, type: 'water', category:'Shellfish', abilities:'Torrent'},
];

for (let i=0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height} feet)`);

    if (pokemonList[i].height >6 ){
        document.write (" - Wow, that's big!");
    }else if (pokemonList[i].height <2 ){
        document.write (" - They are tiny!");
    }

    document.write('<br>');
}