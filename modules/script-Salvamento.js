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

    if (questionsAph.length === perguntaAtual) {
        return finishQuiz();
    }

    textoquestion.textContent = questionsAph[perguntaAtual].question;
    questionsAph[perguntaAtual].answers.forEach(event => {
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
    const totalQuestion = questionsAph.length;
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










const questionsAph = [
    {
        question: "Qual NR fala sobre espaço confinado?",
        answers: [
            { option: "NR 13", correct: false },
            { option: "NR 23", correct: false },
            { option: "NR 33", correct: true },
            { option: "NR 43", correct: false },
            { option: "NR 53", correct: false }
        ],
    },
    {
        question: "Quando falamos de salvameno terrestre, destacamos 3 características principais que esperamos num socorrista, quais são?",
        answers: [
            { option: "Preparo técnico, curricular e psicológico.", correct: false },
            { option: "Preparo físico, muscular e psicológico.", correct: false },
            { option: "Preparo físico, curricular e psicológico.", correct: false },
            { option: "Preparo físico, técnico e psicológico.", correct: true },
            { option: "Preparo técnico, muscular e psicológico.", correct: false }
        ]
    },
    {
        question: "Documento importante que precisa ser preenchido antes de entrar no espaço confinado?",
        answers: [
            { option: "EPT", correct: false },
            { option: "TEP", correct: false },
            { option: "CEP", correct: false },
            { option: "PTE", correct: false },
            { option: "PET", correct: true }
        ],
    },
    {
        question: "São características esperadas de um plano de emergência?",
        answers: [
            { option: "Simplicidade, Flexibilidade, Dificuldade, Adequação e Precisão.", correct: false },
            { option: "Simplicidade, Flexibilidade, Dinamismo, Adequação e Precisão.", correct: true },
            { option: "Simplicidade, Flexibilidade, Dinamismo, Desdobramaento e Precisão.", correct: false },
            { option: "Simplicidade, Projetado, Dinamismo, Adequação e Precisão.", correct: false },
            { option: "Simplicidade, Flexibilidade, Dinamismo, Adequação e Conclusão.", correct: false }
        ]
    },
    {
        question: "Tipo de heliponto?",
        answers: [
            { option: "São quatro, Militar, Privado, Hospitalar e de Emergência.", correct: false },
            { option: "São cinco, Militar, Turítico, Privado, Hospitalar e de Emergência.", correct: false },
            { option: "São quatro, Militar, Público, Privado e de Emergência.", correct: false },
            { option: "São cinco, Militar, Público, Privado, Hospitalar e de Emergência.", correct: true },
            { option: "São cinco, Militar, Turítico, Privado, Hospitalar e de Emergência.", correct: false }
        ],
    },
    {
        question: "Quantas classes de produtos perigos existe?",
        answers: [
            { option: "7", correct: false },
            { option: "8", correct: false },
            { option: "9", correct: true },
            { option: "10", correct: false },
            { option: "11", correct: false }
        ]
    },
    {
        question: "Primeira atitude do socorrista em uma situação de emergência?",
        answers: [
            { option: "Correr", correct: false },
            { option: "Gritar", correct: false },
            { option: "Colocar a mão na Vítima", correct: false },
            { option: "Avaliar a Cena", correct: true },
            { option: "Não fazer nada", correct: false }
        ],
    },
    {
        question: "O que significa a sigla EPR?",
        answers: [
            { option: "Equipagem de Proteção Respiratória", correct: false },
            { option: "Equipamento de Pressão Respiratória", correct: false },
            { option: "Equipagem de Prática Respiração", correct: false },
            { option: "Equipamento de Proteção Respiratória", correct: true },
            { option: "Equipagem Protetora Rápida", correct: false }
        ]
    },
    {
        question: "Quais são as origens dos produtos perigosos?",
        answers: [
            { option: "Química, tóxica e radiológica.", correct: false },
            { option: "Química, inflamável e radiológica.", correct: false },
            { option: "Química, biológica e industrial.", correct: false },
            { option: "Química, biológica e radiológica.", correct: true },
            { option: "Térmica, tóxica e radiológica.", correct: false }
        ],
    },
    {
        question: "São razões para elaboração de um plano de emergência, exceto:",
        answers: [
            { option: "Evita, confusões, erros e atropelos e a duplicação de atuações.", correct: false },
            { option: "Os prováveis cenários de acidentes para os riscos identificados.", correct: false },
            { option: "Prevê e organiza antecipadamente o plano de abandono e contingência.", correct: false },
            { option: "Permite rotinas e procedimentos os quais poderão ser testados através de exercícios de simulação.", correct: false },
            { option: "Nenhuma das alternativas.", correct: true }
        ]
    },
];
