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
        arr.push(characters[Math.floor(Math.random() * characters.length)]);
        i++;
    };
    return arr.join('');
};

module.exports = { generateKey };

//3
const ip = "165.225.133.150";
const dividedArray = ip.split('.');
const changedIp = () => {
    let sum = 0;
    let i = 3;
    for (const num of dividedArray) {
        const changedNumber = (num << (8*i));
        sum += changedNumber;
        i--;
        if (i<0) break;
    };
    return sum;
};
module.exports = { changedIp };

//4
const iface = {
    m1: (x,y) => [x,y],
    m2: function (x) {
      return [x];
    },
    m3 (a, b, c, d) {
      return [a, b, c, d];
    }
  };
const elements = () => {
    const array = [];
    for (const keys in iface) {
        const fn = iface[keys];
        if (typeof fn === 'function') {
            array.push([keys,fn.length]);
        };
    };
    return array;
};
module.exports = { elements };
