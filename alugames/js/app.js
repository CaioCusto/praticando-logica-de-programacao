let jogosAlugados = 1;

function exibirJogosAlugados() {    
    console.log(`Jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
   
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector(".dashboard__item__img");
    let botao = jogoClicado.querySelector(".dashboard__item__button");

    let acao = botao.textContent.trim().toLowerCase();
    let confirmar = confirm(`Tem certeza que quer ${acao} este jogo?`);
        if (!confirmar) {
        return;
    }

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        jogosAlugados--;
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
    }
    exibirJogosAlugados();
}
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirJogosAlugados();
});