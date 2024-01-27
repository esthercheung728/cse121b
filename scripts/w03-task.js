/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
//define a function "add" and return the sum
function add(number1, number2) {
    return number1 + number2;
}
// define another function "addNumbers"
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // call the add function and assign the return value
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// add a click event listener to HTML button
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
// define a function "subtract" and return the sum
const subtract = function (number1, number2) {
    return number1 - number2;
};

//  define another function "subtractNummbers"
const subtractNumbers = function () {
    const subtract1Value = Number(document.querySelector('#subtract1').value);
    const subtract2Value = Number(document.querySelector('#subtract2').value);

    const difference = subtract(subtract1Value, subtract2Value);

    document.querySelector('#difference').value = difference.toString();
};

// add a click event listener to HTML button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
// Define function "multiply"
const multiply = (number1, number2) => number1 * number2;

//  define another function "multiplyNumbers"
const multiplyNumbers = () => {
    const factor1Value = Number(document.querySelector('#factor1').value);
    const factor2Value = Number(document.querySelector('#factor2').value);

    const product = multiply(factor1Value, factor2Value);

    document.querySelector('#product').value = product.toString();
};
// add a click event listener to HTML button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
/* Function Definition - Divide Numbers */
// Define function "divide"
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const dividendValue = Number(document.querySelector('#dividend').value);
    const divisorValue = Number(document.querySelector('#divisor').value);

    const quotient = divide(dividendValue, divisorValue);

    document.querySelector('#quotient').value = quotient.toString();
}

// add a click event listener to HTML button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    const subtotal = Number(document.querySelector('#subtotal').value);
    const memberCheckbox = document.querySelector('#member');

    let total;

    if (memberCheckbox.checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }

    document.querySelector('#total').textContent = '$' + total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array = Array.from({ length: 13 }, (_, index) => index + 1);
document.querySelector('#array').textContent = array.join(', ');


/* Output Odds Only Array */
const oddNumbers = array.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddNumbers.join(', ');


/* Output Evens Only Array */
const evenNumbers = array.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');


/* Output Sum of Org. Array */
const sumOfArray = array.reduce((accumulator, currentValue) => accumulator + currentValue);
document.querySelector('#sumOfArray').textContent = sumOfArray;


/* Output Multiplied by 2 Array */
const multiplied = array.map(number => number * 2);
document.querySelector('#multiplied').textContent = multiplied.join(', ');


/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;