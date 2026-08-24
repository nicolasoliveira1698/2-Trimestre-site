document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove a classe 'active' de todos os botões e páginas
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Adiciona 'active' no link que foi clicado
      this.classList.add('active');
      
      // Exibe a seção correspondente
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
      
      // Rola de volta para o topo da página ao trocar de seção
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});