document.addEventListener('DOMContentLoaded', () => {
  // 1. Sistema de Acessibilidade Persistente
  let fontScale = parseFloat(localStorage.getItem('antiSurto_fontScale')) || 1;
  let highContrast = localStorage.getItem('antiSurto_contrast') === 'true';

  const applyAccessibility = () => {
    document.documentElement.style.setProperty('--font-base', `${fontScale}rem`);
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  applyAccessibility();

  document.getElementById('btn-increase').addEventListener('click', () => {
    if (fontScale < 1.4) {
      fontScale += 0.08;
      localStorage.setItem('antiSurto_fontScale', fontScale);
      applyAccessibility();
    }
  });

  document.getElementById('btn-decrease').addEventListener('click', () => {
    if (fontScale > 0.8) {
      fontScale -= 0.08;
      localStorage.setItem('antiSurto_fontScale', fontScale);
      applyAccessibility();
    }
  });

  document.getElementById('btn-contrast').addEventListener('click', () => {
    highContrast = !highContrast;
    localStorage.setItem('antiSurto_contrast', highContrast);
    applyAccessibility();
  });

  // 2. Navegação entre Seções
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

  // 3. Reprodução de GIFs ao passar o mouse
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
});