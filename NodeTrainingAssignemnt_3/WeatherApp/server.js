const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',express.static(path.join(__dirname,'static')))

app.listen(3000, function () {
  console.log('Weather  app listening on port 3000!')
})