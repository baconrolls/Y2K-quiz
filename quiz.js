document.getElementById("startBtn").addEventListener("click", startQuiz);

const questions = [
  {
    question: "What is the first step in a skincare routine?",
    options: ["Cleansing", "Moisturizing", "Toning"],
    answer: 0
  },
  {
    question: "Which ingredient is known to help with acne?",
    options: ["Vitamin C", "Hyaluronic Acid", "Salicylic Acid"],
    answer: 2
  },
  {
    question: "What type of mask is best for hydrating the skin?",
    options: ["Sheet mask", "Clay mask", "Peel-off mask"],
    answer: 0
  },
  {
    question: "What does SPF stand for?",
    options: ["Sun Protection Factor", "Skin Perfect Finish", "Super Powerful Formula"],
    answer: 0
  },
  {
    question: "Which product is used to remove dead skin cells?",
    options: ["Serum", "Exfoliator", "Essence"],
    answer: 1
  },
  {
    question: "What does AHAs stand for in skincare?",
    options: ["Antioxidant Hydrating Acids", "Alpha Hydroxy Acids", "Anti-Aging Herbal Agents"],
    answer: 1
  },
  {
    question: "What is the purpose of a toner in a skincare routine?",
    options: ["To cleanse the skin", "To add moisture", "To balance the skin's pH"],
    answer: 2
  },
  {
    question: "Which vitamin is essential for collagen production?",
    options: ["Vitamin E", "Vitamin A", "Vitamin C"],
    answer: 2
  },
  {
    question: "What is the final step in a skincare routine?",
    options: ["Cleansing", "Exfoliating", "Moisturizing"],
    answer: 2
  },
  {
    question: "Which product can help with dark circles under the eyes?",
    options: ["Eye cream", "Serum", "Toner"],
    answer: 0
  }
      {
    question: "What is the key ingredient in a hydrating mask?",
    options: ["Retinol", "Hyaluronic Acid", "Vitamin C"],
    answer: 1
  },
  {
    question: "Which type of sunscreen is best for oily skin?",
    options: ["Spray", "Gel", "Cream"],
    answer: 1
  },
  {
    question: "What is the main benefit of using a facial oil?",
    options: ["Exfoliation", "Hydration", "Brightening"],
    answer: 1
  },
  {
    question: "Which skincare product helps to reduce fine lines and wrinkles?",
    options: ["Cleanser", "Moisturizer", "Anti-aging cream"],
    answer: 2
  },
  {
    question: "What is the best time to apply a face mask?",
    options: ["Morning", "Night", "Anytime"],
    answer: 1
  },
  {
    question: "Which ingredient is known for soothing irritated skin?",
    options: ["Tea tree oil", "Aloe vera", "Rosehip oil"],
    answer: 1
  },
  {
    question: "What is the purpose of a facial toner?",
    options: ["To remove makeup", "To hydrate the skin", "To balance pH levels"],
    answer: 2
  },
  {
    question: "Which skincare product can help fade dark spots?",
    options: ["Sunscreen", "Serum", "Essence"],
    answer: 1
  },
  {
    question: "What does BHA stand for in skincare?",
    options: ["Beta Hydroxy Acid", "Brightening Hydration Agent", "Balance Healing Agent"],
    answer: 0
  },
  {
    question: "Which ingredient is known for promoting collagen production?",
    options: ["Peptides", "Witch hazel", "Glycolic Acid"],
    answer: 0
  }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    const container = document.querySelector(".container");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<h3>${question.question}</h3>`;

    question.options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.textContent = option;
      optionDiv.addEventListener("click", () => checkAnswer(option, question.answer));
      questionDiv.appendChild(optionDiv);
    });

    container.appendChild(questionDiv);
  } else {
    showResult();
  }
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}

function showResult() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  resultDiv.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;

  container.appendChild(resultDiv);
}

showQuestion();
