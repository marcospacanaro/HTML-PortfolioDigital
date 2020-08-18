/*  Case Sensitive

por Tag: getElementByTag()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "black";
    
    } 
    else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green";
    }
}

function validaEmail () { 
    let txtEmail = document.querySelector("#txtEmail")
    
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "black"
    }
    else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
    }
}
