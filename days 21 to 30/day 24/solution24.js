
//*---------------------------
//* Coding Challenge: Find the Mode in an Array
//*---------------------------
//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

const findMode = (arr) => {
    let count = {};
    for(let elemt of arr){
        count[elemt] = (count[elemt] || 0) + 1;
        }
        console.log(count);
    }

findMode([1, 2, 2, 3, 1, 4, 2]);
// out put is 
// {1: 2, 2: 3, 3: 1, 4: 1}

//   console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2
  //* Constraints:
  //? The input array will always contain at least one element.
  //? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency)