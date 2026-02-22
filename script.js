/* ============================================
   PERSONAL CONSULTING LP — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== NAVIGATION ==========
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('[data-nav]');

  function toggleNav() {
    const isActive = navOverlay.classList.toggle('active');
    menuBtn?.classList.toggle('active', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  }

  menuBtn?.addEventListener('click', toggleNav);
  mobileMenuBtn?.addEventListener('click', toggleNav);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        navOverlay.classList.remove('active');
        menuBtn?.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    });
  });


  // ========== SCROLL REVEAL ANIMATIONS ==========
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ========== NUMBER COUNT-UP ANIMATION ==========
  const countElements = document.querySelectorAll('[data-count]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const isFloat = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();

        function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutExpo(progress);
          const current = target * easedProgress;

          if (isFloat) {
            el.textContent = current.toFixed(2);
            // Clean up trailing zeros
            if (progress >= 1) {
              el.textContent = target.toString();
            }
          } else {
            el.textContent = Math.floor(current).toLocaleString();
            if (progress >= 1) {
              el.textContent = target.toLocaleString();
            }
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
        countObserver.unobserve(el);
      }
    });
  }, {
    threshold: 0.3
  });

  countElements.forEach(el => countObserver.observe(el));


  // ========== PARALLAX FOR GEOMETRIC PATTERN ==========
  const heroPattern = document.querySelector('.hero__pattern');
  
  if (heroPattern) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      
      if (scrollY < heroHeight) {
        const translateY = scrollY * 0.3;
        const scale = 1 + scrollY * 0.0002;
        heroPattern.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
    }, { passive: true });
  }


  // ========== SIDEBAR ACTIVE SECTION HIGHLIGHT ==========
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === '#' + id) {
            link.style.color = '#c4a35a';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => sectionObserver.observe(section));


  // ========== CURSOR GLOW EFFECT ON HERO ==========
  const hero = document.querySelector('.hero');
  
  if (hero) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(196, 163, 90, 0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 2;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    hero.appendChild(glow);

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = (e.clientX - rect.left) + 'px';
      glow.style.top = (e.clientY - rect.top) + 'px';
      glow.style.opacity = '1';
    });

    hero.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
  }


  // ========== SMOOTH HOVER FOR TRACK RECORD ITEMS ==========
  const trackItems = document.querySelectorAll('.track-record__item');
  
  trackItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'background 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });

});
