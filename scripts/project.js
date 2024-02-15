const menu = [
    {
        id: 1,
        title: "seafood fettuccine with tom yum cream sauce",
        category: "pasta",
        price: 98,
        img: "./images/fettuccine.jpg",
        desc: `Thai and Italian flavors, and super cozy and comforting! Seafood and veggies are tossed with pasta in a mouthwatering and fiery tom yum cream sauce!`,
    },
    {
        id: 2,
        title: "classic caesar salad with chicken breast",
        category: "salad",
        price: 68,
        img: "./images/caesar.jpg",
        desc: `A classic Caesaresar salad with a homemade caesar dressing, flavorful grilled chicken, and croutons makes this a satisfying meal to have at any time of the day.`,
    },
    {
        id: 3,
        title: "deep fried mozzarella",
        category: "snack",
        price: 52,
        img: "./images/mozzarella.jpg",
        desc: `Cheese sticks are delicious before-dinner snacks, party food. Crispy Fried Mozzarella coated with breadcrumbs, you just can’t beat the delectable taste sensation. Any cheese lover’s dream!`,
    },
    {
        id: 4,
        title: "green curry chicken risotto",
        category: "rice",
        price: 90,
        img: "./images/curry.jpg",
        desc: `Warming with some light spice, rich and creamy - it's a favourite of anyone who enjoys Thai food and flavours.`,
    },
    {
        id: 5,
        title: "Angus beef hamburger with french fries",
        category: "burger",
        price: 92,
        img: "./images/burger.jpg",
        desc: `Made from high-quality chopped Angus beef cooked over an open flame to seal in juiciness and flavor.`,
    },
    {
        id: 6,
        title: "truffle fries",
        category: "snack",
        price: 52,
        img: "./images/truffle.jpg",
        desc: `Crispy golden shoestring fries infused with generous truffle oil, scattered with lots of grated Parmesan!`,
    },
    {
        id: 7,
        title: "bacon overflow spaghetti aglio e olio with cereal prawns",
        category: "pasta",
        price: 95,
        img: "./images/prawn.jpg",
        desc: `A slick of oil-sauteed garlic forms the sauce and here it's made all the more crave-worthy with the addition of plump prawns and a gunshot of spice in the form of chili flakes.`,
    },
    {
        id: 8,
        title: "tom yum cream spaghetti with mussels",
        category: "pasta",
        price: 56,
        img: "./images/tomyum.jpg",
        desc: `Spaghetti in a rich creamy sauce that packs a punch when the spiciness hits. Includes a good amount of mussels.`,
    },
    {
        id: 9,
        title: "thai raw shrimp",
        category: "snack",
        price: 68,
        img: "./images/shrimp.jpg",
        desc: `Raw shrimp served with a fiery dressing. The dressing should be on the far edge of your spice tolerance, because, as with every good Thai dish, the “hot” element is balanced by the sour, salty, and sweet flavors.`,
    },
    {
        id: 10,
        title: "singapore tomato spaghetti with soft shell crab",
        category: "pasta",
        price: 88,
        img: "./images/spaghetti.jpg",
        desc: `Crispy battered soft-shell crab served with linguini doused in tomato-based sauce. Seafood-y enough for fans of seafood. `,
    },
    {
        id: 11,
        title: "margarita with parma ham pizza",
        category: "pizza",
        price: 98,
        img: "./images/margarita.jpg",
        desc: `Tomato sauce, mixed cheese base, slices of tomatoes topped with burrata cheese and fresh basil, sprinkled with parmesan and oregano.`,
    },
    {
        id: 12,
        title: "french fries with cajun spice",
        category: "snack",
        price: 48,
        img: "./images/cajun.jpg",
        desc: `French fries are beloved by all, and are a winning anytime snack or side. sprinkle with the most alluring French Fry Cajun Seasoning. It has a bit of intriguing heat without a vibrant burn, so even kids and folks who aren’t crazy about spiciness with love every bite!`,
    },
    {
        id: 13,
        title: "pomelo salad with shrimp",
        category: "salad",
        price: 82,
        img: "./images/pomelo.jpg",
        desc: `The Pomelo is sweet and slightly sour. It complements very well with the pan-grilled shrimps.`,
    },
    {
        id: 14,
        title: "coconut sticky rice with mango",
        category: "dessert",
        price: 68,
        img: "./images/stickyrice.jpg",
        desc: `This Thai dessert of glutinous sticky rice, seasoned with salty-sweet coconut milk and served with tender, fragrant slices of mango, will be irresistible.`,
    },
    {
        id: 15,
        title: "mixberry smoothie",
        category: "drinks",
        price: 40,
        img: "./images/mixberry.jpg",
        desc: ` Not only is this drink packed with antioxidants and vitamins, but it’s also refreshing and nutritious. Mixed Berry Smoothie contains key nutrients your body needs to function optimally. `,
    },
    {
        id: 16,
        title: "passion fruit and mango smoothie",
        category: "drinks",
        price: 40,
        img: "./images/mango.jpg",
        desc: `Sweet, tangy & full of refreshing fruity flavors. Enjoy our mango smoothie filled with passion fruit to give it an even sweeter taste.`,
    },
    {
        id: 17,
        title: "chocolate",
        category: "drinks",
        price: 40,
        img: "./images/chocolate.jpg",
        desc: `Chocolate with a dense and cottony texture, paired with crispy chocolate chips on the edge of the cup, two very different tastes mixed together, a must-have for chocolate lovers`,
    },
    {
        id: 18,
        title: "roasted duck breast and jeek pizza",
        category: "pizza",
        price: 94,
        img: "./images/duck.jpg",
        desc: `The Peking Duck Pizza is a new flavor of sourdough pizza, made with confit duck, hoisin sauce, mozzarella cheese, shallots, etc.`,
    },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

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
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}