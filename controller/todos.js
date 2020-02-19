const connection = require('../db')

exports.index = (req, res) =>{
    connection.query('SELECT * FROM todos', (err, rows)=>{
        if(err) throw err
        res.send(rows)
    })
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows)=>{
        if(err) throw err
        res.send(rows[0])
    })
}

exports.post = (req, res) =>{
    const { title, isDone } =  req.body
    connection.query(`INSERT INTO todos (title, isDone) VALUES ("${title}", "${isDone}")`, (err, rows)=>{
        if(err) throw err
        res.send({"message": "success"})
    })
}

exports.patch = (req, res) =>{
    const id = req.params.id
    const { title, isDone } =  req.body
    connection.query(`UPDATE todos SET title='${title}', isDone='${isDone}' WHERE id=${id}`, (err, rows)=>{
        if(err) throw err
        res.send({"message": "success"})
    })
}

exports.delete = (req, res) =>{
    const id = req.params.id
    connection.query(`DELETE FROM todos WHERE id=${id}`, (err, rows)=>{
        if(err) throw err
        res.send({"message": "success"})
    })
}