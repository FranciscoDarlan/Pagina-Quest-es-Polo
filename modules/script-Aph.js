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
        question: "De acordo com o novo protocolo de suporte básico de vida(SBV), durante uma parada cardiorespiratória, o número de compressões e ventilações no adulto são:",
        answers: [
            { option: "100 - 120", correct: false },
            { option: "10 - 20", correct: false },
            { option: "115 - 122", correct: false },
            { option: "30 - 2", correct: true },
            { option: "90 - 100", correct: false }
        ],
    },
    {
        question: "Como se apresenta a queimadura de primeiro grau, quanto ao aspecto e sensibilidade na vítima:",
        answers: [
            { option: "Bolha e dor", correct: false },
            { option: "Vermelhidão e dor", correct: true },
            { option: "Lesão e necrose (coloração preta)", correct: false },
            { option: "Amarelo e dor", correct: false },
            { option: "Nenhum aspecto", correct: false }
        ]
    },
    {
        question: "Qual a principal conduta a ser tomada na utilização do DEA (desfibrilador externo automático) para evitar acidentes durante o choque:",
        answers: [
            { option: "Secar a vítima", correct: false },
            { option: "Colocar corretamente as pás", correct: false },
            { option: "Não encostar na vítima durante o choque", correct: true },
            { option: "Observar se o tórax está com pêlos", correct: false },
            { option: "Tirar as Pilhas", correct: false }
        ],
    },
    {
        question: "Durante a abordagem a uma vítima de trauma, uma conduta que visa manter a integridade da vítima é:",
        answers: [
            { option: "Colocar na posição lateral de segurança.", correct: false },
            { option: "Abrir as vias aéreas", correct: false },
            { option: "Abrir as vias aéreas e estabilizar a coluna cervical", correct: true },
            { option: "Administrar oxigênio", correct: false },
            { option: "Colocar a Vítima sentada", correct: false }
        ]
    },
    {
        question: "Em se tratando de Primeiros Socorros, no atendimento a uma vítima de trauma com amputação, foi identificado uma hemorragia arterial ativa, com objetivo de cessá-la, qual a primeira consuta a ser adotada?",
        answers: [
            { option: "Compressão direta na lesão", correct: false },
            { option: "Reforçar o curativo compressivo", correct: false },
            { option: "aplicar torniquete", correct: true },
            { option: "aplicar gelo na lesão", correct: false },
            { option: "Mostrar a ferida para vítima", correct: false }
        ],
    },
    {
        question: "Em uma vítima em crise convulsiva (ataque epilético), qual a condulta que o socorrista NÃO deve adotar:",
        answers: [
            { option: "Oferecer água para vítima", correct: true },
            { option: "Afastar do corpo da vítima quaisquer objetos que possam machucá-la", correct: false },
            { option: "Jamais tentar introduzir mão ou qualquer objeto na boca da vítima", correct: false },
            { option: "Usar EPI", correct: false },
            { option: "Proteger a cabeça", correct: false }
        ]
    },
    {
        question: "Em uma vítima adulta com obstrução de vias aéreas (engasgo), qual a manobra de desobstrução adotamos:",
        answers: [
            { option: "PCR", correct: false },
            { option: "Heimlich", correct: true },
            { option: "PLS", correct: false },
            { option: "RCP", correct: false },
            { option: "SBV", correct: false }
        ],
    },
    {
        question: "Como se classificam as fraturas?",
        answers: [
            { option: "Interna e externa", correct: false },
            { option: "Fechada e Aberta (exposta)", correct: true },
            { option: "Leve e grave", correct: false },
            { option: "1°, 2°, 3° graus", correct: false },
            { option: "Gravíssima", correct: false }
        ]
    },
    {
        question: "Ao presencar uma parada cardiorrespiratória (PCR), não dispondo de nenhum dispositivo de barreira ventiladores, aplica-se a seguinte condta:",
        answers: [
            { option: "Realiza 30 compressões x 2 ventilações", correct: false },
            { option: "Realiza 15 compressões x 2 ventilações", correct: false },
            { option: "Realiza 30 compressões x 2 ventilações com ambú", correct: false },
            { option: "Realiza 15 compressões x 2 ventilações", correct: false },
            { option: "Realiza 100 a 120 compressões por minuto", correct: true }
        ],
    },
    {
        question: "A relação entre tapotagens (tapas nas costas), e compressões no tórax em uma vítima lactente (bebê), que apresenta uma obstrução de via aéreas (engasgo) são?",
        answers: [
            { option: "5 tapotagens x 0 compressões", correct: false },
            { option: "30 tapotagens x 2 compressões", correct: false },
            { option: "5 tapotagens x 5 compressões", correct: true },
            { option: "3 tapotagens x 5 compressões", correct: false },
            { option: "5 tapotagens x 3 compressões", correct: false }
        ]
    },
    {
        question: "Em relação a obstrução das vias aéreas por corpo estranho (OVACE), existem basicamente 2 tipos, quais são?",
        answers: [
            { option: "Fechada e aberta", correct: false },
            { option: "Primaria e secundária", correct: false },
            { option: "Automática e semi automática", correct: false },
            { option: "Engasgo 1 e engasgo 2", correct: false },
            { option: "Incompleta e completa", correct: true }
        ]
    },
    {
        question: "Quais são os tipos de extricação e transporte para uma vítima de trauma?",
        answers: [
            { option: "Rolamento a 120° e 90°", correct: false },
            { option: "Rolamento a 120° e À cavaleira", correct: false },
            { option: "Rolamento a 90° e 120°", correct: false },
            { option: "Rolamento a 180° e À cavaleira", correct: true },
            { option: "Rolamento a 120° e 145°", correct: false }
        ]
    },
    {
        question: "Qual a definição de APH?",
        answers: [
            { option: "Assistência Pré Hospitalar", correct: false },
            { option: "Atendimento Pré Hospitalar", correct: true },
            { option: "Avaliação Pré Hospitalar", correct: false },
            { option: "Abordagem Pré Hospitalar", correct: false },
            { option: "Agência Pré Hospitalar", correct: false }
        ]
    },
    {
        question: "O DESMAIO (sincope) é uma perda súbita e breve da ____________  !",
        answers: [
            { option: "pressão arterial", correct: false },
            { option: "Força", correct: false },
            { option: "Respiração", correct: false },
            { option: "Reflexo", correct: false },
            { option: "Consciência", correct: true }
        ]
    },
];
