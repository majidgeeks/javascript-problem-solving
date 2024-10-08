//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 18: Write a function to convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
    return str
      .trim()
      .split(" ")
      .map((curElem, index) => {
        if (index === 0) {
          return curElem.toLowerCase();
        } else {
          return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
      })
      .join("");
  };
  console.log(toCamelCase("hello my world")); // Output: helloMyWorld
  