const fs = require('fs');

const data = {};

getData = (key) => {
    return data[key];
};

setData = (key, value) => {
    data[key] = value;
    return true;
};

module.exports = {
    get: getData,
    set: setData
};