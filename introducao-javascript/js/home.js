
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3001/pacientes")
xhr.send()
xhr.onload = function () {
    if (xhr.status == 200) {
        var responseXhr = xhr.responseText;
        var pacientes = JSON.parse(responseXhr);
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            addPacienteNaTabela(paciente);
        }
    } else {
        console.log("Errou")
        console.log(xhr.status)
        console.log(xhr.responseText)
        var erroAjax = document.querySelector("#erro-ajax")
        erroAjax.classList.remove("invisivel")
        erroAjax.classList.add("msg-erro")

    }

}


