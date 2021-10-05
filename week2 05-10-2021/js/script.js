"use strict"

let pokemon = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("ERROR");
    }
})  
.then(data => {
  console.log(data);
})
.catch((error) => console.error("FETCH ERROR:", error));