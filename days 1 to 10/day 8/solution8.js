// find factorial

const findFactorial = (num) => {
    let fact = 1;
    for(let i = num; i > 0 ; i--){
        fact = fact * i;
    }
    console.log(fact)
}

findFactorial(5);