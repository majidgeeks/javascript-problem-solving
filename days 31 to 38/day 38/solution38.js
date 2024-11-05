//*-------------------------------------------------------------------
//* Programming Challenge:  Simple Bar Chart from Array Data
//*-------------------------------------------------------------------
//? Create a function generateBarChart that takes an array of numbers and generates
// a simple text-based bar chart.

const generateBarChart = (arr) => {
    const mapArr = arr.map((currElm, index) => {
        let number = 0;
        let star = '';
       for(number; number < currElm; number++){
           star = star + '*';  
       }
        return `${index + 1}: ${star}`;
    })
    console.log(mapArr.join('\n'))
};

generateBarChart([5, 3, 9, 2])