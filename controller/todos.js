const Todo = require('../models').todo

exports.index = (req, res) =>{
    Todo.findAll().then(todos => res.send(todos))
    
}

exports.show = (req, res) => {
    Todo.findOne({where: {id: req.params.id}}).then(todo => res.send(todo))
}

exports.post = (req, res) =>{
    Todo.create(req.body).then(todo => {
        res.send({
            message: "success",
            todo
        })
    })
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