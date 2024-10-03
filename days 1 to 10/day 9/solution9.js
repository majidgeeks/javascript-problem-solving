
// calculate the average of given array

// sloving question using reduce method
const num = [11, 12, 13, 14, 15];

const calAverage = (arr) => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0 )
    const average = sum / arr.length;
    return average
}

calAverage(num);

// solving with using for loop

const calAverage1 = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
    sum += arr[i];    
    }
    const average = sum / arr.length;
    console.log(average)
}

calAverage1(num)