/* ─── Site JavaScript ─── */

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════ */
  /* 1. Particle Canvas       */
  /* ════════════════════════ */
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;
    const COLORS = ['rgba(255,45,123,', 'rgba(124,58,237,', 'rgba(34,211,238,'];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
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

    let mouseX = -1000, mouseY = -1000;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    function animateParticles() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        p.update();
        p.draw();
      }
      // connections
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
      // mouse connect
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
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ════════════════════════ */
  /* 4. Scroll Reveal         */
  /* ════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ════════════════════════ */
  /* 5. Stat Counters         */
  /* ════════════════════════ */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.fromDate) {
            // calculate days since founding date
            const from = new Date(el.dataset.fromDate);
            const now = new Date();
            const diff = Math.floor((now - from) / (1000 * 60 * 60 * 24));
            animateCounter(el, diff);
          } else {
            const target = parseInt(el.dataset.target) || 0;
            animateCounter(el, target);
          }
          counterObserver.unobserve(el);
        }
      }
    }, { threshold: 0.5 });
    statNumbers.forEach(el => counterObserver.observe(el));
  }

  // channel sub counts
  const channelCounts = document.querySelectorAll('.channel-sub-count');
  if (channelCounts.length) {
    const channelObserver = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target) || 0;
          animateCounter(el, target);
          channelObserver.unobserve(el);
        }
      }
    }, { threshold: 0.3 });
    channelCounts.forEach(el => channelObserver.observe(el));
  }

  function animateCounter(el, target) {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      if (target > 1000) {
        el.textContent = current.toLocaleString();
      } else {
        el.textContent = current;
      }
      if (step >= steps) {
        el.textContent = target > 1000 ? target.toLocaleString() : target;
        clearInterval(timer);
      }
    }, duration / steps);
  }

  /* ════════════════════════ */
  /* 6. Timeline              */
  /* ════════════════════════ */
  const timelineData = [
    { year: '2024', month: '5月', title: '社群成立', desc: '2024年5月1日，COSV5 社群正式成立，低毒开启 Telegram Cosplay 资源分发之路。' },
    { year: '2024', month: 'Q3', title: '初具规模', desc: '首批种子用户加入，频道矩阵雏形初现。' },
    { year: '2025', month: 'Q1', title: '矩阵扩张', desc: '频道矩阵快速扩张，订阅突破 1000，开始探索会员共享模式。' },
    { year: '2025', month: 'Q3', title: '行业首创', desc: '推出邮箱绑定、许愿卡等开创性功能，重新定义社群服务标准。' },
    { year: '2026', month: 'Q1', title: '高速增长', desc: '@COSV5_COM 订阅突破 5000，每日曝光达限 10万+。影响力持续扩大。' },
    { year: '2026', month: 'Q2', title: '技术升级', desc: '引入 TG-Hamster 自动采集系统，实现全链路数据化运营。' },
    { year: '2026', month: '未来', title: '持续进化', desc: '全球化布局、更多创新功能、更完善的社群生态——敬请期待。' },
  ];

  const track = document.getElementById('timelineTrack');
  const dots = document.getElementById('tlDots');
  const prevBtn = document.getElementById('tlPrev');
  const nextBtn = document.getElementById('tlNext');

  if (track) {
    timelineData.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'timeline-item' + (i === 0 ? ' active' : '');
      div.innerHTML = `
        <div class="tl-year">${item.year}</div>
        <div class="tl-month">${item.month}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-desc">${item.desc}</div>
      `;
      track.appendChild(div);
    });

    // dots
    if (dots) {
      timelineData.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'tl-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dots.appendChild(dot);
      });
    }

    let currentSlide = 0;

    function goToSlide(index) {
      currentSlide = Math.max(0, Math.min(index, timelineData.length - 1));
      const items = track.querySelectorAll('.timeline-item');
      const dots = document.querySelectorAll('.tl-dot');
      items.forEach((el, i) => el.classList.toggle('active', i === currentSlide));
      if (dots) dots.forEach((el, i) => el.classList.toggle('active', i === currentSlide));
      const item = items[currentSlide];
      if (item) {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // scroll sync
    track.addEventListener('scroll', () => {
      const items = track.querySelectorAll('.timeline-item');
      let closest = 0;
      let closestDist = Infinity;
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      items.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      if (closest !== currentSlide) goToSlide(closest);
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
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
