/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Cheung Yee Ting";
const currentYear = 2024;
let profilePicture = "images/1.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
const favoriteFoods = ['Pineapples', 'Blueberry', 'Strawberry', 'Potato Salad'];
foodElement.innerHTML = '<br>' + favoriteFoods.join(', ');
const newFavoriteFood = 'Pear';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');






