
//*-----------------------------------------------------------
//* Programming Challenge:  Simple Interest Calculator
//*-----------------------------------------------------------
//? Write a function calculateSimpleInterest that calculates the simple interest
// given the principal amount, rate of interest per annum, and time in years.

const calculateSimpleInterest = (p, r, t) => {
return (p * r * t) / 100; // p for begining balance, r for rate and total months of period 
};

calculateSimpleInterest(100000, 20, 12);
calculateSimpleInterest(100000, 20, 6);


