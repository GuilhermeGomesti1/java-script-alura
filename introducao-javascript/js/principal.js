
let titulo = document.querySelector("#titulo");			
titulo.textContent = "Aparecida Nutricionistas";

let pacientes = document.querySelectorAll(".paciente");


for(let i = 0; i < pacientes.length; i++){
   var paciente = pacientes[i];

   let tdPeso = paciente.querySelector('.info-peso');

let peso = tdPeso.textContent;
let tdAltura = paciente.querySelector('.info-altura');
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");


let pesoEhValido = true;
let alturaEhValida = true;


if(peso <= 0 || peso > 300) {
    console.log('peso inválido')
    pesoEhvalido = false;
    tdImc.textContent = 'Peso inválido!';
    tdImc.className = 'invalido'
    
}

if(altura < 0 || altura > 3) {
    console.log('altura inválida')
    alturaEhValida= false;
    tdImc.textContent = 'Altura inválido!';
    tdImc.className = 'invalido'
    
}


if (alturaEhValida && pesoEhValido)
 {
let imc = peso / (altura * altura);
tdImc.textContent = imc.toFixed(2);}
else {
    tdImc.textContent = 'altura e peso inválidos'
   tdImc.className = 'invalido'
   paciente.style.backgroundColor = "lightcoral";
}




}



