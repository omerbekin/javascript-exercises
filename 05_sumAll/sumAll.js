const sumAll = function(number0, number1) {
    
    if (!(typeof number0 === "number") || !(typeof number1 === "number")) {
        return "ERROR"
    }

    if (number0 < 0 || number1 < 0) {
        return "ERROR"
    }

    //if larger number first
    if (number0 > number1) {
        let number2 = number1;
        number1 = number0;
        number0 = number2;
    }
    
    let sumAllNumbers = 0;
    for (let i = number0; i <= number1; i++) {
        sumAllNumbers = sumAllNumbers + i;
    }
    return sumAllNumbers;
};

// Do not edit below this line
module.exports = sumAll;
