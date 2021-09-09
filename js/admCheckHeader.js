
isAdmin = localStorage.getItem('isAdmin')
isLogged = localStorage.getItem('isLogged')


function logOut( ){
  localStorage.setItem("isLogged", false)
  localStorage.setItem("isAdmin", false)
  console.log("Saindo da Conta...");
}


if (isAdmin === 'true') {
    document.getElementById('gerenciar').innerHTML += ` <a href="gerenciamento.html">
      <h6 class="f2">Gerenciar Site</h6>
    </a>
    <br>`
  
    console.log('adm on');
  }

  if (isLogged === 'true') {
    document.getElementById('gerenciar').innerHTML += ` <a onclick="logOut()" href="index.html">
      <h6 class="f2">Log Out</h6>
    </a>
      `
  
    console.log('logado');
  }