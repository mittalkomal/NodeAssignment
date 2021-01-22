const route = require('express').Router()
const passport = require('passport')

// GET '/'
route.get('/',(req,res)=>{
    if(req.user){
        res.redirect('/profile')
    }
    return res.render('login',{
        title:'Login'
    })
})

// Post '/'
route.post('/',passport.authenticate('local',{
    failureRedirect:'/login?error=405',
    successRedirect:'/profile'
}))

// Get '/facebook'
route.get('/facebook',passport.authenticate('facebook'))

// GET '/facebook/callback
route.get('/facebook/callback',passport.authenticate('facebook',{
    failureRedirect:'/login?error=405',
    successRedirect:'/profile'
}))

route.get('/twitter',passport.authenticate('twitter'))

// 
route.get('/twitter/callback',passport.authenticate('twitter',{
    failureRedirect:'/login?error=405',
    successRedirect:'/profile'
}))

module.exports = route