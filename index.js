const express= require("express");
const RequestIp = require('@supercharge/request-ip');
const app= express()
const ipfetch = require('ip-fetch');
let info;
let geoarr=[]

 

let larr = []
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get("/",function(req,res){
    
    var geoip = require('geoip-lite');
    console.log("double working");
    var ip = RequestIp.getClientIp(req);
    
    let fun = async () =>{
        info = await ipfetch.getLocationNpm(ip); 
        console.log(info);
        geoarr.push(info);
    }
    fun();
    larr.push(ip);
    
    
    console.log("YOur IP: ",larr);
    // console.log(geo);
    console.log("geo array:",geoarr);
    res.render("index");
});

app.listen(process.env.PORT || 5000);