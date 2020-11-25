const querystring = require('querystring');

const bodymiddle = (req,res,next) =>{
    let arr = [];

    req.on('data',buffer=>{
        arr.push(buffer);
    })

    req.on('end',()=>{
        let buffer = Buffer.concat(arr);
        let str = querystring.parse( buffer.toString() );

        // 将数据挂在req. body上
        req.body = str;
        next();
    })
}

// 最后导出
module.exporrts = bodymiddle;