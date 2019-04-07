'use strict';

var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.get = async function () {
    var res = await Product.find({
        active: true
    }, 'title description price slug ');
    return res;
};

exports.getBySlug = async function (slug) {
    var res = await Product.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
};

exports.getById = async function (id) {
    var res = await Product.findById(id);
    return res;
};

exports.getByTag = async function (tag) {
    var res = Product.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return res;
};

exports.create = async function (data) {
    var product = new Product(data);
    await product.save();
};

exports.update = async function (id, data) {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
};

exports.delete = async function (id) {
    await Product.findOneAndRemove({ _id: id });
};