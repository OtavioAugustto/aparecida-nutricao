var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes" );
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
            erroAjax.classList.add("hide");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente) {
                AddPctOnTable(paciente);
            });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("hide");
        }
           
    });

    xhr.send();
});