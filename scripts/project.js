/* W06: Programming Tasks */

/* Declare and initialize global variables */

// Declare const variable and reference the HTML div 'restaurantMenu'
const menuElement = document.getElementById('restaurantMenu');
let menuList = [];

/* async displayMenu Function */

const displayMenu = (restaurantMenu) => {
    restaurantMenu.forEach(menus => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = menus.title;

        const img = document.createElement('img');
        img.src = menus.imageUrl;
        img.alt = menus.category;

        article.appendChild(h3);
        article.appendChild(img);

        menuElement.appendChild(article);
    });
};


/* async getMenu Function using fetch()*/

const getMenu = async () => {
    try {
        const response = await fetch("https://esthercheung728.github.io/cse121b/images/restaurantMenu.json");
        if (response.ok) { menuList = await response.json() }
        // menuList = await response.json();
        displayMenu(menuList);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
};




/* reset Function */
// const reset = () => {
//     menuElement.innerHTML = '';
// };

const reset = () => menuElement.replaceChildren();

/* filterMenu Function */


const sortBy = () => {
    reset();
    const filter = document.getElementById("filtered");

    switch (filter.value) {
        case 'pasta':
            displayMenu(menuList.filter(menu => menus.category.includes('Pasta')));
            break;
        case 'salad':
            displayMenu(menuList.filter(menu => menus.category.includes('Salad')));
            break;
        case 'snack':
            displayMenu(menuList.filter(menu => menus.category.includes('Snack')));
            break;
        case 'rice':
            displayMenu(menuList.filter(menu => menus.category.includes('Rice')));
            break;
        case 'burger':
            displayMenu(menuList.filter(menu => menus.category.includes('Burger')));
            break;
        case 'pizza':
            displayMenu(menuList.filter(menu => menus.category.includes('Pizza')));
            break;
        case 'dessert':
            displayMenu(menuList.filter(menu => menus.category.includes('Dessert')));
        case 'drinks':
            displayMenu(menuList.filter(menu => menus.category.includes('Drinks')));
            break;

        case 'all':
        default:
            displayMenu(menuList);
            break;
    }
};

getMenu();

/* Event Listener */

const filteredElement = document.querySelector('#filtered').addEventListener('change', sortBy);