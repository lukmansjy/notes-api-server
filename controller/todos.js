const Todo = require('../models').todo
const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/secretKey')

exports.index = (req, res) =>{
    Todo.findAll().then(todos => res.send(todos))
}

exports.show = (req, res) => {
    Todo.findOne({where: {id: req.params.id}}).then(todo => res.send(todo))
}

exports.post = (req, res) =>{
    if(req.headers && req.headers.authorization) {
        // Decode JWT
        let authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, secretKey);
        } catch (e) {
            res.send({
                message: "JWT Error"
            })
        }

        // Get Data From Request
        let todoData = {
            title: req.body.title,
            is_done: req.body.is_done,
            created_by: decoded.userId
        }
        
        // Insert Data
        Todo.create(todoData).then(todo => {
            res.send({
                message: "success",
                todo
            })
        })
    }else{
        res.send({
            message: "No JWT"
        })
    }
    
}

exports.patch = (req, res) =>{
    Todo.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(todo => {
        res.send({
            message: "success",
            todo
        })
    })
}

exports.delete = (req, res) =>{
    Todo.destroy({where: {id: req.params.id}}).then(todo => {
        res.send({
            message: "success",
            todo
        })
    })
}