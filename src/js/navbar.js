// =============================================================
// navbar.js — LaLum Tech
// Scroll behavior + mobile menu toggle
// =============================================================

const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('navMobileMenu');

// ---------------------------------------------------------------
// Scroll behavior: adiciona classe .scrolled após 60px
// ---------------------------------------------------------------
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ---------------------------------------------------------------
// Mobile menu — abrir / fechar
// ---------------------------------------------------------------
hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');

  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';

  // Acessibilidade
  hamburger.setAttribute('aria-expanded', String(!isOpen));
});

// ---------------------------------------------------------------
// Fechar menu ao clicar em qualquer link interno
// ---------------------------------------------------------------
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ---------------------------------------------------------------
// Fechar menu ao pressionar Escape
// ---------------------------------------------------------------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
});
