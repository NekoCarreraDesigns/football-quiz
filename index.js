var timeLeft = 75;
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
