var pi = Math.PI;
var circulo = require("./circulo.js")

exports.area = function(r,h){
    return 2*(circulo(r).area)+(circulo.circunferencia(r)*h);
}

exports.volume = function(r,h){
    return pi*r*r*h;
}