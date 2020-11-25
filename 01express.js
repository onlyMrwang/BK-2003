const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('get请求方式');
})
app.post('/',(req,res)=>{
    res.send('post请求方式');
})
app.put('/',(req,res)=>{
    res.send('put请求方式');
})
app.delete('/',(req,res)=>{
    res.send('delete请求方式');
})
app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})