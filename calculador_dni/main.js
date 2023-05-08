"use strict";

let formu = document.querySelector(".formularioOk");

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function calculando(){
    
    let digitos = document.querySelector("#dniSinLetra").value;

    let resto = digitos % 23;
    let myLetra = letras[resto];
    document.querySelector("#letra").innerHTML = myLetra;
    
};