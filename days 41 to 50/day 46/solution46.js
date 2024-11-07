
//*-------------------------------------------------------------------
//* Programming Challenge: Mobile Number Validation
//*-------------------------------------------------------------------
//? Write a function that takes a string as input and returns true if the string represents a valid Pakistani
// mobile number, and false otherwise.
//* Validation Requirements:
//? Length: Pakistani mobile number should have exactly 11 digits.
//? Starting Digit: The number must start with 0, which is valid
// starting digits for Pakistani mobile numbers.

const validateContact = (num) => {
    return /^[0-9]{11}$/.test(num);
};

console.log(validateContact('03445678910')); // true
console.log(validateContact('0344567891067')); // false
