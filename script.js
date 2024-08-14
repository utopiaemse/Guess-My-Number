'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let messageHandler = document.querySelector('.message');
let numberHandler = document.querySelector('.number');
let scoreHandler = document.querySelector('.score');
let guessHandler = document.querySelector('.guess');
let checkHandler = document.querySelector('.check');
checkHandler.addEventListener('click', () => {
  const guess = Number(guessHandler.value);
  if (!guess) {
    messageHandler.textContent = `⛔ No number!`;
  } else if (guess === secretNumber) {
    messageHandler.textContent = `🥳 Correct Number`;
    numberHandler.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberHandler.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageHandler.textContent =
        guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`;
      score--;
      scoreHandler.textContent = score;
    } else {
      messageHandler.textContent = `💥 GAME OVER!`;
      scoreHandler.textContent = `0`;
      checkHandler.style.pointerEvents = 'none';
      checkHandler.style.opacity = '0.5';
      numberHandler.style.pointerEvents = 'none';
      numberHandler.style.opacity = '0.5';
      guessHandler.style.pointerEvents = 'none';
      guessHandler.style.opacity = '0.5';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  messageHandler.textContent = `Start guessing...`;
  numberHandler.style.width = '15rem';
  numberHandler.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessHandler.value = '';
  scoreHandler.textContent = score;
});
