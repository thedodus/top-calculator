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