const express = require('express');

const app = express();

app.get('/user/:id',(req,res)=>{
    res.send('id是 ' + req.params.id);
  
})
app.get('/name/:id?',(req,res)=>{
    res.send('id是' + req.params.id);
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');

})