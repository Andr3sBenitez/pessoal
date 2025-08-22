window.addEventListener('load', () => {
  // Lógica para as abas principais
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const target = tab.getAttribute('data-tab');

      // Remove active de todas as abas e conteúdos principais
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Adiciona active na aba clicada e no conteúdo correspondente
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Lógica para os links dos Destaques
  const highlightLinks = document.querySelectorAll('.highlight-card');

  highlightLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const mainTabId = link.getAttribute('data-main-tab');

      // Ativa a aba principal correta
      const mainTabLink = document.querySelector(`.tab-link[data-tab="${mainTabId}"]`);
      if (mainTabLink) {
        mainTabLink.click();
      }
    });
  });
  
  // Lógica para a aba "Criação"
  const creationButton = document.getElementById('creation-button');
  const creationResult = document.getElementById('creation-result');
  const creationStatus = document.getElementById('creation-status');
  
  const CHANCE_OF_CREATION = 0.000001;
  let attemptCount = 0;

  if (creationButton) {
    creationButton.addEventListener('click', () => {
        creationButton.disabled = true;
        creationResult.innerHTML = '';
        creationResult.className = '';
        creationStatus.textContent = 'Criando as condições cósmicas...';

        setTimeout(() => {
            creationStatus.textContent = '';
            attemptCount++;

            const randomNumber = Math.random();
            const isSuccess = randomNumber < CHANCE_OF_CREATION;

            creationResult.textContent = isSuccess ? 'Parabéns! Seu universo foi criado.' : 'Infelizmente, o universo não foi criado.';
            creationResult.classList.add(isSuccess ? 'success-message' : 'failure-message');

            if (attemptCount === 1) {
                creationResult.classList.add('typing-effect');
            } else {
                creationResult.classList.add('reveal-effect');
            }
            
            // Remove a animação de digitação após ela terminar para não interferir no reveal
            creationResult.addEventListener('animationend', () => {
                creationResult.classList.remove('typing-effect');
            }, { once: true });

            creationButton.disabled = false;
        }, 2500);
    });
  }

  // Lógica para a aba "Códigos"
  const secretCodeInput = document.getElementById('secret-code-input');
  const submitCodeButton = document.getElementById('submit-code-button');
  const codeMessage = document.getElementById('code-message');
  const secretPages = document.querySelectorAll('.secret-page-content');

  // Define your secret codes and their corresponding page IDs
  const secretCodes = {
    'batman': 'secret-page-batman',
    'pinguim': 'secret-page-penguin',
    'shakespeare': 'secret-page-shakespeare',
    '20251997': 'secret-page-games'
  };

  if (submitCodeButton) {
    submitCodeButton.addEventListener('click', () => {
      const enteredCode = secretCodeInput.value.toLowerCase().trim();

      // Hide all secret pages first
      secretPages.forEach(page => {
        page.style.display = 'none';
      });

      if (secretCodes[enteredCode]) {
        // If the code exists, show the corresponding page
        document.getElementById(secretCodes[enteredCode]).style.display = 'block';
        codeMessage.textContent = 'Código correto! Página desbloqueada.';
        codeMessage.className = 'code-message success-message';
      } else {
        // If the code is incorrect
        codeMessage.textContent = 'Código inválido. Tente novamente.';
        codeMessage.className = 'code-message failure-message';
      }
      secretCodeInput.value = ''; // Clear the input field
    });
  }
});