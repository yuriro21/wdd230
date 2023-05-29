var temperature = document.querySelector('gradesf');
var wind = document.querySelector('mph');

var windchill = 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  wind ^ 0.16;
var windchillr = Math.round(windchill);
document.getElementById('windchill').innerHTML = windchill;

