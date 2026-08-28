document.addEventListener('DOMContentLoaded', () => {
  // Navegação entre Páginas
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      this.classList.add('active');
      
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // GIFs Animados em Hover
  const hoverGifs = document.querySelectorAll('.hover-gif');
  
  hoverGifs.forEach(img => {
    const staticSrc = img.getAttribute('src');
    const animatedSrc = img.getAttribute('data-gif');

    const preloadImg = new Image();
    preloadImg.src = animatedSrc;

    img.addEventListener('mouseenter', () => {
      img.src = animatedSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = staticSrc;
    });
  });

  // Botão de Aumentar Fonte
  const btnFont = document.getElementById('btn-font');
  btnFont.addEventListener('click', () => {
    document.body.classList.toggle('font-large');
    btnFont.textContent = document.body.classList.contains('font-large') ? 'A -' : 'A +';
  });

  // Botão de Alto Contraste
  const btnContrast = document.getElementById('btn-contrast');
  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
});