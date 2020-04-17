var express = require("express");
var app = express();
var cilindro = require('./cilindro.js');

app.get("/",function(req,res){
    return res.send("Um cilíndro com raio 2 e altura 4 possui volume igual a "+cilindro.volume(2,4)+" e área externa igual a "+cilindro.area(2,4)+".");
})
app.listen(process.env.PORT || 8182);