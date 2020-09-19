const orm = require('../config/orm.js')

const services = {
    all: function(cb) {
        orm.all('services', function (res) {
            cb(res)
        })
    },
    creat: function(col, val, cb) {
        orm.create('services', col, val, function(res) {
            cb(res);
        });
    },
    update: function(currentVal, condition, cb) {
        orm.update('services', currentVal, condition, function(res) {
            cb(res);
        });
    }

};

module.exports = services