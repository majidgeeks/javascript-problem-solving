//*-------------------------------------------------------------------
//* Programming Challenge: Password Validation Coding Problem
//*-------------------------------------------------------------------
//? Create a function validatePassword that checks if a given password string meets the following criteria:
//?todo  Minimum Length: The password must be at least 8 characters long.
//?todo Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//?todo Numerical Requirement: The password must contain at least one digit.
//?todo Special Character Requirement: The password must have at least one special character from the set !@#$%^&*()-_+=.
//* Requirements
//? The function should return true if the password meets all the criteria, and false otherwise.
//? You are to implement this function using JavaScript.

const validatePassword = (pass) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(pass);
};

console.log(validatePassword('Majid@123Hussain'));