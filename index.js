'use strict';

// //////////////Element Selection Section///////////////////
// body
const body = document.querySelector(`body`);
// button section
const againBtn = document.querySelector(`.again`);
const checkBtn = document.querySelector(`.check`);
// text section
const messageES = document.querySelector(`.message`);
const scoreES = document.querySelector(`.score`);
const highscoreES = document.querySelector(`.highscore`);
// input value section
const guessInput = document.querySelector(`.guess`);
// secretnumber section
const number = document.querySelector(`.number`);

// //////////////function Section///////////////////
const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = message => {
  messageES.textContent = message;
};

// Game State
let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

// //////////////Button Section///////////////////
// check Button
checkBtn.addEventListener(`click`, () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage(`⛔ No number`);
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? `📈 Too high!` : `📈 Too low!`);
    // Score count down to zero for game over
    if (score > 0) {
      score--;
      scoreES.textContent = score;
    } else {
      displayMessage(`😭 You lost the game`);
    }
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct number`);
    body.style.backgroundColor = `#60b347`;
    if (score > highscore) {
      highscore = score;
      highscoreES.textContent = score;
    }
  }
});

// Reset Button
againBtn.addEventListener(`click`, () => {
  score = 20;
  secretNumber = generateSecretNumber();
  scoreES.textContent = score;
  guessInput.value = ``;
  body.style.backgroundColor = `#222`;
  number.textContent = secretNumber;
  number.textContent = `?`;
});
