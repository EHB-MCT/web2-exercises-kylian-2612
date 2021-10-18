"use strict"
let baseurl = 'http://www.omdbapi.com/?apikey=bf8c0827&';

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', event => {
        event.preventDefault();
        document.getElementById('searchResultID').innerHTML = null;
        let searchedTerm = document.getElementById('inputTitle').value;
        console.log(searchedTerm);
        let url = baseurl + `&s=${searchedTerm}`;
        fetchMovie(url).then(result => {
            let resultData = result.Search;
            console.log(resultData);
            for (let element of resultData) {
                let card = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${element.Poster}" class="card-img" alt="...">
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.Title}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">$el.Year</small></p>
                            </div>
                        </div>
                    </div>
                </div>`
                document.getElementById('searchResultID').insertAdjacentHTML("beforeend", card);
                console.log(element);

            }
        });
    });
};
async function fetchMovie(url) {
    let response = await fetch(url);
    return await response.json();
}


//https://www.omdbapi.com/?i=tt3896198&apikey=bf8c0827
//bf8c0827