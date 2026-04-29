// =============================================
// META PIXEL — AddToCart Tracker
// Fired setiap kali tombol beli diklik
// =============================================
function trackAddToCart() {
  if (typeof fbq === 'function') {
    fbq('track', 'AddToCart', {
      content_name: 'Cara Praktis Bedah Bisnis',
      content_ids: ['ebook-bedah-bisnis'],
      content_type: 'product',
      value: 149000,
      currency: 'IDR'
    });
  }
}

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

// =============================================
// COUNTDOWN TIMER — 24 jam dari kunjungan pertama
// =============================================
(function() {
  const KEY = 'bedah_bisnis_deadline';
  let deadline = localStorage.getItem(KEY);
  if (!deadline) {
    deadline = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(KEY, deadline);
  }
  deadline = parseInt(deadline);
  function updateCountdown() {
    let diff = deadline - Date.now();
    if (diff <= 0) {
      deadline = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(KEY, deadline);
      diff = 24 * 60 * 60 * 1000;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const elH = document.getElementById('cd-hours');
    const elM = document.getElementById('cd-minutes');
    const elS = document.getElementById('cd-seconds');
    if (elH) elH.textContent = pad(h);
    if (elM) elM.textContent = pad(m);
    if (elS) elS.textContent = pad(s);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

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
