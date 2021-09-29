// Global Variables

// timer display
var countdownEl = document.querySelector("#countdown");
// start button
var startBtn = document.querySelector("#start-button");
// start quiz container
var quizStartEl = document.querySelector("#start-quiz");
// quiz questions container
var quizQuestionsEl = document.querySelector("#quiz-questions");
// question text
var questionText = document.querySelector("#question-text");
// answer choices
var answerBtns = document.querySelectorAll(".choice");
// feedback text for correct vs. incorrect answers
var feedbackText = document.querySelector("#feedback-text");
// game over container
var quizCompleteEl = document.querySelector("#complete");
// final score text
var finalScoreEl = document.querySelector("#final-score");
// submit score button
var submitScoreBtn = document.querySelector("#submit-score");
// user initials input
var userInitialsInput = document.querySelector("#initials");
// correct answer for current question
var correctAnswer;
// user answer
var userAnswer;
// index of questions
var index;
// timer interval
var timerInterval;
// starting score
var score;
// final score
var finalScore;
// total time remaining in quiz
var timeLeft;
// correct point value
var correct = 6;
// penalty for incorrect answer
var penalty = 15;
// incorrect point value
var incorrect = 0;
// possible options for each question corresponding to each button id
var options = ["a", "b", "c", "d"];

// function to start the quiz
function startQuiz() {
  init();
  console.log("start button clicked");
  quizStartEl.classList.add("d-none");
  quizQuestionsEl.classList.remove("d-none");
  displayQuestions();
  startTimer();
}
//  function to reset the time and score
function init() {
  index = 0;
  timeLeft = 75;
  score = 0;
  finalScore = 0;
  penaltyCount = 0;
  quizStartEl.classList.remove("d-none");
  quizQuestionsEl.classList.add("d-none");
}
// function for starting the countdown timer
function startTimer() {
  countdownEl.textContent = timeLeft;
  timerInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft === 0) {
      gameOver();
    }
  }, 1000);
}
// display questions on the page
function displayQuestions() {
  if (index < myQuestions.length) {
    questionText.textContent = myQuestions[index].question;
    displayChoices();
  } else {
    gameOver();
  }
}
// populate the answer buttons with question choices
function displayChoices() {
  for (j = 0; j < options.length; j++) {
    answerBtns[j].textContent = myQuestions[index].choices[options[j]];
  }
}
// compare the user answer to the correct answer
function checkAnswer() {
  correctAnswer = myQuestions[index].answer;
  userAnswer = this.id;
  if (userAnswer === correctAnswer) {
    answerCorrect();
  } else {
    answerIncorrect();
  }
  index++;
  displayQuestions();
}
// displays a success message and increases score
function answerCorrect() {
  feedbackText.setAttribute("style", "color: green");
  feedbackText.textContent = "Touchdown!";
  score = score + correct;
}
// displays a failure message and decreases the time
function answerIncorrect() {
  feedbackText.setAttribute("style", "color: red");
  feedbackText.textContent = "You were sacked on the play";
  score = score - incorrect;
  timeLeft = timeLeft - penalty;
}
//  function for the final answer or time runs out
function gameOver() {
  clearInterval(timerInterval);
  quizQuestionsEl.classList.add("hidden");
  quizCompleteEl.classList.remove("hidden");
  calculateFinalScore();
  finalScoreEl.textContent = finalScore;
}
// function for calculating the score
function calculateFinalScore() {
  finalScore = score;
}
// function to save the score to local storage
function saveScore() {
  var initials = userInitialsInput.value;

  var userScoreObject = {
    initials: initials,
    score: finalScore,
  };
  var allHighScores = localStorage.getItem("storedScoreKey");

  if (allHighScores == null) {
    localStorage.setItem("storedScoreKey", JSON.stringify([userScoreObject]));
  } else {
    storedScoreKey = JSON.parse(allHighScores);
    storedScoreKey.push(userScoreObject);
    localStorage.setItem("storedScoreKey", JSON.stringify(storedScoreKey));
  }
  window.location.href = "highscores.html";
}
// event listeners for buttons
startBtn.addEventListener("click", startQuiz);
submitScoreBtn.addEventListener("click", saveScore);
// any time an answer button is chosen
for (var answerBtn of answerBtns) {
  answerBtn.addEventListener("click", checkAnswer);
}
