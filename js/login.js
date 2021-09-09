let email = document.getElementById("email")
let senha = document.getElementById("senha")

function logar() {
    cadastroEmail = JSON.parse(localStorage.getItem("email_usuario"))
    cadastroSenha = JSON.parse(localStorage.getItem("senha_usuario"))

    let login = false

    for (let  i= 0; i < cadastroEmail.length; i++) {

        if (email.value == cadastroEmail[i] && senha.value == cadastroSenha[i]) {
            login = true
            console.log(login);
        }
    }

    if (login == true) {
        if (email.value == cadastroEmail[0] && senha.value == cadastroSenha[0]) {
            localStorage.setItem("isAdmin", true)
         }

        
        localStorage.setItem('isLogged', true)
        window.location.href="index.html"
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ou senha errados!',
            footer: '<a href="">Voltar</a>'
          })
    }   
}