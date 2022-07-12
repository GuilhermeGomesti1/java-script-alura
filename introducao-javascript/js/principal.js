let titulo = document.querySelector("#titulo");			
titulo.textContent = "Aparecida Nutricionistas";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");

let peso = tdPeso.textContent;
let tdAltura = paciente.querySelector('.info-altura');
let altura = tdAltura.textContent;


let imc = peso / (altura * altura);
console.log(imc)