// ===== Investment Categories =====
const CATEGORIES = {
  finance: {
    id: 'finance', name: '金融投資', nameEn: 'Financial Investment', icon: '📊', color: '#4a9eff', cssClass: 'finance',
    desc: 'あなたは論理的思考とデータ分析に優れ、金融市場での投資が最も適しています。株式、債券、投資信託など、伝統的な金融商品を通じた資産形成がおすすめです。市場の動向を読み解き、戦略的な判断ができるタイプです。'
  },
  realestate: {
    id: 'realestate', name: '不動産投資', nameEn: 'Real Estate Investment', icon: '🏢', color: '#2ecc71', cssClass: 'realestate',
    desc: 'あなたは安定志向で、長期的な視点を持つ実直なタイプ。不動産を通じた着実な資産形成が向いています。賃貸収入（インカムゲイン）と資産価値の上昇（キャピタルゲイン）の両面から、堅実な投資を実現できるでしょう。'
  },
  alternative: {
    id: 'alternative', name: 'オルタナティブ投資', nameEn: 'Alternative Investment', icon: '💎', color: '#c9a96e', cssClass: 'alternative',
    desc: 'あなたは独自の審美眼と感性を持ち、実物資産への投資が最も輝くタイプ。アート、時計、ワインなど、あなたの知識と情熱が直接価値につながるオルタナティブ投資の世界が待っています。'
  },
  other: {
    id: 'other', name: 'バランス型投資', nameEn: 'Balanced Investment', icon: '⚖️', color: '#95a5a6', cssClass: 'other',
    desc: 'あなたはバランス感覚に優れ、特定のカテゴリに偏らない柔軟な投資スタイルが向いています。複数の資産クラスに分散投資することで、リスクを抑えながら着実なリターンを目指せるタイプです。'
  }
};

// ===== Alternative Investment Sub-Categories =====
const ALT_CATEGORIES = [
  { id: 'denim', name: 'デニム', icon: '👖', tags: ['fashion', 'vintage', 'trend'] },
  { id: 'vintage_tee', name: 'ヴィンテージTシャツ', icon: '👕', tags: ['fashion', 'vintage', 'pop'] },
  { id: 'watch', name: '時計', icon: '⌚', tags: ['luxury', 'mechanic', 'classic'] },
  { id: 'sneaker', name: 'スニーカー', icon: '👟', tags: ['fashion', 'trend', 'pop'] },
  { id: 'wine', name: 'ワイン・ウイスキー', icon: '🍷', tags: ['luxury', 'gourmet', 'classic'] },
  { id: 'hobby', name: 'ホビー', icon: '🎮', tags: ['pop', 'collection', 'trend'] },
  { id: 'bag', name: 'バッグ', icon: '👜', tags: ['luxury', 'fashion', 'classic'] },
  { id: 'card', name: 'トレーディングカード', icon: '🃏', tags: ['pop', 'collection', 'trend'] },
  { id: 'antique', name: '骨董', icon: '🏺', tags: ['classic', 'culture', 'rare'] },
  { id: 'memorabilia', name: 'メモラビリア', icon: '🏆', tags: ['collection', 'rare', 'pop'] },
  { id: 'furniture', name: '家具', icon: '🪑', tags: ['design', 'classic', 'culture'] },
  { id: 'instrument', name: '楽器', icon: '🎸', tags: ['culture', 'mechanic', 'vintage'] },
  { id: 'silver', name: 'シルバーアクセサリ', icon: '💍', tags: ['fashion', 'mechanic', 'culture'] },
  { id: 'metal', name: '貴金属', icon: '🥇', tags: ['luxury', 'safe', 'classic'] },
  { id: 'jewelry', name: 'ジュエリー', icon: '💎', tags: ['luxury', 'rare', 'classic'] },
  { id: 'coin', name: 'アンティークコイン', icon: '🪙', tags: ['classic', 'rare', 'collection'] },
  { id: 'art', name: 'アート', icon: '🎨', tags: ['culture', 'design', 'rare'] },
  { id: 'sword', name: '刀剣', icon: '⚔️', tags: ['culture', 'classic', 'rare'] }
];

// ===== STEP 1 Questions: Category Sort (5 questions, 4 choices each) =====
const STEP1_QUESTIONS = [
  {
    q: '投資をする上で、あなたが最も重視するポイントは？',
    opts: [
      { text: 'データと分析に基づいた合理的な判断ができること', category: 'finance' },
      { text: '目に見える実物資産として安心感があること', category: 'realestate' },
      { text: '自分の知識や審美眼が価値の源泉になること', category: 'alternative' },
      { text: 'リスクを分散して安定的にリターンを得ること', category: 'other' }
    ]
  },
  {
    q: '休日の過ごし方として、最も共感するのは？',
    opts: [
      { text: '経済ニュースや市場レポートをチェックする', category: 'finance' },
      { text: '街を歩いて気になるエリアや物件を見て回る', category: 'realestate' },
      { text: 'ギャラリーや専門店を巡り、お気に入りの逸品を探す', category: 'alternative' },
      { text: '幅広いジャンルの本やメディアで教養を深める', category: 'other' }
    ]
  },
  {
    q: '「成功した投資」として最もピンとくるストーリーは？',
    opts: [
      { text: '株式市場のトレンドを読み、タイミング良く売買して利益を得た', category: 'finance' },
      { text: '将来性のあるエリアの物件を購入し、資産価値が大幅に上昇した', category: 'realestate' },
      { text: '目利き力で見つけた希少アイテムが、数年で何倍もの価値になった', category: 'alternative' },
      { text: '複数の資産に分散投資し、安定的に資産が成長した', category: 'other' }
    ]
  },
  {
    q: 'あなたの「投資の武器」になるのは？',
    opts: [
      { text: '数字への強さと論理的な分析力', category: 'finance' },
      { text: '地域情報やトレンドへの感度', category: 'realestate' },
      { text: '特定ジャンルへの深い知識と情熱', category: 'alternative' },
      { text: 'バランス感覚と冷静な判断力', category: 'other' }
    ]
  },
  {
    q: '投資で得たいものは？',
    opts: [
      { text: '効率的な資産の増加とキャピタルゲイン', category: 'finance' },
      { text: '安定したキャッシュフローと資産の確実な成長', category: 'realestate' },
      { text: '所有する喜びと、価値が育つのを見守る充実感', category: 'alternative' },
      { text: 'リスクを抑えた堅実な将来への備え', category: 'other' }
    ]
  }
];

// ===== STEP 2 Questions: Alternative Matching (5 questions) =====
// Each option awards points to specific tags
const STEP2_QUESTIONS = [
  {
    q: 'あなたが「これは素晴らしい」と感じるモノの特徴は？',
    opts: [
      { text: '時を経て味わいが増す、ヴィンテージの風格があるもの', tags: { vintage: 3, classic: 2, culture: 1 } },
      { text: '最先端のトレンドを取り入れた、今を象徴するもの', tags: { trend: 3, fashion: 2, pop: 1 } },
      { text: '職人の技術と魂が宿る、唯一無二の工芸品', tags: { mechanic: 3, culture: 2, rare: 1 } },
      { text: '世界に限られた数しかない、希少性の高いもの', tags: { rare: 3, luxury: 2, collection: 1 } }
    ]
  },
  {
    q: 'コレクションとして所有するなら、どんなジャンルに惹かれますか？',
    opts: [
      { text: 'ファッション・ウェアラブル系（身につけて楽しめるもの）', tags: { fashion: 3, luxury: 1, trend: 1 } },
      { text: 'アート・カルチャー系（知的好奇心を満たすもの）', tags: { culture: 3, design: 2, rare: 1 } },
      { text: 'ホビー・エンタメ系（遊び心があるもの）', tags: { pop: 3, collection: 2, trend: 1 } },
      { text: 'ラグジュアリー・上質系（極上の品質を味わうもの）', tags: { luxury: 3, classic: 2, gourmet: 1 } }
    ]
  },
  {
    q: '投資先としてのアイテムに、最も求める条件は？',
    opts: [
      { text: '市場での流動性が高く、売買しやすいこと', tags: { trend: 2, pop: 2, fashion: 1 } },
      { text: '長期保有で確実に価値が上がる歴史的な裏付け', tags: { classic: 3, rare: 2, culture: 1 } },
      { text: '自分の審美眼で「掘り出し物」を見つけるスリル', tags: { vintage: 2, collection: 2, design: 1 } },
      { text: '所有していること自体がステータスになるブランド力', tags: { luxury: 3, fashion: 1, safe: 1 } }
    ]
  },
  {
    q: 'あなたの「モノを見る目」の特徴を一言で言うと？',
    opts: [
      { text: 'デザインの美しさや造形美に目が利く', tags: { design: 3, culture: 1, mechanic: 1 } },
      { text: '歴史的背景やストーリーに価値を見出す', tags: { culture: 2, classic: 2, rare: 2 } },
      { text: '流行の先を読み、次に来るトレンドを察知する', tags: { trend: 3, pop: 2, fashion: 1 } },
      { text: '素材の質や製造技術の違いがわかる', tags: { mechanic: 3, luxury: 2, gourmet: 1 } }
    ]
  },
  {
    q: '以下の体験で、最もワクワクするのは？',
    opts: [
      { text: 'オークションで狙っていた逸品を競り落とす瞬間', tags: { rare: 3, collection: 2, luxury: 1 } },
      { text: '古着屋やフリマで掘り出し物を発見する喜び', tags: { vintage: 3, fashion: 2, pop: 1 } },
      { text: '工房やアトリエを訪ね、作り手と語り合うひととき', tags: { mechanic: 2, culture: 2, design: 2 } },
      { text: '同じ趣味を持つ仲間と、コレクションを見せ合う場', tags: { collection: 3, pop: 2, trend: 1 } }
    ]
  }
];


// ===== Application State =====
let step1Index = 0;
let step2Index = 0;
const step1Answers = Array(STEP1_QUESTIONS.length).fill(null);
const step2Answers = Array(STEP2_QUESTIONS.length).fill(null);
let lineAdded = false;
let pendingResultType = null; // 'category' or 'alternative'
let pendingCategoryId = null;
let pendingScores = null;

// ===== DOM Elements =====
const heroSection = document.getElementById('hero');
const lineSection = document.getElementById('lineSection');
const quiz1Section = document.getElementById('quiz1');
const quiz2Section = document.getElementById('quiz2');
const resultsSection = document.getElementById('results');
const loadingOverlay = document.getElementById('loadingOverlay');

// Particles
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    p.style.background = Math.random() > 0.5 ? 'var(--accent-gold)' : 'rgba(26,35,126,0.6)';
    container.appendChild(p);
  }
}
initParticles();

// ===== Section Transitions =====
function hideAll() {
  heroSection.style.display = 'none';
  lineSection.classList.remove('active');
  quiz1Section.classList.remove('active');
  quiz2Section.classList.remove('active');
  resultsSection.classList.remove('active');
}

function showLineSection() {
  hideAll();
  lineSection.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onLineAdded() {
  lineAdded = true;
  // Show the pending results after LINE registration
  setTimeout(() => {
    if (pendingResultType === 'alternative') {
      showAlternativeResult();
    } else if (pendingResultType === 'category') {
      showCategoryResult(pendingCategoryId, pendingScores);
    }
  }, 500);
}

function startQuiz() {
  hideAll();
  quiz1Section.classList.add('active');
  step1Index = 0;
  renderStep1();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== STEP 1: Render & Logic =====
function renderStep1() {
  const q = STEP1_QUESTIONS[step1Index];
  const total = STEP1_QUESTIONS.length;

  document.getElementById('progress1Fill').style.width = `${((step1Index + 1) / total) * 100}%`;
  document.getElementById('progress1Current').innerHTML = `<strong>${step1Index + 1}</strong> / ${total}`;

  document.getElementById('btnPrev1').disabled = step1Index === 0;
  document.getElementById('btnNext1').textContent = step1Index === total - 1 ? '結果を見る →' : '次へ →';

  const card = document.getElementById('questionCard1');
  document.getElementById('validationMsg1').classList.remove('show');

  let html = `
    <div class="question-number">Question ${step1Index + 1}</div>
    <div class="question-text">${q.q}</div>
    <div class="options-list">
  `;

  q.opts.forEach((opt, i) => {
    const isSelected = step1Answers[step1Index] === i;
    html += `
      <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectStep1(${i})" id="s1opt-${i}">
        <div class="option-radio">${isSelected ? '<div style="width:6px;height:6px;border-radius:50%;background:#0d1117;"></div>' : ''}</div>
        <div class="option-text">${opt.text}</div>
      </div>
    `;
  });

  html += '</div>';
  card.innerHTML = html;
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = 'slideIn 0.5s ease'; });
}

function selectStep1(index) {
  step1Answers[step1Index] = index;
  document.getElementById('validationMsg1').classList.remove('show');
  // Toggle selected state without re-rendering
  const items = document.querySelectorAll('#questionCard1 .option-item');
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add('selected');
      item.querySelector('.option-radio').innerHTML = '<div style="width:6px;height:6px;border-radius:50%;background:#0d1117;"></div>';
    } else {
      item.classList.remove('selected');
      item.querySelector('.option-radio').innerHTML = '';
    }
  });
}

function prevStep1() {
  if (step1Index > 0) {
    step1Index--;
    renderStep1();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextStep1() {
  if (step1Answers[step1Index] === null) {
    const msg = document.getElementById('validationMsg1');
    msg.textContent = '選択肢を1つ選んでください。';
    msg.classList.add('show');
    return;
  }

  if (step1Index < STEP1_QUESTIONS.length - 1) {
    step1Index++;
    renderStep1();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Calculate STEP 1 results
    const scores = { finance: 0, realestate: 0, alternative: 0, other: 0 };
    STEP1_QUESTIONS.forEach((q, qi) => {
      const choice = step1Answers[qi];
      if (choice !== null) {
        scores[q.opts[choice].category]++;
      }
    });

    // Find top category
    const topCategory = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

    if (topCategory === 'alternative') {
      // Go to STEP 2
      hideAll();
      quiz2Section.classList.add('active');
      step2Index = 0;
      renderStep2();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Store pending result and show LINE gate
      pendingResultType = 'category';
      pendingCategoryId = topCategory;
      pendingScores = scores;
      showLineSection();
    }
  }
}

// ===== STEP 2: Render & Logic =====
function renderStep2() {
  const q = STEP2_QUESTIONS[step2Index];
  const total = STEP2_QUESTIONS.length;

  document.getElementById('progress2Fill').style.width = `${((step2Index + 1) / total) * 100}%`;
  document.getElementById('progress2Current').innerHTML = `<strong>${step2Index + 1}</strong> / ${total}`;

  document.getElementById('btnPrev2').disabled = step2Index === 0;
  document.getElementById('btnNext2').textContent = step2Index === total - 1 ? 'マッチング結果を見る →' : '次へ →';

  const card = document.getElementById('questionCard2');
  document.getElementById('validationMsg2').classList.remove('show');

  let html = `
    <div class="question-number">Question ${step2Index + 1}</div>
    <div class="question-text">${q.q}</div>
    <div class="options-list">
  `;

  q.opts.forEach((opt, i) => {
    const isSelected = step2Answers[step2Index] === i;
    html += `
      <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectStep2(${i})" id="s2opt-${i}">
        <div class="option-radio">${isSelected ? '<div style="width:6px;height:6px;border-radius:50%;background:#0d1117;"></div>' : ''}</div>
        <div class="option-text">${opt.text}</div>
      </div>
    `;
  });

  html += '</div>';
  card.innerHTML = html;
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = 'slideIn 0.5s ease'; });
}

function selectStep2(index) {
  step2Answers[step2Index] = index;
  document.getElementById('validationMsg2').classList.remove('show');
  // Toggle selected state without re-rendering
  const items = document.querySelectorAll('#questionCard2 .option-item');
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add('selected');
      item.querySelector('.option-radio').innerHTML = '<div style="width:6px;height:6px;border-radius:50%;background:#0d1117;"></div>';
    } else {
      item.classList.remove('selected');
      item.querySelector('.option-radio').innerHTML = '';
    }
  });
}

function prevStep2() {
  if (step2Index > 0) {
    step2Index--;
    renderStep2();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextStep2() {
  if (step2Answers[step2Index] === null) {
    const msg = document.getElementById('validationMsg2');
    msg.textContent = '選択肢を1つ選んでください。';
    msg.classList.add('show');
    return;
  }

  if (step2Index < STEP2_QUESTIONS.length - 1) {
    step2Index++;
    renderStep2();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Store pending result and show LINE gate
    pendingResultType = 'alternative';
    showLineSection();
  }
}

// ===== Show Category Result (Finance / Real Estate / Other) =====
function showCategoryResult(categoryId, scores) {
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    const cat = CATEGORIES[categoryId];
    const total = Object.values(scores).reduce((a, b) => a + b, 0);

    document.getElementById('resultSubtitle').textContent = `あなたは「${cat.name}」タイプです`;

    let mainHtml = `
      <div class="main-result-card ${cat.cssClass}">
        <div class="result-icon">${cat.icon}</div>
        <div class="result-category-name" style="color: ${cat.color}">${cat.name}</div>
        <div class="result-category-en" style="color: ${cat.color}80">${cat.nameEn}</div>
        <div class="result-description">${cat.desc}</div>
        <div class="score-bars">
    `;

    const catEntries = [
      { id: 'finance', label: '金融', color: CATEGORIES.finance.color },
      { id: 'realestate', label: '不動産', color: CATEGORIES.realestate.color },
      { id: 'alternative', label: 'オルタナ', color: CATEGORIES.alternative.color },
      { id: 'other', label: 'その他', color: CATEGORIES.other.color }
    ];

    catEntries.forEach(c => {
      const pct = total > 0 ? Math.round((scores[c.id] / total) * 100) : 0;
      mainHtml += `
        <div class="score-bar-item">
          <div class="score-bar-label">${c.label}</div>
          <div class="score-bar-track">
            <div class="score-bar-fill" style="width: 0%; background: ${c.color}" data-width="${pct}%"></div>
          </div>
          <div class="score-bar-value">${pct}%</div>
        </div>
      `;
    });

    mainHtml += '</div></div>';
    document.getElementById('mainResult').innerHTML = mainHtml;
    document.getElementById('altResults').innerHTML = '';

    hideAll();
    resultsSection.classList.add('active');
    loadingOverlay.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Animate score bars
    setTimeout(() => {
      document.querySelectorAll('.score-bar-fill').forEach(el => {
        el.style.width = el.dataset.width;
      });
    }, 300);
  }, 1800);
}

// ===== Show Alternative Result =====
function showAlternativeResult() {
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    // Calculate tag scores
    const tagScores = {};
    STEP2_QUESTIONS.forEach((q, qi) => {
      const choice = step2Answers[qi];
      if (choice !== null) {
        const tags = q.opts[choice].tags;
        Object.entries(tags).forEach(([tag, score]) => {
          tagScores[tag] = (tagScores[tag] || 0) + score;
        });
      }
    });

    // Score each ALT category
    const altScores = ALT_CATEGORIES.map(cat => {
      let score = 0;
      cat.tags.forEach(tag => {
        score += tagScores[tag] || 0;
      });
      return { ...cat, score };
    });

    // Sort by score, take top 3
    altScores.sort((a, b) => b.score - a.score);
    const top3 = altScores.slice(0, 3);
    const maxScore = top3[0].score;

    const cat = CATEGORIES.alternative;
    document.getElementById('resultSubtitle').textContent = `あなたは「${cat.name}」タイプ — おすすめのカテゴリをご紹介`;

    // Main card
    let mainHtml = `
      <div class="main-result-card alternative">
        <div class="result-icon">${cat.icon}</div>
        <div class="result-category-name" style="color: ${cat.color}">${cat.name}</div>
        <div class="result-category-en" style="color: ${cat.color}80">${cat.nameEn}</div>
        <div class="result-description">${cat.desc}</div>
      </div>
    `;
    document.getElementById('mainResult').innerHTML = mainHtml;

    // Alt top 3 cards
    const rankLabels = ['1st Match', '2nd Match', '3rd Match'];
    let altHtml = `
      <div class="alt-results-title">あなたにおすすめの投資カテゴリ TOP 3</div>
      <div class="alt-result-cards">
    `;

    top3.forEach((item, i) => {
      const matchPct = maxScore > 0 ? Math.round((item.score / maxScore) * 100) : 0;
      altHtml += `
        <div class="alt-result-card">
          <div class="alt-rank alt-rank-${i + 1}">${rankLabels[i]}</div>
          <div class="alt-icon">${item.icon}</div>
          <div class="alt-name">${item.name}</div>
          <div class="alt-match-score">適合度 ${matchPct}%</div>
        </div>
      `;
    });

    altHtml += '</div>';
    document.getElementById('altResults').innerHTML = altHtml;

    hideAll();
    resultsSection.classList.add('active');
    loadingOverlay.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 2000);
}

// ===== Retry =====
function retryQuiz() {
  step1Answers.fill(null);
  step2Answers.fill(null);
  step1Index = 0;
  step2Index = 0;
  hideAll();
  heroSection.style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
