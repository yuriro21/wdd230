var temperature = document.getElementById('gradesf');
var wind = document.getElementById('mph');

var windchill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temperature*Math.pow(wind,0.16));
var windchillr = Math.round(windchill);
document.getElementById('windchill').innerHTML = windchillr;

