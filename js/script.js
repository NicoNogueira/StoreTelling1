// produtos
// Categorias: "camera", "luz", "tripe", "microfone", "lente"



function finalizarPagamento() {
    let arrayGenerico = localStorage.getItem("carrinho")
    for(i=0;i < arrayGenerico.length;i++){
        localStorage.removeItem("carrinho")
    }
}


var produtos = [

    //1

    {
        name: 'Câmera Digital Nikon Coolpix P1000 16.0 Mp 4K ',
        price: 10299,
        tag: "camera",
        qtnd: 5,
        id: 1,
        image: "https://www.beephoto.com.br/beestore/wp-content/uploads/2020/02/nikon-coolpix-p1000-zoom-125x.jpg"
        

    },
    {
        name: 'Led Osram Standard 36000lm Bivolt Ip66 ',
        price: "319",
        tag: "luz",
        qtnd: 5,
        id: 2,

        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQdo4Z5Bbp9U0rmfXchVRsjZHl7-MiEeu5GwHfkogytT_gvPrFMaJpdnfpFpuvzhTvG9nr1hgmqNFzuP2_4el3qnAom69dSWJnTbcaANDWQWsUbJOLEX8k&usqp=CAE"
    },

    {
        name: 'Tripé Profissional Nest NT-777 ',
        price: 989.00,
        tag: "tripe",
        qtnd: 5,
        id: 3,

        image: "https://cdn.awsli.com.br/600x450/555/555190/produto/73568293/3bfcb1dbdb.jpg"
    },

    {
        name: ' Microfone Shotgun Rode VideoMic Pro Compact ',
        price: "1600",
        tag: "microfone",
        qtnd: 5,
        id: 4,

        image: "https://m.media-amazon.com/images/I/81SI3jiMnSL._AC_SL1500_.jpg"
    },

    {
        name: ' Lente Canon EF75 300MM ',
        price: 1289,
        tag: "lente",
        qtnd: 5,
        id: 5,

        image: "https://4123.cdn.simplo7.net/static/4123/sku/SGRD_27_001_15LenteCanon75300mmImagem01.jpg"
    },

    {
        name: 'Câmera blackmagic micro studio 4k',
        price: 12009,
        tag: "camera",
        qtnd: 5,
        id: 6,

        image: "https://cdn.awsli.com.br/600x450/885/885467/produto/100897715/b5b0bdcda0.jpg"
    },

    {
        name: 'Kit 2x Luz Contínua Softbox ',
        price: "377",
        tag: "luz",
        qtnd: 5,
        id: 7,

        image: "https://http2.mlstatic.com/D_NQ_NP_959152-MLB41999645891_052020-O.jpg"
    },

    {
        name: 'Tripé Profissional Qzsd Q999h',
        price: 499,
        tag: "tripe",
        qtnd: 5,
        id: 8,

        image: "https://http2.mlstatic.com/D_NQ_NP_883547-MLB43970606774_112020-O.jpg"
    },

    {
        name: 'Microfone Lapela Sem Fio Boya By-wm8 Pro K1 Receptor Duplo',
        price: 1349,
        tag: "microfone",
        qtnd: 5,
        id: 9,

        image: "https://m.media-amazon.com/images/I/51y7f98olgL._AC_SL1000_.jpg"
    },

    {
        name: 'Lente Fujifilm XF 16-55mm f/2.8 R LM WR',
        price: 6599,
        tag: "lente",
        qtnd: 5,
        id: 10,

        image: "https://www.focusfilme.com.br/imagem/index/19068600/G/1458684076000_img_605967.jpg"
    },

    {
        name: 'Câmera GoPro HERO 9 Black à Prova D água',
        price: 2999,
        tag: "camera",
        qtnd: 5,
        id: 11,

        image: "https://t.ctcdn.com.br/Wr8PJBa9ep7_g2ouDXQmxSSXldY=/360x360/smart/i451763.jpeg"
    },

    {
        name: 'Kit Estúdio E27 Sombrinha Refletora',
        price: "169",
        tag: "luz",
        qtnd: 5,
        id: 12,

        image: "https://www.tecnodale.com.br/imagem/index/14316768/G/uno_sem_bolsa.jpg"
    },

    {
        name: 'Tripé Century Médio Aluminio',
        price: 1225,
        tag: "tripe",
        qtnd: 5,
        id: 13,

        image: "https://cdn.shopify.com/s/files/1/0006/2144/5175/products/519DC5cXgSL._SX425_425x.jpg?v=1540237476"
    },

    {
        name: 'Microfone Boya Condensador Supercardioide By',
        price: 889,
        tag: "microfone",
        qtnd: 5,
        id: 14,

        image: "https://optisom.vteximg.com.br/arquivos/ids/166217-550-550/Microfone-Shotgun-XLR-Supercardioide-Boya-BY-PVM3000M.jpg?v=637300131052100000"
    },

    {
        name: ' Lente Objetiva EF-M 15-45mm Canon',
        price: 3699,
        tag: "lente",
        qtnd: 5,
        id: 15,

        image: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1772108496"
    },

    {
        name: 'Câmera Fujifilm XP90 à Prova de Poeira',
        price: 1333,
        tag: "camera",
        qtnd: 5,
        id: 16,

        image: "https://s2.glbimg.com/_fGfR6V0jNwjPd5gbNH9bvPOvig=/512x320/smart/e.glbimg.com/og/ed/f/original/2013/04/02/fujifilm-finepix-xp200.jpg"
    },

    {
        name: 'Ring Light',
        price: "539",
        tag: "luz",
        qtnd: 5,
        id: 17,

        image: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1857836849"
    },

    {
        name: 'Tripé Benro Dual-tube',
        price: "5130",
        tag: "tripe",
        qtnd: 5,
        id: 18,

        image: "https://www.vnequipamentosfotograficos.com.br/wp-content/uploads/2018/11/vn-equipamentos-fotograficos-produtos-1096-324x324.jpg"
    },

    {
        name: 'Microfone Vedo BM800 condensador preto',
        price: 35900,
        tag: "microfone",
        qtnd: 5,
        id: 19,

        image: "https://static.doocacommerce.com.br/chipbyte/product/microfone-estudio-profissional-condensador-bm800-usb-vedo-com-pop-filter-aranha-braco-articulado-1608206675293_350x350+fill_ffffff.jpg"
    },

    {
        name: 'Lente Canon EF75 300MM ',
        price: 1289,
        tag: "lente",
        qtnd: 5,
        id: 20,

        image: "https://www.loja.canon.com.br/wcsstore/CDBCatalogAssetStore/ef75_300_4_56iii_1_xl.jpg"
    },

    {
        name: 'Câmera Vlogging 4k Ordro Hdr-Ac3 Ultra Hd  ',
        price: 3999,
        tag: "camera",
        qtnd: 5,
        id: 21,

        image: "https://s.alicdn.com/@sc04/kf/Hf11cdc72d80d49f093a96035db79201ac.png_300x300.png"
    },

    {
        name: '2x Canhão Refletor Par 56 - E27 ',
        price: 270.00,
        tag: "luz",
        qtnd: 5,
        id: 22,

        image: "https://http2.mlstatic.com/D_NQ_NP_773268-MLB31028081368_062019-O.jpg"
    },

    {
        name: 'Tripé Profissional ST-696',
        price: 2629,
        tag: "tripe",
        qtnd: 5,
        id: 23,

        image: "https://emania.vteximg.com.br/arquivos/ids/162658-1000-1000/2.jpg?v=636422004653800000"
    },

    {
        name: 'Câmera Vlogging 4k Ordro Hdr-Ac3 Ultra Hd ',
        price: 3999,
        tag: "camera",
        qtnd: 5,
        id: 24,

        image: "https://images-submarino.b2w.io/produtos/01/00/img/3306082/4/3306082432_1GG.jpg"
    },

    {
        name: '2 Mini Moving Beam ',
        price: "900",
        tag: "luz",
        qtnd: 5,
        id: 25,

        image: "https://http2.mlstatic.com/D_NQ_NP_977909-MLB46009525294_052021-W.jpg"
    },

    {
        
        name: 'Tripé E-image Eg03 ',
        price: "2250",

        tag: "tripe",
        qtnd: 5,
        id: 26,

        image: "https://cdn.awsli.com.br/600x450/885/885467/produto/39386239/655d139f08.jpg"
    },

    {
        name: 'Microfone Takstar Sgc 598 Boom Dslr Filmadoras P2 Sony Canon ',
        price: "273",
        tag: "microfone",
        qtnd: 5,
        id: 27,

        image: "https://http2.mlstatic.com/D_NQ_NP_838136-MLB45642543883_042021-W.jpg"
    },

    {
        name: 'Lente Fujifilm XF 16-55mm f/2.8 R LM WR',
        price: 6599,
        tag: "lente",
        qtnd: 5,
        id: 28,

        image: "https://www.focusfilme.com.br/imagem/index/19068600/G/1458684076000_img_605967.jpg"
    },

    {
        name: 'Sony Handycam 4K Flash Memória Premium ',
        price: 6932,
        tag: "camera",
        qtnd: 5,
        id: 29,

        image: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1619407616"
    },

    {
        name: 'Moving Head Beam 200w ',
        price: "2760",
        tag: "luz",
        qtnd: 5,
        id: 30,

        image: "https://ae01.alicdn.com/kf/HTB1PypoIXXXXXX5XXXXq6xXFXXXK/Sharpy-Beam-200w-5r-Moving-Head-Light-Best-Quality-Beam-200-Stage-Light-for-Dj-Bar.jpg"
    },

    {
        name: 'Tripé Libec Lx5 Profissional ',
        price: "3000",
        tag: "tripe",
        qtnd: 5,
        id: 31,

        image: "https://www.paixaocameras.com.br/4023-large_default/tripe-profissional-libec-th-650hd-para-video-.jpg"
    },

    {
        name: 'Microfone Condensador USB Blue Yeticaster Preto ',
        price: 1684,
        tag: "microfone",
        qtnd: 5,
        id: 32,

        image: "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/y/e/yeti-caster3.png"
    },

    {
        name: 'Apexel Apl-hd5t Lente ',
        price: "157",
        tag: "lente",
        qtnd: 5,
        id: 33,

        image: "http://ae01.alicdn.com/kf/HTB1VQNlXoY1gK0jSZFMq6yWcVXa2.jpg"
    },

    {
        name: ' Sony Fx6 Full Frame',
        price: "47650",
        tag: "camera",
        qtnd: 5,
        id: 34,

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBn8avCF3wgCWvI6WqWz_kB4oPesod2_0VYib-q5jJfvaGfd3_K0YnMRC96QuF-n1vf0&usqp=CAU"
    },

    {
        name: ' Andoer 42 led Ultra Bright',
        price: "84",
        tag: "luz",
        qtnd: 5,
        id: 35,

        image: "https://cf.shopee.com.br/file/95050451f5c07c109db4b41d272ab3e5"
    },

    {
        name: 'Tripé Profissional 5316',
        price: 999.00,
        tag: "tripe",
        qtnd: 5,
        id: 36,

        image: "https://a-static.mlcdn.com.br/1500x1500/tripe-profissional-wf-5316-com-cabeca-hidraulica-weifeng/trizeletronicos/weifeng-wf-5316-1/a7f3cc3c8eefd668742584a91501a8f3.jpg"
    },

    {
        name: 'Microfone Direcional Condensador Profissional Shotâmera celular ',
        price: "197",
        tag: "microfone",
        qtnd: 5,
        id: 37,

        image: "https://images-shoptime.b2w.io/produtos/01/00/img/3068676/9/3068676939_1GG.jpg"
    },

    {
        name: 'Lente Carl Zeiss Sonnar Sony ',
        price: 4352,
        tag: "lente",
        qtnd: 5,
        id: 38,

        image: "https://carrefourbr.vtexassets.com/arquivos/ids/7663176-800-auto?width=800&height=auto&aspect=true"
    },

    {
        name: 'Câmera Filmadora Canon XA40 UHD 4K ',
        price: "15.890",
        tag: "camera",
        qtnd: 5,
        id: 39,

        image: "https://m.media-amazon.com/images/I/71Vl1WXWGjL._AC_SL1090_.jpg"
    },

    {
        name: ' Kit Estudio Tripé Iluminador Led 300',
        price: "659",
        tag: "luz",
        qtnd: 5,
        id: 40,

        image: "https://http2.mlstatic.com/D_NQ_NP_979047-MLB31174513333_062019-O.jpg"
    },

    {
        
        name: 'Tripé E-Image EG05A2 ',
        price: "3500",

        tag: "tripe",
        qtnd: 5,
        id: 41,

        image: "https://cdn.awsli.com.br/300x300/885/885467/produto/36366397/a0c25ed040.jpg"
    },

    {
        name: 'Microfone Boya By-sm80 Para Canon Nikon Sony ',
        price: 399.00,
        tag: "microfone",
        qtnd: 5,
        id: 42,

        image: "https://images-americanas.b2w.io/produtos/01/00/img/56095/0/56095030_1GG.jpg"
    },

    {
        name: 'Lente EF 50mm canon ',
        price: 2057,
        tag: "lente",
        qtnd: 5,
        id: 43,

        image: "https://http2.mlstatic.com/D_NQ_NP_747675-MLB31204079834_062019-W.jpg"
    },

    {
        name: ' Câmera Filmadora Canon Vixia HF 4K',
        price: "10690",
        tag: "camera",
        qtnd: 5,
        id: 44,

        image: "https://cdn.awsli.com.br/600x450/22/22162/produto/56111529/0d3e3b8c41.jpg"
    },

    {
        name: 'Canhão Refletor Par 20 ',
        price: 35,
        tag: "luz",
        qtnd: 5,
        id: 45,

        image: "https://images.tcdn.com.br/img/img_prod/498796/canhao_spot_par_20_prata_volt_264_2_20190719144556.jpg"
    },

    {
        name: ' Microfone Direcional Shotgun Boom + Cabo + Pedestal Suporte',
        price: 427.00,
        tag: "tripe",
        qtnd: 5,
        id: 46,

        image: "https://http2.mlstatic.com/D_NQ_NP_996211-MLB20503604912_112015-O.jpg"
    },

    {
        name: ' Mesa De Som V8 Áudio Microfone Smart Entretenimento Pessoal',
        price: "129",
        tag: "microfone",
        qtnd: 5,
        id: 47,

        image: "https://http2.mlstatic.com/D_NQ_NP_972801-MLB44901090329_022021-O.jpg"
    },

    {
        name: 'Lente canon ef 35mm f/2 is usm ',
        price: 3399,
        tag: "lente",
        qtnd: 5,
        id: 48,

        image: "https://www.loja.canon.com.br/wcsstore/CDBCatalogAssetStore/EF-35MM-F2-IS-USM.jpg"
    },

    {
        name: 'Lente Canon EF 70-200mm f/2.8L IS III USM ',
        price: 11549,
        tag: "lente",
        qtnd: 5,
        id: 49,

        image: "https://www.loja.canon.com.br/wcsstore/CDBCatalogAssetStore/EF70-200-1.jpg"
    },

    {
        name: 'Nikon Lente VR AF-P DX NIKKOR 18-55mm ',
        price: "953",
        tag: "lente",
        qtnd: 5,
        id: 50,

        image: "https://www.reycameras.com.br/2859/lente-nikon-afs-dx-18-55mm-f-35-56g-vr-ii.jpg"
    }




]

let produtosVerify = localStorage.getItem("produtos")
if(produtosVerify == null){
    localStorage.setItem("produtos", JSON.stringify(produtos))
} else {
    
}




document.addEventListener("DOMContentLoaded", function (event) {


    const cartButtons = document.querySelectorAll('.cart-button');

    cartButtons.forEach(button => {

        button.addEventListener('click', cartClick);

    });

    function cartClick() {
        let button = this;
        button.classList.add('clicked');
    }



});




// PAGINA DO PRODUTO



function loadProduct() {
    link = localStorage.getItem("produto")

    leTitre = document.getElementById("product_title")
    lePrice = document.getElementById("product_price")
    leMainPic = document.getElementById("main_product_image")
    leImage1 = document.getElementById("image1")
    leImage2 = document.getElementById("image2")
    leImage3 = document.getElementById("image3")
    leImage4 = document.getElementById("image4")

    leTitre.textContent = loadList[link].name
    lePrice.textContent = "R$" + loadList[link].price + ",00"
    leMainPic.src = loadList[link].image
    leImage1.src = loadList[link].image
    leImage2.src = loadList[link].image
    leImage3.src = loadList[link].image
    leImage4.src = loadList[link].image




}

//Adicionar produto ao carrinho

function batom() {
    // let carrinho = localStorage.getItem("carrinho")

    let addToCart = document.getElementById("addToCart")
    addToCart.classList.add('added')
    addToCart.classList.remove('btn-dark')
    
    
    
    let produtoAtual = localStorage.getItem("produto")


    console.log(produtoAtual);

    let carrinho = []

    if (localStorage.hasOwnProperty("carrinho")) {
        carrinho = JSON.parse(localStorage.getItem("carrinho"))

        carrinho.push(loadList[produtoAtual])

        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        console.log("if");
    } else {
            
        carrinho.push(loadList[produtoAtual])
        console.log("else");
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

  
 
}










// ================================================================================================================
// ================================================================================================================

// PAGINA DA CATEGORIA

const categoriaLinks = document.querySelectorAll('.coisoDaCategoria')


categoriaLinks.forEach(link => {
    link.addEventListener('click', getCategoria)

})


function getCategoria() {
    let categoria = this
    categoria = categoria.id
    localStorage.setItem("coiso", categoria)
}



// ================================================================================================================
// ================================================================================================================

let loadList = []
let lista = ''
loadList = JSON.parse(localStorage.getItem("produtos"))

console.log(loadList);

for(i=0; i < loadList.length ;i++) {
    lista += `<a class="col-md-3 ${(loadList[i].tag)}" href="./produto.html">
    <div class="card p-3" id="${(loadList[i].id)}" >
    <div class="text-center"> <img src="${(loadList[i].image)}" width="200"> </div>
    <div class="product-details"> <span class="font-weight-bold d-block" style="font-weight: bold ;">R$${(loadList[i].price)},00</span> <span>${(loadList[i].name)}</span>
        
    
    </div>
    </div>
    </a>`
}



document.getElementById('list').innerHTML = lista



// const data = loadList
//     .map((_, i) => `<a class="col-md-3 ${(loadList[i].tag)}" href="./produto.html">
//     <div class="card p-3" id="${(loadList[i].id)}" >
//     <div class="text-center"> <img src="${(loadList[i].image)}" width="200"> </div>
//     <div class="product-details"> <span class="font-weight-bold d-block" style="font-weight: bold ;">R$${(loadList[i].price)},00</span> <span>${(loadList[i].name)}</span>
        
    
//     </div>
//     </div>
//     </a>`)


// ================================================================================================================
// ================================================================================================================

// let perPage = 16
// const state = {
//     page: 1,
//     perPage,
//     totalPage: Math.ceil(data.length / perPage),
//     maxVisibleButtons: 5

// }



// const html = {
//     get(element) {
//         return document.querySelector(element)
//     }
// }


// const list = {
//     create(item) {

//         const div = document.createElement('div')
//         div.classList.add('col-md-3')
//         div.innerHTML = item

//         html.get('.list').appendChild(div)
//     },
//     update() {

//         html.get('.list').innerHTML = " "

//         let page = state.page - 1
//         let start = page * state.perPage
//         let end = start + state.perPage

//         const paginatedItems = data.slice(start, end)

//         paginatedItems.forEach(list.create)
//     }
// }

// const controls = {
//     next() {
//         state.page++
//         const lastPage = state.page > state.totalPage

//         if (lastPage) {
//             state.page--
//         }
//     },
//     prev() {
//         state.page--
//         if (state.page < 1) {
//             state.page++
//         }
//     },
//     goTo(page) {


//         if (page < 1) {
//             page = 1
//         }

//         state.page = +page

//         if (page > state.totalPage) {
//             state.page = state.totalPage
//         }
//     },

//     createListeners() {
//         html.get('.first').addEventListener('click', () => {
//             controls.goTo(1)
//             update()
//         })

//         html.get('.last').addEventListener('click', () => {
//             controls.goTo(state.totalPage)
//             update()
//         })

//         html.get('.next').addEventListener('click', () => {
//             controls.next()
//             update()
//         })
//         html.get('.prev').addEventListener('click', () => {
//             controls.prev()
//             update()
//         })
//     }
// }

// const buttons = {

//     element: html.get('.pagination .numbers'),

//     create(number) {
//         const button = document.createElement('div')

//         button.innerHTML = number

//         if (state.page == number) {
//             button.classList.add('active')
//         }

//         button.addEventListener('click', (event) => {
//             const page = event.target.innerText
//             controls.goTo(page)
//             update()
//         })

//         buttons.element.appendChild(button)
//     },
//     update() {
//         html.get('.pagination .numbers').innerHTML = ""

//         const {
//             maxLeft,
//             maxRight
//         } = buttons.calculateMaxVisible()

    

//         for (let page = maxLeft; page <= maxRight; page++) {
//             buttons.create(page)
//         }
//     },

//     calculateMaxVisible() {
//         const {
//             maxVisibleButtons
//         } = state
//         let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
//         let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

//         if (maxLeft < 1) {
//             maxLeft = 1
//             maxRight = maxVisibleButtons

//         }

//         if (maxRight > state.totalPage) {
//             maxLeft = state.totalPage - (maxVisibleButtons - 1)
//             maxRight = state.totalPage


//             if (maxLeft < 1) maxLeft = 1
//         }

//         return {
//             maxLeft,
//             maxRight
//         }
//     }
// }

// function update() {
//     // list.update()
//     // buttons.update()
// }

// function init() {
//     update()
//     controls.createListeners()
// }

// init()
// ================================================================================================================
// ================================================================================================================



const cardLinks = document.querySelectorAll('.card');

cardLinks.forEach(link => {

    link.addEventListener('click', getLink);



});

function getLink() {
    let link = this;
    link = link.id
    link = link -1



    localStorage.setItem("produto", link)



}


// ================================================================================================================
// ================================================================================================================


isLogged = localStorage.getItem('isLogged')
console.log('isLogged: '+isLogged);

if(isLogged == 'true') {
    console.log("estou logado");

    


}