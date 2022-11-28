const palindromes = function (string) {
    let cleanString = (string.replace(/[!., ]/g, ``)).toLowerCase();
    let reversedCleanString = ``;

    for (let i = 0; i < cleanString.length; i++) {
        reversedCleanString += cleanString.charAt(cleanString.length - (i + 1));
    }

    if(cleanString === reversedCleanString){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
