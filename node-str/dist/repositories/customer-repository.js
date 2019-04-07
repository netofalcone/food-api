'use strict';

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');



exports.create = async function (data) {
    var customer = new Customer(data);
    await customer.save();
};
