fetch('https://goweather.herokuapp.com/weather/Brussels')
    .then(response => response.json())
    .then(test => {
        let data = test
        console.log(data);
        let weather = `temperature: ${test.temperature} description:${test.description} `;
        document.getElementById('testWindow').innerHTML = weather;

    });