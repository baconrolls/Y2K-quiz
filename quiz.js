const questions = [
  {
    question: "What is the first step of a skincare routine?",
    answers: [
      { text: "Toner", correct: false },
      { text: "Cleanser", correct: true },
      { text: "Moisturizer", correct: false },
    ],
  },
  {
    question: "Which ingredient is known to help with acne?",
    answers: [
      { text: "Hyaluronic Acid", correct: false },
      { text: "Niacinamide", correct: true },
      { text: "Vitamin C", correct: false },
    ],
  },
  {
    question: "What does SPF stand for?",
    answers: [
      { text: "Sun Protection Factor", correct: true },
      { text: "Skincare Product Formula", correct: false },
      { text: "Serum Primer Foundation", correct: false },
    ],
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";
  displayQuestion();
}

function selectAnswer(answerIndex) {
  if (questions[currentQuestion].answers[answerIndex].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayQuestion() {
  const questionText = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionText.innerText = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function displayResult() {
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score");

  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";

  scoreText.innerText = `${score} out of ${questions.length}`;
}
