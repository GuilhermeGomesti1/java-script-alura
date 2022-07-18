var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode; //tr
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
    

});

/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("cliquei com duplo clique")
        this.remove();
    })


});*/

