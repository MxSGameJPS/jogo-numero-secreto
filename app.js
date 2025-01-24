// Atribuindo valores ao elemento H1
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";
// Atribuindo valores ao elemento P
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
let listaDeNumerosSoreteados = [];
let numeroLlimite = 5000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
document.getElementById("chutar").removeAttribute("disabled");

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ("speechSynthesis" in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speech API não suportada neste navegador.");
  }
}
function exibirMensagemNaTela() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 5000");
}

exibirMensagemNaTela();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavreTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Parabéns, você acertou! Com ${tentativas} ${palavreTentativa}`;
    exibirTextoNaTela("p", `${mensagemTentativas}`);
    document.getElementById("chutar").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor que " + chute);
    } else {
      exibirTextoNaTela("p", "O número secreto é maior que " + chute);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLlimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSoreteados.length;

  if (quantidadeDeElementosNaLista == 10) {
    listaDeNumerosSoreteados = [];
  }

  if (listaDeNumerosSoreteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSoreteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemNaTela();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.getElementById("chutar").removeAttribute("disabled");
}
