let scoreA = 0;
let scoreB = 0;
let scoreC = 0;

function showQuestion(questionNumber) {
  const currentQuiz = document.getElementById(`quiz${questionNumber}`);
  const nextQuiz = document.getElementById(`quiz${questionNumber + 1}`);
  currentQuiz.style.display = 'none';
  nextQuiz.style.display = 'block';
}

function showResult() {
  const answersQ1 = document.getElementsByName('q1');
  const answersQ2 = document.getElementsByName('q2');
  const answersQ3 = document.getElementsByName('q3');

  for (let i = 0; i < answersQ1.length; i++) {
    if (answersQ1[i].checked) {
      if (answersQ1[i].value === 'A') scoreA++;
      if (answersQ1[i].value === 'B') scoreB++;
      if (answersQ1[i].value === 'C') scoreC++;
    }
  }

  for (let i = 0; i < answersQ2.length; i++) {
    if (answersQ2[i].checked) {
      if (answersQ2[i].value === 'A') scoreA++;
      if (answersQ2[i].value === 'B') scoreB++;
      if (answersQ2[i].value === 'C') scoreC++;
    }
  }

  for (let i = 0; i < answersQ3.length; i++) {
    if (answersQ3[i].checked) {
      if (answersQ3[i].value === 'A') scoreA++;
      if (answersQ3[i].value === 'B') scoreB++;
      if (answersQ3[i].value === 'C') scoreC++;
    }
  }

  let resultText = '';
  if (scoreA >= scoreB && scoreA >= scoreC) {
    resultText = 'You got Mostly A. You are a skincare expert!';
  } else if (scoreB >= scoreA && scoreB >= scoreC) {
    resultText = 'You got Mostly B. You are a skincare enthusiast!';
  } else {
    resultText = 'You got Mostly C. You are a skincare beginner!';
  }

  document.getElementById('resultText').innerText = resultText;

  const result = document.getElementById('result');
  result.style.display = 'block';
}
