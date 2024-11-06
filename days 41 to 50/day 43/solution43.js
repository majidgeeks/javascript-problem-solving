//*-------------------------------------------------------------------
//* Programming Challenge: FizzBuzz Challenge
//*-------------------------------------------------------------------
//? Write a function fizzbuzz that accepts two numbers, startNum
// and endNum, as input. The function should return an array 
//containing numbers and specific strings based on the following rules:
//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.


const fizzbuzz = (startNum, endNum) => {
    let arr = [];
    for(let i = startNum; i <= endNum; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('fizzbuzz');
        }else if(i % 3 === 0){
            arr.push('fizz');
        }else if(i % 5 === 0){
            arr.push('buzz')
        }else{
            arr.push(i)
        }
    }
    return arr;
}

console.log(fizzbuzz(1, 15));