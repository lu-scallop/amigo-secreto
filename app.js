let amigos = [];

function adicionarAmigo() {
    
    let campoTexto = document.getElementById("amigo");

    if (campoTexto.value == "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(campoTexto.value);
    }
    campoTexto.value = "";

    atualizarListaDeAmigos(amigos);
}

function atualizarListaDeAmigos(amigos)
{
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++)
    {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo()
{
    if (amigos.length > 0) {

        let indiceAleatorio = Math.floor(Math.random() * amigos.length) +1;
        
        let nomeSorteado = amigos[indiceAleatorio - 1];

        let exibeNome = document.getElementById("resultado");

        exibeNome.innerHTML = `<li>${nomeSorteado}</li>`
    }
}




