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
        question: "Quais os componentes do Triângulo do Fogo?",
        answers: [
            { option: "Sólido, Combustível e Comburente", correct: false },
            { option: "Sólido, Líquido e Gasoso", correct: false },
            { option: "Calor, Madeira  e Papel", correct: false },
            { option: "classe A, Combustível e Comburente", correct: false },
            { option: "Calor, Combustível e Comburente", correct: true }
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
        question: "Qual elemento é considerado o 4° Elemento do Triângulo do Fogo?",
        answers: [
            { option: "Incêndio", correct: false },
            { option: "Materias Sólidos", correct: false },
            { option: "Ponto de Fulgor", correct: false },
            { option: "Reação em cadeia", correct: true },
            { option: "Calor", correct: false }
        ],
    },
    {
        question: "O que significa BPC?",
        answers: [
            { option: "Bombeiro Polo Curicica", correct: false },
            { option: "Bombeiro Preservação Civil", correct: false },
            { option: "Bombeiro Profissional Civil", correct: true },
            { option: "Bombeiro Polícia Civil", correct: false },
            { option: "Bombeiro Primário Civil", correct: false }
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
        question: "O que é um incêndio?",
        answers: [
            { option: "É a propagação rápida e violenta do fogo, não estando ao controle do homem.", correct: true },
            { option: "É a propagação do fogo, não estando ao controle do homem.", correct: false },
            { option: "É a propagação rápida e violenta do fogo, estando ao controle do homem.", correct: false },
            { option: "É a propagação Lenta do fogo, não estando ao controle do homem.", correct: false },
            { option: "É a propagação Lenta do fogo, estando ao controle do homem.", correct: false }
        ]
    },
    {
        question: "Quais os Principais gases presente na composição do GLP?",
        answers: [
            { option: "CO2", correct: false },
            { option: "GNV", correct: false },
            { option: "Propano e Aerosol", correct: false },
            { option: "Propano e Butano", correct: true },
            { option: "O2", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem líquida presente no GLP ?",
        answers: [
            { option: "50%", correct: false },
            { option: "5%", correct: false },
            { option: "15%", correct: false },
            { option: "85%", correct: true },
            { option: "68%", correct: false }
        ]
    },
    {
        question: "Qual o nome da peça acoplada ao botijão de GLP?",
        answers: [
            { option: "Regulador de pressão", correct: true },
            { option: "Regulação de precisão", correct: false },
            { option: "Registro de Precisão", correct: false },
            { option: "Válvula de Regulador", correct: false },
            { option: "Reguador de Registro", correct: false }
        ],
    },
    {
        question: "Descrito em lei, quais os 3 tipos de bombeiros civis?",
        answers: [
            { option: "Chefe, Mestre, Básico", correct: false },
            { option: "Líder, Mestre, ajudante", correct: true },
            { option: "Líder, Mestre, simples", correct: false },
            { option: "Alto, Médio, pequeno", correct: false },
            { option: "Líder, Mestre, Básico", correct: false }
        ]
    },
];
