/**
 * 聽寫練習：循環 TTS、字母空格、完成％、區段最高分
 * 依賴：dictation-data.js → dictationBank；頁面需有對應 DOM id
 */
(function () {
    const SCORE_KEY = 'nanyi_dictation_scores_v1';

    let dictSectionId = null;
    let dictSegments = [];
    let dictIndex = 0;
    let dictScores = []; // per-segment percent
    let dictTokens = []; // current sentence tokens
    let dictLetterPos = 0; // index into letter-only list
    let dictLetterValues = []; // user input per letter slot
    let dictChecked = false;
    let dictLooping = false;
    let dictSpeakText = '';

    function $(id) { return document.getElementById(id); }

    function loadScores() {
        try { return JSON.parse(localStorage.getItem(SCORE_KEY) || '{}'); }
        catch (e) { return {}; }
    }
    function saveScores(data) {
        localStorage.setItem(SCORE_KEY, JSON.stringify(data));
    }
    function getBest(sectionId) {
        const s = loadScores()[sectionId];
        return s && typeof s.best === 'number' ? s.best : null;
    }
    function updateBest(sectionId, avg) {
        const all = loadScores();
        const prev = all[sectionId];
        if (!prev || avg > prev.best) {
            all[sectionId] = { best: avg, updatedAt: new Date().toISOString() };
            saveScores(all);
            return true;
        }
        return false;
    }

    /** Tokenize sentence: letter slots + fixed punct + word gaps. Apostrophe is punct (shown, not scored). */
    function tokenize(text) {
        const tokens = [];
        const s = String(text || '');
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            if (/[A-Za-z]/.test(ch)) {
                tokens.push({ type: 'letter', ch: ch.toLowerCase(), display: ch });
            } else if (ch === ' ' || ch === '\t') {
                // collapse spaces into one word gap (avoid duplicates)
                if (!tokens.length || tokens[tokens.length - 1].type !== 'gap') {
                    tokens.push({ type: 'gap' });
                }
            } else {
                // punctuation incl. '
                tokens.push({ type: 'punct', ch });
            }
        }
        return tokens;
    }

    function letterCount(tokens) {
        return tokens.filter(t => t.type === 'letter').length;
    }

    function expectedLetters(tokens) {
        return tokens.filter(t => t.type === 'letter').map(t => t.ch);
    }

    function hideAllMainScreens() {
        ['settings-screen', 'quiz-screen', 'results-screen', 'dictation-picker-screen', 'dictation-screen', 'dictation-results-screen']
            .forEach(id => {
                const el = $(id);
                if (el) el.classList.add('hidden');
            });
        stopLoop();
    }

    function openDictationPicker() {
        hideAllMainScreens();
        renderPickerGrid();
        $('dictation-picker-screen').classList.remove('hidden');
    }

    function renderPickerGrid() {
        const grid = $('dictation-grid');
        if (!grid || typeof dictationBank === 'undefined') return;
        const keys = Object.keys(dictationBank).sort((a, b) => {
            const [la, sa] = a.split('-').map(Number);
            const [lb, sb] = b.split('-').map(Number);
            return la - lb || sa - sb;
        });
        // Group by lesson
        let html = '';
        let curLesson = null;
        keys.forEach(key => {
            const item = dictationBank[key];
            if (item.lesson !== curLesson) {
                if (curLesson !== null) html += '</div>';
                curLesson = item.lesson;
                html += `<div class="mb-4"><p class="text-sm font-bold text-stone-700 mb-2">Lesson ${curLesson}</p><div class="grid grid-cols-3 gap-2">`;
            }
            const best = getBest(key);
            const bestLabel = best === null ? '—' : `${best}%`;
            const n = item.segments.length;
            html += `
                <button type="button" class="dict-cell" onclick="Dictation.startSection('${key}')">
                    <span class="dict-cell-id">${key}</span>
                    <span class="dict-cell-sub">${escapeHtml(item.title.split('｜')[1] || '')}</span>
                    <span class="dict-cell-meta">${n} 句 · 最高 ${bestLabel}</span>
                </button>`;
        });
        if (curLesson !== null) html += '</div></div>';
        grid.innerHTML = html;
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function startSection(sectionId) {
        const pack = dictationBank[sectionId];
        if (!pack || !pack.segments.length) {
            alert('此區段尚無句子資料');
            return;
        }
        dictSectionId = sectionId;
        dictSegments = pack.segments.slice();
        dictIndex = 0;
        dictScores = [];
        hideAllMainScreens();
        $('dictation-screen').classList.remove('hidden');
        $('dict-section-title').textContent = pack.title;
        $('dict-section-id').textContent = sectionId;
        $('dict-total').textContent = String(dictSegments.length);
        showSegment();
    }

    function showSegment() {
        dictChecked = false;
        const seg = dictSegments[dictIndex];
        dictSpeakText = seg.speak || seg.text;
        dictTokens = tokenize(seg.text);
        dictLetterValues = new Array(letterCount(dictTokens)).fill('');
        dictLetterPos = 0;

        $('dict-current').textContent = String(dictIndex + 1);
        $('dict-feedback').classList.add('hidden');
        $('dict-feedback').textContent = '';
        $('dict-check-btn').classList.remove('hidden');
        $('dict-next-btn').classList.add('hidden');
        $('dict-reveal').classList.add('hidden');
        renderSlots();
        updateLoopButton(true);
        // iOS: start on user gesture — startSection is from click; subsequent segments use next click
        startLoop(dictSpeakText);
    }

    function renderSlots(mode) {
        // mode: undefined | 'result'
        const box = $('dict-slots');
        let letterIdx = 0;
        let html = '';
        dictTokens.forEach((t) => {
            if (t.type === 'gap') {
                html += '<span class="word-gap" aria-hidden="true"></span>';
            } else if (t.type === 'punct') {
                html += `<span class="punct-fixed">${escapeHtml(t.ch)}</span>`;
            } else {
                const val = dictLetterValues[letterIdx] || '';
                let cls = 'letter-slot';
                if (mode === 'result') {
                    const ok = val === t.ch;
                    cls += ok ? ' correct' : ' wrong';
                    html += `<span class="${cls}">${escapeHtml(val || '·')}</span>`;
                } else {
                    if (letterIdx === dictLetterPos) cls += ' current';
                    if (val) cls += ' filled';
                    html += `<span class="${cls}">${escapeHtml(val)}</span>`;
                }
                letterIdx++;
            }
        });
        box.innerHTML = html;
    }

    function stopLoop() {
        dictLooping = false;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        updateLoopButton(false);
    }

    function updateLoopButton(playing) {
        const btn = $('dict-loop-btn');
        if (!btn) return;
        btn.textContent = playing && dictLooping ? '⏸ 暫停循環' : '▶ 循環播放';
    }

    function startLoop(text) {
        if (!window.speechSynthesis) return;
        dictLooping = true;
        updateLoopButton(true);
        window.speechSynthesis.cancel();

        const play = () => {
            if (!dictLooping) return;
            const voices = window.speechSynthesis.getVoices();
            const utterance = new SpeechSynthesisUtterance(text);
            const englishVoice = voices.find(v => v.lang && v.lang.startsWith('en-')) || voices[0];
            if (englishVoice) utterance.voice = englishVoice;
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.onend = () => {
                if (dictLooping) setTimeout(play, 450);
            };
            utterance.onerror = () => {
                if (dictLooping) setTimeout(play, 800);
            };
            window.speechSynthesis.speak(utterance);
        };
        play();
    }

    function toggleLoop() {
        if (dictLooping) {
            stopLoop();
        } else {
            startLoop(dictSpeakText);
        }
    }

    function replayOnce() {
        if (!window.speechSynthesis) return;
        const was = dictLooping;
        dictLooping = false;
        window.speechSynthesis.cancel();
        const voices = window.speechSynthesis.getVoices();
        const utterance = new SpeechSynthesisUtterance(dictSpeakText);
        const englishVoice = voices.find(v => v.lang && v.lang.startsWith('en-')) || voices[0];
        if (englishVoice) utterance.voice = englishVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.onend = () => {
            if (was) startLoop(dictSpeakText);
            else updateLoopButton(false);
        };
        window.speechSynthesis.speak(utterance);
        updateLoopButton(was);
    }

    function handleKey(key) {
        if (dictChecked) return;
        const n = dictLetterValues.length;
        if (!n) return;
        if (key === 'backspace') {
            if (dictLetterPos > 0 && !dictLetterValues[dictLetterPos]) {
                dictLetterPos--;
            }
            dictLetterValues[dictLetterPos] = '';
            renderSlots();
            return;
        }
        if (key === ' ') {
            // jump to next word: next letter after a gap
            // find current letter's token index, then next gap then next letter
            let letterIdx = 0;
            let target = null;
            let seenCurrent = false;
            for (let i = 0; i < dictTokens.length; i++) {
                const t = dictTokens[i];
                if (t.type === 'letter') {
                    if (letterIdx === dictLetterPos) seenCurrent = true;
                    letterIdx++;
                } else if (t.type === 'gap' && seenCurrent) {
                    // next letter after this gap
                    let li = 0;
                    for (let j = 0; j < dictTokens.length; j++) {
                        if (dictTokens[j].type === 'letter') {
                            if (j > i) { target = li; break; }
                            li++;
                        }
                    }
                    break;
                }
            }
            if (target !== null) {
                dictLetterPos = Math.min(target, n - 1);
                renderSlots();
            }
            return;
        }
        if (/^[a-z]$/.test(key)) {
            dictLetterValues[dictLetterPos] = key;
            if (dictLetterPos < n - 1) dictLetterPos++;
            renderSlots();
        }
    }

    function checkAnswer() {
        if (dictChecked) return;
        const expected = expectedLetters(dictTokens);
        const total = expected.length;
        if (!total) {
            dictScores.push(100);
            afterCheck(100);
            return;
        }
        let ok = 0;
        for (let i = 0; i < total; i++) {
            if ((dictLetterValues[i] || '') === expected[i]) ok++;
        }
        const pct = Math.round((ok / total) * 100);
        dictScores.push(pct);
        afterCheck(pct);
    }

    function afterCheck(pct) {
        dictChecked = true;
        stopLoop();
        renderSlots('result');
        const fb = $('dict-feedback');
        fb.classList.remove('hidden');
        fb.innerHTML = `本段完成度：<strong class="text-2xl">${pct}%</strong>`;
        const reveal = $('dict-reveal');
        reveal.classList.remove('hidden');
        reveal.textContent = dictSegments[dictIndex].text;
        $('dict-check-btn').classList.add('hidden');
        $('dict-next-btn').classList.remove('hidden');
        $('dict-next-btn').textContent =
            dictIndex >= dictSegments.length - 1 ? '完成本區段' : '下一句';
    }

    function nextSegment() {
        if (!dictChecked) return;
        if (dictIndex >= dictSegments.length - 1) {
            finishSection();
            return;
        }
        dictIndex++;
        showSegment();
    }

    function finishSection() {
        stopLoop();
        const avg = dictScores.length
            ? Math.round(dictScores.reduce((a, b) => a + b, 0) / dictScores.length)
            : 0;
        const isNew = updateBest(dictSectionId, avg);
        hideAllMainScreens();
        $('dictation-results-screen').classList.remove('hidden');
        $('dict-result-title').textContent = dictationBank[dictSectionId].title;
        $('dict-result-avg').textContent = String(avg);
        $('dict-result-detail').textContent =
            `共 ${dictScores.length} 句，平均完成度 ${avg}%` +
            (isNew ? ' · 已更新最高分！' : ` · 最高分仍為 ${getBest(dictSectionId)}%`);
        $('dict-result-best').textContent = `本區段最高分：${getBest(dictSectionId)}%`;
        // list per-segment
        const list = $('dict-result-list');
        list.innerHTML = dictScores.map((p, i) => {
            const t = dictSegments[i].text;
            const short = t.length > 48 ? t.slice(0, 46) + '…' : t;
            return `<div class="dict-result-row"><span>${i + 1}. ${escapeHtml(short)}</span><strong>${p}%</strong></div>`;
        }).join('');
    }

    function backToPicker() {
        stopLoop();
        openDictationPicker();
    }

    function backHome() {
        stopLoop();
        hideAllMainScreens();
        $('settings-screen').classList.remove('hidden');
    }

    // Expose
    window.Dictation = {
        openPicker: openDictationPicker,
        startSection,
        toggleLoop,
        replayOnce,
        handleKey,
        checkAnswer,
        nextSegment,
        backToPicker,
        backHome,
        isActive() {
            const scr = $('dictation-screen');
            return scr && !scr.classList.contains('hidden');
        },
        isChecked() { return dictChecked; }
    };
})();
