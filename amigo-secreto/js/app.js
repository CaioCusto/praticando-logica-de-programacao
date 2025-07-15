amigos = []
nomesMaiusculos = []


function adicionar() {

    let nome = document.getElementById("nome-amigo").value;
    nomeFormatado = nome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
  return a.toUpperCase();
});
    let nomeMaiusculo = nome.toUpperCase();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (nomesMaiusculos.includes(nomeMaiusculo)) {
        alert("Este nome já foi adicionado.");
        document.getElementById("nome-amigo").value = "";
        return;
    }

    amigos.push(nomeFormatado);
    nomesMaiusculos.push(nomeMaiusculo);

    let listaAmigos = document.getElementById("lista-amigos");
    atualizarLista();

    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    if (amigos.length < 4) {
        alert("Você precisa adicionar pelo menos 4 amigos para sortear.");
        return;
    }

for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
}
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    
    amigos = [];
    nomesMaiusculos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").textContent = "";
}

function atualizarLista() {

    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let o = 0; o < amigos.length; o++) {

        let nome = amigos[o];
        let span = document.createElement("span");
        span.textContent = nome;

        span.onclick = function() {
            if(confirm("Quer remover " + nome + " da lista?")) {
                let index = amigos.indexOf(nome);
                amigos.splice(index, 1);
                atualizarLista();
            }
        }
        lista.appendChild(span);

        span.style.cursor = "pointer";

        if (o < amigos.length - 1) {
            lista.append(", ");
        }
    }
}