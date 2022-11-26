const removeFromArray = function (array, ...args) {
    //array.splice(index - 1, 1);
    //return array

    args.forEach((arg) => {
        const index = array.indexOf(arg);
        if (index > -1) {
            array.splice(index, 1);
            
        }
    });
    return array;
}

    // Do not edit below this line
    module.exports = removeFromArray;
