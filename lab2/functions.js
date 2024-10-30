'use strict';

//6
const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x ** 3;

const calculate = () => {
    let i = 0;
    const n = 9;
    const array = [];
    while (i <= n) {
        const avg = average(square(i),cube(i));
        i++;
        array.push(avg)
    };
    return array;
};
module.exports = {average, square, cube, calculate};