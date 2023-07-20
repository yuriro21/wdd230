const currentTemperature = document.querySelector('#gradesf');
const currentCondition = document.querySelector('#condition');
const weatherIcon = document.querySelector('#weather-icon');
const currentHumidity = document.querySelector('#humidity')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&units=imperial&appid=86f36de3b858316028d23dffa4efd17e'


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

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const hum = weatherData.main.humidity;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    currentCondition.textContent = desc;
    currentHumidity.textContent = `Humidity: ${hum}%`;
}

apiFetch();

//Dates
const currentDate = new Date();
let minutes = currentDate.getMinutes();
let hours = currentDate.getHours();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day1 = days[day + 1];
let day2 = days[day + 2];
let day3 = days[day + 3];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentmonth = months[month];

document.getElementById('#day1').textContent = day1;
document.getElementById('#day2').textContent = day2;
document.getElementById('#day3').textContent = day3;
document.getElementById('#year').textContent = year;