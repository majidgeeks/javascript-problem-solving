//*-----------------------------------------------
//* Coding Challenge: Simple Password Validator
//*-----------------------------------------------
//* Write a function called simplePasswordValidator that takes a single parameter:
//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:
//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return false.
//* Input:
//? password: A non-empty string representing the password to be validated.
//* Output:
//? true if the password meets all the criteria.
//? false otherwise.
//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.


const passGenerate = (str) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNum = false;
   for(let char of str){
       if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
           hasLowerCase = true;
       }
   else if(char.charCodeAt(0) >= 90 && char.charCodeAt(0) <= 122){
        hasUpperCase = true;
   }
   else if(!isNaN(Number(char))){
       hasNum = true;
   }
   }
   
   if(!hasLowerCase || !hasUpperCase || !hasNum || str.length < 8){
       return false
   }else{
       return true;
   }
       
};

console.log(passGenerate('abcdef'));
console.log(passGenerate('Abcd'));
console.log(passGenerate('Abcd1hfg'));