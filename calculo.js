var express = require("express");
var app = express();
var circulo = require('./circunferencia.js');

app.get("/",function(req,res){
    res.send("Um cilíndro com raio 2 e altura 4 possui volume igual a "+circunferencia.volume(2,4)+" e área externa igual a "+circunferencia.area(2,4)+".");
})
app.listen(8182);
