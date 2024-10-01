
// check the given string is palindrome or not remind that given string is case sensitive; 
// string1 = 'racecar'
// string2 = 'hello'


const isPalandrome = (str) => {
   let result; 
   const reverseStr = str.toLowerCase().split('').reverse().join('');
    console.log(reverseStr)
   if( reverseStr === str.toLowerCase()){
     result = 'it is palandrome';
   }
   else{
      result = 'it is not palandrome';
   }
   console.log("result",result)
};

isPalandrome('Hello');
isPalandrome('Racecar');


