/* ==========================================================================
   Jericho & Janna — 4th Anniversary Interactive Universe
   Easy customization: edit the data blocks below!
   ========================================================================== */

const CONFIG = {
  // 4th anniversary on 11/26/2026 means starting date is 11/26/2022
  startDate: "2022-11-26T00:00:00",
  // Optional: set to "./assets/our-song.mp3" if you add your own MP3 file
  customAudioUrl: "",
};

const CHAPTERS = [
  {
    year: "Year I • 2022 – 2023",
    title: "The Spark & The Beginning",
    text: "Everything started on November 26, 2022. From nervous smiles and endless late-night chats to realizing how effortless it felt just being around you—year one was pure magic.",
  },
  {
    year: "Year II • 2023 – 2024",
    title: "Learning & Growing Closer",
    text: "We turned ordinary days into favorite memories—random food trips, inside jokes nobody else understands, and becoming each other's safe space.",
  },
  {
    year: "Year III • 2024 – 2025",
    title: "Stronger Together",
    text: "Through busy seasons and big dreams, you stood by me with patience and warmth. Year three proved that we aren't just in love—we're an unstoppable team.",
  },
  {
    year: "Year IV • 2025 – 2026",
    title: "Four Years & Forever to Go",
    text: "Happy 4th anniversary, Janna! Every milestone with Mornvyr Development, every quiet evening, and every dream ahead feels brighter because I get to share it with you.",
  },
];

// Tip: Add `img: "./assets/photo1.jpg"` to any Polaroid to use your real photos!
const POLAROIDS = [
  {
    caption: "Under the lighthouse lights ♡",
    date: "Year I • Early Days",
    note: "Even behind face masks, I knew right then that looking at you felt like home.",
    emoji: "🌙",
    tag: "Photo 1",
    gradient: "linear-gradient(135deg, #2b224a, #6c4675)",
    img: "./assets/photo1.jpg",
  },
  {
    caption: "On top of the world with you",
    date: "Year II • Mountain Trip",
    note: "Cute faces, mountain air, and my favorite adventure partner right beside me.",
    emoji: "⛰️",
    tag: "Photo 2",
    gradient: "linear-gradient(135deg, #1b2845, #415a77)",
    img: "./assets/photo2.jpg",
  },
  {
    caption: "Proud of you always",
    date: "Year III • Milestone",
    note: "Watching you shine on your big day was one of my proudest moments ever.",
    emoji: "🎓",
    tag: "Photo 3",
    gradient: "linear-gradient(135deg, #3c243b, #a85b6a)",
    img: "./assets/photo3.jpg",
  },
  {
    caption: "Sunny days & palm trees",
    date: "Year IV • 11/26/2026",
    note: "4 years of us—no matter where we go, every trip is paradise with you, Janna!",
    emoji: "🌴",
    tag: "Photo 4",
    gradient: "linear-gradient(135deg, #432818, #99582a)",
    img: "./assets/photo4.jpg",
  },
];

const OPEN_WHEN = [
  {
    icon: "💌",
    title: "Open when you miss me",
    desc: "Tap to read",
    body: "Close your eyes for three seconds and remember: wherever I am right now, you're probably already on my mind. Text me 'miss you' and I'll drop everything as soon as I can.",
  },
  {
    icon: "🌧️",
    title: "Open when you had a long day",
    desc: "Tap to read",
    body: "You worked hard today, love. Take a deep breath, drink some water, and let go of whatever stressed you out. You don't have to carry everything alone—I'm always in your corner.",
  },
  {
    icon: "😊",
    title: "Open when you need a smile",
    desc: "Tap to read",
    body: "Reminder: you are the prettiest, funniest, and most lovable person in my entire universe. Also, I owe you one big hug and your favorite comfort food on demand.",
  },
  {
    icon: "🎂",
    title: "Open on our 4th Anniversary",
    desc: "Tap to read",
    body: "Happy 4th Anniversary, Janna! Thank you for 1,461+ days of patience, laughter, and unconditional love. Keep scrolling to unlock your special Mornvyr Development surprise!",
  },
];

const QUIZ = [
  {
    question: "How many years are we celebrating today (11/26/2026)?",
    options: ["2 Years", "3 Years", "4 Magical Years", "10 Years"],
    answer: 2,
    success: "Four years and counting! ✨",
  },
  {
    question: "What is Jericho's favorite thing to do on a date with you?",
    options: [
      "Anything, as long as you're there",
      "Staring at his phone",
      "Leaving early",
      "None of the above",
    ],
    answer: 0,
    success: "Always you, every single time. ♡",
  },
  {
    question: "Which company is sponsoring today's surprise gift?",
    options: ["Google Drive", "Mornvyr Development", "Apple Inc.", "SpaceX"],
    answer: 1,
    success: "Mornvyr Development's VIP client: Janna! 💼✨",
  },
  {
    question: "Are you ready to unseal your 4th anniversary letter & gift?",
    options: ["Yes, show me!!", "Definitely yes ♡"],
    answer: -1, // Any choice is correct!
    success: "Surprise unlocked! Scroll down & tap the wax seal. 💌",
  },
];

/* ==========================================================================
   1. Interactive Starfield & Firefly Canvas
   ========================================================================== */
function initSkyCanvas() {
  const canvas = document.getElementById("sky-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const pointer = { x: -999, y: -999, active: false };
  const stars = Array.from({ length: 85 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.6 + 0.4,
    alpha: Math.random() * 0.7 + 0.2,
    twinkle: Math.random() * 0.02 + 0.005,
  }));

  const fireflies = Array.from({ length: 24 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 2.4 + 1.4,
    hue: Math.random() > 0.5 ? "247, 217, 180" : "226, 149, 120",
  }));

  const sparkles = [];

  function spawnSparkles(x, y, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = Math.random() * 2.2 + 0.8;
      sparkles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        r: Math.random() * 2.5 + 1.5,
      });
    }
  }

  window.spawnCelebration = (x = width / 2, y = height / 2) => {
    spawnSparkles(x, y, 28);
  };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  });

  window.addEventListener("pointerdown", (e) => {
    spawnSparkles(e.clientX, e.clientY, 6);
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (const s of stars) {
      s.alpha += s.twinkle;
      if (s.alpha > 0.95 || s.alpha < 0.15) s.twinkle *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 250, 240, ${s.alpha})`;
      ctx.fill();
    }

    for (const f of fireflies) {
      if (pointer.active) {
        const dx = pointer.x - f.x;
        const dy = pointer.y - f.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 1) {
          f.vx += (dx / dist) * 0.03;
          f.vy += (dy / dist) * 0.03;
        }
      }
      f.vx *= 0.985;
      f.vy *= 0.985;
      f.x += f.vx;
      f.y += f.vy;

      if (f.x < 0) f.x = width;
      if (f.x > width) f.x = 0;
      if (f.y < 0) f.y = height;
      if (f.y > height) f.y = 0;

      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 5);
      grad.addColorStop(0, `rgba(${f.hue}, 0.9)`);
      grad.addColorStop(1, `rgba(${f.hue}, 0)`);
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    for (let i = sparkles.length - 1; i >= 0; i--) {
      const sp = sparkles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.life -= 0.024;
      if (sp.life <= 0) {
        sparkles.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.r * sp.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247, 217, 180, ${sp.life})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   2. Live "Time Together" Counter
   ========================================================================== */
function initCounter() {
  const start = new Date(CONFIG.startDate).getTime();
  const elYears = document.getElementById("cnt-years");
  const elDays = document.getElementById("cnt-days");
  const elHours = document.getElementById("cnt-hours");
  const elMins = document.getElementById("cnt-mins");
  const elSecs = document.getElementById("cnt-secs");

  function update() {
    const now = Date.now();
    let diff = Math.max(0, Math.floor((now - start) / 1000));

    const years = Math.floor(diff / (365.2425 * 86400));
    diff -= Math.floor(years * 365.2425 * 86400);
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const mins = Math.floor(diff / 60);
    const secs = diff - mins * 60;

    elYears.textContent = String(years);
    elDays.textContent = String(days).padStart(2, "0");
    elHours.textContent = String(hours).padStart(2, "0");
    elMins.textContent = String(mins).padStart(2, "0");
    elSecs.textContent = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. Floating Ambient Music Player (Web Audio API + Optional MP3)
   ========================================================================== */
function initMusicPlayer() {
  const btn = document.getElementById("music-toggle");
  const disc = document.getElementById("vinyl-disc");
  const label = document.getElementById("music-label");

  let playing = false;
  let audioEl = null;
  let audioCtx = null;
  let loopTimer = null;

  const chords = [
    [261.63, 329.63, 392.0, 493.88], // Cmaj7
    [220.0, 261.63, 329.63, 392.0],  // Am7
    [174.61, 220.0, 261.63, 329.63], // Fmaj7
    [196.0, 246.94, 293.66, 392.0],  // G6
  ];
  let chordIdx = 0;

  function playDreamyChord() {
    if (!audioCtx || !playing) return;
    const now = audioCtx.currentTime;
    const notes = chords[chordIdx % chords.length];
    chordIdx++;

    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.14);

      gain.gain.setValueAtTime(0.0001, now + i * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.035, now + i * 0.14 + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.14 + 3.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + i * 0.14);
      osc.stop(now + i * 0.14 + 3.2);
    });
  }

  let hasInteracted = false;

  function setPlaying(nextState) {
    if (playing === nextState) return;
    playing = nextState;
    disc.classList.toggle("spinning", playing);
    label.textContent = playing ? "Playing Melody" : "Play Our Song";

    if (CONFIG.customAudioUrl) {
      if (!audioEl) {
        audioEl = new Audio(CONFIG.customAudioUrl);
        audioEl.loop = true;
      }
      if (playing) {
        audioEl.play().catch(() => {});
      } else {
        audioEl.pause();
      }
      return;
    }

    if (playing) {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      playDreamyChord();
      loopTimer = setInterval(playDreamyChord, 3000);
    } else {
      clearInterval(loopTimer);
    }
  }

  btn.addEventListener("click", () => {
    hasInteracted = true;
    setPlaying(!playing);
  });

  // iOS Safari requires a user gesture before audio plays: auto-start on first tap anywhere
  function handleFirstGesture(e) {
    if (hasInteracted) return;
    hasInteracted = true;
    if (!btn.contains(e.target)) {
      setPlaying(true);
    }
    document.removeEventListener("pointerdown", handleFirstGesture);
    document.removeEventListener("keydown", handleFirstGesture);
  }

  document.addEventListener("pointerdown", handleFirstGesture, { passive: true });
  document.addEventListener("keydown", handleFirstGesture, { passive: true });
}

/* ==========================================================================
   4. Our 4 Chapters Constellation
   ========================================================================== */
function initChapters() {
  const detail = document.getElementById("chapter-detail");
  const nodes = document.querySelectorAll(".star-node");

  function renderChapter(index) {
    const ch = CHAPTERS[index];
    detail.innerHTML = `
      <p class="chapter-meta">${ch.year}</p>
      <h3>${ch.title}</h3>
      <p>${ch.text}</p>
    `;
    nodes.forEach((node, i) => {
      const active = i === index;
      node.classList.toggle("active", active);
      node.setAttribute("aria-selected", String(active));
    });
  }

  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      renderChapter(Number(node.dataset.chapter));
    });
  });

  renderChapter(0);
}

/* ==========================================================================
   5. Flippable 3D Polaroids
   ========================================================================== */
function initPolaroids() {
  const grid = document.getElementById("polaroid-grid");
  const shuffleBtn = document.getElementById("shuffle-polaroids");

  function randomTilt() {
    return (Math.random() * 6 - 3).toFixed(2);
  }

  POLAROIDS.forEach((item) => {
    const scene = document.createElement("div");
    scene.className = "polaroid-scene";
    scene.style.transform = `rotate(${randomTilt()}deg)`;
    scene.style.transition = "transform 0.4s ease";

    const photoContent = item.img
      ? `<img src="${item.img}" alt="${item.caption}" loading="lazy" />`
      : `<div class="polaroid-art" style="background: ${item.gradient}">
           <span class="art-emoji">${item.emoji}</span>
           <span class="art-tag">${item.tag}</span>
         </div>`;

    scene.innerHTML = `
      <div class="polaroid-card">
        <div class="polaroid-face">
          <div class="polaroid-photo">${photoContent}</div>
          <p class="polaroid-caption">${item.caption}</p>
        </div>
        <div class="polaroid-face polaroid-back">
          <span class="polaroid-back-date">${item.date}</span>
          <p class="polaroid-back-note">"${item.note}"</p>
          <span class="polaroid-tap-hint">Tap to flip back</span>
        </div>
      </div>
    `;

    const card = scene.querySelector(".polaroid-card");
    scene.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    grid.appendChild(scene);
  });

  shuffleBtn.addEventListener("click", () => {
    document.querySelectorAll(".polaroid-scene").forEach((scene) => {
      scene.style.transform = `rotate(${randomTilt()}deg)`;
    });
  });
}

/* ==========================================================================
   6. "Open When..." Vault & Modal
   ========================================================================== */
function initVault() {
  const grid = document.getElementById("vault-grid");
  const modal = document.getElementById("letter-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");

  OPEN_WHEN.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "vault-envelope glass-card";
    card.innerHTML = `
      <span class="vault-icon">${item.icon}</span>
      <h3>${item.title}</h3>
      <span>${item.desc}</span>
    `;
    card.addEventListener("click", () => {
      modalTitle.textContent = item.title;
      modalBody.textContent = item.body;
      modal.classList.remove("hidden");
    });
    grid.appendChild(card);
  });

  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

/* ==========================================================================
   7. Mini Quiz & Finale Unlock
   ========================================================================== */
function initQuiz() {
  const card = document.getElementById("quiz-card");
  let step = 0;

  function unlockFinale() {
    document.getElementById("finale").classList.remove("locked");
    document.getElementById("finale-subtitle").textContent =
      "Tap the wax seal below to open your 4th anniversary letter & gift.";
  }

  function renderQuestion() {
    if (step >= QUIZ.length) {
      card.innerHTML = `
        <p class="quiz-progress">All 4 Answered ✨</p>
        <h3 class="quiz-question">You know us so well, Janna!</h3>
        <p class="section-desc" style="margin: 0 0 18px; text-align: left;">
          Your 4th anniversary letter and Mornvyr Development surprise are ready below.
        </p>
        <a href="#finale" class="btn-primary">Go to My Surprise ↓</a>
      `;
      unlockFinale();
      window.spawnCelebration?.();
      return;
    }

    const q = QUIZ[step];
    card.innerHTML = `
      <p class="quiz-progress">Question ${step + 1} of ${QUIZ.length}</p>
      <h3 class="quiz-question">${q.question}</h3>
      <div class="quiz-options">
        ${q.options
          .map((opt, idx) => `<button class="quiz-opt" type="button" data-idx="${idx}">${opt}</button>`)
          .join("")}
      </div>
      <p class="quiz-feedback" id="quiz-feedback"></p>
      <div class="quiz-skip">
        <button type="button" id="quiz-skip-btn">Skip straight to surprise →</button>
      </div>
    `;

    const feedback = document.getElementById("quiz-feedback");
    card.querySelectorAll(".quiz-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.dataset.idx);
        if (q.answer === -1 || chosen === q.answer) {
          btn.classList.add("correct");
          feedback.textContent = q.success;
          setTimeout(() => {
            step++;
            renderQuestion();
          }, 750);
        } else {
          feedback.textContent = "Hehe, try another one love! ♡";
        }
      });
    });

    document.getElementById("quiz-skip-btn").addEventListener("click", () => {
      step = QUIZ.length;
      renderQuestion();
      document.getElementById("finale").scrollIntoView({ behavior: "smooth" });
    });
  }

  renderQuestion();
}

/* ==========================================================================
   8. Wax Seal Envelope + Finger Scratch-Off Gift Check
   ========================================================================== */
function initFinale() {
  const sealBtn = document.getElementById("wax-seal-btn");
  const envelopeWrap = document.getElementById("wax-envelope-wrap");
  const revealed = document.getElementById("finale-revealed");

  sealBtn.addEventListener("click", () => {
    envelopeWrap.classList.add("hidden");
    revealed.classList.remove("hidden");
    window.spawnCelebration?.();
    initScratchCard();
  });
}

function initScratchCard() {
  const canvas = document.getElementById("scratch-canvas");
  const container = document.getElementById("gift-check-container");
  const status = document.getElementById("scratch-status");
  const revealBtn = document.getElementById("reveal-all-btn");
  const ctx = canvas.getContext("2d");

  let isDrawing = false;
  let isCleared = false;

  function setupFoil() {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#e9c496");
    grad.addColorStop(0.5, "#d49a6a");
    grad.addColorStop(1, "#c87d65");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle shimmer pattern
    ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
    for (let x = 16; x < canvas.width; x += 28) {
      for (let y = 16; y < canvas.height; y += 28) {
        ctx.beginPath();
        ctx.arc(x, y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.fillStyle = "#2b1c18";
    ctx.font = "600 18px 'Cormorant Garamond', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ SCRATCH HERE TO REVEAL YOUR GIFT ✨", canvas.width / 2, canvas.height / 2 - 6);
    ctx.font = "400 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Mornvyr Development • 4th Anniversary", canvas.width / 2, canvas.height / 2 + 18);
  }

  function scratchAt(clientX, clientY) {
    if (isCleared) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();
  }

  function checkProgress() {
    if (isCleared) return;
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    const step = 16; // sample every 16th pixel for speed on mobile
    for (let i = 3; i < pixels.length; i += 4 * step) {
      if (pixels[i] < 128) transparent++;
    }
    const ratio = transparent / (pixels.length / (4 * step));
    if (ratio > 0.52) {
      finishReveal();
    }
  }

  function finishReveal() {
    if (isCleared) return;
    isCleared = true;
    canvas.classList.add("cleared");
    status.textContent = "🎉 Happy 4th Anniversary! Screenshot or redeem anytime ♡";
    revealBtn.classList.add("hidden");
    window.spawnCelebration?.();
  }

  canvas.addEventListener("pointerdown", (e) => {
    isDrawing = true;
    scratchAt(e.clientX, e.clientY);
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDrawing) return;
    scratchAt(e.clientX, e.clientY);
  });

  window.addEventListener("pointerup", () => {
    if (!isDrawing) return;
    isDrawing = false;
    checkProgress();
  });

  revealBtn.addEventListener("click", finishReveal);
  setupFoil();
}

/* ==========================================================================
   9. Scroll Reveal Observer
   ========================================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* Boot */
document.addEventListener("DOMContentLoaded", () => {
  initSkyCanvas();
  initCounter();
  initMusicPlayer();
  initChapters();
  initPolaroids();
  initVault();
  initQuiz();
  initFinale();
  initScrollReveal();
});
