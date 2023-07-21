const quizData = [
    {
        question: "What does Y2K stand for?",
        options: ["Year 2000", "Yellow 2 Kangaroos", "You 2 Know"],
        answer: "Year 2000"
    },
    {
        question: "What year did the Y2K bug occur?",
        options: ["2001", "2000", "1999"],
        answer: "2000"
    },
    {
        question: "What was the main concern of the Y2K bug?",
        options: ["Global Warming", "Economic Recession", "Computer Failure"],
        answer: "Computer Failure"
    },
    {
        question: "What was the reason for the Y2K bug?",
        options: ["Software Glitch", "Alien Invasion", "Global Conspiracy"],
        answer: "Software Glitch"
    },
    {
        question: "What was the potential impact of the Y2K bug?",
        options: ["World Peace", "Mass Hysteria", "Total Chaos"],
        answer: "Total Chaos"
    },
    {
        question: "What were people advised to do to prepare for Y2K?",
        options: ["Buy Candles", "Stock Up on Food", "Nothing"],
        answer: "Stock Up on Food"
    },
    {
        question: "Which continent was most affected by the Y2K bug?",
        options: ["North America", "Asia", "Europe"],
        answer: "North America"
    },
    {
        question: "What was the outcome of the Y2K bug?",
        options: ["Disaster", "No Impact", "Minor Glitches"],
        answer: "No Impact"
    },
    {
        question: "What did people fear would happen on January 1, 2000?",
        options: ["Zombie Apocalypse", "Power Outage", "Computer Shutdown"],
        answer: "Computer Shutdown"
    },
    {
        question: "What lesson did the Y2K bug teach the world?",
        options: ["Always Be Prepared", "Don't Trust Technology", "Stay Calm"],
        answer: "Stay Calm"
    }
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
