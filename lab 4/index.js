document.getElementById('getWeather').addEventListener('click', function() {
    debugger
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        document.getElementById('weather').innerHTML = 'Geolocation is not supported by this browser.';
    }
});

// https://www.weatherapi.com/docs/
// http://api.weatherapi.com/v1/current.json?key=6c1c57cd1dbd447db0c45445241907&q=30,31
function success(position) {
    debugger
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = '6c1c57cd1dbd447db0c45445241907'; // Replace with your OpenWeatherMap API key
    const url = `http://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            debugger
            document.getElementById('weather').innerHTML = `
                <h2>${data.location.name}</h2>
                <p>Temperature: ${(data.current.temp_c).toFixed(2)} °C</p>
                <p>Weather: ${data.condition.text}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = 'Error fetching weather data';
        });
}

function error() {
    document.getElementById('weather').innerHTML = 'Unable to retrieve your location';
}
// 2- GitHub User Finder
//      Build an application that fetches and displays GitHub user information using the Fetch API.
//       https://api.github.com/users/${username}
