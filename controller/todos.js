const todos = [
    {
        id: 1,
        title: "Makan makan",
        isDone: true
    },
    {
        id: 2,
        title: "Makan Lagi",
        isDone: true
    }
]

exports.index = (req, res) =>{
    res.send(todos)
}

exports.show = (req, res) => {
    const id = req.params.id
    const index = id - 1
    res.send(todos[index])
}

exports.post = (req, res) =>{
    const data = req.body
    todos.push(data)
    res.send(data)
}

exports.patch = (req, res) =>{
    const id = req.params.id
    const index = id - 1
    const data = req.body
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
}

exports.delete = (req, res) =>{
    const id = req.params.id
    const index = id - 1
    todos.splice(index, 1)
    res.send(todos)
}