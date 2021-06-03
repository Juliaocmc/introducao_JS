
var botaoAdd = document.querySelector("#adicionar-paciente")

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formAdd");
    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    
    var erro = validaPaciente(paciente)

    if(erro.length > 0){        
        exibeMsgErro(erro);      
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)

    form.reset();
    var ul = document.querySelector("#msg-erro");
    ul.innerHTML = "";



});

function exibeMsgErro(erros){
    var ul = document.querySelector("#msg-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)

    })
     
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;

}


function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome == ""){
        erros.push("O nome não pode estar vázio!")
    }
    if(!validaPeso(paciente.peso) || paciente.peso == ""){
        erros.push("O peso é inválido!")
    } 
    if(!validaAltura(paciente.altura) || paciente.altura == ""){
        erros.push("A altura é inválida!")
    }
    if(paciente.gordura == ""){
        erros.push("% de gordura não pode estar vázio!")
    }
    return erros;
}






