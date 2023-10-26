// business logic

// pounds and ounces to grams
function ozGrams(oz, lbs) {
  return (oz * 28.35) + (lbs * 453.59);
}

// teaspoons to ml
function tspMLiter(userInput) {
    return userInput * 4.92;
  }

  // gallons to liters
  function gallLiter(userInput) {
    return userInput * 4.54;
}

//ui logic

//gather input
const userOuncesInput = parseInt(prompt("Enter your ounces that you wish to convert:"));
const userPoundInput = parseInt(prompt("Enter your pounds that you wish to convert:"));

// convert input
const conversionGramsResult = ozGrams(userOuncesInput, userPoundInput);

//show results
window.alert("the conversion of Ounces " + userOuncesInput + " and " + userPoundInput + " pounds " + " is " + conversionGramsResult + " grams.");





const userTeaInput = parseInt(prompt("Enter your teaspoon that you wish to convert:"));

const conversionTeaspoonResult = tspMLiter(userTeaInput);

window.alert("The teaspoon conversion of " + userTeaInput + " is " + conversionTeaspoonResult + "milliliters.");





const userGallLiterInput = parseInt(prompt("Enter your gallons that you wish to convert:"));

const userGallLiter = gallLiter(userGallLiterInput);

window.alert("The gallon conversion of " + userGallLiterInput + " is " + userGallLiter + ".");