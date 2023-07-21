// Function to handle the result display
function showResult(score) {
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score");
  scoreText.innerText = score;

  // Hide the current question container and display the result container
  const currentQuestionContainer = document.getElementById("question-container");
  currentQuestionContainer.style.display = "none";
  resultContainer.style.display = "block";
}

// Function to handle the click event of answer options
function selectAnswer(answer, correct) {
  if (correct) {
    score++;
  }
  
  const nextQuestion = questions[currentQuestion].next;
  if (nextQuestion === "result") {
    showResult(score);
  } else {
    displayQuestion(nextQuestion);
  }
}

// Function to display the current question
function displayQuestion(question) {
  currentQuestion = question;
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h1>${questions[question].question}</h1>
    <div class="options">
      ${questions[question].answers
        .map(
          (answer, index) => `
            <button onclick="selectAnswer(${index}, ${answer.correct})">
              ${answer.text}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

// Quiz questions
const questions = {
  question1: {
    question: "What is the first step of a skincare routine?",
    answers: [
      { text: "Toner", correct: false },
      { text: "Cleanser", correct: true },
      { text: "Moisturizer", correct: false },
    ],
    next: "question2",
  },
  question2: {
    question: "Which ingredient is known to help with acne?",
    answers: [
      { text: "Hyaluronic Acid", correct: false },
      { text: "Niacinamide", correct: true },
      { text: "Vitamin C", correct: false },
    ],
    next: "result",
  },
};

let currentQuestion = "question1";
let score = 0;

// Start the quiz
displayQuestion(currentQuestion);
