//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
//? 16: Write a function findMin that takes an array of numbers as input and returns 
//the minimum value found in the array.
//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

//   console.log(findMin([5, 10, 2, 8])); // Output: 2
//   console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
//   console.log(findMin([])); // Output: undefined (or any suitable message for empty array)
  //* Note:
  //? Ensure the function handles edge cases gracefully, such as an empty input array.
  //? Consider using ES6 features like the spread syntax (...) for a concise implementation.
  //todo In JavaScript, the spread syntax (...) is used to expand an array into
  // individual elements. In this function, ...arr is used to spread the elements
  // of the input array arr.
  //? For example, if arr is [5, 10, 2, 8], then ...arr expands to 5, 10, 2, 8.

  const givenArr1 = [5, 10, 2, 8];
  const givenArr2 = [5, -3, 0, 12, -7];
  const givenArr3 = [];

const findMin = (arr) => {
   if(arr.length === 0){
    return 'array is empty';
   } 
   const sortArr = arr.sort((a, b) => a - b )
    let minNum = sortArr[0];
    return minNum;
}
console.log(findMin(givenArr1));
console.log(findMin(givenArr2));
console.log(findMin(givenArr3));




