// write a function to remove duplicate elements from an array

const removeDuplicate = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

const arr1 = [1, 2, 3, 3, 4, 2, 5];
console.log(removeDuplicate(arr1));
