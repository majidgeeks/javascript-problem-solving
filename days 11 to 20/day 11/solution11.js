// write a function it will takes numbers as input and return sum of it in digits

const calSum = (nums) => {
    const arr = Array.from( String(nums), Number)
   const sum = arr.reduce((acc, curr) => acc + curr, 0 )
   console.log(sum)
};

calSum(12345); // 15

calSum(112345); // 16