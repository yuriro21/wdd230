//Button
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Last modified
document.querySelector('#lastModified').textContent = `Last updated: ${document.lastModified}`;


//Dates
const currentDate = new Date();
let day = currentDate.getDay();
let year = currentDate.getFullYear();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day1 = days[day + 1];
let day2 = days[day + 2];
let day3 = days[day + 3];

document.querySelector('#day1').textContent = day1;
document.querySelector('#day2').textContent = day2;
document.querySelector('#day3').textContent = day3;
document.querySelector('#year').textContent = year;