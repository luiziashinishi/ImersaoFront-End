function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  if (filme.endsWith(".jpg")) {
    listarFilme(filme);
  } else {
    alert("Digite uma imagem valida!");
  }
  document.getElementById("filme").value = "";
}

function listarFilme(filme) {
  var addFilme = "<img src=" + filme + ">";
  var eListaFilme = document.getElementById("listaFilmes");
  eListaFilme.innerHTML = eListaFilme.innerHTML + addFilme;
}
