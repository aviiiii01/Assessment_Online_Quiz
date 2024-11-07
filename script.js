const questions = [
    {
        question: "What is the capital of France?",
        options: ["Fitsu", "Washington DC", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the name of a color changing animal?",
        options: ["Orangutan", "Chameleon", "Human", "Whale"],
        answer: "Chameleon"
    },
    {
        question: "Which one of these is made up of trees?",
        options: ["Paper", "Bottle", "Shirts", "Chalk"],
        answer: "Paper"
    },
    {
        question: "How much percentage of water does a human body hold?",
        options: ["60", "75", "90", "55"],
        answer: "60"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        input.checked = userAnswers[currentQuestionIndex] === option;

        input.onclick = () => {
            userAnswers[currentQuestionIndex] = option;
        };

        optionElement.appendChild(input);
        optionElement.appendChild(document.createTextNode(option));
        optionsElement.appendChild(optionElement);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    document.getElementById("result").innerText = `You got ${score} out of ${questions.length} correct.`;
}


window.onload = loadQuestion;
