const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    // 解构赋值
    let { query } = url.parse(req.url,true);
    console.log(query);

}).listen(8080,()=>{console.log('server is running at http//127.0.0.1:8080');})