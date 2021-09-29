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
