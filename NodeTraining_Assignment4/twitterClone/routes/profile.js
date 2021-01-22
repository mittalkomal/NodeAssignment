const route = require('express').Router()
const path = require('path');
const Post = require('../models/post')

var user;



route.get('/',(req,res)=>{
    console.log("Entering in profile",req.user)
    user=req.user
    res.sendFile(path.join(__dirname + '/static/myProfile.html'));
})

route.post('/',(req,res,next)=>{
    let postData = {
        name: user.name,
        email: user.email,
        topic:req.body.title,
        content:req.body.content
    }
    Post.create(postData,(err,user)=>{
        if(err) return next(err)
        console.log("post saved")
        return res.redirect('/profile')
    })
    
})

route.get('/postData',(req,res)=>{
    if(req.query.mode == 'all')
    {
        console.log("Getting posts for all  user",req.user)
        Post.find({},(err,post)=>{
            res.send(post)
          
        })
  
   }
   if(req.query.mode == 'following')
   {
       var following=user.following
       var Allpost
       for (var j in following) {
        Post.find({email:j.email},(err,post)=>{
            if(post)
            {
            Allpost.push.apply(Allpost, post);
            }
        })
      }
      res.send(Allpost)
   }

    console.log("Getting posts for user",req.user)
    Post.find({email:user.email},(err,post)=>{
        res.send(post)
      
    })
})

route.get('/explore',(req,res)=>{
    console.log("Entering in explore",req.user)
    user=req.user
    res.sendFile(path.join(__dirname + '/static/explore.html'));
})

route.get('/home',(req,res)=>{
    console.log("Entering in home")
    res.sendFile(path.join(__dirname + '/static/home.html'));
})

module.exports = route