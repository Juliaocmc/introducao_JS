// var botaoAdd = document.querySelector("#adicionar-paciente")

// botaoAdd.addEventListener("click", function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://localhost:3001/pacientes")
//     xhr.addEventListener("load", function () {
//         xhr.send()
//         if (xhr.status == 200) {
//             var responseXhr = xhr.responseText;
//             var pacientes = JSON.parse(responseXhr);
//             for (var i = 0; i < pacientes.length; i++) {
//                 var paciente = pacientes[i];
//                 addPacienteNaTabela(paciente);
//             }
//             }else {
//                 console.log(xhr.status)
//                 console.log(xhr.responseText)
//                 var erroAjax = document.querySelector("#erro-ajax")
//                 erroAjax.classList.remove("invisivel")
//                 erroAjax.classList.add("msg-erro")

//             }
        
//         }
//     )

// });