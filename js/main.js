/**
 * JavaScript mínimo y accesible (Vanilla JS)
 * Mejora progresiva: el sitio funciona completamente sin JS.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú móvil interactivo con accesibilidad ARIA
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-open');
    });

    // Cerrar menú al hacer clic en un enlace de navegación
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      });
    });

    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  // 2. Acordeón FAQ: asegurar cierre exclusivo suave si el usuario lo desea
  // Los elementos <details> funcionan nativamente sin JS. Aquí mejoramos la experiencia
  // cerrando otros elementos abiertos al abrir uno nuevo.
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
