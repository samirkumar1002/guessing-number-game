let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempt");
submit.addEventListener("click", checkGuess);
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;
  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try again.";
  } else {
    hint.textContent = "Too high! Try again.";
  }
  attemptsText.textContent = "Attempts: " + attempts;
}
