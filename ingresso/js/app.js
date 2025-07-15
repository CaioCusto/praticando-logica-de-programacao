function comprar(){
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    let disponivelPista = parseInt(document.getElementById("qtd-pista").textContent);
    let disponivelSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let disponivelInferior = parseInt(document.getElementById("qtd-inferior").textContent);

        if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor insira uma quantidade válida.");
        return;
        }

    if (tipo == "pista") {
        if (disponivelPista < quantidade) {
            alert("Ingressos esgotados ou quantidade indisponível.");
            return;
        } else {
            disponivelPista -= quantidade;
            document.getElementById("qtd-pista").textContent = disponivelPista;
        }
    } else if (tipo == "superior") {
        if (disponivelSuperior < quantidade) {
            alert("Ingressos esgotados ou quantidade indisponível.");
        return;
        } else {
            disponivelSuperior -= quantidade;
            document.getElementById("qtd-superior").textContent = disponivelSuperior;
        }
    } else if (tipo == "inferior") {
        if (disponivelInferior < quantidade) {
        alert("Ingressos esgotados ou quantidade indisponível.");
        return;
        } else {
            disponivelInferior -= quantidade;
            document.getElementById("qtd-inferior").textContent = disponivelInferior;
        }
    }
    alert("Compra realizada com sucesso!");
}