function adicionar() {
    
    let produto = document.getElementById("produto").value;

    let partes = produto.split(" - ");
    let nome = partes[0];
    let valor = partes[1];

    let quantidade = parseInt(document.getElementById("quantidade").value);
    if (isNaN(quantidade)) {
        quantidade = 1;
    } else if (quantidade <= 0){
        alert("Por favor insira uma quantidade válida.");
        return;
    }

    let listaProdutos = document.getElementById("lista-produtos");
    let produtosNoCarrinho = listaProdutos.children;
    for (let i = 0; i < produtosNoCarrinho.length; i++) {
        let produtoAtual = produtosNoCarrinho[i];
        let textoProduto = produtoAtual.textContent;
        if (textoProduto.includes(nome)) {
            let spanQuantidade = produtoAtual.querySelector("span");
            let quantidadeAtual = parseInt(spanQuantidade.textContent);
            let novaQuantidade = quantidadeAtual + quantidade;
            spanQuantidade.textContent = novaQuantidade + "x";

            let total = document.getElementById("valor-total");
            let textoTotal = total.textContent;
            let numeroTotal = parseInt(textoTotal.replace("R$", ""));
            let valorProduto = parseInt(valor.replace("R$", ""));
            let valorProdutoTotal = quantidade * valorProduto;
            let totalGeral = numeroTotal + valorProdutoTotal;
            total.textContent = "R$ " + totalGeral;
            return;
        }
    }
    let item = document.createElement("section");
    item.classList.add("carrinho__produtos__produto");
    item.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">${valor}</span>`;
    listaProdutos.appendChild(item);

    let total = document.getElementById("valor-total");
    let textoTotal = total.textContent;
    let numeroTotal = parseInt(textoTotal.replace("R$", ""));
    let valorProduto = parseInt(valor.replace("R$", ""));
    let valorProdutoTotal = quantidade * valorProduto;
    let totalGeral = numeroTotal + valorProdutoTotal;
    total.textContent = "R$ " + totalGeral;

}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    document.getElementById("quantidade").value = "";
}