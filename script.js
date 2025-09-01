document.addEventListener('DOMContentLoaded', function() {
  
  // --- Lógica da Sombra no Header ---
  const header = document.querySelector('header');
  const onScroll = () => { 
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll);

  // --- Lógica da Animação Fade-in ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); 
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

});