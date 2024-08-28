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
    let modal = document.getElementById("mod")
    modal.style.display = "block";
  }
}

const button = document.querySelector("button")

button.onclick

function mostrarModal(){
  let modal = document.getElementById("mod")
  modal.style.display = "none";
}