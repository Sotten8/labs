'use strict'
//9
const users = [
    { name: 'Stanislav Oleksiichuk', phone: '+380988767370' },
    { name: 'Bill Gates', phone: '+178314609248' },
    { name: 'Oleksii Piddubnyi', phone: '+380437320963' },
    { name: 'Mariia Honcharova', phone: '+380502228195' },
    { name: 'Oleksandr Virnyi', phone: '+380692560911' },
];

const findPhoneByName = (name) => {
    for (const user of users) {
        if (user.name === name) return user.phone
    };
};

module.exports = { users, findPhoneByName };

//10
const users1 = {
    'Stanislav Oleksiichuk': '+380988767370',
    'Bill Gates': '+178314609248',
    'Oleksii Piddubnyi': '+380437320963',
    'Mariia Honcharova': '+380502228195',
    'Oleksandr Virnyi': '+380692560911',
}

const findPhoneByNameOfUsers1 = (name) => users1[name];

module.exports = { users1, findPhoneByNameOfUsers1 };
