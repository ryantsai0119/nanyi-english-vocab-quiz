/**
 * 課程學習：課文（英／中／語音）+ 文法（PTT 風）
 */
(function () {
    const READ_KEY = 'nanyi_learn_reading_v1';
    const GRAM_KEY = 'nanyi_learn_grammar_v1';

    let lesson = 'Lesson 1';
    let subTab = 'grammar'; // grammar | reading
    let readingSectionId = null;
    let showZh = true;

    function $(id) { return document.getElementById(id); }

    function lessons() {
        return Object.keys(grammarBank || {}).sort(
            (a, b) => parseInt(a.replace(/\D/g, ''), 10) - parseInt(b.replace(/\D/g, ''), 10)
        );
    }

    function loadSet(key) {
        try { return JSON.parse(localStorage.getItem(key) || '{}'); }
        catch (e) { return {}; }
    }
    function saveSet(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    function isRead(key, id) {
        return !!loadSet(key)[id];
    }
    function markRead(key, id, on) {
        const all = loadSet(key);
        if (on) all[id] = true;
        else delete all[id];
        saveSet(key, all);
    }

    function getVoices() {
        if (typeof voices !== 'undefined' && voices && voices.length) return voices;
        if (window.speechSynthesis) return window.speechSynthesis.getVoices() || [];
        return [];
    }

    function speakLang(text, lang) {
        if (!window.speechSynthesis || !text) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        const list = getVoices();
        let voice = null;
        if (lang.startsWith('zh')) {
            voice = list.find(v => /zh-TW|zh-HK|zh_TW/i.test(v.lang))
                || list.find(v => /^zh/i.test(v.lang))
                || list[0];
            u.lang = (voice && voice.lang) || 'zh-TW';
            u.rate = 0.95;
        } else {
            voice = list.find(v => /^en/i.test(v.lang)) || list[0];
            u.lang = (voice && voice.lang) || 'en-US';
            u.rate = 0.9;
        }
        if (voice) u.voice = voice;
        window.speechSynthesis.speak(u);
    }

    function speakEn(text) { speakLang(text, 'en-US'); }
    function speakZh(text) { speakLang(text, 'zh-TW'); }

    function speakSectionLines(lines, lang) {
        if (!window.speechSynthesis || !lines || !lines.length) return;
        window.speechSynthesis.cancel();
        const list = getVoices();
        let i = 0;
        function next() {
            if (i >= lines.length) return;
            const line = lines[i++];
            const text = lang === 'zh' ? line.zh : line.en;
            if (!text) { next(); return; }
            const u = new SpeechSynthesisUtterance(text);
            let voice = null;
            if (lang === 'zh') {
                voice = list.find(v => /zh-TW|zh-HK|zh_TW/i.test(v.lang))
                    || list.find(v => /^zh/i.test(v.lang));
                u.lang = (voice && voice.lang) || 'zh-TW';
                u.rate = 0.95;
            } else {
                voice = list.find(v => /^en/i.test(v.lang));
                u.lang = (voice && voice.lang) || 'en-US';
                u.rate = 0.9;
            }
            if (voice) u.voice = voice;
            u.onend = () => setTimeout(next, 280);
            u.onerror = () => setTimeout(next, 120);
            window.speechSynthesis.speak(u);
        }
        next();
    }

    function stopSpeak() {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
    }

    function esc(s) {
        return String(s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function populateLessonSelect() {
        const sel = $('learn-lesson-select');
        if (!sel) return;
        sel.innerHTML = lessons().map(l => {
            const g = grammarBank[l];
            const title = (g && g.boardTitle) ? g.boardTitle.replace(/^\[文法速成\]\s*/, '') : l;
            return `<option value="${esc(l)}">${esc(l)}｜${esc(title)}</option>`;
        }).join('');
        if (!lessons().includes(lesson)) lesson = lessons()[0];
        sel.value = lesson;
    }

    function setSubTab(tab) {
        subTab = tab;
        const gBtn = $('learn-sub-grammar');
        const rBtn = $('learn-sub-reading');
        if (gBtn) gBtn.classList.toggle('active', tab === 'grammar');
        if (rBtn) rBtn.classList.toggle('active', tab === 'reading');
        renderBody();
    }

    function onLessonChange() {
        stopSpeak();
        lesson = $('learn-lesson-select').value;
        readingSectionId = null;
        renderBody();
    }

    function renderGrammar() {
        const pack = grammarBank[lesson];
        const box = $('learn-body');
        if (!pack || !box) return;

        const gKey = lesson;
        const done = isRead(GRAM_KEY, gKey);

        let html = '';
        html += `<div class="learn-board">`;
        html += `<p class="learn-board-title">${esc(pack.boardTitle)}</p>`;
        html += `<p class="learn-oneliner"><span>※ 一句話重點</span><br>→ ${esc(pack.oneLiner)}</p>`;
        html += `</div>`;

        html += `<div class="flex justify-between items-center mb-3 mt-3">`;
        html += `<label class="text-sm text-stone-700 font-bold flex items-center gap-2 cursor-pointer">`;
        html += `<input type="checkbox" id="learn-gram-done" ${done ? 'checked' : ''}> 標為已讀完`;
        html += `</label>`;
        html += `<button type="button" class="btn-mini" onclick="Learn.openVocab()">本課單字表</button>`;
        html += `</div>`;

        pack.sections.forEach((sec, idx) => {
            const open = idx < 5 ? 'open' : '';
            html += `<details class="learn-fold" ${open}>`;
            html += `<summary>${esc(sec.heading)}</summary>`;
            html += `<div class="learn-fold-body">`;

            if (sec.type === 'text' || sec.type === 'list') {
                const tag = sec.type === 'list' ? 'ul' : 'div';
                html += `<${tag} class="${sec.type === 'list' ? 'learn-list' : 'learn-paras'}">`;
                (sec.body || []).forEach(line => {
                    if (sec.type === 'list') html += `<li>${esc(line)}</li>`;
                    else html += `<p>${esc(line)}</p>`;
                });
                html += `</${tag}>`;
            } else if (sec.type === 'examples') {
                html += `<div class="space-y-2">`;
                (sec.items || []).forEach((it, i) => {
                    html += `<div class="learn-ex">`;
                    html += `<div class="flex items-start gap-2">`;
                    html += `<button type="button" class="btn-speak shrink-0" title="播放英文" data-speak-en="${esc(it.en)}">EN</button>`;
                    html += `<div><p class="font-bold text-stone-900">${esc(it.en)}</p>`;
                    if (it.note) html += `<p class="text-xs text-stone-500 mt-0.5">${esc(it.note)}</p>`;
                    html += `</div></div></div>`;
                });
                html += `</div>`;
            } else if (sec.type === 'traps') {
                (sec.traps || []).forEach(t => {
                    html += `<div class="learn-trap">`;
                    html += `<p class="trap-bad">✗ ${esc(t.wrong)}</p>`;
                    html += `<p class="trap-ok">✓ ${esc(t.right)}</p>`;
                    if (t.note) html += `<p class="text-xs text-stone-500 mt-1">${esc(t.note)}</p>`;
                    html += `</div>`;
                });
            } else if (sec.type === 'quiz') {
                (sec.quiz || []).forEach((q, qi) => {
                    html += `<div class="learn-quiz" data-qi="${qi}">`;
                    html += `<p class="font-bold text-stone-800 mb-2">${qi + 1}. ${esc(q.q)}</p>`;
                    (q.options || []).forEach((opt, oi) => {
                        html += `<button type="button" class="learn-quiz-opt" data-qi="${qi}" data-oi="${oi}">${esc(opt)}</button>`;
                    });
                    html += `<p class="learn-quiz-explain hidden text-sm mt-2"></p>`;
                    html += `</div>`;
                });
            }

            html += `</div></details>`;
        });

        html += `<p class="text-xs text-stone-400 mt-4 text-center">推推：讀完先會造 3 句再說細節</p>`;
        box.innerHTML = html;

        const cb = $('learn-gram-done');
        if (cb) {
            cb.onchange = () => markRead(GRAM_KEY, gKey, cb.checked);
        }

        box.querySelectorAll('[data-speak-en]').forEach(btn => {
            btn.addEventListener('click', () => speakEn(btn.getAttribute('data-speak-en')));
        });

        box.querySelectorAll('.learn-quiz-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                const qi = parseInt(btn.getAttribute('data-qi'), 10);
                const oi = parseInt(btn.getAttribute('data-oi'), 10);
                const q = pack.sections.find(s => s.type === 'quiz').quiz[qi];
                const wrap = btn.closest('.learn-quiz');
                wrap.querySelectorAll('.learn-quiz-opt').forEach(b => {
                    b.disabled = true;
                    const bOi = parseInt(b.getAttribute('data-oi'), 10);
                    if (bOi === q.answer) b.classList.add('correct');
                    else if (bOi === oi) b.classList.add('wrong');
                });
                const ex = wrap.querySelector('.learn-quiz-explain');
                const ok = oi === q.answer;
                ex.textContent = (ok ? '✓ 答對！' : '✗ 再看一下：') + ' ' + (q.explain || '');
                ex.className = 'learn-quiz-explain text-sm mt-2 ' + (ok ? 'result-ok' : 'result-bad');
                ex.classList.remove('hidden');
            });
        });
    }

    function renderReadingList() {
        const pack = readingBank[lesson];
        const box = $('learn-body');
        if (!pack || !box) return;

        if (!readingSectionId && pack.sections.length) {
            readingSectionId = pack.sections[0].id;
        }

        const sec = pack.sections.find(s => s.id === readingSectionId) || pack.sections[0];
        readingSectionId = sec.id;

        let html = '';
        html += `<p class="text-sm font-black text-stone-900 mb-1">${esc(pack.title)}</p>`;
        html += `<p class="text-xs text-stone-500 mb-3">${esc(pack.note || '')}</p>`;

        html += `<div class="learn-sec-nav mb-3">`;
        pack.sections.forEach(s => {
            const active = s.id === readingSectionId ? 'active' : '';
            const done = isRead(READ_KEY, s.id) ? '✓ ' : '';
            html += `<button type="button" class="learn-sec-chip ${active}" data-sid="${esc(s.id)}">${done}${esc(s.title)}</button>`;
        });
        html += `</div>`;

        html += `<div class="flex flex-wrap gap-2 mb-3 items-center">`;
        html += `<label class="text-sm text-stone-700 font-bold flex items-center gap-1 cursor-pointer">`;
        html += `<input type="checkbox" id="learn-show-zh" ${showZh ? 'checked' : ''}> 顯示中文`;
        html += `</label>`;
        html += `<button type="button" class="btn-mini" id="learn-play-en">▶ 朗讀英文</button>`;
        html += `<button type="button" class="btn-mini" id="learn-play-zh">▶ 朗讀中文</button>`;
        html += `<button type="button" class="btn-mini" id="learn-stop">停止</button>`;
        html += `</div>`;

        html += `<div class="space-y-3 mb-3">`;
        sec.lines.forEach((line, i) => {
            html += `<div class="learn-line">`;
            html += `<div class="flex items-start gap-2">`;
            html += `<span class="learn-line-no">${i + 1}</span>`;
            html += `<div class="flex-1 min-w-0">`;
            html += `<p class="learn-line-en">${esc(line.en)}</p>`;
            if (showZh) html += `<p class="learn-line-zh">${esc(line.zh)}</p>`;
            html += `</div>`;
            html += `<div class="flex flex-col gap-1 shrink-0">`;
            html += `<button type="button" class="btn-speak" title="英文" data-en="${esc(line.en)}">EN</button>`;
            if (showZh) html += `<button type="button" class="btn-speak" title="中文" data-zh="${esc(line.zh)}">中</button>`;
            html += `</div></div></div>`;
        });
        html += `</div>`;

        const done = isRead(READ_KEY, sec.id);
        html += `<label class="text-sm text-stone-700 font-bold flex items-center gap-2 cursor-pointer mb-3">`;
        html += `<input type="checkbox" id="learn-read-done" ${done ? 'checked' : ''}> 本區段已讀`;
        html += `</label>`;

        const idx = pack.sections.findIndex(s => s.id === sec.id);
        html += `<div class="flex gap-2">`;
        if (idx > 0) {
            html += `<button type="button" class="btn btn-secondary flex-1" id="learn-prev-sec">上一區段</button>`;
        }
        if (idx < pack.sections.length - 1) {
            html += `<button type="button" class="btn btn-primary flex-1" id="learn-next-sec">下一區段</button>`;
        } else {
            html += `<button type="button" class="btn btn-primary flex-1" onclick="Learn.setSubTab('grammar')">去看文法</button>`;
        }
        html += `</div>`;

        box.innerHTML = html;

        box.querySelectorAll('.learn-sec-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                stopSpeak();
                readingSectionId = btn.getAttribute('data-sid');
                renderReadingList();
            });
        });
        const zhCb = $('learn-show-zh');
        if (zhCb) zhCb.onchange = () => { showZh = zhCb.checked; renderReadingList(); };
        const doneCb = $('learn-read-done');
        if (doneCb) doneCb.onchange = () => {
            markRead(READ_KEY, sec.id, doneCb.checked);
            renderReadingList();
        };
        const playEn = $('learn-play-en');
        if (playEn) playEn.onclick = () => speakSectionLines(sec.lines, 'en');
        const playZh = $('learn-play-zh');
        if (playZh) playZh.onclick = () => speakSectionLines(sec.lines, 'zh');
        const stop = $('learn-stop');
        if (stop) stop.onclick = stopSpeak;
        box.querySelectorAll('[data-en]').forEach(b => b.addEventListener('click', () => speakEn(b.getAttribute('data-en'))));
        box.querySelectorAll('[data-zh]').forEach(b => b.addEventListener('click', () => speakZh(b.getAttribute('data-zh'))));
        const prev = $('learn-prev-sec');
        if (prev) prev.onclick = () => {
            stopSpeak();
            readingSectionId = pack.sections[idx - 1].id;
            renderReadingList();
        };
        const next = $('learn-next-sec');
        if (next) next.onclick = () => {
            stopSpeak();
            readingSectionId = pack.sections[idx + 1].id;
            renderReadingList();
        };
    }

    function renderBody() {
        if (subTab === 'grammar') renderGrammar();
        else renderReadingList();
    }

    function show() {
        populateLessonSelect();
        setSubTab(subTab);
    }

    function openVocab() {
        if (typeof showHomeTab === 'function') {
            showHomeTab('vocab');
            const sel = document.getElementById('vocab-lesson-select');
            if (sel) {
                sel.value = lesson;
                if (typeof renderVocabList === 'function') renderVocabList();
            }
        }
    }

    window.Learn = {
        show,
        onLessonChange,
        setSubTab,
        openVocab,
        stopSpeak
    };
})();
