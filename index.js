// global variables for app
var timeLeft = 75;
var score;
var correct = 6;
var incorrect = 0;
var patTry = 1;
var twoPoint = 2;
var downs;
var index;

function timer() {
  timeLeft = timeLeft - 1;
  if (timeLeft < 75) {
    countdown.textContent = timeLeft;
  }
  if (timeLeft < 1) {
    window.clearInterval(update);
    alert("times up!");
  }
}

update = setInterval("timer()", 1000);
