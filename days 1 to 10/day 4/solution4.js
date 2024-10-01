// /*  Interview Question:
// //*---------------------------------------------------------
// //? Write a function called checkTriangleType that takes three parameters representing 
// //the lengths of the sides of a triangle. The function should return a string indicating
// // the type of triangle: "equilateral", "isosceles", or "scalene"

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".


const checkTriangle1 = (a, b, c) => {
    let result;
    if(a === b && b === c){
        result = 'equilateral'; // if all sides are equal
    }else if(a === b || b === c || a === c){
        result = "isosceles"; // if two sides are equal
    }else{
        result = "scalene"; // if all sides are different
    }
    return result;
};

console.log(checkTriangle1(3, 4, 5));



