const fibonacci = function (fibonacciIndex) {
    
    if (fibonacciIndex < 0) {
        return "OOPS"
    }
    
    //let fibonacciArrayExample = [1, 1, 2, 3, 5, 8, 13];
    let fibonacciArray = [];
    let previousNumber1 = 0;
    let previousNumber2 = 0;

    for (let i = 0; i < fibonacciIndex; i++) {

        
        if (fibonacciArray.length === 0) {
            fibonacciArray.push(1);
        } else if (fibonacciArray.length === 1) {
            fibonacciArray.push(1);
        } else if (fibonacciArray.length >= 2) {
            previousNumber1 = fibonacciArray[i - 2];
            previousNumber2 = fibonacciArray[i - 1];
            fibonacciArray.push(previousNumber1 + previousNumber2);
        }
    }

    return fibonacciArray[fibonacciIndex - 1];

};

// Do not edit below this line
module.exports = fibonacci;
