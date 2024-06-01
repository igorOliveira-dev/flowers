onload = () =>{
    document.body.classList.remove("container");
    setTimeout(() => {
        setInterval(criarCoracao, 600);
    }, 4000);
};

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');

    // Posição aleatória na tela
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.top = Math.random() * window.innerHeight + 'px';

    // Rotação aleatória
    const rotacaoAleatoria = Math.random() * 360;
    coracao.style.transform = 'rotate(' + rotacaoAleatoria + 'deg)';

    // Adiciona o coração ao corpo do documento
    document.body.appendChild(coracao);

    // Inicia a transição de opacidade
    setTimeout(() => {
      coracao.style.scale = 1;
    }, 100);

    setTimeout(() => {
        coracao.classList.add('desaparecer');
      }, 1000); // Inicia a transição de desaparecimento

    // Remover o coração
    setTimeout(() => {
      coracao.remove();
    }, 2000);
  }
