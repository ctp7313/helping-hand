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
router.post('api/organization', function(req, res) {
    help.create([
        'name',
        'address',
        'phonenumber',
        'website',
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'hour_open',
        'hour_closed',
        'age_min',
        'age_max',
        'male',
        'female',
        'family_youth',
        'food_bank',
        'meals_served',
        'meals_breakfast',
        'meals_lunch',
        'meals_dinner',
        'shelter_immdiate',
        'shelter_long_term',
        'daily_care',
        'urgent_care',
        'dental',
        'behavioral',
        'condition'
    ],
    [
        req.body.name,
        req.body.address,
        req.body.phonenumber,
        req.body.website,
        req.body.sunday,
        req.body.monday,
        req.body.tuesday,
        req.body.wednesday,
        req.body.thursday,
        req.body.friday,
        req.body.saturday,
        req.body.hour_open,
        req.body.hour_closed,
        req.body.age_min,
        req.body.age_max,
        req.body.male,
        req.body.female,
        req.body.family_youth,
        req.body.food_bank,
        req.body.meals_served,
        req.body.meals_breakfast,
        req.body.meals_lunch,
        req.body.meals_dinner,
        req.body.shelter_immdiate,
        req.body.shelter_long_term,
        req.body.daily_care,
        req.body.urgent_care,
        req.body.dental,
        req.body.behavioral,
        false
    ], function(results) {
        console.log(results)
     //giving an id to each company who choses to added ther company information
        res.json({id: res.insertID})
    }); 
    console.log(req.body, 'req.body')
})

router.put('/api/organization/:id', function (req, res) {
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