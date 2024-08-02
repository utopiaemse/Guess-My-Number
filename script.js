'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🥳 Correct Number`;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 35;
// document.querySelector('.guess').value = 45;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', () => {
//   console.log(document.querySelector('.guess').value);
// });
const random = Math.floor(Math.random() * 20);
console.log(random);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;
  }
});
