let divCombate = document.getElementById('div-materia-combate');
let divSalvamento = document.getElementById('div-materia-salvamento');
let divPrimeiroSocorros = document.getElementById('div-materia-primeiros-socorros');
let backPagesQuestions = document.querySelector('.back-pages-questioes');
let buttonStartQuiz = document.querySelector('.button-start-quiz');
let divPerguntas = document.querySelector('.div-das-perguntas');
let buttonNextQuestion = document.querySelector('.Next-question');
let buttonVoltaPaginaPrincipal = document.querySelector('.callback-home');

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

function voltaPaginaInicial() {
    alert('conectar com html pagina primcipal');
}


const questions = [
    {
        question: "quanto é 1 / 2?",
        answes: [
            { option: "3", correct: true },
            { option: "2", correct: false }, 
            { option: "4", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false },
        ],
    },
    {
        question: "quanto é 5 / 2?",
        answes: [
            { option: "9", correct: false },
            { option: "10", correct: true }, 
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false },

        ],
    },
    {
        question: "quanto é 100 / 8?",
        answes: [
            { option: "800", correct: false },
            { option: "90", correct: false }, 
            { option: "80", correct: true },
            { option: "4", correct: false },
            { option: "4", correct: false },
        ],
    },
    {
        question: "quanto é 7 / 7?",
        answes: [
            { option: "70", correct: false },
            { option: "56", correct: false }, 
            { option: "1", correct: true },
            { option: "4", correct: false },
            { option: "4", correct: false },
        ], 
    },
];