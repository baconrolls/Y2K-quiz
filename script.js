const quizData = [
    // Add your questions and answers here
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
