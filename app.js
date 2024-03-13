let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';
let contador=1;

function contarClique () {
    let palavraVez = contador > 1 ? "vezes" : "vez";
    console.log(`O botão foi clicado ${contador} ${palavraVez}`);
    contador++;
}

function emitirAlerta () {
    alert ('Brisa e Aurora gangsters');
}

function perguntarCidade () {
    let cidade = prompt (`Digite o nome de uma cidade do Brasil:`);
    alert (`Estive em ${cidade} e lembrei de você!`);
}

function somar() {
    let numero1 = Number(prompt ('Digite um número:'));
    let numero2 = Number(prompt ('Digite mais um número:'));
    alert (`A soma de ${numero1} e ${numero2} é igual a ${numero1+numero2}`);
}