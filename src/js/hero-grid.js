/* =============================================================
   hero-grid.js — Animated Grid Pattern (fundo da hero)
   Inspirado no MagicUI AnimatedGridPattern
   ============================================================= */

(function () {
  const canvas = document.getElementById('heroGrid');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const CELL = 40;          // tamanho de cada quadrado
  const NUM_SQUARES = 35;   // quantos quadrados ativos simultâneos
  const MAX_OPACITY = 0.35; // opacidade máxima dos quadrados
  const COLOR = '255, 255, 255'; // branco

  let cols, rows, squares = [], animId;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols = Math.ceil(canvas.width  / CELL) + 1;
    rows = Math.ceil(canvas.height / CELL) + 1;
  }

  function randomSquare() {
    const duration = 2000 + Math.random() * 3000; // 2–5s
    const delay    = Math.random() * 2000;
    return {
      col: Math.floor(Math.random() * cols),
      row: Math.floor(Math.random() * rows),
      opacity: 0,
      dir: 1,          // 1 = fade in, -1 = fade out
      peak: MAX_OPACITY * (0.4 + Math.random() * 0.6),
      speed: MAX_OPACITY / (duration / 16),
      startDelay: delay,
      elapsed: 0,
    };
  }

  function init() {
    squares = Array.from({ length: NUM_SQUARES }, () => randomSquare());
  }

  /* máscara radial central igual ao MagicUI */
  function applyMask() {
    const cx = canvas.width  / 2;
    const cy = canvas.height / 2;
    const r  = Math.min(canvas.width, canvas.height) * 0.55;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0,   'rgba(0,0,0,1)');
    grad.addColorStop(0.7, 'rgba(0,0,0,1)');
    grad.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.globalCompositeOperation = 'destination-in';
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* grid de linhas tênues */
    ctx.strokeStyle = `rgba(${COLOR}, 0.12)`;
    ctx.lineWidth   = 0.5;
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * CELL, 0);
      ctx.lineTo(c * CELL, canvas.height);
      ctx.stroke();
    }
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * CELL);
      ctx.lineTo(canvas.width, r * CELL);
      ctx.stroke();
    }

    /* quadrados animados */
    squares.forEach((sq, i) => {
      if (sq.elapsed < sq.startDelay) {
        sq.elapsed += 16;
        return;
      }

      sq.opacity += sq.speed * sq.dir;

      if (sq.opacity >= sq.peak) {
        sq.opacity = sq.peak;
        sq.dir = -1;
      }
      if (sq.opacity <= 0) {
        squares[i] = randomSquare();
        return;
      }

      ctx.fillStyle = `rgba(${COLOR}, ${sq.opacity})`;
      ctx.fillRect(sq.col * CELL, sq.row * CELL, CELL, CELL);
    });

    applyMask();

    animId = requestAnimationFrame(draw);
  }

  function start() {
    cancelAnimationFrame(animId);
    resize();
    init();
    draw();
  }

  window.addEventListener('resize', () => {
    resize();
    init();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
