// =============================================
// NAV SCROLL BEHAVIOR
// =============================================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });


// =============================================
// SCROLL REVEAL
// =============================================

const revealElements = document.querySelectorAll(
  '.section-label, .section-headline, .cta-headline, ' +
  '.problem-list li, .service-card, .deliverable-item, ' +
  '.about-body, .about-quote, .stat, .cta-sub, .btn, ' +
  '.footer-brand, .footer-links'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));


// =============================================
// STAGGERED CHILDREN (problem list, services)
// =============================================

document.querySelectorAll('.problem-list li, .service-card, .deliverable-item, .stat').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
});


// =============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
