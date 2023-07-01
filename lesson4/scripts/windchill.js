const currentTemperature = document.querySelector('#gradesf');
const currentCondition = document.querySelector('#condition');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#mph')
const url = 'https://api.openweathermap.org/data/2.5/weather?q=San%20Cristobal,%20VE&units=imperial&appid=86f36de3b858316028d23dffa4efd17e'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = weatherData.wind.speed;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    currentCondition.textContent = desc;
}

apiFetch();
