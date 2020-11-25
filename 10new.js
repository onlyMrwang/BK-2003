const express = require('express');
const date = require('./11one');


const app = express();

app.use(date);
app.get('/',(req,res)=>{
    
})



app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})