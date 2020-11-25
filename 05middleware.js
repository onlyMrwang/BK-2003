const express = require('express');
const frontend = require('./middle/frontend');
const backend = require('./middle/backend');


const app = express();

app.use('/front',frontend);
app.use('/back', backend);


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})