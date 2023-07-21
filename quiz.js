const quizContainer = document.getElementById('quiz');
let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "What does Y2K stand for?",
        options: ["Year 2000", "Yesterday 2 Kill", "Yellow 2 Ketchup"],
        answer: "Year 2000"
    },
    {
        question: "In which year did the Y2K bug occur?",
        options: ["2001", "2000", "1999"],
        answer: "2000"
    },
    // Add more questions here
];

function showQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('quiz-question');
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        <div class="quiz-options">
            ${questions[currentQuestion].options.map((option, index) => `
                <label>
                    <input type="radio" name="question" value="${index}">
                    ${option}
                </label>
            `).join('')}
        </div>
        <button onclick="checkAnswer()">Next</button>
    `;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionContainer);
}

function showResult() {
    const result = score >= 8 ? "Congratulations! You're a Y2K expert!" : "Oops! You might need to brush up on your Y2K knowledge.";
    const resultDisplay = `
        <div class="quiz-result">
            <h2>Your Score:</h2>
            <p>${score} out of ${questions.length}</p>
            <p>${result}</p>
        </div>
    `;
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = resultDisplay;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        const userAnswer = parseInt(selectedOption.value);
        if (userAnswer === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

showQuestion();
