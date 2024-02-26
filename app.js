const apiKey = '2b01765f757e9e23413ee2af6e938600';
apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        var data = await response.json();

        console.log(data)
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' mph';
        
        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'clouds.png';
        } else if(data.weather[0].main == 'Clear') {
            weatherIcon.src = 'clear.png';
        } else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = 'rain.png';
        } else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'drizzle.png'
        } else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = 'mist.png'
    }
    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    }
}

searchBtn.addEventListener('click', function() {
    checkWeather(searchBox.value);
})
