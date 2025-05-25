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
  tabs[0].classList.add('active');
  contents[0].classList.add('active');
});
