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
    const data = req.body
    connection.query(`INSERT INTO todos (title, isDone) VALUES ("${data.title}", "${data.isDone}")`, (err, rows)=>{
        if(err) throw err
        res.send({"message": "success"})
    })
}

exports.patch = (req, res) =>{
    const id = req.params.id
    const data = req.body
    connection.query(`UPDATE todos SET title='${data.title}', isDone='${data.isDone}' WHERE id=${id}`, (err, rows)=>{
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