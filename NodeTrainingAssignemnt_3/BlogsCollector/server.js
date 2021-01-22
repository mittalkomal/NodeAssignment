const express = require('express')
const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.set('view engine','hbs')

let blogs = []

let i=0

app.get('/blogs',(req,res)=>{
  if(req.query.mode == 'json')
  {
  console.log(blogs)
      res.send(blogs)
}
  else{
      res.render('blogs',{
          blogs
      })
  }
})

app.post('/blogs',(req,res)=>{
  //console.log(req.body)
  blogs.push({
    id:i++,
    name:req.body.author,
    titleOfBlog:req.body.titleOfBlog,
    categoryOfBlog:req.body.categoryOfBlog,
    email:req.body.email,
    content:req.body.content,
    date:req.body.date
    
  })
 
 if(req.body.mode=="json")
 res.send('success')
 else
 res.redirect('/blogs?mode=json')
})

app.post('/updateBlogs',(req,res)=>{
  console.log(req.body)
  for (var j in blogs) {
    if (blogs[j].id == req.body.id) {
      blogs[j].content = req.body.content;
       break;
    }
  }
 console.log("data updated")
  res.send('success')
})

app.post('/deleteBlog',(req,res)=>{
  for (var j in blogs) {
    if (blogs[j].id == req.body.id) {
      blogs.splice(j,1);;
       break;
    }
  }
  console.log("data deleted")
  res.send('success')
})


app.listen(4000, function () {
  console.log('Blogs app listening on port 4000!')
})