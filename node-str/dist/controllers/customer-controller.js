'use strict';

var ValidationContract = require('../validators/fluent-validator');
var repository = require('../repositories/customer-repository');
var md5 = require('md5');


exports.get = async function (req, res, next) {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha listar costumers'
        });
    }
};


exports.post = async function (req, res, next) {
    var contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};






exports.delete = async function (req, res, next) {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Customer removido'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao deletar'
        });
    }
};