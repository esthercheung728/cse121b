// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


// Variables
// let myVariable = "Bob";
// myVariable = "Steve";

// Comments1
/*
Everything in between is a comment.
*/

// Comments2
// This is a comment

// Conditionals
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite…");
// }


// Fuctions
// let myVariable = document.querySelector("h1");
// alert("hello!");
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// // Events
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
// });

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
