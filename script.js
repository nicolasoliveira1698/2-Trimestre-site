document.addEventListener('DOMContentLoaded', () => {
  // Navegação do Menu
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

  // Controle de Animação dos GIFs ao passar o mouse
  const hoverGifs = document.querySelectorAll('.hover-gif');
  
  hoverGifs.forEach(img => {
    const staticSrc = img.getAttribute('src');
    const animatedSrc = img.getAttribute('data-gif');

    // Pré-carrega o GIF em segundo plano para não ter atraso no primeiro hover
    const preloadImg = new Image();
    preloadImg.src = animatedSrc;

    img.addEventListener('mouseenter', () => {
      img.src = animatedSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = staticSrc;
    });
  });
});