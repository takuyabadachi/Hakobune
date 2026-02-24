/* === Horizontal Slide Deck Engine === */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('slidesContainer');
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('navDots');
  const counter = document.getElementById('slideCounter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const total = slides.length;
  let current = 0;
  let isAnimating = false;

  /* Build dots */
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `スライド ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  /* Navigate */
  function goTo(index) {
    if (isAnimating || index === current) return;
    isAnimating = true;
    current = Math.max(0, Math.min(index, total - 1));

    container.style.transform = `translateX(-${current * 100}vw)`;

    /* Update dots */
    document.querySelectorAll('.nav-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });

    /* Update counter */
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

    /* Activate slide (animation trigger) */
    slides.forEach(s => s.classList.remove('active'));
    setTimeout(() => {
      slides[current].classList.add('active');
      isAnimating = false;
    }, 200);
  }

  function next() { if (current < total - 1) goTo(current + 1); }
  function prev() { if (current > 0) goTo(current - 1); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  /* Keyboard */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
  });

  /* Touch / swipe */
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
  }, { passive: true });

  /* Mouse wheel (horizontal scroll) */
  let wheelTimeout;
  document.addEventListener('wheel', (e) => {
    e.preventDefault();
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.deltaX > 0 ? next() : prev();
      } else {
        e.deltaY > 0 ? next() : prev();
      }
    }, 50);
  }, { passive: false });

  /* Init first slide */
  slides[0].classList.add('active');
});
