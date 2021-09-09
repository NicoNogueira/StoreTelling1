let htmlCategoria = ''

let categoria = localStorage.getItem('coiso')

console.log("categoria selecionada: " + categoria);

for(i=0;i < loadList.length;i++) {
    if(loadList[i].tag == categoria) {
        console.log(i);
        htmlCategoria+= `<a class="col-md-3 ${(loadList[i].tag)}" href="./produto.html">
    <div class="card p-3" id="${(loadList[i].id)}" >
    <div class="text-center"> <img src="${(loadList[i].image)}" width="200"> </div>
    <div class="product-details"> <span class="font-weight-bold d-block" style="font-weight: bold ;">R$${(loadList[i].price)},00</span> <span>${(loadList[i].name)}</span>
        
    
    </div>
    </div>
    </a>`
    }

    
}

document.getElementById('cartListSorted').innerHTML = htmlCategoria