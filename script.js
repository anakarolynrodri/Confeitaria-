const questions = [
    {
        question: "Qual sabor você prefere?",
        options: ["Doce", "Azedo", "Amargo", "Salgado"],
        answers: ["Brownie", "Torta de Limão", "Café Gelado", "Pretzel"]
    },
    {
        question: "Qual é seu ingrediente favorito?",
        options: ["Chocolate", "Frutas", "Nozes", "Caramelo"],
        answers: ["Brownie", "Sorvete de Frutas", "Torta de Nozes", "Caramelo Salgado"]
    },
    {
        question: "Como você descreveria sua personalidade?",
        options: ["Aventureira", "Tradicional", "Divertida", "Elegante"],
        answers: ["Sorvete", "Cheesecake", "Cupcake", "Tiramisu"]
    },
    {
        question: "Escolha uma bebida para acompanhar a sobremesa:",
        options: ["Café", "Chá", "Refrigerante", "Suco"],
        answers: ["Tiramisu", "Cheesecake", "Cupcake", "Torta de Limão"]
    }
];

let currentQuestion = 0;
let scores = { Brownie: 0, "Torta de Limão": 0, "Cheesecake": 0, Sorvete: 0, Tiramisu: 0, "Cupcake": 0 };

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    
    questionEl.textContent = questions[currentQuestion].question;
    
    optionsEl.innerHTML = ''; // Limpa as opções anteriores
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsEl.appendChild(button);
    });
}

function selectOption(index) {
    const chosenAnswer = questions[currentQuestion].answers[index];
    scores[chosenAnswer]++;
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let bestMatch = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('quiz').innerHTML = `<h2>Sua sobremesa ideal é: ${bestMatch}!</h2>`;
}

document.getElementById('next-button').onclick = loadQuestion;

loadQuestion();
