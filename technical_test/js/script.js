let url = 'http://api.openweathermap.org/data/2.5/weather?q=denderleeuw&appid=d3cdfff8a9c9b9f89b250cc4b6bc8e18';


console.log("heye")
async function getData(url) {

    let response = await fetch(url);

    return await response.json();

}

getData(url).then(movie => {

    console.log('movie');

    document.getElementById('testWindow').innerText = JSON.stringify(movie);

});