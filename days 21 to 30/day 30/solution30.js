//? Write a recursive function called numberRangeRecursive
// that generates an array containing consecutive numbers
// from a to b (inclusive).


const numberRangeRecursive = (a, b, arr = []) => {
    if(a <= b){
        arr.push(a);
       return numberRangeRecursive(a + 1, b, arr);
    }
    return arr;
}

console.log(numberRangeRecursive(0, 7));
console.log(numberRangeRecursive(3, 7));
console.log(numberRangeRecursive(-2, 2));