//? Write a recursive function called numberRangeRecursive
// that generates an array containing consecutive numbers
// from a to b (inclusive).


const numberRange = (a, b, arr = []) => {
    if(a <= b){
        arr.push(a);
       return numberRange(a + 1, b, arr);
    }
    return arr;
}

console.log(numberRange(0, 7));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));