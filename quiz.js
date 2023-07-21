const quizContainer = document.getElementById('quiz');
let score = 0;
let currentQuestion = 0;

const questions = [
    // Previous questions...
    {
        question: "What was the main concern with the Y2K bug?",
        options: ["Global economic collapse", "Nuclear war", "Computer system failures"],
        answer: 2
    },
    {
        question: "Which of these is NOT a Y2K remediation technique?",
        options: ["Windowing", "Rewriting code", "Time travel"],
        answer: 2
    },
    {
        question: "Which major event took place during the Y2K bug transition?",
        options: ["The release of the first iPhone", "The turn of the millennium", "The signing of the Kyoto Protocol"],
        answer: 1
    },
    {
        question: "What did 'Y2K compliant' mean?",
        options: ["The computer system was ready for the year 2000", "The computer system had a virus", "The computer system was energy-efficient"],
        answer: 0
    },
    {
        question: "Which industry was NOT heavily impacted by the Y2K bug?",
        options: ["Banking", "Agriculture", "Telecommunications"],
        answer: 1
    },
    {
        question: "How many digits were used to represent the year in some computer systems prior to Y2K?",
        options: ["2", "3", "4"],
        answer: 0
    },
    {
        question: "Which country was the first to experience the Y2K bug?",
        options: ["United States", "Australia", "New Zealand"],
        answer: 2
    },
    {
        question: "What is the full name of the Y2K bug?",
        options: ["Year 2000 Bug", "Year 2000 Problem", "Year 2000 Virus"],
        answer: 1
    },
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
