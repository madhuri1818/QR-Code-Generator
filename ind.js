const express = require('express');
const ejs=require("ejs")
const path=require("path")
const qrcode = require('qrcode');
const e=express();
const p = process.env.PORT || 8080;
e.use(express.json()); 
e.use(express.urlencoded({extended:false}));
e.set('view engine', 'ejs');
e.set('views', path.join(__dirname, 'views'));
e.get("/",(req,res,next)=>{
     res.render("index");
    //    res.send('hello');
});
e.post("/img",(req,res,next)=>{
    const input_text=req.body.text;
    console.log(input_text);
    qrcode.toDataURL(input_text,(err,src)=>{
        if (err) res.send("Something Went Wrong!");
        res.render("img",{
            qr_code:src,
        });
    });
});
e.listen(p,console.log(`Listening on port ${p}`));
// console.log('hello world');
