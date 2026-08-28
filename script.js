document.addEventListener('DOMContentLoaded', () => {
  // Navegação entre abas
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

  // Animação de GIFs no hover
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

  // Acessibilidade: Redimensionamento Global de Fonte
  let fontPercent = parseInt(localStorage.getItem('userFontPercent')) || 100;
  document.documentElement.style.setProperty('--base-font-size', fontPercent + '%');

  const btnIncrease = document.getElementById('btn-increase-font');
  const btnDecrease = document.getElementById('btn-decrease-font');
  const btnContrast = document.getElementById('btn-contrast');

  btnIncrease.addEventListener('click', () => {
    if (fontPercent < 140) {
      fontPercent += 10;
      document.documentElement.style.setProperty('--base-font-size', fontPercent + '%');
      localStorage.setItem('userFontPercent', fontPercent);
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (fontPercent > 80) {
      fontPercent -= 10;
      document.documentElement.style.setProperty('--base-font-size', fontPercent + '%');
      localStorage.setItem('userFontPercent', fontPercent);
    }
  });

  // Acessibilidade: Alto Contraste
  if (localStorage.getItem('userContrast') === 'enabled') {
    document.body.classList.add('high-contrast');
  }

  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    if (document.body.classList.contains('high-contrast')) {
      localStorage.setItem('userContrast', 'enabled');
    } else {
      localStorage.setItem('userContrast', 'disabled');
    }
  });
});8