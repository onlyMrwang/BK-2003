const express = require('express');

const app = express();

// 手写一个服务器软件，
// 启动后要求用户访问根“/”输出`hello world`，
// 用户访问`/html5`输出`2003`，
// 用于通过post方式访问/post则输出`	post`。**

app.get('/',(req,res)=>{
    res.send('hello world');

})
app.get('/html5',(req,res)=>{
    res.send('2003');

})
app.post('/post',(req,res)=>{
    res.send('zheshi post fangshi');

})

app.listen(8080,console.log('server is running at http://127.0.0.1:8080'))