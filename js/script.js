const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const moeda = document.querySelector('.moeda');
const audio_moeda = document.querySelector('audio');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const PipePos = pipe.offsetLeft;
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');
    const moedaPos = moeda.offsetLeft;
    
    
    
        // game over
    if ((PipePos <= 120) && (marioPos < 80) && (PipePos > 0)) {
        pipe.style.animation = 'none';
        pipe.style.left = `${PipePos + 10}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos + 10}px`;
        mario.src = 'imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '60px';

        clearInterval(loop);
    } 

    if(moedaPos <= 120 && moedaPos > 0 && marioPos > 80){
        moeda.classList.remove('moeda');
        void moeda.offsetWidth; 
        moeda.classList.add('moeda');
        audio_moeda.play();

    } 
    
    
}, 10);

document.addEventListener('keydown', jump);


