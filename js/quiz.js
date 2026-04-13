// ============================================================
// quiz.js – Motor del test
// ============================================================

const Quiz = (() => {
  // ── state ────────────────────────────────────────────────────
  let questions = [];        // pregunta aleatorizadas
  let current   = 0;
  let answered  = 0;
  let correct   = 0;
  let userAnswers = [];      // {q, chosen, correcta}
  let topicLabel = '';

  // ── helpers ──────────────────────────────────────────────────
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── public: start ─────────────────────────────────────────────
  function start(pool, count, label) {
    questions   = shuffle(pool).slice(0, Math.min(count, pool.length));
    current     = 0;
    answered    = 0;
    correct     = 0;
    userAnswers = [];
    topicLabel  = label;
    render();
    navigate('screen-test');
  }

  // ── render question ───────────────────────────────────────────
  function render() {
    const q = questions[current];
    document.getElementById('test-counter').textContent = `${current + 1} / ${questions.length}`;
    document.getElementById('test-topic-label').textContent = topicLabel;

    // progress bar
    const pct = (current / questions.length) * 100;
    document.getElementById('test-progress-fill').style.width = pct + '%';

    // question card
    document.getElementById('question-ref').textContent = q.referencia || '';
    document.getElementById('question-text').textContent = q.pregunta;

    // options
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.opciones.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.id = `opt-${i}`;
      btn.innerHTML = `<span class="option-label">${letters[i]}</span><span class="option-text">${opt}</span>`;
      btn.onclick = () => selectAnswer(i);
      grid.appendChild(btn);
    });

    // hide feedback
    const fb = document.getElementById('answer-feedback');
    fb.style.display = 'none';

    // animate card
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = 'cardIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  // ── select answer ─────────────────────────────────────────────
  function selectAnswer(chosen) {
    const q = questions[current];
    const isCorrect = chosen === q.correcta;
    if (isCorrect) correct++;
    answered++;
    userAnswers.push({ q, chosen, isCorrect });

    // disable all buttons
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correcta) btn.classList.add('correct');
      if (i === chosen && !isCorrect) btn.classList.add('wrong');
    });

    // feedback
    const fb = document.getElementById('answer-feedback');
    fb.style.display = 'block';

    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    const expl = document.getElementById('feedback-explanation');

    if (isCorrect) {
      icon.textContent = '✅';
      title.textContent = '¡Correcto!';
      title.className = 'feedback-title correct-fb';
    } else {
      icon.textContent = '❌';
      title.textContent = `Incorrecto — La respuesta era: ${q.opciones[q.correcta]}`;
      title.className = 'feedback-title wrong-fb';
    }
    expl.textContent = q.explicacion;

    // update last btn text
    const nextBtn = document.getElementById('btn-next');
    nextBtn.textContent = current + 1 < questions.length ? 'Siguiente →' : 'Ver resultados →';
  }

  // ── next question ─────────────────────────────────────────────
  function next() {
    current++;
    if (current < questions.length) {
      render();
    } else {
      showResults();
    }
  }

  // ── show results ──────────────────────────────────────────────
  function showResults() {
    navigate('screen-results');

    const total = questions.length;
    const pct   = Math.round((correct / total) * 100);

    // title
    document.getElementById('results-title').textContent = topicLabel;

    // circle animation
    const circumference = 314;
    const offset = circumference - (pct / 100) * circumference;
    const fill = document.getElementById('score-circle-fill');

    // set gradient stroke
    fill.style.stroke = pct >= 80 ? '#10b981' : pct >= 60 ? '#3b82f6' : pct >= 40 ? '#f59e0b' : '#dc2626';

    setTimeout(() => {
      fill.style.strokeDashoffset = offset;
    }, 100);

    document.getElementById('score-number').textContent = pct + '%';

    // badge
    const badge = document.getElementById('score-badge');
    if (pct >= 80)      { badge.textContent = '🏆 Excelente'; badge.className = 'score-badge excellent'; }
    else if (pct >= 60) { badge.textContent = '👍 Bien';       badge.className = 'score-badge good'; }
    else if (pct >= 40) { badge.textContent = '📚 Mejorable';  badge.className = 'score-badge average'; }
    else                { badge.textContent = '🔄 Repasar';    badge.className = 'score-badge poor'; }

    document.getElementById('score-detail').textContent =
      `${correct} correctas de ${total} preguntas`;

    // save to history
    App.saveResult({ topic: topicLabel, correct, total, pct, date: new Date().toISOString() });
    App.updateStats();

    // review list
    const list = document.getElementById('review-list');
    list.innerHTML = '';
    userAnswers.forEach((entry, idx) => {
      const { q, chosen, isCorrect } = entry;
      const div = document.createElement('div');
      div.className = `review-item${isCorrect ? ' review-correct' : ''}`;
      const letters = ['A','B','C','D'];
      div.innerHTML = `
        <div class="review-q-num">Pregunta ${idx + 1}</div>
        <div class="review-q-text">${q.pregunta}</div>
        <div class="review-answers">
          ${q.opciones.map((opt, i) => {
            let cls = '';
            if (i === q.correcta) cls = 'ra-correct';
            else if (i === chosen && !isCorrect) cls = 'ra-wrong';
            if (cls) return `<div class="review-answer ${cls}">${letters[i]}) ${opt}</div>`;
            return '';
          }).join('')}
        </div>
        ${!isCorrect ? `<div class="review-explanation">💡 ${q.explicacion}</div>` : ''}
      `;
      list.appendChild(div);
    });
  }

  // ── getters for App.js ─────────────────────────────────────────
  function getState() {
    return { questions, topicLabel };
  }

  return { start, next, showResults, getState };
})();

// Global next for button
function nextQuestion() { Quiz.next(); }
