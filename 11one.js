// const express = require('express');

const fs = require('fs');

const want = (req,res,next) =>{
    
    let time = new Date();
    let y = time.getFullYear();
    let mon = time.getMonth();
    let day = time.getDate();
    let h = time.getHours();
    let min = time.getMinutes();
    let s = time.getSeconds();
    let ip = req.hostname;
    let get = req.method;
    let url = req.url;
    let banben = req.headers['user-agent'];
    fs.appendFile(`./${y}${mon}${day}.log`,`${y}__${mon}__${day}__${h}__${min}__${s}__${ip}__${get}__${banben}__${url}`,err=>{
            next();
    })

}

module.exports = want;