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

function isValid() {
  return true;
}

function renderResult(score, grade) {
  document.getElementById('score').innerText = score + '%';
  document.getElementById('grade').innerText = grade;
}

function calculateClicked() {
  const earnedPoints = getEarnedPoints();
  const maxPoints = getMaxPoints();

  const isValid = isValid();

  if (isValid) {
    const score = calculate(earnedPoints, maxPoints);
    const grade = getGrade(score);
  } else {
    //renderError();
  }


  renderResult(score, grade);
}

document.getElementById('buttonCalc').onclick = calculateClicked;

//getEarnedPoints
//getMaxPoints
//const score = calculate(earnedPoints, maxPoints);
//const grade = getGrade(score);

