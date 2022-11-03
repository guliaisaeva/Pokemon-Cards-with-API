// js variables
const poke_container=document.getElementById('pokemon-container')
const pokemon_count=150
const colors={
    fire:"#FDDFDF",
    grass:"#DEFDE0",
    electric:"#FCF7DE",
    water:"#DEF#FD",
    ground:"#f4e7da",
    rock:"#d5d5d4",
    fairy:"#fceaff",
    poison:"#98d7a5",
    bug:"#f8d5a3",
    dragon:"#97b3e6",
    psychic:"#eaeda1",
    flying:"#f5f5f5",
    fighting:"#E6E0D4",
    normal:"#F5F5F5"
}

const main_types=Object.keys(colors);
console.log(main_types)

// function to fetch pokemon  data
const fetchPokemons=async()=>{
for(let i=1;i<=pokemon_count;i++){
    await getPokemon(i);
}
}

const getPokemon=async(id)=>{
   const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
   const res=await fetch(url)
   const data=await res.json()
   createPokemonCard(data);
}
fetchPokemons();

// function to create pokemon card
const createPokemonCard=(pokemon)=>{
const pokemonEl=document.createElement("div");
pokemonEl.classList.add('pokemon')

// to convert name to Uppercase
const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1)
// to id numbers add zeros
const id=pokemon.id.toString().padStart(3,"0")
//to get type of pokemons from array
const poke_types=pokemon.types.map(type=>type.type.name)
const type=main_types.find(type=>poke_types.indexOf(type)>-1);
//variable to color
const color=colors[type]

//styling cards with colors
pokemonEl.style.backgroundColor=color;




const pokemonInnerHTML=`
<div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="charizard">
</div>
<div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
</div>`

pokemonEl.innerHTML=pokemonInnerHTML;
poke_container.appendChild(pokemonEl);
}