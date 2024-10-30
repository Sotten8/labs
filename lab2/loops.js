'use strict';

//4
const range = (i, n) => {
    let array = [];
    while (i<=n) {
        array.push(i);
        i++;
    };
    return array;
};
module.exports = { range };

//5
const rangeOdd = (i, n) => {
    let array = [];
    while (i<=n) {
        if (i%2!=0) array.push(i);
        i++;
    };
    return array;
};
module.exports = { rangeOdd };
