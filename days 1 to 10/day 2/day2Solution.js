//*-------------------------------------------
//*  Programming Question: Hash Tag Generator
//*-------------------------------------------
//? You are required to implement a function generateHash that generates a hash tag
// from a given input string. The hash tag should be constructed as follows:
//? The input string should be converted to a hash tag format, where each word is
// capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if
// the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.
//* Write a function generateHash to accomplish this task.

const hashtagGenerate1 = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  const splitStr = str.split(" ");
  const strMap = splitStr.map((currElm) => {
    return currElm.replace(currElm[0], currElm[0].toUpperCase());
  });
  const joinStr = `#${strMap.join("")}`;
  console.log(joinStr);
};

hashtagGenerate1("my name is majid");

// second method

const hashtagGenerate2 = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  const splitStr = str.split(" ");
  const strMap = splitStr.map((currElm) => {
    return currElm.charAt(0).toUpperCase() + currElm.slice(1);
  });
  const joinMap = `#${strMap.join("")}`;
  console.log(joinMap);
};

hashtagGenerate2("my name is majid");
