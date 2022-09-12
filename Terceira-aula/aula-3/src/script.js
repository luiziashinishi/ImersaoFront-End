//console.clear();
var numeroSecreto = parseInt(Math.random() * 11);
//console.log("o numero secreto é " + numeroSecreto);
var elementoResultado = document.getElementById("resultado");
var elementoFim = document.getElementById("fim");
var elementoTentativa = document.getElementById("tentativa");
var elementoNovoJogo = document.getElementById("novoJogo");
var tentativas = 3;
console.log(tentativas);
function NovoJogo() {
  console.clear();
  numeroSecreto = parseInt(Math.random() * 11);
  //console.log("o numero secreto é " + numeroSecreto);
  elementoFim.innerHTML = "";
  elementoResultado.innerHTML = "";
  elementoTentativa.innerHTML = "";
  elementoNovoJogo.innerHTML = "";
  tentativas = 3;
  //console.log(tentativas);
  document.getElementById("botaoChutar").disabled = false;
}

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (tentativas > 0) {
    if (chute == numeroSecreto) {
      elementoFim.innerHTML = "Você acertou.";
      elementoResultado.innerHTML = "";
      elementoTentativa.innerHTML = "";
      elementoNovoJogo.innerHTML =
        "Caso queira jogar novamente pressione o botão de novo jogo.";
      document.getElementById("botaoChutar").disabled = true;
      tentativas = 0;
    } else if (chute > 10 || chute < 0 || Number.isNaN(chute)) {
      elementoResultado.innerHTML =
        "Ops, você deve digitar um número de 0 a 10.";
      elementoTentativa.innerHTML =
        "Você ainda tem " + tentativas + " tentativas.";
    } else if (chute > numeroSecreto && tentativas > 1) {
      tentativas = tentativas - 1;
      elementoResultado.innerHTML =
        "Infelizmente vocé errou, mas o seu numero é maior que o secreto.";
      elementoTentativa.innerHTML =
        "Você ainda tem " + tentativas + " tentativas.";
    } else if (chute < numeroSecreto && tentativas <= 1) {
      tentativas = tentativas - 1;
      elementoFim.innerHTML = "FIM DE JOGO";
      elementoResultado.innerHTML = "Infelizmente vocé errou. ";
      elementoTentativa.innerHTML = "Não lhe sobraram mais tentativas.";
      elementoNovoJogo.innerHTML =
        "Caso queira jogar novamente pressione o botão de novo jogo.";
      document.getElementById("botaoChutar").disabled = true;
    } else if (chute > numeroSecreto && tentativas <= 1) {
      tentativas = tentativas - 1;
      elementoFim.innerHTML = "FIM DE JOGO";
      elementoResultado.innerHTML = "Infelizmente vocé errou. ";
      elementoTentativa.innerHTML = "Não lhe sobraram mais tentativas.";
      elementoNovoJogo.innerHTML =
        "Caso queira jogar novamente pressione o botão de novo jogo.";
      document.getElementById("botaoChutar").disabled = true;
    } else if (chute < numeroSecreto && tentativas > 1) {
      tentativas = tentativas - 1;
      elementoResultado.innerHTML =
        "Infelizmente vocé errou, mas o seu numero é menor que o secreto.";
      elementoTentativa.innerHTML =
        "Você ainda tem " + tentativas + " tentativas.";
    }
  }
}
