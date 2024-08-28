// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Dados/showroom.json")
    .then((response) => response.json())
    .then((data) => {
      produtos = data;
      const produtosContainer =
        document.getElementById("produtos-container");

      produtos.map((produto, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.style.marginRight = "10px";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let circulo = document.createElement("div");
        if (produto.status){
            circulo.style.backgroundColor = "#00FF00";
        }else {
            circulo.style.backgroundColor = "#FF0000";
        };
        circulo.style.width = "10px"
        circulo.style.height = "10px"
        circulo.style.borderRadius = "50%"

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";     
        cardTitle.textContent = produto.descricao;


        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

        

        const btnAdicionarAoCarrinho = document.createElement("a");
        btnAdicionarAoCarrinho.href = "#";
        btnAdicionarAoCarrinho.className =
          "btn btn-primary btn-adicionar-ao-carrinho";
        btnAdicionarAoCarrinho.textContent = "Adicionar ao Carrinho";
        btnAdicionarAoCarrinho.setAttribute("data-indice", index);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(circulo);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btnAdicionarAoCarrinho);

        card.appendChild(imagem);
        card.appendChild(cardBody);

        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});
