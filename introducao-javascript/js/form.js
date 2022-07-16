let botaoAdicionar = document.querySelector("#adicionar-paciente") ;

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
   
    let form = document.querySelector('#form-adiciona');
    
   let paciente = obtemPacienteDoFormulario(form);

   let pacienteTr =montaTr(paciente);

   let erros = validaPaciente(paciente);
   console.log(erros);
  

   if (erros.length > 0){
    exibeMensagensdeErro(erros);

   
    
return;}
    


    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();
    
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function exibeMensagensdeErro(erros)  {
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);


    });
}


function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

  



    let nomeTd = (montaTd(paciente.nome, "info-nome"))
    let pesoTd = (montaTd(paciente.peso, "info-peso"))
    let alturaTd = (montaTd(paciente.altura, "info-altura"))
    let gorduraTd = (montaTd(paciente.gordura, "info-gordura"))
    let imcTd= (montaTd (paciente.imc, "info-imc"))
    

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;

}
function montaTd(dado,classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add('classe');

    return td;



}
    function validaPaciente(paciente) {

        let erros = [];

        if (paciente.nome.length == 0){
            erros.push("Nome em branco");
        }

        if(!validaPeso(paciente.peso)){
            erros.push("Peso é inválido");
        } 
       
        if(!validaAltura(paciente.altura)){
            erros.push("Altura é inválida"); 
        } 
        if (paciente.gordura.length == 0){
            erros.push("Gordura em branco");
        }

        if (paciente.peso.length == 0){
            erros.push("Peso em branco");
        }

        if (paciente.altura.length == 0){
            erros.push("Altura em branco");
        }
       
        return erros;

    }

