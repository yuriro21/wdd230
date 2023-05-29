let temperature = document.querySelector('gradesf');
let wind = document.querySelector('mph');

let windchill = 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  wind ^ 0.16;
let windchillr = Math.round(windchill);
document.getElementById('windchill').innerHTML = windchill;

