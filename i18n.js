/* ─── Internationalization ─── */

const I18N = {
  en: {
    nav: {
      about: 'About',
      timeline: 'History',
      channels: 'Channels',
      features: 'Features',
      tools: 'Tools',
      team: 'Team',
      password: 'Password',
      join: 'Join',
    },
    hero: {
      badge: 'Telegram · Cosplay · Community',
      sub: 'Sharing what we love.',
      desc: 'A community born from a shared passion for Cosplay —<br>curating and sharing, so great works find the eyes they deserve.',
      cta1: 'Our Story →',
      cta2: 'Join Us',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'Our Story',
      desc: 'COSV5 started as a simple idea: gather great Cosplay resources and share them with people who appreciate them. What began small grew into a community built on trust, curation, and a genuine love for the art.',
    },
    stats: {
      members: 'Community Members',
      resources: 'Resources Shared',
      days: 'Days Active',
      daysSuffix: 'days',
      firsts: 'Curated Packs',
    },
    philosophy: {
      title: 'Our Philosophy',
      q1: 'Taste and appreciate its appearance,<br>and imagine its own world.',
      q2: 'Just organize and share,<br>so that the circulating works<br>can reach more people who love them.',
    },
    timeline: {
      title: 'Our Journey',
      desc: 'Step by step, since day one.',
      items: [
        { year: '2024', month: 'May', title: 'Community Founded', desc: 'On May 1, 2024, COSV5 was born — a small idea that would grow into something bigger.' },
        { year: '2024', month: 'Q3', title: 'Taking Shape', desc: 'First members joined. The channel network began to take form.' },
        { year: '2025', month: 'Q1', title: 'Growing Together', desc: 'Subscriptions passed 1,000. We started exploring ways to share access and lower barriers.' },
        { year: '2025', month: 'Q3', title: 'New Ways to Share', desc: 'Launched email-bound membership security and a wish card system — small innovations with big impact.' },
        { year: '2026', month: 'Q1', title: 'Building Momentum', desc: '@COSV5_COM passed 5,000 subscribers. Daily exposure reached 100K+.' },
        { year: '2026', month: 'Q2', title: 'Smarter Operations', desc: 'Introduced TG-Hamster — automated tools to keep everything running smoothly.' },
        { year: '2026', month: 'Future', title: 'What\'s Next', desc: 'Global reach, more features, a stronger community — we\'re just getting started.' },
      ],
    },
    channels: {
      title: 'Channel Network',
      desc: 'A Cosplay resource distribution network across Telegram.',
      com: { desc: 'Main channel · New releases first' },
      vip: { desc: 'Curated · Premium collections' },
      fr: { desc: 'International · French & global' },
      gd: { desc: 'Coser collaboration channel' },
      lang_title: "Language Channels",
      backup: "All channels and groups have backup accounts. If a channel becomes unavailable, check the group for the latest backup link.",
      sub: 'subscribers',
    },
    features: {
      title: 'What Makes Us, Us',
      desc: 'Things we tried that made a difference.',
      f1: { title: 'Resource Sharing', desc: 'Creating channels dedicated to Cosplay content, so great works reach the right audience.' },
      f2: { title: 'Shared Access', desc: 'Sharing Cosplay site memberships to make quality content more accessible for everyone.' },
      f3: { title: 'Email Security', desc: 'Offering email-bound membership protection, because trust matters.' },
      f4: { title: 'Wish Cards', desc: 'A points-based system that lets members request what they want to see.' },
      f5: { title: 'Group Buy & Resell', desc: 'Group-buy options and a resource resell system — keeping the community self-sustaining.' },
    },
    tools: {
      title: 'Exclusive Tools',
      desc: 'Utility tools for the community, always improving.',
      exif: {
        title: 'ExifCleaner (COSV5 Enhanced)',
        desc: "Thank you for your support! We've enhanced ExifCleaner to better serve the community. Feel free to give feedback.",
        limits_title: 'Original Limits',
        limit1: 'Cannot clean metadata from read-only files',
        limit2: 'Cannot process subdirectory metadata',
        enhancements_title: 'COSV5 Enhancements',
        enh1: 'Read-only file metadata cleaning',
        enh2: 'Recursive subdirectory cleaning',
        enh3: 'Custom EXIF metadata editing',
        enh4: 'Batch file renaming',
      },
      bot1: { title: 'PaPulse Search & Monitor', desc: 'Free reverse image search and community resource search. Members can search site resources.' },
      bot2: { title: 'V5Mesh Distribution', desc: 'Solve channel ops pain points: ban risk, content duplication, low reach. Clone your own distribution bot with AI-optimized copy.' },
      bot3: { title: 'GuiYaoBot Check-in & Points', desc: 'Earn points, bind email, restore membership rights. Protect your benefits against Telegram risks.' },
    },
    password: {
      title: 'Universal Password',
      desc: 'One password for all archives. Click to copy.',
      warn: 'Case Sensitive',
      history: 'History: @coserdh / @CosYiMi / 123321',
      steps_title: 'Steps',
      step1: 'Ensure all parts (.part1/.001) are in the same folder',
      step2: 'Right-click the first part and extract',
      step3: 'Recommend Bandizip / ZArchiver',
      tools_tip: 'Bandizip (Win) · Files (iOS) · ZArchiver (Android)',
    },
    team: {
      title: 'Behind the Scenes',
      desc: 'The people who make it happen.',
      m1: { name: 'DiDu', role: 'Founder · Operations', desc: 'Started it all. Keeps it running day by day.' },
      m2: { name: '小z', role: 'AI Engineer', desc: 'Automation, data, and tech infrastructure — the gears behind the scenes.' },
    },
    join: {
      title: 'Join COSV5',
      desc: 'Love Cosplay? Come hang out.<br>Get curated content and a community that shares your passion.',
      btn1: 'Subscribe',
      btn2: 'Join Chat',
      bot: '— Paid Membership',
    },
    footer: {
      tagline: 'Cosplay · Community · Sharing',
    },
    section: {
      about: "ABOUT",
      philosophy: "PHILOSOPHY",
      timeline: "HISTORY",
      channels: "CHANNELS",
      features: "FEATURES",
      tools: "TOOLS",
      team: "TEAM",
      password: "PASSWORD",
    },
    langToggle: '文',
  },

  zh: {
    nav: {
      about: '关于',
      timeline: '历程',
      channels: '频道',
      features: '特色',
      tools: '工具',
      team: '团队',
      password: '密码',
      join: '加入',
    },
    hero: {
      badge: 'Telegram · Cosplay · 社群',
      sub: '因为热爱，所以分享。',
      desc: '因为对 Cosplay 的热爱聚在一起——<br>整理和分享，让好作品找到对的人。',
      cta1: '我们的故事 →',
      cta2: '加入我们',
      scroll: '往下探索',
    },
    about: {
      title: '我们的故事',
      desc: 'COSV5 始于一个简单的想法：收集优质的 Cosplay 资源，分享给同样热爱它们的人。从一点点开始，慢慢长成一个靠信任和热爱维系的社群。',
    },
    stats: {
      members: '社群成员',
      resources: '累计分享',
      days: '已运营',
      daysSuffix: '天',
      firsts: '精选资源包',
    },
    philosophy: {
      title: '我们的理念',
      q1: '品味它的模样，<br>想象属于它的世界。',
      q2: '只是整理和分享，<br>让流传的作品，<br>到达更多热爱它们的人手中。',
    },
    timeline: {
      title: '发展历程',
      desc: '一步一步，走到今天。',
      items: [
        { year: '2024', month: '5月', title: '社群成立', desc: '2024年5月1日，COSV5 成立了——一个小小的想法，慢慢长大。' },
        { year: '2024', month: 'Q3', title: '初具雏形', desc: '第一批成员加入，频道网络开始成型。' },
        { year: '2025', month: 'Q1', title: '一起成长', desc: '订阅突破 1000，开始探索共享会员，降低门槛。' },
        { year: '2025', month: 'Q3', title: '新的尝试', desc: '推出邮箱绑定保障和许愿卡机制——小创新，大改变。' },
        { year: '2026', month: 'Q1', title: '稳步前行', desc: '@COSV5_COM 订阅突破 5000，每日曝光达 10万+。' },
        { year: '2026', month: 'Q2', title: '效率升级', desc: '引入 TG-Hamster 自动化系统，让运营更高效。' },
        { year: '2026', month: '未来', title: '继续进化', desc: '全球化、更多功能、更强的社群——才刚刚开始。' },
      ],
    },
    channels: {
      title: '频道矩阵',
      desc: '覆盖全网的 Cosplay 资源分发网络。',
      com: { desc: '主频道 · 新资源优先发布' },
      vip: { desc: '精选 · 高品质合集' },
      fr: { desc: '国际版 · 法语 & 全球化' },
      gd: { desc: 'Coser 合作频道' },
      lang_title: "多语言频道",
      backup: "所有频道和群组均有备份账号。如果某个频道不可用，请在群组中查看最新的备份链接。",
      sub: '订阅',
    },
    features: {
      title: '我们的特色',
      desc: '我们做了一些不一样的事。',
      f1: { title: '资源分享', desc: '专注 Cosplay 内容分发，让好作品找到属于它的观众。' },
      f2: { title: '共享会员', desc: '共享 Cosplay 站点会员，降低门槛，让更多人看到优质内容。' },
      f3: { title: '邮箱保障', desc: '提供邮箱绑定保障会员权益——信任是社群的基础。' },
      f4: { title: '许愿卡', desc: '积分兑换许愿卡机制，每个成员都可以许个愿。' },
      f5: { title: '拼团与回血', desc: '拼团与资源回血，让社群生态自己转起来。' },
    },
    tools: {
      title: '专属工具',
      desc: '社群实用工具，持续更新中。',
      exif: {
        title: 'ExifCleaner（COSV5 改进版）',
        desc: '感谢大家的支持！我们改进了 ExifCleaner 以更好地服务社群，如有问题欢迎反馈。',
        limits_title: '原版限制',
        limit1: '无法清理只读属性文件的元数据',
        limit2: '无法处理子目录中的文件元数据',
        enhancements_title: 'COSV5 定向优化',
        enh1: '支持清理只读属性文件的元数据',
        enh2: '支持递归清理子目录中元数据',
        enh3: '支持自定义修改 EXIF 元数据',
        enh4: '支持批量重命名文件',
      },
      bot1: { title: 'PaPulse 搜索监控', desc: '免费以图搜图与社群资源搜索入口，会员可检索网站资源。' },
      bot2: { title: 'V5Mesh 矩阵分发', desc: '解决频道运营痛点：封号风险、内容重复、曝光不足。克隆专属分发机器人，AI 优化文案。' },
      bot3: { title: 'GuiYaoBot 签到积分', desc: '积分获取与兑换、邮箱绑定与权益恢复，保障社群权益流转。' },
    },
    password: {
      title: '通用密码',
      desc: '所有压缩包统一密码。点击即可复制。',
      warn: '严格区分大小写',
      history: '历史密码：@coserdh / @CosYiMi / 123321',
      steps_title: '解压步骤',
      step1: '确保所有分卷 (.part1/.001) 在同一文件夹',
      step2: '右键点击第一个分卷进行解压',
      step3: '推荐使用 Bandizip / ZArchiver',
      tools_tip: 'Bandizip（Win）· 文件家（iOS）· ZArchiver（Android）',
    },
    team: {
      title: '幕后',
      desc: '让这一切发生的人。',
      m1: { name: '低毒', role: '创始人 · 运营', desc: '一切开始的地方，和让它持续运转的人。' },
      m2: { name: '小z', role: 'AI 工程师', desc: '自动化、数据、技术基建——幕后的齿轮。' },
    },
    join: {
      title: '加入 COSV5',
      desc: '喜欢 Cosplay？来一起玩。<br>获取精选资源，和同好一起分享。',
      btn1: '订阅频道',
      btn2: '加入群聊',
      bot: '— 付费加入',
    },
    footer: {
      tagline: 'Cosplay · 社群 · 分享',
    },
    section: {
      about: "关于",
      philosophy: "理念",
      timeline: "历程",
      channels: "频道",
      features: "特色",
      tools: "工具",
      team: "团队",
      password: "密码",
    },
    langToggle: 'eng',
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

  // toggle button text + active state
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = I18N[currentLang].langToggle;
    toggle.classList.toggle('lang-en', currentLang === 'en');
    toggle.classList.toggle('lang-zh', currentLang === 'zh');
  }

  // HTML lang
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('cosv5-lang', currentLang);
  renderText();
}
