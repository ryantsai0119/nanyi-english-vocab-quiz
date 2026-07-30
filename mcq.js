/**
 * 課程選擇題：分課題庫隨機抽題、選後顯示解析、結束計分
 * 資料：mcq-data.js → mcqBank
 */
const Mcq = (() => {
  let quiz = [];
  let index = 0;
  let answers = [];
  let picked = null;
  let revealed = false;

  const settingsScreen = () => document.getElementById("settings-screen");
  const quizScreen = () => document.getElementById("quiz-screen");
  const mcqScreen = () => document.getElementById("mcq-screen");
  const resultsScreen = () => document.getElementById("results-screen");

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function selectedLessons() {
    const box = document.getElementById("lesson-selection-container");
    return Array.from(box.querySelectorAll("input:checked")).map((el) => el.value);
  }

  function start() {
    if (typeof showHomeTab === "function") showHomeTab("quiz");
    const err = document.getElementById("lesson-error");
    const lessons = selectedLessons();
    if (!lessons.length) {
      err.textContent = "請至少選擇一個單元！";
      err.classList.remove("hidden");
      return;
    }
    err.classList.add("hidden");

    if (typeof mcqBank === "undefined") {
      err.textContent = "題庫尚未載入（mcq-data.js）。";
      err.classList.remove("hidden");
      return;
    }

    let pool = [];
    lessons.forEach((name) => {
      pool = pool.concat(mcqBank[name] || []);
    });
    if (!pool.length) {
      err.textContent = "選取範圍內沒有選擇題。";
      err.classList.remove("hidden");
      return;
    }

    const countSel = document.getElementById("question-count").value;
    const max = countSel === "all" ? pool.length : Math.min(parseInt(countSel, 10), pool.length);
    quiz = shuffle(pool).slice(0, max);
    index = 0;
    answers = [];
    picked = null;
    revealed = false;

    settingsScreen().classList.add("hidden");
    quizScreen().classList.add("hidden");
    resultsScreen().classList.add("hidden");
    mcqScreen().classList.remove("hidden");
    document.getElementById("mcq-total").textContent = String(quiz.length);
    render();
  }

  function render() {
    const q = quiz[index];
    picked = null;
    revealed = false;
    document.getElementById("mcq-current").textContent = String(index + 1);
    document.getElementById("mcq-type").textContent = typeLabel(q.type);
    document.getElementById("mcq-stem").textContent = q.stem;
    const feedback = document.getElementById("mcq-feedback");
    feedback.classList.add("hidden");
    feedback.textContent = "";
    const nextBtn = document.getElementById("mcq-next-btn");
    nextBtn.classList.add("hidden");
    nextBtn.textContent = index + 1 >= quiz.length ? "看成績" : "下一題";

    const opts = document.getElementById("mcq-options");
    opts.innerHTML = q.options
      .map(
        (opt, i) =>
          `<button type="button" class="mcq-opt" data-i="${i}" onclick="Mcq.pick(${i})">` +
          `<span class="mcq-opt-letter">${String.fromCharCode(65 + i)}</span>` +
          `<span class="mcq-opt-text">${escapeHtml(opt)}</span></button>`
      )
      .join("");
  }

  function typeLabel(t) {
    return (
      {
        vocab: "單字",
        grammar: "文法",
        cloze: "克漏字",
        dialogue: "對話",
        reading: "文意",
      }[t] || "選擇題"
    );
  }

  function pick(i) {
    if (revealed) return;
    const q = quiz[index];
    picked = i;
    revealed = true;
    const correct = i === q.answer;
    answers.push({
      question: q,
      userAnswer: q.options[i],
      correctAnswer: q.options[q.answer],
      isCorrect: correct,
      quizType: "mcq",
    });

    Array.from(document.querySelectorAll("#mcq-options .mcq-opt")).forEach((btn) => {
      const bi = parseInt(btn.getAttribute("data-i"), 10);
      btn.disabled = true;
      if (bi === q.answer) btn.classList.add("is-correct");
      if (bi === i && !correct) btn.classList.add("is-wrong");
      if (bi === i) btn.classList.add("is-picked");
    });

    const feedback = document.getElementById("mcq-feedback");
    feedback.classList.remove("hidden");
    feedback.className =
      "mcq-feedback " + (correct ? "mcq-feedback-ok" : "mcq-feedback-bad");
    feedback.innerHTML = correct
      ? `<strong>答對了！</strong> ${escapeHtml(q.explain || "")}`
      : `<strong>答錯了。</strong> 正解：${escapeHtml(q.options[q.answer])}<br>${escapeHtml(
          q.explain || ""
        )}`;

    document.getElementById("mcq-next-btn").classList.remove("hidden");
  }

  function next() {
    if (!revealed) return;
    index += 1;
    if (index >= quiz.length) finish();
    else render();
  }

  function finish() {
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const total = answers.length;
    const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    document.getElementById("score").textContent = String(score);
    document.getElementById("score-details").textContent = `答對 ${correctCount} 題中的 ${total} 題`;

    const reviewSection = document.getElementById("review-section");
    const wrong = answers.filter((a) => !a.isCorrect);
    if (!wrong.length) {
      reviewSection.innerHTML =
        '<p class="text-center text-red-700 font-bold text-lg mt-4">全部答對！</p>';
    } else {
      reviewSection.innerHTML =
        '<h3 class="text-lg font-black text-stone-900 mb-2 mt-4">錯題複習</h3>' +
        wrong
          .map(
            (item) => `
        <div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
          <p class="text-xs text-stone-500 mb-1">${escapeHtml(item.question.lesson)} · ${escapeHtml(
              typeLabel(item.question.type)
            )}</p>
          <p class="font-semibold text-stone-900 whitespace-pre-wrap">${escapeHtml(
            item.question.stem
          )}</p>
          <p class="text-sm text-stone-600 mt-1">你的答案：<span class="text-red-600">${escapeHtml(
            item.userAnswer || "（未作答）"
          )}</span></p>
          <p class="text-sm text-stone-600">正確答案：<span class="text-green-700">${escapeHtml(
            item.correctAnswer
          )}</span></p>
          ${
            item.question.explain
              ? `<p class="text-sm text-stone-500 mt-1">解析：${escapeHtml(
                  item.question.explain
                )}</p>`
              : ""
          }
        </div>`
          )
          .join("");
    }

    mcqScreen().classList.add("hidden");
    resultsScreen().classList.remove("hidden");
  }

  function backHome() {
    mcqScreen().classList.add("hidden");
    resultsScreen().classList.add("hidden");
    quizScreen().classList.add("hidden");
    settingsScreen().classList.remove("hidden");
  }

  function isActive() {
    const el = mcqScreen();
    return el && !el.classList.contains("hidden");
  }

  return { start, pick, next, backHome, isActive };
})();
