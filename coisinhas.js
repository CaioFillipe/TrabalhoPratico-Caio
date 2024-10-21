document.getElementById('easteregg').addEventListener('click', function() {
    window.location = 'lanawebsite.html';
});

const imagem = document.getElementById('imagem-musical2');
const musica = document.getElementById('cola');

imagem.addEventListener('click', function() {
    musica.play();
});


