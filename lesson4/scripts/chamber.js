//Button
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Dates
const currentDate = new Date();
let day = currentDate.getDay();
let date = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentday = days[day];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentmonth = months[month];

document.querySelector('#year').textContent = currentDate.getFullYear();
document.querySelector('#currentime').textContent = `${currentday}, ${date} ${currentmonth} ${year}`;

//Last modified
document.querySelector('#lastModified').textContent = `Last updated: ${document.lastModified}`;