// business logic

function convert(num1){
  return (num1 * 9/5) + 32 
}


// ui logic

// 1) take an input from the user
const num1 = parseInt(prompt("Enter your number:"));

// 2) convert from celsius to fahrenheit
const convertResult = convert(num1);

// 3) show the conversion back to the user
window.alert("the conversion of " + num1 + " is " + convertResult);