//*--------------------------------------------------------------------
//* Programming Challenge: Convert Object to Array and Vice Versa
//*--------------------------------------------------------------------
//* Your task is to implement two functions:
//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.
//? Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.
//? Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers, and objects.
//* Constraints:
//? The input object may contain properties of any data type.
//? The input array must contain arrays with exactly two elements (key-value pairs).
//? The output object should have properties in the same order as the original object.
//? You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.

const obj1 = {
    name: "Majid Hussain",
    age: 30,
    city: "Karachi",
  };

const objectToArray = (obj) => {
    let entries = Object.entries(obj) // from object to array
    console.log(entries)
    let newArr = Object.fromEntries(entries); // from array to object
    console.log(newArr)
};

objectToArray(obj1);




