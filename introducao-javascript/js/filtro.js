var campoFiltro = document.querySelector("#filtro-tabela")


campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var nomePaciente = paciente.querySelector(".info-nome")
        var nome = nomePaciente.textContent.toLowerCase();

        var expressao = new RegExp(this.value, "i");
        if (!expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
        /*
        //     if(!nome.includes(this.value.toLowerCase()) ){
        //         paciente.classList.add("invisivel");
        //     }else{
        //         paciente.classList.remove("invisivel");
        //     }
        // };
        */
    };
    });