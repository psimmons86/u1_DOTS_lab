/*
 * DOTS: Level Two
 *
 */

const balls = document.querySelectorAll('.js-ball')

let score = 0
let scoreDisplay = document.querySelector('.js-score')
let levelWinner= document.querySelector('.level-winner')

const elements = document.querySelectorAll('.js-ball');

for (let i =0; i< elements.length; i++) {
    elements[i].addEventListener('click', ()=> {
        score += 10;
        console.log('score!');
        scoreDisplay.textContent = score;
        if (score >= 100) {
            levelWinner.style.opacity = '1';
        }
    })
}