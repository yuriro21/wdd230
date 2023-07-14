//Button
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Last modified
document.querySelector('#lastModified').textContent = `Last updated: ${document.lastModified}`;


//Date
const currentDate = new Date();
let year = currentDate.getFullYear();
document.querySelector('#year').textContent = year;