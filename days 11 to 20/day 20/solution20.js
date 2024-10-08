
//?20. Write a function to reverse a string without using any built-in methods
// or libraries. The function should take a string as input and return the
// reversed string.

const reverseStr = (str) => {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
};

console.log(reverseStr('hello'));