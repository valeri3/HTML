
function getWeather() {
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cityNameElement = document.getElementById('cityName');
    const cityInputElement = document.getElementById('cityInput');

    const city = cityInputElement.value || 'Odessa';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            cityNameElement.innerText = `${data.name}, ${data.sys.country}`;
            iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;

            document.getElementById("sunset").innerHTML = `Закат: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
            document.getElementById("sunrise").innerHTML = `Восход: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;

            document.getElementById("wind").innerHTML = `Скорость ветра: ${data.wind.speed} м/с`;
            document.getElementById("humidity").innerHTML = `Влажность: ${data.main.humidity}%`;
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
}


window.addEventListener('DOMContentLoaded', (event) => {
    getWeather();
});
