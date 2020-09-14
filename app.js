// VARIABLES

const digits = document.querySelectorAll(".digit-btn");
const clearButton = document.querySelector(".clear-btn");
const displayMainText = document.querySelector(".display-main-text");
let firstNumber = 0;

// MATH FUNCTIONS

const add = (a, b) =>  a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b){
    switch(operator){
        case add:
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
            break;
    }
}

function enterDigit(e) {
    displayMainText.textContent += this.textContent;
    firstNumber = Number(displayMainText.textContent);
    console.log(firstNumber);
}

function clearScreen() {
    firstNumber = 0;
    displayMainText.textContent = "0";
}

// EVENT LISTENERS 

digits.forEach(digit => digit.addEventListener("click", enterDigit));
clearButton.addEventListener("click", clearScreen);