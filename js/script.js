const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const moeda = document.querySelector('.moeda');
const audio_moeda = document.querySelector('audio');
const audio_fundo = document.getElementById('audio-principal');
const audio_gameover = document.getElementById('game-over-sound');
const pontuacao = document.querySelector('.score');
const logo = document.querySelector('.logo');


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
    audio_fundo.play();

    // game over
    if ((PipePos <= 120) && (marioPos < 80) && (PipePos > 0)) {
        pipe.style.animation = 'none';
        pipe.style.left = `${PipePos + 10}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos + 10}px`;
        mario.src = 'imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '60px';

        logo.src = 'imgs/ab67616d0000b273ccb7730680297da990ce7ede-removebg-preview.png'
        logo.style.top = '100px';
        audio_fundo.pause();
        audio_gameover.play();

        pontuacao.innerHTML = '0 x';
        clearInterval(loop);
    } 


    // pontuação
    if(moedaPos <= 120 && moedaPos > 0 && marioPos > 80){
        moeda.classList.remove('moeda');
        void moeda.offsetWidth; 
        moeda.classList.add('moeda');
        audio_moeda.play();
        pontuacao.innerHTML = parseInt(pontuacao.innerHTML) + 1 + ' x';

         let ehscorealto = +pontuacao.innerHTML.replace('x', '');

         if (ehscorealto >= 5) {
            pipe.classList.remove('pipe');
            void pipe.offsetWidth;
            pipe.classList.add('pipe-rapido');
         }

    } 
    
    
}, 10);

document.addEventListener('keydown', jump);


function reniciargame() {
    window.location.reload();
    window.prompt('Digite seu nome: ');
}


