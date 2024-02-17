// /* W06: Programming Tasks */

// /* Declare and initialize global variables */

// // Declare const variable and reference the HTML div 'restaurantMenu'
// const menuElement = document.getElementById('restaurantMenu');
// let menuList = [];

// /* async displayMenu Function */

// const displayMenu = (restaurantMenu) => {
//     restaurantMenu.forEach(restaurantMenu => {
//         const article = document.createElement('article');

//         const h3 = document.createElement('h3');
//         h3.textContent = restaurantMenu.title;

//         const img = document.createElement('img');
//         img.src = restaurantMenu.img;
//         img.alt = restaurantMenu.title;

//         const p = document.createElement('p');
//         p.textContent = restaurantMenu.desc;

//         const price = document.createElement('div');
//         price.classList.add('price');
//         price.textContent = `$${restaurantMenu.price}`;



//         article.appendChild(h3);
//         article.appendChild(img);
//         article.appendChild(p);
//         article.appendChild(price);

//         menuElement.appendChild(article);
//     });
// };


// /* async getMenu Function using fetch()*/

// const getMenu = async () => {
//     try {
//         const response = await fetch("https://esthercheung728.github.io/cse121b/restaurantMenu.json");
//         if (response.ok) { menuList = await response.json() }
//         displayMenu(menuList);
//         // } catch (error) {
//         //     console.error("Error fetching menu data:", error);
//     }
//     };

// /* reset Function */
// const reset = () => menuElement.replaceChildren();

// /* filterMenu Function */
// const sortBy = () => {
//     reset();
//     const filter = document.getElementById("filtered");

//     switch (filter.value) {
//         case 'pasta':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'pasta'));
//             break;
//         case 'salad':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'salad'));
//             break;
//         case 'snack':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'snack'));
//             break;
//         case 'rice':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'rice'));
//             break;
//         case 'burger':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'burger'));
//             break;
//         case 'pizza':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'pizza'));
//             break;
//         case 'dessert':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'dessert'));
//             break;
//         case 'drinks':
//             displayMenu(menuList.filter(restaurantMenu => restaurantMenu.category === 'drinks'));
//             break;
//         case 'all':
//         default:
//             displayMenu(menuList);
//             break;
//     }
// };

// getMenu();

// /* Event Listener */

// const filteredElement = document.querySelector('#filtered').addEventListener('change', sortBy);

// // document.querySelector("#filtered").addEventListener("change", () => { filterMenu(menuList) });










// const displayMenus = (restaurantMenus) =>
//     restaurantMenus.forEach((restaurantMenu) => {
//         const article = document.createElement("article");
//         const h3 = document.createElement("h3");
//         h3.textContent = restaurantMenu.title;
//         const img = document.createElement("img");
//         img.src = restaurantMenu.imageUrl;
//         img.alt = restaurantMenu.desc;
//         article.appendChild(h3);
//         article.appendChild(img);
//         menuElement.appendChild(article);
//     });



/* W06: Project */

/* Step 3: Declare and initialize global variables */
const menuElement = document.getElementById("restaurantMenu");
let menuList = [];

/* Step 4: async displayMenus Function */
const displayMenus = (restaurantMenus) => {
    restaurantMenus.forEach((restaurantMenu) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = restaurantMenu.title;

        const img = document.createElement("img");
        img.src = restaurantMenu.imageUrl;
        img.alt = restaurantMenu.title;

        const p = document.createElement("p");
        p.textContent = restaurantMenu.desc;

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = `$${restaurantMenu.price}`;

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p);
        article.appendChild(price);

        menuElement.appendChild(article);
    });
};

/* Step 5 async getMenu Function using fetch()*/
const getMenu = async () => {
    const response = await fetch(
        "https://esthercheung728.github.io/cse121b/restaurantMenu.json"
    );
    if (response.ok) {
        menuList = await response.json();
    }
    displayMenus(menuList);
};

/* Step 6 reset Function */
const reset = () => menuElement.replaceChildren();

/* Step 7 filterMenu Function */
const filterMenu = (restaurantMenus) => {
    reset();
    const filter = document.getElementById("filtered");
    switch (filter.value) {
        case "pasta":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "pasta"));
            break;
        case "salad":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "salad"));
            break;
        case "snack":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "snack"));
            break;
        case "rice":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "rice"));
            break;
        case "burger":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "burger"));
            break;
        case "pizza":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "pizza"));
            break;
        case "dessert":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "dessert"));
            break;
        case "drinks":
            displayMenus(menuList.filter((restaurantMenu) => restaurantMenu.category === "drinks"));
            break;
        case "all":
            displayMenus(menuList);
            break;
        case "alphabetic":
            displayMenus(
                menuList.sort((a, b) => {
                    let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            );
            break;
        default:
        // code block
    }
};

getMenu();

/* Step 8 Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterMenu(menuList);
});