'use strict';

var mongoose = require('mongoose');
var Order = mongoose.model('Order');

exports.get = async function (data) {
    var res = await Order.find({}, 'number status customer items').populate('customer', 'name').populate('items.product', 'title');

    return res;
};

exports.create = async function (data) {
    var order = new Order(data);
    await order.save();
};