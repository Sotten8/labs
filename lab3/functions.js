'use strict'

//1
const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    };
    const rnd = min + Math.floor(Math.random() * (max - min + 1));
    return rnd;
};

module.exports = { random };

//2
const generateKey = (length, characters) => {
    let i = 1;
    const arr = [];
    while (i <= length) {
        arr.push(characters[Math.floor(Math.random() * characters.length)])
        i++;
    };
    return arr.join('');
};

module.exports = { generateKey };

//3