{/* write a isPowerOfTwo it takes a num as argument and return true if num is power of two
    and false if not  */}

    const isPowerOfTwo = (num) => {
       let result = false
       for(let i = 1; i < num; i++){
        if(2**i === num){
           result = true
        }
       }
       return result;
    };

    console.log(isPowerOfTwo(5));
    console.log(isPowerOfTwo(8));