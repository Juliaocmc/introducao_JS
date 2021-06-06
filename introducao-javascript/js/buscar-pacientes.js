var addPaciente = document.querySelector("#buscar-paciente");

addPaciente.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacienteadsas")
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var responseXhr = xhr.responseText;
            var pacientes = JSON.parse(responseXhr);
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                addPacienteNaTabela(paciente);
            }
            }else {
                console.log(xhr.status)
                console.log(xhr.responseText)
                var erroAjax = document.querySelector("#erro-ajax")
                erroAjax.classList.remove("invisivel")
                erroAjax.classList.add("msg-erro")

            }
        
        }
    )
    xhr.send()

});