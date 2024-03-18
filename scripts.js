var botao = document.getElementById("botao");
botao.addEventListener("click",alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var email = document.getElementById("telefone");

var email = document.getElementById("cep");

var email = document.getElementById("logradouro");

var email = document.getElementById("numero");

var email = document.getElementById("complemento");

var email = document.getElementById("bairro");

var email = document.getElementById("cidade");

var email = document.getElementById("estado");

function alertar(){
    //alert(nome.value + " " + "Você clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value +
                    "\n E-mail: " + " " + email.value + 
                    "\nTelefone:" + " " + telefone.value + 
                    "\nCEP: " + " " + cep.value + ;
    
}

