let email = document.getElementById("email")
let pass = document.getElementById("password")
let senha = document.getElementById("senha")
let nome = document.getElementById("name")
let sobrenome = document.getElementById("lastname")


let cadastroEmail = []
let cadastroSenha = []

function cadastro() {
    cadastroEmail = JSON.parse(localStorage.getItem("email_usuario"))
    cadastroSenha = JSON.parse(localStorage.getItem("senha_usuario"))

    let podeLogar = false

    if (email.value != "") {

        if (nome.value != "") {

            if (sobrenome.value != "") {

                if (senha.value == pass.value && senha.value != "") {
                    Swal.fire(
                        'Registrado!',
                        'Sua conta foi criada com sucesso!',
                        'success'   
                      )
                    podeLogar = true
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Senha incorreta',
                        text: 'As senhas são diferentes!',
                        footer: '<a href="">Voltar</a>'
                      })
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Todos os campos precisam ser preenchidos!',
                    footer: '<a href="">Voltar</a>'
                })
            }


        } else {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Todos os campos precisam ser preenchidos!',
                footer: '<a href="">Voltar</a>'
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Todos os campos precisam ser preenchidos!',
            footer: '<a href="">Voltar</a>'
        })
    }
    console.log(senha.value);


    if (podeLogar == true) {


        if (cadastroEmail == null) {
            cadastroEmail = []
            cadastroSenha = []

            cadastroEmail.push(email.value)
            cadastroSenha.push(senha.value)

            localStorage.setItem("email_usuario", JSON.stringify(cadastroEmail))
            localStorage.setItem("senha_usuario", JSON.stringify(cadastroSenha))

            window.location.href = "login.html"

        } else {
            cadastroEmail.push(email.value)
            cadastroSenha.push(senha.value)

            localStorage.setItem("email_usuario", JSON.stringify(cadastroEmail))
            localStorage.setItem("senha_usuario", JSON.stringify(cadastroSenha))

            window.location.href = "login.html"

        }
    }
}