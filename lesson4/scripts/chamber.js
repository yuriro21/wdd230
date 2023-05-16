function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');

}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Last modified// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

//Last modified
document.querySelector('#lastModified').innerHTML = `Last updated: ${document.lastModified}`;