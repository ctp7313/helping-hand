const connection = require('./connection')

const choicesArray = [];
//creating a functon that will allow all key value pairs from the object to be pushed into the arr
function objToSql(ob) {
    const arr = []

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}

const orm = {
    all: function (input, cb) {
        let queryString = `SELECT * FROM services_db.organization`;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(res)
            cb(res);
        });
    },
    results: function (cb) {
        buildArray();
        let queryString = `SELECT name, address, website FROM services_db.organization
        WHERE ${colArray.food_bank} = 1 and ${colArray.male} = 1`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    create: function (table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table + ' (' + col.toString() + ') VALUES (?,?) ';
        console.log(queryString)
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (table, currentVal, condition, cb) {
        let queryString = `UPDATE ${table} `;
        queryString += ' SET ';
        queryString += objToSql(currentVal);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString)
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }
};

function buildArray() {
    const colArray = [];
    for (let i = 0; i < sessionStorage.key.length; i++) {
        colArray.push(sessionStorage.getItem(sessionStorage.key(i)))
    };
    return colArray;
};

module.exports = orm;