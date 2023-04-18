const connect = require('../dao/connect');
const Bonificacao = require('../models/bonificacao.model');

// Função auxiliar que recebe um objeto e retorna uma instância de Bonificacao
const criarInstanciaBonificacao = (objeto) => new Bonificacao(objeto);

// Método que recebe uma lista de objetos e retorna uma lista de instâncias de Bonificacao
const modelarLista = (lista) => lista.map(criarInstanciaBonificacao);

// Métodos CRUD
const criar = (req, res) => {
    const bonificacao = criarInstanciaBonificacao(req.body);
    connect.query(bonificacao.create(), (err, result) => {
        if (err) {
            res.status(500).json(err).end();
            return;
        }
        res.status(201).end();
    });
};

const listar = (req, res) => {
    const bonificacao = criarInstanciaBonificacao(req.params);
    connect.query(bonificacao.read(), (err, result) => {
        if (err) {
            res.status(500).json(err).end();
            return;
        }
        const listaBonificacoes = modelarLista(result);
        res.json(listaBonificacoes).end();
    });
};

const alterar = (req, res) => {
    const bonificacao = criarInstanciaBonificacao(req.body);
    connect.query(bonificacao.update(), (err, result) => {
        if (err) {
            res.status(500).json(err).end();
            return;
        }
        if (result.affectedRows > 0) {
            res.status(202).end();
        } else {
            res.status(404).end();
        }
    });
};

const excluir = (req, res) => {
    const bonificacao = criarInstanciaBonificacao(req.params);
    connect.query(bonificacao.delete(), (err, result) => {
        if (err) {
            res.status(500).json(err).end();
            return;
        }
        if (result.affectedRows > 0) {
            res.status(204).end();
        } else {
            res.status(404).end();
        }
    });
};

const teste = (req, res) => {
    res.json("Sistema de Bonificações Respondendo").end();
};

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
};
