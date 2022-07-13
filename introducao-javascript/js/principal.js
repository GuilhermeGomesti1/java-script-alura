
let titulo = document.querySelector("#titulo");			
titulo.textContent = "Aparecida Nutricionistas";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");

let peso = tdPeso.textContent;
let tdAltura = paciente.querySelector('.info-altura');
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let imc = peso / (altura * altura);

tdImc.textContent = imc;

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const nome = document.querySelector('#nome')
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    const gordura = document.querySelector('#gordura')

    const tabela = document.querySelector("#tabela-pacientes")

    const el = document.createElement('tr')
    const n = document.createElement('td')
    n.className='info-nome'
    n.textContent=nome.value
    el.appendChild(n)
    tabela.appendChild(el)
    



})


// <tr class="paciente">
// 						<td class="info-nome">João</td>
// 						<td class="info-peso">80</td>
// 						<td class="info-altura">1.72</td>
// 						<td class="info-gordura">40</td>
// 						<td class="info-imc">0</td>
// 					</tr>