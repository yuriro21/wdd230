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

//banner
const banner = document.getElementById('banner');
function addbanner() {
    if (day === 1 || day === 2) {
        banner.classList.add("displays");
        const p = document.createElement("p");
        p.innerText = "Come join us for the chamber meet and greet Wednesday at 7:00 pm";
        banner.appendChild(p);
    }
}
addbanner();

//Discover Images
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1.0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}

//Last visits
function getDaysSinceLastVisit() {
  const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
  const currentTimestamp = new Date().getTime();
  
  if (lastVisitTimestamp) {
    const timeDifference = currentTimestamp - parseInt(lastVisitTimestamp);
    const daysSinceVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    document.getElementById('visits').textContent = daysSinceVisit;
  }
  localStorage.setItem('lastVisitTimestamp', currentTimestamp);
}

getDaysSinceLastVisit();


//Directory

async function getUsers() {
  const response = await fetch("./data/directoy.json");
  const data = await response.json();
  displayUsers(data.users);
}

const displayUsers = (users) => {
  const cards = document.querySelector('article');

  users.forEach((user) => {

    let card = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let direction = document.createElement('p');
    let number = document.createElement('p');
    let web = document.createElement('p');

    name.textContent = `${user.name}`;
    direction.textContent = `${user.address}`;
    number.textContent = `${user.phone}`;
    web.textContent = `${user.website}`;

    logo.setAttribute('src', user.image);
    logo.setAttribute('alt', `Logo of ${user.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
    logo.setAttribute('height', '150');

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(direction);
    card.appendChild(number);
    card.appendChild(web);

    cards.appendChild(card);
  });
}

getUsers();