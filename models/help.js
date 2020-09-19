const orm = require('../config/orm.js')

const help = {
    all: function(cb) {
        orm.all('help', function (res) {
            cb(res)
        })
    }
}

module.exports = help