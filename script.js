// Função para adicionar a classe 'loaded' ao body após 2 segundos
window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 2000); // 2 segundos de delay para a animação
});

// Função para criar confetes dinamicamente
function createConfetti() {
  for (let i = 0; i < 50; i++) { // Ajuste o número de confetes conforme desejado
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Definir a posição aleatória para o confete
    let x = Math.random() * 100 + '%';
    let y = Math.random() * 100 + '%';
    
    confetti.style.setProperty('--x', x);
    confetti.style.setProperty('--y', y);
    
    document.body.appendChild(confetti);

    // Remover o confete após a animação
    setTimeout(function() {
      confetti.remove();
    }, 3000); // Tempo de animação dos confetes
  }
}

// Função para criar elementos de Scrapbook
function createScrapbookElement() {
  let scrapbookElements = [
    '💖', '🌸', '🌟', '💌', '🎉', '💫'
  ];

  scrapbookElements.forEach(function(symbol, index) {
    let scrapbook = document.createElement('div');
    scrapbook.classList.add('scrapbook-element');
    scrapbook.innerText = symbol;

    // Definir posição aleatória para o scrapbook
    scrapbook.style.top = Math.random() * 100 + '%';
    scrapbook.style.left = Math.random() * 100 + '%';
    scrapbook.style.animationDelay = `${index}s`;

    document.body.appendChild(scrapbook);

    // Remover o scrapbook após a animação
    setTimeout(function() {
      scrapbook.remove();
    }, 6000); // Tempo da animação
  });
}

// Função para criar nuvens
function createClouds() {
  let cloudTypes = ['cloud-light-pink', 'cloud-light-blue'];
  for (let i = 0; i < 5; i++) {
    let cloud = document.createElement('div');
    cloud.classList.add('cloud', cloudTypes[Math.floor(Math.random() * cloudTypes.length)]);
    cloud.style.top = Math.random() * 100 + '%';
    cloud.style.animationDelay = `${Math.random() * 10}s`;

    document.body.appendChild(cloud);
  }
}

// Função para criar corações flutuantes
function createHearts() {
  let heartColors = ['heart-lilac', 'heart-pink', 'heart-yellow'];
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart', heartColors[Math.floor(Math.random() * heartColors.length)]);
    document.body.appendChild(heart);
  }
}

// Função para criar estrelas piscando
function createStars() {
  for (let i = 0; i < 15; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(star);
  }
}

// Função para exibir a citação com animação de fade-in
function showQuote() {
  let quote = document.getElementById('quote');
  setTimeout(function() {
    quote.style.opacity = 1;
  }, 4000); // Atraso para a citação aparecer após 4 segundos
}

// Função para inicializar todas as animações e efeitos
function initializeEffects() {
  createConfetti();
  createScrapbookElement();
  createClouds();
  createHearts();
  createStars();
  showQuote();
}

// Executar efeitos ao carregar a página
initializeEffects();
