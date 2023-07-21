const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
let score = 0;

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

function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const options = [];

        for (const option of currentQuestion.options) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    ${option}
                </label>`
            );
        }

        output.push(
            `<div class="quiz-question">
                <h2>${currentQuestion.question}</h2>
                <div class="quiz-options">${options.join('')}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.quiz-options');
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selectedOption = answerContainer.querySelector(`input[name="question${questionNumber}"]:checked`);
        if (!selectedOption) return; // Ensure an option is selected
        const userAnswer = selectedOption.value;
        if (userAnswer === currentQuestion.answer) {
            score++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    const result = score >= 8 ? "Congratulations! You're a Y2K expert!" : "Oops! You might need to brush up on your Y2K knowledge.";
    const resultDisplay = `<div class="quiz-result">${result}</div>`;
    quizContainer.insertAdjacentHTML('beforeend', resultDisplay);
}

buildQuiz();
submitButton.addEventListener('click', showResults);
