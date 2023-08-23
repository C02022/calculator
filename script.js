function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// num, operator, num - EX: 3+5

let numA;
let operator;
let numB;

function operate(operator, numA, numB) {

    this.operators = {
        "+": add(numA, numB),
        "-": subtract(numA, numB),
        "*": multiply(numA, numB),
        "/": divide(numA, numB)
    };

    if (!this.operators[operator] || isNaN(numA) || isNaN(numB)) {
        return NaN;
    }

    return this.operators[operator];
}

// console.log(operate(operator, numA, numB));
