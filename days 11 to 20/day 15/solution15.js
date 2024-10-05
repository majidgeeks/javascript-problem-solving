{/* write a function to calculate the sum of squares of all elements in array
    for example an array [1, 2, 3] the function will return 14 if using the given array */}

    const arrGiven = [1, 2, 3];

const sumOfSquare = (arr) => {
    const sum = arr.reduce((acc, curr) =>  acc + (curr * curr), 0 )
    return sum;
}

console.log(sumOfSquare(arrGiven));