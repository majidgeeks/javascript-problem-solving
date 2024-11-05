//*-------------------------------------------------------------------
//* Programming Challenge: Validate a Credit Card Number (Luhn Algorithm)
//*-------------------------------------------------------------------
//? Write a function to validate credit card numbers using the Luhn algorithm.
//* Requirements:
//? Write a function named validateCreditCard that takes a credit card number as a string.
//? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
//? Ensure the function can handle numbers as strings, which may include spaces and dashes.
//* Luhn Algorithm Steps:
// Steps of the Luhn Algorithm
// Prepare the Number:
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the Digits:
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//todo Double Every Second Digit:
// Starting from the first digit, double every second digit.
//todo For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//? Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
//? Subtract 9 from Numbers Higher Than 9:
// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7
// 14 = 14-9= 5
// 14= 1+4=5
// If doubling the number results in a number greater than 9, subtract 9 from it.
//? Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//todo Sum All Digits:
//? Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//todo Check Modulo 10:
//? If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

// here we will follow luhn formula(algorithm) to validate credit card
const validateCreditCard = (str) => {
    // remove non digit from string
    str = str.replace(/\D/g, '') 
    let reverseStr = '';
   // lets reverse numbers in string
    for(let i = str.length - 1; i >= 0; i-- ){
        reverseStr = reverseStr + str[i]
    };
    // console.log(reverseStr) // 7646343088419354

    //multiply numbers after one which means we will skip even index number 
    // only we have to multiply that digit which is on at odd index number 
    
    let arr = reverseStr.split('').map((currentElm, index) => {
        if(index % 2 !== 0){
            currentElm = currentElm * 2

        // if digit is greater than 9 then minus 9 from that digit means we want only single
        // digit number
        if(currentElm > 9){
            currentElm = currentElm - 9;
        }else{
            currentElm = currentElm;
        }
            }
       return Number(currentElm)
    });
    
    // now add all digits in the array
    let addition = arr.reduce((acc, curr) => {
        return acc + curr
    },0)

    // check if addition result % 10 === 0 so card is valide other wise not
    return addition % 10 === 0;
}
console.log(validateCreditCard("4539 1488 0343 6467")); // Output: true