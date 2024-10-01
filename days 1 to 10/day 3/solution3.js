//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------
//! Task:
//? Write a function called countChar that takes two parameters: a string and a character
// to count. The function should return the number of times the specified character
// appears in the string.

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character
//(the function should accept any character that is part of the ASCII character
//set and is printable)

// solution

const str1 = "missisipi";

const countChar1 = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let count = 0;
  const splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === char) {
      count++;
    }
  }
  console.log(count);
};

countChar1(str1, "I");

// an other method of solution

const str2 = "missisipi";

const countChar2 = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();
  const splitStr = str.split("");
  let count = splitStr.reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  });
  console.log(count);
};

countChar1(str2, "m");
