const express = require('express');
const nodemon = require('nodemon')
const bodyParser = require('body-parser')

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())

app.get('/',(req,res)=>{
res.send('bonjour à tous le monde!')

app.post('/data',(req,res)=>{
  const data = req.body;
  res.send(`received data:${JSON.stringify(data)}`)
})



})

app.listen(port,()=>{
 console.log(`veuillez afficher mon application: ${port}`)
})