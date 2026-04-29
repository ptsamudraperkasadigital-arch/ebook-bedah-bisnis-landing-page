// FAQ toggle
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const arrow = btn.querySelector('.faq-arrow');
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(a => a.style.transform = '');
  if (!isOpen) {
    answer.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
  }
}

// Slot countdown animation
let slots = 17;
function updateSlot() {
  const el = document.getElementById('slot-count');
  if (el && slots > 1) {
    const delay = Math.random() * 120000 + 60000;
    setTimeout(() => { slots--; el.textContent = slots; updateSlot(); }, delay);
  }
}
updateSlot();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card, .module-card, .bonus-card, .testi-card, .for-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
