function setLang(lang) {
  if (lang === 'es') document.body.classList.add('es');
  else document.body.classList.remove('es');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.l === lang));
  localStorage.setItem('sl-lang', lang);
}

// Header scroll
const h = document.getElementById('header');
const lt = document.getElementById('langToggle');
window.addEventListener('scroll', () => {
  const s = window.scrollY > 50;
  h.classList.toggle('scrolled', s);
  lt.classList.toggle('scrolled', s);
});

// Scroll animations
const obs = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('v') }) }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.fu').forEach(el => obs.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  });
});

// Restore lang preference
const saved = localStorage.getItem('sl-lang');
if (saved) setLang(saved);
