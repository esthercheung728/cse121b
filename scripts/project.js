// // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");

// Declare const variable and reference the HTML div 'menu'
const menuElement = document.getElementById('menu');
let menuList = [];

/* async displayMenu Function */

const displayMenu = (menu) => {
    menu.forEach(menu => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};




// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    fetch("https://github.com/esthercheung728/cse121b/blob/main/images/menu.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            diplayMenuItems(data);
            displayMenuButtons(data);
        })
        .catch(function (error) {
            console.log("Error fetching menu data:", error);
        });
});

/* async getMenu Function using fetch()*/

const getMenu = async () => {
    try {
        const response = await fetch("https://github.com/esthercheung728/cse121b/blob/main/images/menu.json");
        if (response.ok) { menuList = await response.json() }
        // menuList = await response.json();
        displayMenu(menuList);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
};




/* reset Function */
const reset = () => sectionCenter.replaceChildren();


















// Function to display menu items
function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

// Function to display menu filter buttons
function displayMenuButtons() {
    // Get unique categories from the menu array
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    // Generate HTML for filter buttons
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            // Display menu items based on the selected category
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}