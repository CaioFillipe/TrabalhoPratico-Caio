//Teleporta para o site
document.getElementById('easteregg').addEventListener('click', function() {
    window.location = 'lanawebsite.html';
});

//Toca musica ao tocar no easteregg
document.getElementById('imagem-musical2').onclick = function() {
    const audio1 = document.getElementById('cola');
    audio1.currentTime = 0; 
    audio1.play();
};


document.getElementById('imagem4').onclick = function() {
    const audio2 = document.getElementById('floridakilos');
    audio2.currentTime = 0; 
    audio2.play();
};

//Toca música característica ao clicar na imagem de cada album
document.getElementById('borntodieimg').onclick = function() {
    const audio3 = document.getElementById('borntodie');
    audio3.currentTime = 0; 
    audio3.play();
};


document.getElementById('ultraviolenceimg').onclick = function() {
    const audio4 = document.getElementById('ultraviolence');
    audio4.currentTime = 0; 
    audio4.play();
};

document.getElementById('honeymoonimg').onclick = function() {
    const audio5 = document.getElementById('honeymoon');
    audio5.currentTime = 0; 
    audio5.play();
};


document.getElementById('lustforlifeimg').onclick = function() {
    const audio6 = document.getElementById('lustforlife');
    audio6.currentTime = 0; 
    audio6.play();
};

document.getElementById('nfrockweelimg').onclick = function() {
    const audio7 = document.getElementById('nfr');
    audio7.currentTime = 0; 
    audio7.play();
};


document.getElementById('chemtrailsimg').onclick = function() {
    const audio8 = document.getElementById('chemtrails');
    audio8.currentTime = 0; 
    audio8.play();
};

document.getElementById('bluebanistersimg').onclick = function() {
    const audio9 = document.getElementById('bluebanister');
    audio9.currentTime = 0; 
    audio9.play();
};


document.getElementById('blvdimg').onclick = function() {
    const audio10 = document.getElementById('blvd');
    audio10.currentTime = 0; 
    audio10.play();
};

//Cria botão para voltar ao topo quando usuário rola a tela

window.onscroll = function() {
    ocultaBotao();
};


function ocultaBotao() {
    const botao = document.getElementById("voltar-topo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
