// business logic
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


// UI logic
const num1 = parseInt(prompt('Enter your number:'));
const num2 = parseInt(prompt('Enter your number:'));

// window.alert("The addition of your numbers equals" + add(num1, num2) + " .");
// window.alert("The subtract of your numbers equals" + subtract(num1, num2) + " .");
// window.alert("The multiply of your numbers equals" + multiply(num1, num2) + " .");
// window.alert("The divide of your numbers equals" + divide(num1, num2) + " .");

const addResult = add(num1, num2);
const subtractResult = subtract(num1, num2);
const multiplyResult = multiply(num1, num2);
const divideResult = divide(num1, num2);

// window.alert(
//     "The addition of your numbers equals " + addResult + ". \n" +
//     "The subtraction of your numbers equals " + subtractResult + ". \n" + 
//     "The multiplication of your numbers equals " + multiplyResult + ". \n" + 
//     "The division of your numbers equals " + divideResult + "."
// )

// window.alert(`${num1} - ${num2} = ${subtractResult}`);

window.alert(
    num1 + " + " + num2 + " = " + addResult + ",\n" +
    num1 + " - " + num2 + " = " + subtractResult + ",\n" +
    num1 + " * " + num2 + " = " + multiplyResult + ",\n" +
    num1 + " / " + num2 + " = " + divideResult + "."
);