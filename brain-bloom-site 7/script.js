// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }

  // Close mobile menu when a link is tapped
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (links) links.classList.remove('open');
    });
  });

  // ============================================
  // EARLYBIRD countdown — ticks to 23:59 on 18 May 2026
  // ============================================
  const DEADLINE = new Date('2026-05-18T23:59:59+01:00').getTime();

  function pad(n) { return n < 10 ? '0' + n : n; }

  function tickCountdown() {
    const countdowns = document.querySelectorAll('[data-countdown]');
    if (!countdowns.length) return;

    const now = Date.now();
    const diff = DEADLINE - now;

    countdowns.forEach(el => {
      if (diff <= 0) {
        el.innerHTML = '<div class="countdown-expired">⏰ Early bird offer has ended — book now to secure your place</div>';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const dayEl = el.querySelector('[data-days]');
      const hourEl = el.querySelector('[data-hours]');
      const minEl = el.querySelector('[data-minutes]');
      const secEl = el.querySelector('[data-seconds]');

      if (dayEl) dayEl.textContent = pad(days);
      if (hourEl) hourEl.textContent = pad(hours);
      if (minEl) minEl.textContent = pad(minutes);
      if (secEl) secEl.textContent = pad(seconds);
    });
  }

  tickCountdown();
  setInterval(tickCountdown, 1000);
});
