
const balls = document.querySelectorAll('.js-ball');

const scoreDisplay = document.querySelector('.js-score');

const levelWinner = document.querySelector('.level-winner');

let score = 0;

balls.forEach(ball => {
    ball.addEventListener('click', ()=> {
        const increment = parseInt(event.target.dataset.increment);
    score += increment;
    scoreDisplay.textContent = score;
    if (score >= 100) {
        levelWinner.style.opacity = '1';
    }
    });
});
