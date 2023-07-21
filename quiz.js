const questions = [
  {
    question: "What is the first step of a skincare routine?",
    options: ["Cleansing", "Moisturizing", "Toning"],
    answer: "Cleansing",
  },
  {
    question: "What ingredient is known for its anti-aging properties?",
    options: ["Hyaluronic Acid", "Retinol", "Tea Tree Oil"],
    answer: "Retinol",
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionText = document.getElementById("question");
  const options = document.getElementById("options");

  questionText.textContent = questions[currentQuestion].question;
  options.innerHTML = "";

  questions[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = function() {
      checkAnswer(option);
    };
    options.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;

  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    window.location.href = "question" + (currentQuestion + 1) + ".html";
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

loadQuestion();
