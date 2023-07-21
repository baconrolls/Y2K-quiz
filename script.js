const quizData = [
    {
        question: "What does Y2K stand for?",
        options: ["Year 2000", "Yellow 2 Kangaroos", "You 2 Know"],
        answer: "Year 2000"
    },
    {
        question: "When did the Y2K bug occur?",
        options: ["December 31, 1999", "January 1, 2000", "November 11, 1999"],
        answer: "January 1, 2000"
    },
    {
        question: "What was the main concern about the Y2K bug?",
        options: ["Nuclear War", "Internet Shutdown", "Computer Malfunctions"],
        answer: "Computer Malfunctions"
    },
    {
        question: "Which industry was most affected by the Y2K bug?",
        options: ["Banking", "Agriculture", "Entertainment"],
        answer: "Banking"
    },
    {
        question: "What was the nickname given to the Y2K bug?",
        options: ["Millennium Bug", "Year 2000 Bug", "Tech Glitch"],
        answer: "Millennium Bug"
    },
    {
        question: "Which programming language was commonly affected by the Y2K bug?",
        options: ["Python", "COBOL", "Java"],
        answer: "COBOL"
    },
    {
        question: "How did people prepare for the Y2K bug?",
        options: ["Stockpiling Supplies", "Building Bunkers", "Fixing Computer Code"],
        answer: "Fixing Computer Code"
    },
    {
        question: "What major event took place in 2000 related to the Y2K bug?",
        options: ["Olympic Games", "World Cup", "Presidential Election"],
        answer: "Presidential Election"
    }
];

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const scoreResult = document.getElementById("score-result");
const expertise = document.getElementById("expertise");
const expertiseDescription = document.getElementById("expertise-description");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerHTML = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("option-btn");
        button.addEventListener("click", selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedOption = e.target.innerHTML;
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreResult.textContent = score + " / " + quizData.length;

    let percentage = (score / quizData.length) * 100;

    if (percentage >= 80) {
        expertise.textContent = "You're a Y2K Expert!";
        expertiseDescription.textContent = "You know everything there is to know about the Y2K bug. Well done!";
    } else if (percentage >= 50) {
        expertise.textContent = "You're Y2K Informed!";
        expertiseDescription.textContent = "You have a good understanding of the Y2K bug, but there's still more to learn.";
    } else {
        expertise.textContent = "You're Y2K Curious!";
        expertiseDescription.textContent = "You have some knowledge about the Y2K bug, but there's a lot more to explore.";
    }
}

showQuestion();
