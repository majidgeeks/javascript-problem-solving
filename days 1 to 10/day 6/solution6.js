
// check the given string is palindrome or not remind that given string is case sensitive; 
// string1 = 'racecar'
// string2 = 'hello'

// solution by using reverse method
const isPalandrome1 = (str) => {
   let result; 
   const reverseStr = str.toLowerCase().split('').reverse().join('');
   if( reverseStr === str.toLowerCase()){
     result = 'it is palandrome';
   }
   else{
      result = 'it is not palandrome';
   }
   console.log("result",result)
};

isPalandrome1('Hello');
isPalandrome1('Racecar');


// solution by another method using for loop

const isPalandrome2 = (str) => {
    let arr = [];
    str = str.toLowerCase();
    for(let i = str.length; i >= 0; i--){
        arr.push(str[i]);
    }
    let joinArr = arr.join('');
    if(str.toLowerCase() === joinArr){
        console.log('it is palandrome');
    }else{
        console.log('it is not palandrome');
    }
}

isPalandrome2('Hello');
isPalandrome2('RaceCar');


