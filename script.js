document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.scrapbook-card');

  const observerOptions = {
    root: null,
    threshold: 0.2 // Dispara a animação quando 20% do elemento aparece
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
});