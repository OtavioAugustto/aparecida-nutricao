var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expreReg = new RegExp(this.value, "i");
            
            if (!expreReg.test(nome)) {
                paciente.classList.add("hide");
            }else {
                paciente.classList.remove("hide");
            }
        }
    } else {
        
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("hide");
        }
    }


});
