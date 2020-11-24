const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    let arr = [];

    req.on('data',buffer=>{
        arr.push(buffer);
    })
    req.on('end',()=>{
        let buffer = Buffer.concat(arr);
        let str = querystring.parse(buffer.toString());
        console.log(str);
    })
}).listen(8080,()=>{
    console.log('server is running at http//127.0.0.1:8080');
})