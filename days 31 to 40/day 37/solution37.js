
//*-------------------------------------------------------------------
//* Programming Challenge: Calculate Age from birthDate
//*-------------------------------------------------------------------
//? Create a function calculateAge that takes a birthDate as input and returns the
// current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".
//* Requirements:
//? The output should be the age in whole years.


const calculateAge = (birth) => {
    const currentDate = new Date();
    const birthDate = new Date(birth);
    const differenceYear = currentDate.getFullYear() - birthDate.getFullYear();
    const differenceMonth = currentDate.getMonth() - birthDate.getMonth();
    
    if(differenceMonth < 0 || (differenceMonth === 0 && currentDate.getDate() < birthDate.getDate() ) ){
        differenceYear--;
    }
    return differenceYear;
};

console.log(calculateAge('1988-6-28'));

