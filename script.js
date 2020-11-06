'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let totalScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is too high
  } else if (guess > secretNumber) {
    if (totalScore > 1) {
      document.querySelector('.message').textContent = '⬆️ Too high! Try again';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    } else {
      document.querySelector('.message').textContent =
        '🙇🏻‍♂️ Imagine losing this game lol';
    }

    // WHen guess is too low
  } else if (guess < secretNumber) {
    if (totalScore > 1) {
      document.querySelector('.message').textContent = '⬇️ Too low! Try again';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    } else {
      document.querySelector('.message').textContent =
        '🙇🏻‍♂️ Imagine losing this game lol';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  totalScore = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = totalScore;
});
