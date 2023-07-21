const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
let score = 0;

const quizData = [
    {
        question: "What does Y2K stand for?",
        options: ["Year 2000", "Youth 2 Knowledge", "Yesterday 2 Kitchens"],
        answer: "Year 2000",
    },
    {
        question: "What was the main concern of the Y2K bug?",
        options: ["Economic collapse", "Computers malfunctioning", "Climate change"],
        answer: "Computers malfunctioning",
    },
    {
        question: "When did the Y2K bug occur?",
        options: ["January 1, 1999", "December 31, 2000", "January 1, 2000"],
        answer: "January 1, 2000",
    },
    {
        question: "What is another name for the Y2K bug?",
        options: ["Millennium bug", "Cyber bug", "Tech glitch"],
        answer: "Millennium bug",
    },
    {
        question: "Which programming language was most affected by the Y2K bug?",
        options: ["C++", "Java", "COBOL"],
        answer: "COBOL",
    },
    {
        question: "How many digits are used to represent the year in the Y2K bug?",
        options: ["4", "2", "3"],
        answer: "2",
    },
    {
        question: "What event did people fear might happen because of the Y2K bug?",
        options: ["World War III", "Mass power outages", "Zombie apocalypse"],
        answer: "Mass power outages",
    },
    {
        question: "Which industry spent the most on Y2K bug fixes?",
        options: ["Banking", "Healthcare", "Automotive"],
        answer: "Banking",
    },
    {
        question: "In which year did preparations for the Y2K bug start?",
        options: ["1998", "1999", "2000"],
        answer: "1998",
    },
    {
        question: "Which country was the first to experience the new millennium?",
        options: ["United States", "China", "New Zealand"],
        answer: "New Zealand",
    },
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
