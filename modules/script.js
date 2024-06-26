let divCombate = document.getElementById('div-materia-combate');
let divSalvamento = document.getElementById('div-materia-salvamento');
let divPrimeiroSocorros = document.getElementById('div-materia-primeiros-socorros');
let backPagesQuestions = document.querySelector('.back-pages-questioes');
let divPerguntas = document.querySelector('.div-das-perguntas');
let buttonNextQuestion = document.querySelector('.Next-question');
let buttonVoltaPaginaPrincipal = document.querySelector('.callback-home');


//ouvidor de evento no buttão proximaquestão e depois chma a funcção !!!
buttonNextQuestion.addEventListener('click', displayNextQuestion);


const caixaDeInfomações = document.querySelector('.container-div1');
function voltaPaginaInicial() {
    window.location.href = "https://polocuricica.vercel.app/";
}

function questoesCombateAIncendio() {
    window.location.href = "questionarioci.html";
}

function questoesSalvamento() {
    window.location.href = "questionarioSalvamento.html";
}

function questoesPrimeirosSocorros() {
    window.location.href = "questionarioaph.html";
}
