/**
 * JavaScript mínimo y accesible (Vanilla JS)
 * Mejora progresiva: el sitio funciona completamente sin JS.
 */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú móvil interactivo con accesibilidad ARIA
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      mainNav.classList.remove('is-open');
    };

    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
      mainNav.classList.toggle('is-open', !isExpanded);
    });

    // Cerrar menú al hacer clic en un enlace de navegación
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar el menú al tocar fuera de la navegación.
    document.addEventListener('pointerdown', (event) => {
      if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
        closeMenu();
      }
    });

    // Mantener el estado ARIA sincronizado al pasar a escritorio.
    const desktopMedia = window.matchMedia('(min-width: 1024px)');
    desktopMedia.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });

    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        closeMenu();
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
