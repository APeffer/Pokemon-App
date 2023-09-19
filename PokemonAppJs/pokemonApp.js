const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

const pokeInput = document.getElementById("pokeInput");
const pokeInputBtn = document.getElementById("pokeInputBtn");
const pokeData = document.getElementById('pokeData');

/*
pokeInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    //event.preventDefault();
    pokeInputBtn.click();
}
});
*/

function searchPokemon(pokeName){
  if (pokeName != "") {
    let name = pokeName
    let newURL = urlBase + name

    fetch(newURL)
      .then(response => response.json())
      .then(data => {
        pokeData.innerHTML = `<h2>Name: </h2><p>${capitalizeFirstLetter(data.name)}</p>
                              <h2>Type: </h2><p>${data.types.map(type => type.type.name).join(', ')}</p>
                              <h2>Moves: </h2><p>${data.moves.map(moves => moves.move.name).join(', ')}</p>`;
      })
      .catch(error => {
        console.log("error pokemon does not exist");
        pokeData.innerHTML = `<p> That pokemon does not exist</p>`

        document.getElementById('pokeInput').innerText = '';
      });
  };
    
}

function clearInput(inputField){
    document.getElementById(inputField).value = ""
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}