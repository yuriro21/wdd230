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


// JSON Fruits
function ordersCounter(){
    const ordersSpace = document.getElementById('num-drinks');

    if (ordersSpace) {
        let orders = JSON.parse(localStorage.getItem('orders'));
        ordersSpace.textContent = orders.length || 0;
    }
}
 
ordersCounter();
async function getFruits() {
    const response = await fetch("./data/fruits.json");
    const data = await response.json();
    localStorage.setItem('fruitData', JSON.stringify(data));
    displayFruits(data);
}



const displayFruits = (fruits) => {
    
    const fruit1 = document.querySelector('#fruit1');

    let defaultOption = document.createElement('option');

    defaultOption.setAttribute('value', '')
    defaultOption.textContent = 'Choose a fruit';

    fruit1.appendChild(defaultOption);

    fruits.forEach(fruit => {
        let option = document.createElement('option');
        
        option.setAttribute('value', fruit.id);
        option.textContent = fruit.name;

        fruit1.appendChild(option);
    });

}

getFruits();

const fruitForm = document.querySelector('#fresh-form');

fruitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = localStorage.getItem("fruitData");

    const fruits = JSON.parse(data);
    let select1 = document.querySelector('#fruit1');
    let fruit1Id = Number(select1.value);

    let fruit1 = fruits.find(fruit => fruit.id == fruit1Id);

    alert(' fruit' + fruit1.nutritions.carbohydrates);

    let order = {fruit1: fruit1, name: 'Edisson'}

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
})




