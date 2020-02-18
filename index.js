const express = require('express')
const bodyParser = require('body-parser')
const TodosController = require('./controller/todos')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())



// group route
app.group('/api/v1', (router)=>{

    //get all notes
    router.get('/todos', TodosController.index)

    //get one note
    router.get('/todo/:id', TodosController.show)

    //POST receive json body
    router.post('/todo', TodosController.post)

    //PATCH receive json body from user input, then push to todos by object id
    router.patch('/todo/:id', TodosController.patch)

    //DELETE delete note by id reques params
    router.delete('/todo/:id', TodosController.delete)

})


app.listen(port, ()=> console.log(`Success listening on port ${port}, click http://localhost:${port}`))