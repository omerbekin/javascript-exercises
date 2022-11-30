const findTheOldest = function (people) {
    let currentPersonAge;

    let oldestPersonAge = 0;
    let oldestPerson;

    for (const person of people) {

        let birthYear = person.yearOfBirth;
        yearOfDeath = person.yearOfDeath;

        if (typeof yearOfDeath !== 'undefined') {
            let deathYear = person.yearOfDeath;
            currentPersonAge = deathYear - birthYear;
        } else {
            let currentYear = new Date().getFullYear();
            currentPersonAge = currentYear - birthYear;
        }
        if (currentPersonAge > oldestPersonAge) {
            oldestPersonAge = currentPersonAge;
            oldestPerson = person;
        }
    }
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
