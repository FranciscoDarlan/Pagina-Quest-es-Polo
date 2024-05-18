let divCombate = document.getElementById('div-materia-combate');
let divSalvamento = document.getElementById('div-materia-salvamento');
let divPrimeiroSocorros = document.getElementById('div-materia-primeiros-socorros');

let backPagesQuestions = document.querySelector('.back-pages-questioes');

let buttonStartQuiz = document.querySelector('.button-start-quiz');

let divPerguntas = document.querySelector('.div-das-perguntas');
let buttonNextQuestion = document.querySelector('.Next-question');


function questoesCombateAIncendio() {
    window.location.href = "questionarioci.html";
}

function voltarPagesQuestoes() {
    window.location.href = "index.html";
}

function questoesSalvamento() {
    window.location.href = "questionarioSalvamento.html";
}

function questoesPrimeirosSocorros() {
    window.location.href = "questionarioaph.html";
}


function iniciaQuestionario() {
    divPerguntas.classList.remove('apaga');
    buttonNextQuestion.classList.remove('apaga');
    buttonStartQuiz.classList.add('apaga');
}