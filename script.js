const questionContainers = document.querySelectorAll('.question-container');
const nextButton = document.querySelector('.next-button');
let currentQuestionIndex = 0;
let score = 0;

const nextButtons = document.querySelectorAll('.next-button');

nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Move on to the next question
    showQuestion(index + 1);
  });
});




hideAllQuestions();
showQuestion(currentQuestionIndex);

function hideAllQuestions() {
  questionContainers.forEach(container => {
    container.style.display = 'none';
  });
}

function showQuestion(index) {
  questionContainers[index].style.display = 'block';
}

function updateScore(isCorrect) {
  if (isCorrect) {
    score++;
  }
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionContainers.length) {
    hideAllQuestions();
    showQuestion(currentQuestionIndex);
  } else {
    alert(`Quiz complete! Your score is ${score}/${questionContainers.length}.`);
  }
}

questionContainers.forEach(container => {
  const answerInputs = container.querySelectorAll('input[type="radio"]');
  answerInputs.forEach(input => {
    input.addEventListener('click', () => {
      const isCorrect = input.value === '1';
      updateScore(isCorrect);
      nextButton.disabled = false;
    });
  });
});


nextButton.addEventListener('click', () => {
  showNextQuestion();
  nextButton.disabled = true;
});
