const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const moeda = document.querySelector('.moeda');
const audio_moeda = document.querySelector('audio');
const audio_fundo = document.getElementById('audio-principal');
const audio_gameover = document.getElementById('game-over-sound');
const pontuacao = document.querySelector('.score');
const logo = document.querySelector('.logo');
const jogo = document.querySelector('.borda_principal_game');
const tela_inicial = document.querySelector('.tela_inicial');
const btn_reniciar = document.querySelector('.btn-reniciargame');
const pnlloja = document.querySelector('.loja');




const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

function iniciarJogo(){
    jogo.style.display = 'block';
    tela_inicial.style.display = 'none';
    mario.src = localStorage.getItem("skin");
    const loop = setInterval(() => {

        const PipePos = pipe.offsetLeft;
        const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');
        const moedaPos = moeda.offsetLeft;
        audio_fundo.play();
        audio_fundo.volume = 0.2;
    
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
            audio_gameover.volume = 0.2;
            btn_reniciar.style.display = 'block'; 
    
            clearInterval(loop);
        } 
    
    
        // pontuação
        if(moedaPos <= 120 && moedaPos > 0 && marioPos > 80){
            moeda.classList.remove('moeda');
            void moeda.offsetWidth; 
            moeda.classList.add('moeda');
            audio_moeda.play();
            audio_moeda.volume = 0.2;
            pontuacao.innerHTML = parseInt(pontuacao.innerHTML) + 1 + ' x';
            

            var nPontuacao = +localStorage.getItem("pontuacao");
            nPontuacao += 1;
            localStorage.setItem("pontuacao", nPontuacao);

            console.log(localStorage.getItem("pontuacao"));

    
            let ehscorealto = +pontuacao.innerHTML.replace('x', '');
    
            if (ehscorealto >= 3) {
                pipe.classList.remove('pipe');
                void pipe.offsetWidth;
                pipe.classList.add('pipe-rapido');
            }
    
        } 
        
        
        
    }, 10);
}

function abrirloja() {
    pnlloja.style.display = 'inline-flex';
    tela_inicial.style.display = 'none';
}
function voltarmenu() {
    pnlloja.style.display = 'none';
    tela_inicial.style.display = 'block';
}

function comprar_skin(modelo) {

    var dinheiro = +localStorage.getItem("pontuacao");

    if (dinheiro >= 0) {

        if (modelo == 'mario-broth') {
            dinheiro -= 15;
            localStorage.setItem("pontuacao", dinheiro);
            localStorage.setItem("skin", "imgs/skins/tumblr_91f98c78ec93adb00b51640b91149491_04262d0a_500.gif");
            mario.src = "imgs/skins/tumblr_91f98c78ec93adb00b51640b91149491_04262d0a_500.gif";
            console.log(dinheiro);
            return;
        }
        if (modelo == 'rapazinho'){
            dinheiro -= 15;
            localStorage.setItem("pontuacao", dinheiro);
            localStorage.setItem("skin", "imgs/skins/rapazinho.png");
            mario.src = "imgs/skins/rapazinho.png";
            console.log(dinheiro);
            return;
        }
        if (modelo == 'goiabado'){
            dinheiro -= 15;
            localStorage.setItem("pontuacao", dinheiro);
            localStorage.setItem("skin", "imgs/skins/goiabado.png");
            mario.src = "imgs/skins/goiabado.png";
            console.log(dinheiro);
            return;
        }
    }
    else {
        alert('Você não tem moedas suficientes');
    }
    
}

function reniciarJogo() {
    window.location.reload();
}

document.addEventListener('keydown', jump);



