/* ─── Site JavaScript ─── */

/* ════════════════════════ */
/* Timeline (global for i18n) */
/* ════════════════════════ */
function renderTimeline() {
  const track = document.getElementById('timelineTrack');
  if (!track) return;
  const dots = document.getElementById('tlDots');

  const data = (I18N[currentLang] || I18N.en).timeline.items;

  // Clear and rebuild
  track.innerHTML = '';
  if (dots) dots.innerHTML = '';

  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item' + (i === 0 ? ' active' : '');
    div.innerHTML = `
      <div class="tl-year">${item.year}</div>
      <div class="tl-month">${item.month}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-desc">${item.desc}</div>
    `;
    track.appendChild(div);

    if (dots) {
      const dot = document.createElement('span');
      dot.className = 'tl-dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dot.addEventListener('click', () => goToSlide(i));
      dots.appendChild(dot);
    }
  });

  currentSlide = 0;
  isScrolling = false;
}

/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════ */
  /* 0. Render i18n text      */
  /* ════════════════════════ */
  renderText();

  /* Lang toggle */
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', toggleLang);

  /* ════════════════════════ */
  /* 1. Particle Canvas       */
  /* ════════════════════════ */
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;
    const COLORS = ['rgba(255,45,123,', 'rgba(124,58,237,', 'rgba(34,211,238,'];
    let mouseX = -1000, mouseY = -1000;

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        if (this.x < 0 || this.x > w) this.speedX *= -1;
        if (this.y < 0 || this.y > h) this.speedY *= -1;
      }
      draw() {
        const a = this.alpha + Math.sin(this.pulse) * 0.15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.max(0, Math.min(1, a)) + ')';
        ctx.fill();
      }
    }

    const PARTICLE_COUNT = Math.min(80, Math.floor((w * h) / 15000));
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    function animateParticles() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) { p.update(); p.draw(); }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - dist / 150) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      for (let p of particles) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(255,45,123,${(1 - dist / 200) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* ════════════════════════ */
  /* 2. Nav hide on scroll    */
  /* ════════════════════════ */
  const nav = document.getElementById('nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > 150 && current > lastScroll) nav.classList.add('hidden');
      else nav.classList.remove('hidden');
      lastScroll = current;
    });
  }

  /* ════════════════════════ */
  /* 3. Mobile Toggle         */
  /* ════════════════════════ */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  /* ════════════════════════ */
  /* 4. Scroll Reveal         */
  /* ════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ════════════════════════ */
  /* 5. Stat Counters         */
  /* ════════════════════════ */
  function formatCounter(val) {
    if (val >= 1000) {
      const k = val / 1000;
      return k % 1 === 0 ? k + 'k' : k.toFixed(1) + 'k';
    }
    return String(val);
  }

  function animateCounter(el, target) {
    const duration = 2000, steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), target);
      el.textContent = formatCounter(current);
      if (step >= steps) {
        el.textContent = formatCounter(target);
        clearInterval(timer);
      }
    }, duration / steps);
  }

  function observeCounters(selector) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.fromDate) {
            const from = new Date(el.dataset.fromDate);
            const now = new Date();
            const diff = Math.floor((now - from) / (1000 * 60 * 60 * 24));
            animateCounter(el, diff);
          } else {
            const target = parseInt(el.dataset.target) || 0;
            animateCounter(el, target);
          }
          observer.unobserve(el);
        }
      }
    }, { threshold: 0.5 });
    els.forEach(el => observer.observe(el));
  }
  observeCounters('.stat-number');
  observeCounters('.channel-sub-count');

  /* ════════════════════════ */
  /* 6. Timeline Controls     */
  /* ════════════════════════ */
  const track = document.getElementById('timelineTrack');
  const prevBtn = document.getElementById('tlPrev');
  const nextBtn = document.getElementById('tlNext');
  let currentSlide = 0;
  let isScrolling = false;

  window.goToSlide = function(index) {
    const items = track.querySelectorAll('.timeline-item');
    const dots = document.querySelectorAll('.tl-dot');
    if (!items.length) return;
    index = Math.max(0, Math.min(index, items.length - 1));
    if (index === currentSlide) return;
    currentSlide = index;
    isScrolling = true;
    items.forEach((el, i) => el.classList.toggle('active', i === currentSlide));
    if (dots) dots.forEach((el, i) => el.classList.toggle('active', i === currentSlide));
    const item = items[currentSlide];
    if (item) {
      const scrollTo = item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2;
      track.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
    setTimeout(() => { isScrolling = false; }, 400);
  };

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => window.goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => window.goToSlide(currentSlide + 1));

    let scrollTimer = null;
    track.addEventListener('scroll', () => {
      if (isScrolling) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const items = track.querySelectorAll('.timeline-item');
        const dots = document.querySelectorAll('.tl-dot');
        if (!items.length) return;
        let closest = 0, closestDist = Infinity;
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        items.forEach((el, i) => {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.left + rect.width / 2 - center);
          if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        if (closest !== currentSlide) {
          currentSlide = closest;
          items.forEach((el, i) => el.classList.toggle('active', i === closest));
          if (dots) dots.forEach((el, i) => el.classList.toggle('active', i === closest));
        }
      }, 50);
    });
  }

  /* ════════════════════════ */
  /* 7. Smooth hash scrolling */
  /* ════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
