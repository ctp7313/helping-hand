const express = require('express')

const router = express.Router();

const help = require('../models/help.js')


router.get('/', function(req, res) {
    help.all(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});

//allowing orginizations to add ther information to the data base
router.post('api/services', function(req, res) {
    help.create([
        'name',
        'address',
        'phonenumber',
        'food',
        'health',
        'daily_care',
        'shelter', 
        'condition'
    ],
    [
        req.body.name,
        req.body.address,
        req.body.phonenumber,
        req.body.food,
        req.body.health,
        req.body.daily_care,
        req.body.shelter,
        false
    ], function(results) {
        console.log(results)
     //giving an id to each company who choses to added ther company information
        res.json({id: res.insertID})
    }); 
    console.log(req.body, 'req.body')
})

router.put('/api/services/:id', function (req, res) {
    let condition = true
    console.log(condition, 'CONDITION');
    console.log(req.params, 'REQ PARAMS');
    help.update({
       condition: true
    }, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(400).end();
        }else {
            res.status(200).end();
        };
    });
});

module.exports = router;