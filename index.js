var data = require('./data');

function DataProvider() {

}

DataProvider.prototype.generate = function() {
    return data;
}

module.exports = DataProvider;