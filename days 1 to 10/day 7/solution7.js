{/* write a function to find max number in given array an input
    givenArr = [1, 2, 3, 4, 5]
     */}

     const findMaxNum = (arr) => {
        let maxNum = 0;
        for(let i = 0; i <= arr.length; i++){
            if(arr[i] > maxNum){
                maxNum = arr[i]
            }
        }
        console.log(maxNum);
    }

    const givenArr = [1, 2, 3, 4, 5];

    findMaxNum(arr2);