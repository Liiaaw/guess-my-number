'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.geuss').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20 ;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
('click', function() {
// console.log(document.querySelector('.guess').value);
const guess =Number(document.querySelector('.guess').value);
console.log(guess, typeof guess)

///if there is no guess ... when there is input
if(!guess) {
  // document.querySelector('.message').textContent= 
  // 'No number!'
 displayMessage('No message!');

  /// when player win 
} else if (guess === secretNumber ){
  // document.querySelector('.message').textContent = 
  // '🎉 Correct Number!';
  displayMessage('🎉 Correct Number!')
  document.querySelector('.number').textContent= secretNumber;

  document.querySelector('body').style.backgroundColor='#60b347';

  document.querySelector('.number').style.width = '30rem'; 

  if(score > highscore ) {
    highscore = score;
    document.querySelector('.highscore').textContent= highscore;
  }


// when guess is wrong
} else if(guess !== secretNumber){
    if(score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 
      // '📈 Too high!' :'📈 Too high!';
      displayMessage(guess > secretNumber ? 
        '📈 Too high!' :'📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 
      // ' 🔕 you lost the game!';
      displayMessage(' 🔕 you lost the game!')
      document.querySelector('.score').textContent = 0;
    }
  }
//   ///when guess is too high
// } else if (guess > secretNumber) {
// if(score > 1) {
//   document.querySelector('.message').textContent = 
//   '📈 Too high!';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = 
//   ' 🔕 you lost the game!';
//   document.querySelector('.score').textContent = 0;
// }


// ///when guess is too Low

// } else if(guess < secretNumber) {
//   if(score > 1) {
//     document.querySelector('.message').textContent = 
//     '📈 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 
//     ' 🔕 you lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });


 

 document.querySelector('.again').addEventListener 
 ('click', function() {
  score = 20;
  secretNumber = Math.trunc( Math.random() * 20) + 1;


  // document.querySelector('.message').textContent = 
  // 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent= '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor='#222';

  document.querySelector('.number').style.width = '15rem'; 
});
 


