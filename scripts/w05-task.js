/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare const variable and reference the HTML div 'temples'
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
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


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok) { templeList = await response.json() }
        // templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};




/* reset Function */
// const reset = () => {
//     templesElement.innerHTML = '';
// };

const reset = () => templesElement.replaceChildren();

/* filterTemples Function */


const sortBy = () => {
    reset();
    const filter = document.getElementById("filtered");

    switch (filter.value) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(templeList);
            break;
    }
};

getTemples();

/* Event Listener */
// const filteredElement = document.querySelector('#filtered').addEventListener('change', () => {
//     filterTemples(templeList);
// });

const filteredElement = document.querySelector('#filtered').addEventListener('change', sortBy);