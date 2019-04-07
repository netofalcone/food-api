'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: " Node Store API ",
        version: "0.0.1"
    });
});

module.exports = router;