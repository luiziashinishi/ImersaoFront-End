function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmBit = valorEmRealNumerico * 99.123;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Bitcoin é " + valorEmBit + " BTC"; 
  elementoValorConvertido.innerHTML = valorConvertido;
}
