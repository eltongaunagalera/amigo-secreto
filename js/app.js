let listaAmigos = [];
function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo').value;
  let lista = document.getElementById('lista-amigos');
  if (nomeAmigo == '') {
    alert('O campo de nome náo pode ser vazio');
    return;
  }
  if (listaAmigos.includes(nomeAmigo)) {
    alert('Nome já incluido. Adicione o sobrenome para diversificar!');
    return;
  }
  listaAmigos.push(nomeAmigo);

  if (lista.textContent == '') {
    lista.textContent = nomeAmigo;
  } else {
    lista.textContent = lista.textContent + ', ' + nomeAmigo;
  }
  document.getElementById('nome-amigo').value = '';
}

function sortear() {
  if (listaAmigos.length < 4) {
    alert('É necessário no mínimo 4 amigos para realizar o sorteio!');
    return;
  }
  document.getElementById('lista-sorteio').innerHTML = '';
  embaralhar(listaAmigos);
  let listaSorteio = document.getElementById('lista-sorteio');
  for (let x = 0; x < listaAmigos.length; x++) {
    if (x == listaAmigos.length - 1) {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaAmigos[x] +
        ' => ' +
        listaAmigos[0] +
        '<br>';
    } else {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaAmigos[x] +
        ' => ' +
        listaAmigos[x + 1] +
        '<br>';
    }
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById('nome-amigo').value = '';
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
