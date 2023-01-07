//Current year
let currentdate = new Date();
let currentYear = currentdate.getFullYear();
document.querySelector('#year').innerHTML = currentYear;

//Last modified
document.querySelector('#lastModified').innerHTML = document.lastModified;