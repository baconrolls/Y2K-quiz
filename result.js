const scoreElement = document.getElementById("score");
const score = localStorage.getItem("score");

scoreElement.textContent = score;
