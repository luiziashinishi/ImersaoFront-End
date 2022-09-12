var Thiago = {
  nome: "Thiago",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var Diogo = { nome: "Diogo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var Guilherme = {
  nome: "Guilherme",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var Paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 4 + jogador.empates;
  return pontos;
}

Thiago.pontos = calculaPontos(Thiago);
Diogo.pontos = calculaPontos(Diogo);
Guilherme.pontos = calculaPontos(Guilherme);
Paulo.pontos = calculaPontos(Paulo);

var jogadores = [Thiago, Diogo, Guilherme, Paulo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='limpar(" + i + ")'>Limpar</button></tr></td>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function limpar(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.derrotas = 0;
  jogador.empates = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}