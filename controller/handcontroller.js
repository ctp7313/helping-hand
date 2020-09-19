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