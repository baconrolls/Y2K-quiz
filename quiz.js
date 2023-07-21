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
    question: "What is the best sunscreen for sensitive skin?",
    answers: [
      { text: "SPF 50", correct: false },
      { text: "SPF 30", correct: true },
      { text: "SPF 15", correct: false },
    ],
  },
  {
    question: "Which skincare product helps to reduce fine lines and wrinkles?",
    answers: [
      { text: "Cleanser", correct: false },
      { text: "Exfoliator", correct: false },
      { text: "Retinol", correct: true },
    ],
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

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
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h1>${questions[currentQuestion].question}</h1>
    <div class="options">
      ${questions[currentQuestion].answers
        .map(
          (answer, index) => `
            <button onclick="selectAnswer(${index})">${answer.text}</button>
          `
        )
        .join("")}
    </div>
  `;
}

function displayResult() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `
    <h1>Your Score</h1>
    <p id="score">${score} out of ${questions.length}</p>
  `;

  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none";
}
