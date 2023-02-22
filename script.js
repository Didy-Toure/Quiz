// Get all the question containers and the next button from the HTML document
const questionContainers = document.querySelectorAll('.question-container');
const nextButton = document.querySelector('.next-button');

// Initialize variables to keep track of the current question and the score
let currentQuestionIndex = 0;
let score = 0;

// Hide all the question containers at the start of the quiz
hideAllQuestions();

// Show the first question container
showQuestion(currentQuestionIndex);

// Function to hide all the question containers
function hideAllQuestions() {
  questionContainers.forEach(container => {
    
    container.style.display = 'none';
  });
}


// Function to show a specific question container
function showQuestion(index) {
  
  questionContainers[index].style.display = 'block';
}




// Function to update the score when an answer is selected
function updateScore(isCorrect) {
  if (isCorrect) {
    score++;
  }
}

// Function to show the next question container
function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionContainers.length) {
    hideAllQuestions();
    showQuestion(currentQuestionIndex);
  } else {
    alert(`Quiz complete! Your score is ${score}/${questionContainers.length}.`);
  }
}


// Add a click event listener to each answer input in each question container
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

// Add a click event listener to the next button
nextButton.addEventListener('click', () => {
  showNextQuestion();

  nextButton.disabled = true;
});
