var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {   
     
    var paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);
    var tdImc = paciente.querySelector(".info-imc");
        
    var pesoValido = validaPeso(peso)
    if (!pesoValido) {
        tdPeso.textContent = "Peso inválido"
        pesoValido = false
        paciente.classList.add("paciente-invalido")
    }

    var alturaValido = validaAltura(altura);
    if (!alturaValido) {
        tdAltura.textContent = "Altura inválido"
        alturaValido = false
        paciente.classList.add("paciente-invalido")
    }

    if (alturaValido && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
        paciente.classList.add("paciente-valido")
    } else{
        tdImc.textContent = "Inválido"
        paciente.classList.add("paciente-invalido")
    }
};

function calculaImc(peso,altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

    function validaPeso(peso){
        if(peso>=0 &&peso < 1000){
            return true;
        }
    };

    function validaAltura(altura){
        if(altura>=0 && altura < 1000){
            return true;
        }
};





    



