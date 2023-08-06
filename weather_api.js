function getWeather() {
  const apiKey = "a8e71c9932b20c4ceb0aed183e6a83bb";
  const cityInput = document.getElementById('cityInpute').value;
  const weatherInfo = document.getElementById('weatherInfo');

  if (!cityInput) {
    alert('Please enter a city name.');
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    cityInput
  )}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const cityName = data.name;
      const country = data.sys.country;

      const weatherDisplay = `${weatherDescription} in ${cityName}, ${country}. Temperature: ${temperature}°C`;

      weatherInfo.textContent = weatherDisplay;
    })
    .catch((error) => {
      alert('Error fetching weather data.');
      console.error('Error:', error);
    });
}


