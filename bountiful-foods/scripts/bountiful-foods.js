//Button
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Last modified
document.querySelector('#lastModified').textContent = `Last updated: ${document.lastModified}`;

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
    const fruit2 = document.querySelector('#fruit2');
    const fruit3 = document.querySelector('#fruit3');
 
    let defaultOption1 = document.createElement('option');
    let defaultOption2 = document.createElement('option');
    let defaultOption3 = document.createElement('option');

    defaultOption1.setAttribute('value', '')
    defaultOption2.setAttribute('value', '')
    defaultOption3.setAttribute('value', '')
    defaultOption1.textContent = 'Choose a fruit';
    defaultOption2.textContent = 'Choose a fruit';
    defaultOption3.textContent = 'Choose a fruit';

    fruit1.appendChild(defaultOption1);
    fruit2.appendChild(defaultOption2);
    fruit3.appendChild(defaultOption3);

    fruits.forEach(fruit => {
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        
        option1.setAttribute('value', fruit.id);
        option2.setAttribute('value', fruit.id);
        option3.setAttribute('value', fruit.id);
        option1.textContent = fruit.name;
        option2.textContent = fruit.name;
        option3.textContent = fruit.name;

        fruit1.appendChild(option1);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
    });
}

getFruits();

const fruitForm = document.querySelector('#fresh-form');

fruitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = localStorage.getItem("fruitData");

    const fruits = JSON.parse(data);
    let select1 = document.querySelector('#fruit1');
    let select2 = document.querySelector('#fruit2');
    let select3 = document.querySelector('#fruit3');
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;

    let fruit1Id = Number(select1.value);
    let fruit2Id = Number(select2.value);
    let fruit3Id = Number(select3.value);

    let fruit1 = fruits.find(fruit => fruit.id == fruit1Id);
    let fruit2 = fruits.find(fruit => fruit.id == fruit2Id);
    let fruit3 = fruits.find(fruit => fruit.id == fruit3Id);

    let totalCarbohydrates = fruit1.nutritions.carbohydrates + fruit2.nutritions.carbohydrates + fruit3.nutritions.carbohydrates;
    let totalProtein = fruit1.nutritions.protein + fruit2.nutritions.protein + fruit3.nutritions.protein;
    let totalFat = fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat;
    let totalCalories = fruit1.nutritions.calories + fruit2.nutritions.calories + fruit3.nutritions.calories;
    let totalSugar = fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar;


    alert(`
    Your Order

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Order date: ${currentmonth} ${day}, ${year} Hour: ${hours}:${minutes}

    Fruit 1: ${fruit1.name}
    Fruit 2: ${fruit2.name}
    Fruit 3: ${fruit3.name}

    Total Carbohydrates:  ${totalCarbohydrates.toFixed(1)} 
    Total Protein:              ${totalProtein.toFixed(1)} 
    Total Fat:                  ${totalFat.toFixed(1)} 
    Total Calories:          ${totalCalories.toFixed(1)} 
    Total Sugar:              ${totalSugar.toFixed(1)}`);

    let order = {fruit1: fruit1, name: 'Edisson'}

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
})




