const express= require("express");
const app= express()
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );
app.get("/",function(req,res){
    res.render("index");
});

app.listen(process.env.PORT || 5000);