const express= require("express");
const RequestIp = require('@supercharge/request-ip');
const app= express()
var geoip = require('geoip-lite');
 

 

let larr = []
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get("/",function(req,res){
    console.log("double working");
    var ip = RequestIp.getClientIp(req);
    
    var geo = geoip.lookup(ip);
    console.log(geo);
    larr.push(ip);
    
    
    console.log("YOur IP: ",larr);
    console.log(geo);

    res.render("index");
});

app.listen(process.env.PORT || 5000);