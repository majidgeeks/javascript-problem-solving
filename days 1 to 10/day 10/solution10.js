// write a function to compare two arrays if both are have same values or not
// the function take too arrays as arguments to compare them

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 2, 3, 4, 5, 6, 7];

const emptArr1 = [];
const emptArr2 = [];


const compareArrays = (arr1, arr2) => {
   if(arr1.length !== arr2.length){
    return false;
   };
   const compare = arr1.every((curVal, index) => curVal === arr2[index] );
   console.log(compare);
}

compareArrays(array1, array2); // true
compareArrays(emptArr1, emptArr2); // true
compareArrays(array1, emptArr1); // it will return and will not excecute 