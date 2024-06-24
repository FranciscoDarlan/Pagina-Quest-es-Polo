let divCombate = document.getElementById('div-materia-combate');
let divSalvamento = document.getElementById('div-materia-salvamento');
let divPrimeiroSocorros = document.getElementById('div-materia-primeiros-socorros');
let backPagesQuestions = document.querySelector('.back-pages-questioes');
let buttonStartQuiz = document.querySelector('.button-start-quiz');
let divPerguntas = document.querySelector('.div-das-perguntas');
let buttonNextQuestion = document.querySelector('.Next-question');
let buttonVoltaPaginaPrincipal = document.querySelector('.callback-home');
// __________________________________________ YOUTUBE
//caixa de resposta
const caixaPerguntas = document.querySelector('ol');

//vou pegar o texto da questão 
const textoquestion = document.querySelector('.p-question');

function voltaPaginaInicial() {
    alert('conectar com html pagina primcipal');
}

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


// vou criar uma variavel para saber em qual questão estamos ..
let perguntaAtual = 0;

function iniciaQuestionario() {
    divPerguntas.classList.remove('apaga');
    buttonNextQuestion.classList.remove('apaga');
    buttonStartQuiz.classList.add('apaga');

    displayNextQuestion()
}

function displayNextQuestion() {
    //estrutura de repetição .. enquanto na variavel que criei tiver filho vai ficar removendo ..
    while (caixaPerguntas.firstChild) {
        caixaPerguntas.removeChild(caixaPerguntas.firstChild);
    }

    textoquestion.textContent = questions[perguntaAtual].question;
    questions[perguntaAtual].answers.forEach(event =>{
        const newRespostas = document.createElement('li');
        newRespostas.classList.add("li");
        newRespostas.textContent = event.option;

        if (event.correct) {
            newRespostas.dataset.correct = event.correct;
        }

        caixaPerguntas.appendChild(newRespostas);
    })
}



const questions = [
    {
        question: "quanto é 1 + 2?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false }, 
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "quanto é 5 + 2?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true }, 
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "quanto é 100 + 8?",
        answes: [
            { option: "800", correct: false },
            { option: "90", correct: false }, 
            { option: "108", correct: true },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "quanto é 7 + 7?",
        answers: [
            { option: "70", correct: false },
            { option: "56", correct: false }, 
            { option: "14", correct: true },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
];
