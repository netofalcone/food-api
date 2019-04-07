'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid');
//guid é um pacote para gerar números para o pedido


exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}


exports.post = async(req, res, next) => {

    try {
       
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            //gera um guid e pega os 6 primeiros caracteres
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};