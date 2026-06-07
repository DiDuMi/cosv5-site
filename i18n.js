/* ─── Internationalization ─── */

const I18N = {
  en: {
    nav: {
      about: 'About',
      timeline: 'History',
      channels: 'Channels',
      features: 'Features',
      team: 'Team',
      join: 'Join',
    },
    hero: {
      badge: '#1 Telegram Cosplay Community',
      sub: 'More than resources. It\'s pioneering.',
      desc: 'The trailblazer of Telegram\'s Cosplay ecosystem —<br>the one who defines the rules, not follows them.',
      cta1: 'Explore →',
      cta2: 'Join Us',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'The Pioneer',
      desc: 'COSV5 is one of the earliest Telegram communities dedicated to Cosplay resource distribution. Starting from zero, we pioneered multiple industry firsts — we don\'t imitate, we create.',
    },
    stats: {
      members: 'Community Members',
      resources: 'Resources Shared',
      days: 'Active Operation',
      daysSuffix: 'days',
      firsts: 'Industry Firsts',
    },
    philosophy: {
      title: 'Our Philosophy',
    },
    timeline: {
      title: 'Our Journey',
      desc: 'Every step rewrites the rules.',
      items: [
        { year: '2024', month: 'May', title: 'Community Founded', desc: 'On May 1, 2024, COSV5 was officially established. DiDu began his journey of Cosplay resource distribution on Telegram.' },
        { year: '2024', month: 'Q3', title: 'Taking Shape', desc: 'First seed users joined. The channel network began to form.' },
        { year: '2025', month: 'Q1', title: 'Network Expansion', desc: 'Rapid channel growth. Subscriptions broke 1,000. Membership sharing model was explored.' },
        { year: '2025', month: 'Q3', title: 'Industry Firsts', desc: 'Launched email-bound membership, wish card system — redefining community service standards.' },
        { year: '2026', month: 'Q1', title: 'Hyper Growth', desc: '@COSV5_COM surpassed 5,000 subscribers. Daily exposure hit 100K+. Influence keeps expanding.' },
        { year: '2026', month: 'Q2', title: 'Tech Upgrade', desc: 'Introduced TG-Hamster automated collection system — full-chain data-driven operations.' },
        { year: '2026', month: 'Future', title: 'Evolving', desc: 'Global expansion, more innovations, a better ecosystem — stay tuned.' },
      ],
    },
    channels: {
      title: 'Channel Network',
      desc: 'A Cosplay resource distribution network across Telegram.',
      com: { desc: 'Pioneer · Premier releases first' },
      vip: { desc: 'Curated · Premium collections' },
      fr: { desc: 'International · French & global' },
      gd: { desc: 'Premium Coser collaboration' },
      sub: 'subscribers',
    },
    features: {
      title: 'Industry Firsts',
      desc: 'Not the first — the first to do it right.',
      f1: { title: 'Resource Streaming', desc: 'The first Telegram channel dedicated to Cosplay resource streaming, creating a new distribution model.' },
      f2: { title: 'Membership Sharing', desc: 'First to share Cosplay site membership accounts, lowering barriers for the community.' },
      f3: { title: 'Email-Bound Security', desc: 'First to offer email-bound membership protection, prioritizing safety and trust.' },
      f4: { title: 'Wish Cards', desc: 'Pioneered a points-based wish card system — every member\'s voice gets heard.' },
      f5: { title: 'Group Buy & Resell', desc: 'Innovative group-buy and resource-resell model for a self-sustaining ecosystem.' },
    },
    team: {
      title: 'Core Team',
      desc: 'The people who turn ideas into reality.',
      m1: { name: 'DiDu', role: 'Founder · Operations', desc: 'Visionary and executor. The driving force from zero to one.' },
      m2: { name: '小z', role: 'AI Engineer', desc: 'Automation, data analysis, and tech infrastructure behind the scenes.' },
    },
    join: {
      title: 'Join COSV5',
      desc: 'Become a member of the pioneer community<br>and get the finest Cosplay resources first.',
      btn1: 'Subscribe',
      btn2: 'Join Chat',
      bot: '— Paid Membership',
    },
    footer: {
      tagline: 'Telegram Cosplay Community Pioneer',
    },
    langToggle: '中文',
  },

  zh: {
    nav: {
      about: '关于',
      timeline: '历程',
      channels: '频道',
      features: '特色',
      team: '团队',
      join: '加入',
    },
    hero: {
      badge: '#1 Telegram Cosplay 社群',
      sub: '不止是资源。是开创。',
      desc: 'Telegram Cosplay 生态的开荒者——<br>定义规则的人，而不是跟随规则的人。',
      cta1: '了解我们 →',
      cta2: '加入社群',
      scroll: '滚动探索',
    },
    about: {
      title: '先锋的诞生',
      desc: 'COSV5 是 Telegram 生态中最早专注于 Cosplay 资源分发的社群之一。从零开始，我们开创了多个行业第一——不模仿，只创造。',
    },
    stats: {
      members: '社群成员',
      resources: '资源发布',
      days: '持续运营',
      daysSuffix: '天',
      firsts: '行业首创',
    },
    philosophy: {
      title: '我们的理念',
    },
    timeline: {
      title: '发展历程',
      desc: '每一步都在改写规则。',
      items: [
        { year: '2024', month: '5月', title: '社群成立', desc: '2024年5月1日，COSV5 社群正式成立，低毒开启 Telegram Cosplay 资源分发之路。' },
        { year: '2024', month: 'Q3', title: '初具规模', desc: '首批种子用户加入，频道矩阵雏形初现。' },
        { year: '2025', month: 'Q1', title: '矩阵扩张', desc: '频道矩阵快速扩张，订阅突破 1000，开始探索会员共享模式。' },
        { year: '2025', month: 'Q3', title: '行业首创', desc: '推出邮箱绑定、许愿卡等开创性功能，重新定义社群服务标准。' },
        { year: '2026', month: 'Q1', title: '高速增长', desc: '@COSV5_COM 订阅突破 5000，每日曝光达限 10万+。影响力持续扩大。' },
        { year: '2026', month: 'Q2', title: '技术升级', desc: '引入 TG-Hamster 自动采集系统，实现全链路数据化运营。' },
        { year: '2026', month: '未来', title: '持续进化', desc: '全球化布局、更多创新功能、更完善的社群生态——敬请期待。' },
      ],
    },
    channels: {
      title: '频道矩阵',
      desc: '覆盖全网的 Cosplay 资源分发网络。',
      com: { desc: '先锋版本 · 流出内容优先发布' },
      vip: { desc: '精选内容 · 高品质合集' },
      fr: { desc: '国际版 · 法语 & 全球化' },
      gd: { desc: '优质 Coser 资源合作频道' },
      sub: '订阅',
    },
    features: {
      title: '行业首创',
      desc: '不是第一家，是第一家做到这些的。',
      f1: { title: '资源流出', desc: 'Telegram 首个专注于 Cosplay 资源流出的频道，开创全新内容分发模式。' },
      f2: { title: '会员共享', desc: '首家实现 Cosplay 资源网站会员账号共享，降低门槛、普惠社群。' },
      f3: { title: '邮箱绑定', desc: '最早为付费成员提供邮箱绑定保障权益的社群，安全与信任先行。' },
      f4: { title: '许愿卡', desc: '首创积分兑换许愿卡机制，让每个成员的声音都能被听到。' },
      f5: { title: '拼团回血', desc: '创新拼团与资源回血模式，让社群生态自循环、可持续。' },
    },
    team: {
      title: '核心团队',
      desc: '一群把想法变成现实的人。',
      m1: { name: '低毒', role: '创始人 · 运营', desc: '社群构想的提出者和执行者。从零到一的推动力。' },
      m2: { name: '小z', role: 'AI 工程师', desc: '自动化、数据分析、技术基建的幕后支撑。' },
    },
    join: {
      title: '加入 COSV5',
      desc: '成为先锋社群的一员，<br>第一时间获取最优质的 Cosplay 资源。',
      btn1: '订阅频道',
      btn2: '加入群聊',
      bot: '— 付费加入',
    },
    footer: {
      tagline: 'Telegram Cosplay 社群先锋',
    },
    langToggle: 'English',
  },
};

let currentLang = localStorage.getItem('cosv5-lang') || 'en';

function getText(key) {
  const parts = key.split('.');
  let obj = I18N[currentLang] || I18N.en;
  for (const p of parts) {
    if (obj && obj[p] !== undefined) obj = obj[p];
    else return '';
  }
  return typeof obj === 'string' ? obj : '';
}

function renderText() {
  // data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = getText(el.dataset.i18n);
    if (text) el.innerHTML = text;
  });

  // timeline items (built by JS, re-render)
  renderTimeline();

  // toggle button text
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = I18N[currentLang].langToggle;

  // HTML lang
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('cosv5-lang', currentLang);
  renderText();
}
