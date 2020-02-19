const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const { secretKey } = require('../config/secretKey')

exports.login = (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password // use encyption in real world case
    User.findOne({where: {email , password}}).then(user => {
        if(user){
            const token = jwt.sign({userId: user.id}, secretKey)
            res.send({
                user,
                token
            })
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}