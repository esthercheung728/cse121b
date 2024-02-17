// // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");

// // display all items when page loads
// window.addEventListener("DOMContentLoaded", function () {
//     fetch("https://raw.githubusercontent.com/esthercheung728/cse121b/main/images/menu.json")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             displayMenuItems(data);
//             displayMenuButtons(data);
//         })
//         .catch(function (error) {
//             console.log("Error fetching menu data:", error);
//         });
// });

// // Function to display menu items
// function displayMenuItems(menuItems) {
//     let displayMenu = menuItems.map(function (item) {
//         return `<article class="menu-item">
//             <img src=${item.img} alt=${item.title} class="photo" />
//             <div class="item-info">
//               <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//               </header>
//               <p class="item-text">
//                 ${item.desc}
//               </p>
//             </div>
//           </article>`;
//     });

//     displayMenu = displayMenu.join("");
//     sectionCenter.innerHTML = displayMenu;
// }

// // Function to display menu filter buttons
// function displayMenuButtons() {
//     // Get unique categories from the menu array
//     const categories = menu.reduce(
//         function (values, item) {
//             if (!values.includes(item.category)) {
//                 values.push(item.category);
//             }
//             return values;
//         },
//         ["all"]
//     );

//     // Generate HTML for filter buttons
//     const categoryBtns = categories
//         .map(function (category) {
//             return `<button type="button" class="filter-btn" data-id=${category}>
//             ${category}
//           </button>`;
//         })
//         .join("");

//     btnContainer.innerHTML = categoryBtns;
//     const filterBtns = btnContainer.querySelectorAll(".filter-btn");

//     filterBtns.forEach(function (btn) {
//         btn.addEventListener("click", function (e) {
//             const category = e.currentTarget.dataset.id;
//             const menuCategory = menu.filter(function (menuItem) {
//                 if (menuItem.category === category) {
//                     return menuItem;
//                 }
//             });

//             // Display menu items based on the selected category
//             if (category === "all") {
//                 displayMenuItems(menu);
//             } else {
//                 displayMenuItems(menuCategory);
//             }
//         });
//     });
// }

// // /* async getTemples Function using fetch()*/

// // const getMenu = async () => {
// //     try {
// //         const response = await fetch("https://raw.githubusercontent.com/esthercheung728/cse121b/main/images/menu.json");
// //         if (response.ok) { templeList = await response.json() }
// //         // menuList = await response.json();
// //         displayMenuItems(menu);
// //     } catch (error) {
// //         console.error("Error fetching temple data:", error);
// //     }
// // };


// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    fetch("https://esthercheung728.github.io/cse121b/restaurantMenu.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            displayMenuItems(data);
            displayMenuButtons(data);
        })
        .catch(function (error) {
            console.log("Error fetching menu data:", error);
        });
});

// Function to display menu items
function displayMenuItems(menuItems) {
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
function displayMenuButtons(menuItems) {
    // Get unique categories from the menu items
    const categories = menuItems.reduce(
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
            const menuItemsToShow = category === "all" ? menuItems : menuItems.filter(function (item) {
                return item.category === category;
            });

            // Display menu items based on the selected category
            displayMenuItems(menuItemsToShow);
        });
    });
}