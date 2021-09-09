
let arrayGenerico = []

arrayGenerico = JSON.parse(localStorage.getItem("carrinho"))

console.log(arrayGenerico);

// let carrinhoDeCompras = [1, 2, 3, 4]
// console.log("carrinho de compras provisorio: " + carrinhoDeCompras);


let cartList = ''



let valorTotal = 0 
for(i=0; i < arrayGenerico.length; i++) {
    valorTotal += parseInt(arrayGenerico[i].price)
    console.log(valorTotal);
}
console.log(valorTotal);


for(i=0; i < arrayGenerico.length; i++) {



    cartList += `<div class="produtos">
    <h2 class="nome-produtos">${(arrayGenerico[i].name)}</h2>
    <div class="img">
        <img src="${(arrayGenerico[i].image)}"
            class="amogus" alt=""><label for="" class="valor">R$${(arrayGenerico[i].price)},00</label>
            
    </div>
    
    </div>
    `

}




// <div class="produtos">
// <h2 id="nome">${(arrayGenerico[i].name)}</h2>

// <div id="qtd">
//     <label for="" id="titulo">Quantidade:</label>
//     <select name="select" id="input">
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//       </select>
// </div>

// <div class="valor">
//     <label for="" id="valor">R$ ${(arrayGenerico[i].price)},00</label>
// </div>
// </div>

document.getElementById('cartList').innerHTML = cartList

document.getElementById('subtotal').textContent = "R$" + parseInt(valorTotal) + ",00"
document.getElementById('precofinal').textContent = "R$" + parseInt(valorTotal) + ",00"


function submitTotal() {
    localStorage.setItem("precoTotal", valorTotal)
}

 
