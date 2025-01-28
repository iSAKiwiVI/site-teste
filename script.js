document.addEventListener("DOMContentLoaded", function () {
  let tempdata = {
    did_open: false
  };

  const heart = document.querySelector("#solid-heart");
  const msg_container = document.querySelector("#message-container");
  const message = document.querySelector("#message");
  const welcomeMessage = document.querySelector("#welcome-message");
  const quote = document.querySelector("#quote");
  const cardMessage = document.querySelector("#card-message");

  // Define a carta de amor
  const loveLetter = `
Amor de ma vie,

Eu queria começar isso aqui dizendo o quanto você é especial pra mim, mas parece que as palavras nunca são e nunca serão o suficiente. Eu tento, juro que tento, mas sinto que qualquer coisa que eu diga nunca chega perto de traduzir o que eu sinto quando penso em você. Então, aqui vai minha tentativa de transformar em palavras o turbilhão que é amar você.

Você entrou na minha vida de um jeito tão inesperado que, quando percebi, já estava completamente perdido no universo que é você. Cada sorriso seu parece acender algo dentro de mim, algo que eu nem sabia que estava apagado. Seus olhos, sua voz, até o jeitinho que você fala as coisas é único… é como se o mundo inteiro fizesse sentido quando eu estou do seu lado.

E mesmo quando a gente tropeça (porque tropeçar faz parte, né?) ainda assim, eu escolho você. Eu escolho a gente. Eu sei que nem sempre sou a pessoa mais fácil do mundo. Eu carrego meu próprio caos, com minha ansiedade que parece nunca me dar trégua, o estresse que às vezes me consome e, eu confesso, momentos em que a raiva e a tristeza falam mais alto do que deveriam. Sei que, nesses momentos, posso acabar falando ou fazendo coisas que não refletem o quanto eu te amo e te admiro. E por isso, quero pedir desculpas.

Se em algum momento eu pareço te cobrar mais do que deveria ou te pressionar quando você já tem seus próprios desafios para enfrentar, como o seu TDAH que torna algumas coisas mais complicadas do que para os outros… me perdoe sempre que possível quando isso acontecer. Eu nunca quis ser um peso ou tornar as coisas mais difíceis pra você. Pelo contrário, o que eu mais quero é ser o lugar onde você se sente em paz, onde você sabe que pode ser quem você é sem medo, sem cobranças. Você já carrega tanto, e tudo o que eu quero é te ajudar a carregar um pouco do peso, se você deixar.

A vida não é fácil, a gente sabe disso. Vivemos em tempos em que o mundo parece um lugar mais caótico do que nunca, com pessoas tão cheias de ódio, governos que oprimem e situações que nos deixam de mãos atadas. Mas, no meio de tudo isso, tem você. E você, meu amor, é o que me faz continuar acreditando que ainda existe beleza, que ainda existe esperança. Porque se algo tão maravilhoso quanto o nosso amor pode existir, então talvez o mundo ainda tenha salvação.

Sabe, às vezes eu penso no que fiz para merecer alguém como você. Você tem esse jeitinho tão único, tão seu, que ilumina tudo ao redor. Eu sei que você tem dias difíceis, dias em que o TDAH te faz sentir que está lutando contra a correnteza. Mas, mesmo nesses dias, você nunca deixa de ser incrível. Você é forte, mesmo que não perceba. Você é maravilhosa, mesmo que o mundo tente te convencer do contrário. E eu estou aqui, pra te lembrar disso sempre que você esquecer.

Eu amo cada pedacinho de você. Amo o jeito que você ri das minhas piadas, mesmo as ruins. Amo o brilho do seu olhar quando você fala sobre algo que ama. Amo a forma como você me faz sentir que posso ser eu mesmo, sem máscaras, sem reservas. Com você, eu me sinto seguro, me sinto em casa.

Eu quero que você saiba que, mesmo quando tudo parece estar desmoronando, eu estou aqui. Não importa o que aconteça, não importa quantos obstáculos apareçam no nosso caminho, eu estarei ao seu lado. Porque amar você é a coisa mais certa que eu já fiz na vida. E eu vou continuar te amando, mesmo nos dias difíceis, mesmo nas tempestades, mesmo quando o mundo lá fora parecer sombrio.

Eu te escolhi, e vou te escolher todos os dias, até o fim dos meus dias. Porque você é o amor da minha vida, a razão do meu sorriso, a luz nos meus dias mais escuros. Você é meu porto seguro, minha melhor amiga, minha parceira, minha casa. E eu sou tão, mas tão grato por ter você na minha vida.

Então, por favor, nunca se esqueça disso: você é tudo pra mim. E eu prometo continuar me esforçando pra ser o melhor que posso ser, não só por mim, mas por nós. Porque você merece o mundo, e eu quero, pelo menos, tentar ser uma parte do que te faz feliz.

Eu te amo. Mais do que palavras podem dizer. Mais do que qualquer texto, qualquer carta, qualquer declaração poderia expressar. Eu te amo com tudo o que sou, com tudo o que tenho, com cada pedacinho do meu coração.

Com todo o meu amor,  
Isaque
`;

  // Atualiza a cor do fundo
  document.body.style.backgroundColor = "#f5efe6"; // Caramelo claro off white
  msg_container.style.backgroundColor = "#fdeff4"; // Rosa pastel clarinho quase branco

  // Mensagem de boas-vindas aparece com animação
  setTimeout(() => {
    welcomeMessage.style.transition = "opacity 2s ease-in-out";
    welcomeMessage.style.opacity = "1";
  }, 1000); // Espera 1 segundo para exibir a mensagem de boas-vindas

  // Interação do Coração
  heart.addEventListener("click", function () {
    if (tempdata.did_open) {
      return;
    }
    tempdata.did_open = true;

    // Faz o coração desaparecer com animação
    heart.style.transition = "opacity 1s ease, transform 1s ease";
    heart.style.opacity = "0";
    heart.style.transform = "scale(0)";

    // Gera a animação de confetes explodindo
    createConfettiExplosion();

    // Espera a animação do coração terminar antes de mostrar a carta
    setTimeout(() => {
      // Revela a carta de amor como se fosse uma carta se abrindo
      msg_container.style.transition =
        "height 1.5s ease-in-out, opacity 1.5s ease-in-out";
      msg_container.style.height = "auto";
      msg_container.style.opacity = "1";

      // Adiciona o efeito de digitação da carta
      typeLetter(loveLetter, message);

      // Estilo da carta
      msg_container.style.border = "2px solid #b19cd9";
      msg_container.style.borderRadius = "15px";
      msg_container.style.boxShadow = "0 0 20px rgba(177, 156, 217, 0.8)";
    }, 1000); // Delay de 1 segundo para coincidir com a animação do coração
  });

  // Função para simular o efeito de digitação
  function typeLetter(text, element) {
    element.innerHTML = ""; // Limpa o conteúdo anterior
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 5); // Ajuste a velocidade da digitação aqui (em milissegundos)
  }

  // Função para mostrar a citação aleatória
  function showRandomQuote() {
    const quotes = [
      "Amar você é meu maior prazer.",
      "O amor é uma luz que nunca se apaga.",
      "Nosso amor é como uma estrela que brilha no céu.",
      "Com você, cada dia é especial."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = `"${quotes[randomIndex]}"`;
    quote.style.opacity = "1";
  }

  // Exibe uma citação aleatória quando a página carrega
  showRandomQuote();

  // Função para criar confetes com animação de dispersão
  function createConfettiExplosion() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      // Atribui valores aleatórios de posição e animação
      const xPos = Math.random() * 300 - 150;  // Aleatório entre -150 e 150
      const yPos = Math.random() * 300 - 150;  // Aleatório entre -150 e 150
      confetti.style.setProperty('--x', `${xPos}px`);
      confetti.style.setProperty('--y', `${yPos}px`);

      // Adiciona o confete ao corpo da página
      document.body.appendChild(confetti);

      // Remove os confetes após a animação
      setTimeout(() => {
        confetti.remove();
      }, 3000); // O tempo de animação é de 3 segundos
    }
  }
});