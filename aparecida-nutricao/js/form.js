var btnAdd = document.querySelector("#adicionar-paciente");

btnAdd.addEventListener("click", function(event){
    event.preventDefault(); // evita que o comportamento padrão do evento seja ativado (não recarrega página)
    
    
    var form = document.querySelector("#form-adiciona");

    //capturando os dados do formulário e de seus inputs
    var paciente = captureFormInfo(form);
    

    //criando elementos HTML para a tabela
    var pacienteTr = createTr(paciente);
    
    //validação dos dados de paciente
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        showMsgErro(erros);
       
        return;
        
    }



    // inserindo os dados do TR na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    form.reset();
    
    //limpando as msgs de erro após concluir inserção
    var msgErro = document.querySelector("#msgs-erro");
    msgErro.innerHTML ="";

});

function captureFormInfo(form){
    //Objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura:form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function createTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //colocando os dados dos inputs que estão nos TD's para dentro do TR
    pacienteTr.appendChild(createTd(paciente.nome , "info-nome"));
    pacienteTr.appendChild(createTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(createTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(createTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(createTd(paciente.imc, "info-imc"));
 
    return pacienteTr;
}

function createTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Você não digitou o NOME do paciente !")
    }

    if (paciente.gordura.length == 0) {
        erros.push("Você não digitou o % de GORDURA do paciente !")
    }

    if (paciente.peso.length == 0) {
        erros.push("Você não digitou o PESO do paciente !")
    }

    if (paciente.altura.length == 0) {
        erros.push("Você não digitou a ALTURA do paciente !")
    }

    if (!validaPeso(paciente.peso))
        erros.push("Você digitou um peso inválido!!");
    

    if (!validaAltura(paciente.altura))
        erros.push("Você digitou uma altura inválida!!"); 

    
    return erros;

}

function showMsgErro(erros) {
    var ul = document.querySelector("#msgs-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}



