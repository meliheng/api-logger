const loggerMiddleware = require('./middlewares/loggerMiddleware')
const express = require('express')
const app = express()

app.use(loggerMiddleware)
app.get('/',(req,res)=>{
    res.send('index')
})
app.get('/user/2',(req,res)=>{
    res.send('user page')
})

app.listen(5000,(err)=>{
    if(err) throw err;
    console.log(`server is running.`);
})
