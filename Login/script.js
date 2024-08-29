function login() {

  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome == "admin" && senha == "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    let modal = document.getElementById("mostrar")
    modal.style.display = "flex";
  }
}

function mostrarModal(){
  let modal = document.getElementById("mostrar")
  modal.style.display = "none";
}


let botaoSenha = document.getElementById("botaoSenha")
let showSenha = false
botaoSenha.addEventListener("click", ()=> {
  let senha = document.getElementById("senha")
  if(showSenha){
    senha.type = "text"
  }else{
    senha.type = "password"
  }
  showSenha = !showSenha
})