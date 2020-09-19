// VARIABLES

let displayValue = 0;
let initialValue = null;
let operation = null;
let hasFirstOperand = false;

// MATH FUNCTIONS

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0){
        alert("Not cool, bro.");
        displayValue = 0;
        operation = null;
        initialValue = null;
        hasFirstOperand = false;
        updateDisplay();
    } else {
        let result = a / b;
        return +result.toFixed(5);
    }
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
    }
}

// CALCULATOR FUNCTIONS

function updateDisplay() {
    const display = document.querySelector(".display-main-text");
    display.textContent = displayValue;
}

function enterDigit(digit) {
    if (displayValue === 0 || displayValue === undefined){
        displayValue = digit;
    } else if (digit === ".") {
        if(displayValue.indexOf(".") === -1)
        displayValue += digit;
    } else { 
        displayValue += digit;
    }
    updateDisplay();
}

function manageOperation(newOperation) {
    if(hasFirstOperand){
        displayValue = operate(operation, initialValue, displayValue);
        updateDisplay();
    }
    operation = newOperation;
    initialValue = displayValue;
    hasFirstOperand = true;
    displayValue = 0;
}

function manageEquals() {
    if(operation && initialValue){
        displayValue = operate(operation, initialValue, displayValue);
        hasFirstOperand = false;
        updateDisplay();
    }
}

// EVENT LISTENERS 

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", (e) => {
    switch (e.target.value){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6": 
        case "7":
        case "8":
        case "9":
        case "0":
        case ".": 
           enterDigit(e.target.value);
           break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            manageOperation(e.target.value);
            break;
        case "equal":
            manageEquals();
            break;   
        case "sign":
            displayValue = +displayValue * -1;
            updateDisplay();
            break;
        case "percent":
            displayValue = +displayValue / 100;
            updateDisplay();
            break;
        case "AC":
            displayValue = 0;
            operation = null;
            initialValue = null;
            hasFirstOperand = false;
            updateDisplay();
            break;
    }
}));