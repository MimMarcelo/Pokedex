const pokemon_name = document.querySelector(".pokemon_name");
const pokemon_number = document.querySelector(".pokemon_number");
const pokemon_image = document.querySelector(".pokemon_image");

const input = document.querySelector(".search");
const form = document.querySelector(".form");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return await apiResponse.json();
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if(!data){ return; }
    pokemon_name.innerHTML = data["name"];
    pokemon_number.innerHTML = data["id"];
    pokemon_image.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLocaleLowerCase());
    input.value = "";
});

btnPrev.addEventListener("click", (btn) =>{
    const number = parseInt(pokemon_number.innerHTML);
    renderPokemon(number - 1);
});

btnNext.addEventListener("click", (btn) =>{
    const number = parseInt(pokemon_number.innerHTML);
    renderPokemon(number + 1);
});