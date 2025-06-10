window.addEventListener('load', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const target = tab.getAttribute('data-tab');

      // Remove active de todas abas e conteúdos
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Adiciona active na aba clicada e no conteúdo correspondente
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Inicializa mostrando só a primeira aba
  if (tabs.length > 0) {
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
  }
  
  // Lógica para a aba "Criação"
  const creationButton = document.getElementById('creation-button');
  const creationResult = document.getElementById('creation-result');
  const creationStatus = document.getElementById('creation-status');
  
  // A chance extremamente pequena de o universo ser criado (1 em 1 milhão)
  const CHANCE_OF_CREATION = 0.000001;
  let attemptCount = 0;

  if (creationButton) {
    creationButton.addEventListener('click', () => {
        // Desativa o botão e limpa o estado anterior
        creationButton.disabled = true;
        creationResult.innerHTML = '';
        creationResult.className = '';
        creationStatus.textContent = 'Criando as condições cósmicas...';

        // Define um tempo de espera para criar suspense
        setTimeout(() => {
            // Limpa a mensagem de status
            creationStatus.textContent = '';
            
            // Incrementa o contador de tentativas
            attemptCount++;

            const randomNumber = Math.random();
            const isSuccess = randomNumber < CHANCE_OF_CREATION;

            // Define a mensagem de resultado
            creationResult.textContent = isSuccess ? 'Parabéns seu universo foi criado' : 'Infelizmente o universo não foi criado';
            
            // Adiciona a classe de estilo (sucesso ou falha)
            creationResult.classList.add(isSuccess ? 'success-message' : 'failure-message');

            // Adiciona a classe de animação com base na contagem de tentativas
            if (attemptCount === 1) {
                creationResult.classList.add('typing-effect');
            } else {
                creationResult.classList.add('reveal-effect');
            }

            // Reativa o botão
            creationButton.disabled = false;
        }, 3000); // 3 segundos de espera
    });
  }
});