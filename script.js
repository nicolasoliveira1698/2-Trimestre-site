// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const closeButtons = document.querySelectorAll('.close-btn');
  const defaultView = document.getElementById('default-view');

  // Alternar abas
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      // Atualizar classe dos botões
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Ocultar todas as abas e exibir a selecionada
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Botões de fechar (voltar ao índice)
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Limpar seleção dos botões
      navButtons.forEach(btn => btn.classList.remove('active'));

      // Ocultar todas as abas
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Retornar à visualização padrão do índice
      defaultView.classList.add('active');
    });
  });
});