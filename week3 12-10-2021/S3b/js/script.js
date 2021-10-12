"use strict"
let baseurl = 'http://www.omdbapi.com/?apikey=bf8c0827&';

window.onload = function () {

    let url = baseurl + 't=avengers&y=2015';

    getMovies(url).then(result => {
        console.log(result);
    })

}

async function getMovies(url) {
    let response = await fetch(url);
    return await response.json();

}



//https://www.omdbapi.com/?i=tt3896198&apikey=bf8c0827
//bf8c0827