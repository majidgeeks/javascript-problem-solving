// write a function that takes a string as input and return the count of vowels in that
// string. consider 'a','e','i','o','u' as vowels.(both in lower and upper case).

const str1 = 'Hello World';
const str2 = 'The quick fox jumps on the lazy dog';


const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let arr = str.split('');
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    console.log(count);
}

countVowels(str1);
countVowels(str2);