const express= require("express");
const RequestIp = require('@supercharge/request-ip');
const app= express()

let larr = []
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get("/",function(req,res){
    console.log("double working");
    const ip = RequestIp.getClientIp(req);
    larr.push(ip);
    console.log("YOur IP: ",larr);
    res.render("index");
});

app.listen(process.env.PORT || 5000);