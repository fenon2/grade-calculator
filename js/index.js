function getEarnedPoints() {
  return document.getElementById('earnedPoints').value;
}

function getMaxPoints() {
  return document.getElementById('maxPoints').value;
}

function calculate(earnedPoints, maxPoints) {
  return earnedPoints / maxPoints * 100;
}

function getGrade(score) {
  return 5;
  //if (score < 49) { 1 }
}

function validate() {
  return true;
}

function renderResult(score, grade) {
  document.getElementById('score').innerText = score + '%';
  document.getElementById('grade').innerText = grade;
}

function calculateClicked() {
  const earnedPoints = getEarnedPoints();
  const maxPoints = getMaxPoints();

  const isValid = validate();

  if (isValid) {
    const score = calculate(earnedPoints, maxPoints);
    const grade = getGrade(score);
    renderResult(score, grade);
  } else {
    //renderError();
  }
}

document.getElementById('buttonCalc').onclick = calculateClicked;
