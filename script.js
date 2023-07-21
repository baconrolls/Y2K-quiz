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

    currentQuizData.options.sort(() => Math.random() - 0.5); // Shuffle the options

    currentQuizData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    const buttons = document.getElementsByClassName("option-btn");
    for (const button of buttons) {
        button.disabled = true;
    }

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
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreResult.textContent = `${score} / ${quizData.length}`;

    let percentage = (score / quizData.length) * 100;

    if (percentage >= 80) {
        expertise.textContent = "You're a Y2K Expert!";
        expertiseDescription.textContent = "You know everything there is to know about the Y2K bug. Well done!";
    } else if (percentage >= 50) {
        expertise.textContent = "You're Y2K Informed!";
        expertiseDescription.textContent = "You have a good understanding of the Y2K bug, but there's still more to learn.";
    } else {
        expertise.textContent = "You're Y2K Curious!";
        expertiseDescription.textContent = "You might not know much about the Y2K bug, but that's okay. It's a fascinating piece of history to explore!";
    }
}

showQuestion();
