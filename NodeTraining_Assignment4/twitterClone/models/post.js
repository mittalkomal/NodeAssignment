const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{
        type:String,
    },
    name:{
        type:String,
    },
    topic:{
        type:String,
        
    },
    content:{
        type:String,
    },
    like:{
        type:Number,
    },
    reply: 
    [{ type : mongoose.Schema.Types.ObjectId, 
          ref: 'Post' }]
    

})


const Post = mongoose.model('Post',UserSchema)
module.exports = Post