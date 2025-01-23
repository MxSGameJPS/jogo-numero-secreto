alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//let palavraTentativas = tentativas;


//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}

//if (tentativas > 1) {
  //palavraTentativas = "tentativas";
//} else {
  //palavraTentativas = "tentativa";
//}
//forma usual que se encontra no mercado
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; 
alert(`Parabéns! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
