var title = document.querySelector(".title");


title.textContent ="Aparecida Nutricionista";			

var pacientes = document.querySelectorAll(".paciente"); // recebe tr

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //recebe td peso
    var peso = tdPeso.textContent; // recebe conteudo tdPeso
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!pesoEhValido){
        
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calcImc(peso, altura);    
        tdImc.textContent = imc;
    }
    
}


function calcImc(peso,altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso < 1000) {
        return true;
        
    }else{
        return false;
    }

}

function validaAltura(altura){

    if (altura >= 0 && altura < 3.0) {
        return true;
        
    }else{
        return false;
    }

}
