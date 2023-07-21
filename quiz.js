// Global variables
let currentQuestion = 1;
let score = 0;

// Function to show the next question
function showNextQuestion(nextQuestion) {
  const selectedAnswer = document.querySelector(`input[name=q${currentQuestion}]:checked`);
  if (!selectedAnswer) {
    alert("Please select an answer before proceeding to the next question.");
    return;
  }

  // Add score based on selected answer
  score += parseInt(selectedAnswer.value);

  // Hide the current question and show the next question
  document.getElementById(`question${currentQuestion}`).style.display = "none";
  document.getElementById(nextQuestion).style.display = "block";

  // Update current question
  currentQuestion++;
}

// Function to show the result
function showResult() {
  const selectedAnswer = document.querySelector(`input[name=q${currentQuestion}]:checked`);
  if (!selectedAnswer) {
    alert("Please select an answer before viewing the result.");
    return;
  }

  // Add score based on selected answer
  score += parseInt(selectedAnswer.value);

  // Hide the current question and show the result
  document.getElementById(`question${currentQuestion}`).style.display = "none";
  document.getElementById("result").style.display = "block";

  // Display the user's score
  document.getElementById("score").textContent = score;
}

// Event listeners for the "Next" buttons
document.getElementById("next1").addEventListener("click", () => showNextQuestion("question2"));
document.getElementById("next2").addEventListener("click", () => showNextQuestion("question3"));
document.getElementById("next3").addEventListener("click", () => showNextQuestion("question4"));
document.getElementById("next4").addEventListener("click", () => showNextQuestion("question5"));
document.getElementById("next5").addEventListener("click", () => showNextQuestion("question6"));
document.getElementById("next6").addEventListener("click", () => showNextQuestion("question7"));
document.getElementById("next7").addEventListener("click", () => showNextQuestion("question8"));
document.getElementById("next8").addEventListener("click", () => showResult());
