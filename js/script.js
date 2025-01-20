const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const botao = document.querySelector('.button-mario');
const score = document.querySelector('.score');
let count =0;
let gameRunning = true; 


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop =  setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replaceAll('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    gameRunning = false; 

    pipe.style.animation = 'none';  
    pipe.style.left = `${pipePosition}px`;  

    mario.style.animation = 'none';  
    pipe.style.left = `${marioPosition}px`; 

    mario.src = './images/game-over.png';
    mario.style.width = '100px';
    mario.style.marginLeft = '50px';

    gameOver.src = './images/texto-game-over.png';
    gameOver.style.display = 'flex';

    botao.style.display = 'flex';

    clearInterval(loop);
    }

    if (gameRunning) {
        count++;
        score.innerHTML = `SCORE: ${count}`;
    }
    
}, 100);


document.addEventListener('keydown', jump);  