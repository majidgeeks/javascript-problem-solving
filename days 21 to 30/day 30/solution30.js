//? Write a recursive function called numberRangeRecursive
// that generates an array containing consecutive numbers
// from a to b (inclusive).


const numberRange = (a, b) => {
    let arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i);
    }
    console.log(arr)
};

numberRange(0, 7);
numberRange(3, 7);
numberRange(-2, 2);