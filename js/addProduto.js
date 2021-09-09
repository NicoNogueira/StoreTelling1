function posty() {
    window.location.href = "addProduto.html"
}


let addName = document.getElementById('inputName')
let addQuantidade = document.getElementById('quantidade')
let addPreco = document.getElementById('preco')
let addDescricao = document.getElementById('descricao')
let addImagem = document.getElementById('imagemProduto')
let tag = ''

function itemIsLente() {
    tag = 'lente'
    console.log('Categoria adicionada: ' + tag);
    return tag
}

function itemIsCamera() {
    tag = 'camera'
    console.log('Categoria adicionada: ' + tag);
    return tag
}

function itemIsTripe() {
    tag = 'tripe'
    console.log('Categoria adicionada: ' + tag);
    return tag
}

function itemIsLuz() {
    tag = 'luz'
    console.log('Categoria adicionada: ' + tag);
    return tag
}

function itemIsMicrofone() {
    tag = 'microfone'
    console.log('Categoria adicionada: ' + tag);
    return tag
}


let lastArray = loadList.length + 1

console.log('produtos length: ' + lastArray);

let adicionarProduto = []

function addProduto() {


    if (addName.value != '') {
        if (addQuantidade.value != '') {
            if (addPreco.value != '') {
                if (addDescricao.value != '') {
                    if (addImagem.value != '') {
                        if (tag != '') {

                            let produtoGenerico = {

                                name: addName.value,
                                price: addPreco.value,
                                tag: tag,
                                qtnd: addQuantidade.value,
                                id: lastArray,
                                image: addImagem.value

                            }


                            adicionarProduto = JSON.parse(localStorage.getItem("produtos"))

                            adicionarProduto.push(produtoGenerico)

                            localStorage.setItem("produtos", JSON.stringify(adicionarProduto))
                            Swal.fire(
                                'Produto Adicionado!',
                                'Um novo produto foi adicionado ao catalogo!',
                                'success'
                            )
                            console.log("Produto Adicionado");
                            lastArray = loadList.length + 1
                            console.log('produtos length: ' + lastArray);
                            console.log(addImagem.value);

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



}