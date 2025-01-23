alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");

//se o chute for igual ao número secreto
if (chute == numeroSecreto) { 
    alert(`Parabéns! Você acertou o numero secreto ${numeroSecreto}`);
} else{
    alert("você errou :o");
}