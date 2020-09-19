const connection = require('./connection')


const orm = {
    all: function(input, cb) {
        let queryString = `SELECT * FROM services_db.food`;
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res)
        })
    }

}
