// ============================================================
// app.js – Navegación, estado y persistencia
// ============================================================

// ── State ─────────────────────────────────────────────────────
let currentParte  = null;   // 1 | 2
let currentTema   = null;   // objeto tema
let currentPool   = [];     // preguntas del test activo
const STORAGE_KEY = 'pxp_progress';

// ── Theme ─────────────────────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('pxp_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = '🌙';
  } else {
    document.body.classList.remove('light-theme');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = '☀️';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('pxp_theme', isLight ? 'light' : 'dark');
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
}

// ── SVG Gradient ──────────────────────────────────────────────
document.querySelector('html').insertAdjacentHTML('afterbegin',
  `<svg width="0" height="0" style="position:absolute">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>`
);

// ── Screens ───────────────────────────────────────────────────
function navigate(screenId, arg) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);

  if (screenId === 'screen-temas' && arg) {
    renderTemas(arg);
  }
}

// ── Temas screen ──────────────────────────────────────────────
function renderTemas(parte) {
  currentParte = parte;
  const data = parte === 1 ? PARTE1 : PARTE2;

  document.getElementById('temas-title').textContent = `Parte ${parte === 1 ? 'I' : 'II'} · ${data.titulo}`;
  document.getElementById('temas-intro-text').textContent = data.descripcion;

  const grid = document.getElementById('temas-grid');
  grid.innerHTML = '';

  const progress = loadProgress();

  data.temas.forEach(tema => {
    const stats = getTopicStats(tema.id, progress);
    const card  = document.createElement('div');
    card.className = `tema-card${stats.pct === 100 ? ' completed' : ''}`;
    card.onclick = () => showFormato(tema);
    card.innerHTML = `
      <div class="tema-card-nq">${tema.preguntas.length} preguntas</div>
      <div class="tema-card-num">${tema.numero}</div>
      <div class="tema-card-name">${tema.titulo}</div>
      <div class="tema-card-stats">
        <div class="tema-mini-bar"><div class="tema-mini-fill" style="width:${stats.pct}%"></div></div>
        <span class="tema-card-pct">${stats.label}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Formato screen ─────────────────────────────────────────────
function showFormato(tema) {
  currentTema = tema;
  document.getElementById('formato-title').textContent = tema.titulo;
  document.getElementById('tema-selected-info').innerHTML = `
    <h3>${tema.numero} · ${tema.titulo}</h3>
    <p>${tema.descripcion}</p>
  `;

  const progress = loadProgress();
  const stats    = getTopicStats(tema.id, progress);
  document.getElementById('tema-stats-box').innerHTML =
    `📊 Progreso: <strong>${stats.label}</strong> · ${tema.preguntas.length} preguntas disponibles`;

  // back button
  document.getElementById('formato-back-btn').onclick = () => navigate('screen-temas');
  navigate('screen-formato');
}

// ── Start test ─────────────────────────────────────────────────
function startTest(count) {
  if (!currentTema) return;
  currentPool = currentTema.preguntas;
  Quiz.start(currentPool, count, `${currentTema.numero} · ${currentTema.titulo.slice(0,30)}…`);
}

function startPartTest() {
  const data = currentParte === 1 ? PARTE1 : PARTE2;
  const all  = data.temas.flatMap(t => t.preguntas);
  currentPool = all;
  Quiz.start(all, 20, `Parte ${currentParte === 1 ? 'I' : 'II'} – Test Completo`);
}

function startRandomTest() {
  const all = [...PARTE1.temas, ...PARTE2.temas].flatMap(t => t.preguntas);
  currentPool = all;
  Quiz.start(all, 20, 'Test Aleatorio · Todo el manual');
}

// ── Retry / new test ──────────────────────────────────────────
function retryTest() {
  const { questions, topicLabel } = Quiz.getState();
  Quiz.start(questions, questions.length, topicLabel);
}

function newTestSameTema() {
  if (currentTema) showFormato(currentTema);
  else navigate('screen-home');
}

// ── Exit modal ─────────────────────────────────────────────────
function confirmExit() {
  document.getElementById('exit-modal').style.display = 'flex';
}

function forceExit() {
  document.getElementById('exit-modal').style.display = 'none';
  navigate('screen-home');
}

// ── History modal ──────────────────────────────────────────────
function showHistory() {
  const modal = document.getElementById('history-modal');
  modal.style.display = 'flex';

  const history = loadHistory();
  const content = document.getElementById('history-content');

  if (!history.length) {
    content.innerHTML = '<div class="history-empty">Aún no has realizado ningún test 🎯</div>';
    return;
  }

  content.innerHTML = history
    .slice().reverse()
    .map(h => {
      const date = new Date(h.date).toLocaleDateString('es-ES', {day:'numeric',month:'short', hour:'2-digit', minute:'2-digit'});
      let cls = h.pct >= 80 ? 'good' : h.pct >= 60 ? 'avg' : 'bad';
      return `
        <div class="history-item">
          <div class="history-topic">${h.topic}</div>
          <div class="history-score ${cls}">${h.pct}%</div>
          <div class="history-date">${date}</div>
        </div>`;
    }).join('');
}

function closeHistory(e) {
  if (!e || e.target === document.getElementById('history-modal')) {
    document.getElementById('history-modal').style.display = 'none';
  }
}

// ── Reset progress ─────────────────────────────────────────────
function resetProgress() {
  if (confirm('¿Seguro que quieres borrar todo el progreso?')) {
    localStorage.removeItem(STORAGE_KEY);
    updateStats();
    showToast('Progreso borrado 🔄');
    renderParteProgress();
  }
}

// ── Persistence ───────────────────────────────────────────────
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function loadHistory() {
  const p = loadProgress();
  return p.history || [];
}

App = {
  saveResult(result) {
    const p = loadProgress();
    p.history = p.history || [];
    p.history.push(result);

    // update per-topic best
    p.topics = p.topics || {};
    if (!p.topics[result.topic] || result.pct > p.topics[result.topic]) {
      p.topics[result.topic] = result.pct;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  },

  updateStats() {
    updateStats();
    renderParteProgress();
  }
};

function updateStats() {
  const history = loadHistory();
  if (!history.length) {
    document.getElementById('stat-total-val').textContent = '0';
    document.getElementById('stat-pct-val').textContent = '—';
    document.getElementById('stat-streak-val').textContent = '0';
    return;
  }

  const totalAnswered = history.reduce((s, h) => s + h.total, 0);
  const totalCorrect  = history.reduce((s, h) => s + h.correct, 0);
  const globalPct     = Math.round((totalCorrect / totalAnswered) * 100);

  document.getElementById('stat-total-val').textContent = totalAnswered;
  document.getElementById('stat-pct-val').textContent   = globalPct + '%';

  // calculate streak (consecutive tests with >= 60%)
  let streak = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].pct >= 60) streak++;
    else break;
  }
  document.getElementById('stat-streak-val').textContent = streak;
}

function renderParteProgress() {
  const progress = loadProgress();
  [PARTE1, PARTE2].forEach((data, idx) => {
    const parte  = idx + 1;
    const totals = { done: 0, total: 0 };
    const history = (progress.history || []).filter(h =>
      data.temas.some(t => h.topic.includes(t.titulo.slice(0,15)))
    );
    const testedTemas = new Set(history.map(h => h.topic));
    const donePct = testedTemas.size > 0
      ? Math.round((history.reduce((s, h) => s + h.pct, 0) / history.length))
      : 0;
    const bar  = document.getElementById(`p${parte}-progress`);
    const lbl  = document.getElementById(`p${parte}-pct`);
    if (bar) bar.style.width = donePct + '%';
    if (lbl) lbl.textContent = donePct > 0 ? `${donePct}% promedio` : 'Sin empezar';
  });
}

function getTopicStats(topicId, progress) {
  const history = (progress.history || []).filter(h => h.topic.includes(topicId.replace('-','')) || true);
  // We just check if there's any stored pct for the topic key
  const p = progress.topics || {};
  const keys = Object.keys(p);
  // try to find matching
  const match = keys.find(k => k.includes(topicId.slice(0,6)));
  if (match) {
    const pct = p[match];
    return { pct, label: `${pct}% mejor` };
  }
  return { pct: 0, label: 'Sin intentar' };
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// ── Init ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateStats();
  renderParteProgress();
});
