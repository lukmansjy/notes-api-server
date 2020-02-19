const express = require('express')
const bodyParser = require('body-parser')
const TodosController = require('./controller/todos')
require('express-group-routes')

//middlewares
const { authenticated } = require('./middleware')
const AuthController = require('./controller/auth')

const app = express()
const port = 5000

app.use(bodyParser.json())



// group route
app.group('/api/v1', (router)=>{
    //auth API
    router.post('/login', AuthController.login)

    //get all notes
    router.get('/todos', TodosController.index)

    //get one note
    router.get('/todo/:id', TodosController.show)

    //POST receive json body
    router.post('/todo', authenticated, TodosController.post)

    //PATCH receive json body from user input, then push to todos by object id
    router.patch('/todo/:id', authenticated, TodosController.patch)

    //DELETE delete note by id reques params
    router.delete('/todo/:id', authenticated, TodosController.delete)

})

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    } else
      next(err);
  });


app.listen(port, ()=> console.log(`Success listening on port ${port}, click http://localhost:${port}`))