document.addEventListener('DOMContentLoaded', () => {
  // 1. Navegação de Páginas
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

  // 2. Animação de GIFs Hover
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

  // 3. Controles de Acessibilidade (Aumentar/Diminuir fonte e Alto Contraste)
  let currentFontScale = 1;
  const maxScale = 1.4;
  const minScale = 0.85;

  const btnIncrease = document.getElementById('btn-increase-font');
  const btnDecrease = document.getElementById('btn-decrease-font');
  const btnContrast = document.getElementById('btn-contrast');

  btnIncrease.addEventListener('click', () => {
    if (currentFontScale < maxScale) {
      currentFontScale += 0.08;
      document.documentElement.style.setProperty('--font-scale', currentFontScale);
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (currentFontScale > minScale) {
      currentFontScale -= 0.08;
      document.documentElement.style.setProperty('--font-scale', currentFontScale);
    }
  });

  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
});