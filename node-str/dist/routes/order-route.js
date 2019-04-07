'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controllers/order-controller');

router.post('/', controller.post);
router.get('/', controller.get);

module.exports = router;