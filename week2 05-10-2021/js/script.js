"use strict"
let list, pokemon = [];

function getData() {
    //get list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            return response.json();
        }).then(data => {
            list = data.results;
            //loop over the list to get each pokemon
            for (let element of list) {
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                })
            }
        })

};

window.onload = function () {

    getData();

    setTimeout(buildList, 3000);

    function buildList() {
        console.log(pokemon);
        console.log(list);
        console.log('test');
    }

}