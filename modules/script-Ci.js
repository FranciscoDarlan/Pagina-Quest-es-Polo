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

//ouvidor de evento no buttão proximaquestão e depois chma a funcção !!!
buttonNextQuestion.addEventListener('click', displayNextQuestion);


const caixaDeInfomações = document.querySelector('.container-div1');
function voltaPaginaInicial() {
    alert('conectar com html pagina primcipal');
}

function voltarPagesQuestoes() {
    window.location.href = "index.html";
}

// vou criar uma variavel para saber em qual questão estamos ..
let perguntaAtual = 0;

// vou criar uma variavel para saber quantidade de acertos..
let totalAcerto = 0;

function iniciaQuestionario() {
    divPerguntas.classList.remove('apaga');
    buttonStartQuiz.classList.add('apaga');

    displayNextQuestion()
}

function displayNextQuestion() {
    resetStatus();

    if (questionsCi.length === perguntaAtual) {
        return finishQuiz();
    }

    textoquestion.textContent = questionsCi[perguntaAtual].question;
    questionsCi[perguntaAtual].answers.forEach(event => {
        const newRespostas = document.createElement('li');
        newRespostas.classList.add("li");
        newRespostas.textContent = event.option;

        if (event.correct) {
            newRespostas.dataset.correct = event.correct;
        }
        caixaPerguntas.appendChild(newRespostas);

        newRespostas.addEventListener('click', selecionandoResposta)
    })
}

function resetStatus() {
    //estrutura de repetição .. enquanto na variavel que criei tiver filho vai ficar removendo ..
    while (caixaPerguntas.firstChild) {
        caixaPerguntas.removeChild(caixaPerguntas.firstChild);
    }

    document.body.removeAttribute('class');
    buttonNextQuestion.classList.add('apaga');
}

function selecionandoResposta(event) {
    const respostaSelecionada = event.target;

    //preciso pegar as informaçõs do arquvo globais
    if (respostaSelecionada.dataset.correct) {
        document.body.classList.add('correto');
        totalAcerto++;
    } else {
        document.body.classList.add('incorreto');
    }

    //aqui tenho que colocar o 'All' para selecionar todos!!
    document.querySelectorAll('li').forEach(parametroLi => {
        if (parametroLi.dataset.correct) {
            parametroLi.classList.add('correto');
        } else {
            parametroLi.classList.add('incorreto');
        }
        parametroLi.classList.add('disabled');
    })
    buttonNextQuestion.classList.remove('apaga');
    perguntaAtual++;
}

function finishQuiz() {
    const totalQuestion = questionsCi.length;
    const performance = Math.floor(totalAcerto * 100 / totalQuestion);

    let message = "";

    switch (true) {
        case performance >= 90:
            message = 'Excelente';
            break;
        case performance >= 70:
            message = 'Muito Bom';
            break;
        case performance >= 50:
            message = 'Bom';
            break;
        default:
            message = 'Pode Melhorar';
    }


    caixaDeInfomações.innerHTML = `
    
    <p class="p-final">Você Acertou ${performance}% de ${totalQuestion} questões!</p><br>
    <span>${message}</span><br>
    <button class="button-refazer" onclick=window.location.reload()> Refazer Quiz </button>

    `
}











//coloquei esse nome para nao precisar mudar no codigo la em cima ...
const questionsCi = [
    {
        question: "Quais Elementos do Triângulo do Fogo?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "Quais metodos de extinção do Fogo?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true },
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "Quais Elementos do Triângulo do Fogo?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "Quais metodos de extinção do Fogo?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true },
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "Quais Elementos do Triângulo do Fogo?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "Quais metodos de extinção do Fogo?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true },
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "Quais Elementos do Triângulo do Fogo?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "Quais metodos de extinção do Fogo?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true },
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
    {
        question: "Quais Elementos do Triângulo do Fogo?",
        answers: [
            { option: "3", correct: true },
            { option: "2", correct: false },
            { option: "4", correct: false },
            { option: "5", correct: false },
            { option: "6", correct: false }
        ],
    },
    {
        question: "Quais metodos de extinção do Fogo?",
        answers: [
            { option: "9", correct: false },
            { option: "7", correct: true },
            { option: "11", correct: false },
            { option: "4", correct: false },
            { option: "4", correct: false }
        ]
    },
];
