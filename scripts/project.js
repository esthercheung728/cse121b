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
        img.src = menus.img;
        img.alt = menus.title;

        const p = document.createElement('p');
        p.textContent = menus.desc;

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${menus.price}`;

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p);
        article.appendChild(price);

        menuElement.appendChild(article);
    });
};


/* async getMenu Function using fetch()*/

const getMenu = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/esthercheung728/cse121b/main/images/restaurantMenu.json");
        if (response.ok) { menuList = await response.json() }
        displayMenu(menuList);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
};

/* reset Function */
const reset = () => menuElement.replaceChildren();

/* filterMenu Function */
const sortBy = () => {
    reset();
    const filter = document.getElementById("filtered");

    switch (filter.value) {
        case 'pasta':
            displayMenu(menuList.filter(menu => menu.category === 'pasta'));
            break;
        case 'salad':
            displayMenu(menuList.filter(menu => menu.category === 'salad'));
            break;
        case 'snack':
            displayMenu(menuList.filter(menu => menu.category === 'snack'));
            break;
        case 'rice':
            displayMenu(menuList.filter(menu => menu.category === 'rice'));
            break;
        case 'burger':
            displayMenu(menuList.filter(menu => menu.category === 'burger'));
            break;
        case 'pizza':
            displayMenu(menuList.filter(menu => menu.category === 'pizza'));
            break;
        case 'dessert':
            displayMenu(menuList.filter(menu => menu.category === 'dessert'));
            break;
        case 'drinks':
            displayMenu(menuList.filter(menu => menu.category === 'drinks'));
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