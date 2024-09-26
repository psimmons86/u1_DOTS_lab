/*
 * DOTS: Level One
 *
 */

//Getters
const ball = document.querySelector('.js-ball')

let score = 0
let scoreDisplay = document.querySelector('.js-score')
let levelWinner= document.querySelector('.level-winner')

//Setters
ball.addEventListener('click', () => {
    score += 10;
    console.log('Score incremented: ', score);
  
    scoreDisplay.textContent = score;
    console.log('Score display updated');
  
    if (score >= 100) {
      levelWinner.style.opacity = '1';
      console.log('Level won! Displaying win message.');
    }
  });