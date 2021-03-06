const route = require('express').Router()
const User = require('../models/user')

// Get '/'
route.get('/',(req,res)=>{
    return res.render('signup',{
        title:'Signup!'
    })
})

// POST '/'
route.post('/',(req,res,next)=>{
    let userData = {
        name: req.body.name,
        email: req.body.email,
         password: req.body.password
    }

    User.create(userData,(err,user)=>{
        if(err) return next(err)
        return res.redirect('/login')
    })
    
})

module.exports = route