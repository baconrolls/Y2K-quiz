document.getElementById("startBtn").addEventListener("click", startQuiz);

const quizContainer = document.getElementById('quiz');
let score = 0;
let currentQuestion = 0;

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


function showQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('quiz-question');
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        <div class="quiz-options">
            ${questions[currentQuestion].options.map((option, index) => `
                <label>
                    <input type="radio" name="question" value="${index}">
                    ${option}
                </label>
            `).join('')}
        </div>
        <button onclick="checkAnswer()">Next</button>
    `;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionContainer);
}

function showResult() {
    const result = score >= 18 ? "Congratulations! You're a Y2K expert!" : "Oops! You might need to brush up on your Y2K knowledge.";
    const resultDisplay = `
        <div class="quiz-result">
            <h2>Your Score:</h2>
            <p>${score} out of ${questions.length}</p>
            <p>${result}</p>
        </div>
    `;
    quizContainer.innerHTML = '';
    quizContainer.innerHTML = resultDisplay;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        const userAnswer = parseInt(selectedOption.value);
        if (userAnswer === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

showQuestion();
