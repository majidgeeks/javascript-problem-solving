
//*---------------------------
//* Coding Challenge: Find the Mode in an Array
//*---------------------------
//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

const findMode = (arr) => {
    let count = {};
    let mode; 
    let maxNum = 0;
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        count[arr[i]] = (count[arr[i]] || 0) + 1;
        if(count[arr[i]] > maxNum){
            maxNum = count[arr[i]]
            mode = arr[i]
        }
    }
    // console.log(count)
    // console.log(maxNum)
    // console.log(mode)
    let result = `the mode is ${mode} it comes ${maxNum} times`;
    return result
} 

findMode([1, 2, 2, 3, 1, 4, 2]);
// out put is 
// {1: 2, 2: 3, 3: 1, 4: 1}

//   console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2
  //* Constraints:
  //? The input array will always contain at least one element.
  //? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency)