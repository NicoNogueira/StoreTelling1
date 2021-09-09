

let admEmail = []
let admPass = []

admEmail = JSON.parse(localStorage.getItem("email_usuario"))
admPass = JSON.parse(localStorage.getItem("senha_usuario"))


  if (admEmail == null) {
    admEmail = []
    admPass = []
  
    admEmail.push('storetelling@gmail.com')
    admPass.push('123')
  
    localStorage.setItem("email_usuario", JSON.stringify(admEmail))
    localStorage.setItem("senha_usuario", JSON.stringify(admPass))
  
  
  
  } 



// ===================================================================================================================================================================================================
// ===================================================================================================================================================================================================
