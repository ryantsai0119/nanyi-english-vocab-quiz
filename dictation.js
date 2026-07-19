/**
 * 聽寫練習 Phase 2：Review、語速／聲音／間隔、逐句／整段、再練一次
 * 預設言談理解逐句；' 與 . 顯示／可按鍵但不計分
 */
(function () {
    const SCORE_KEY = 'nanyi_dictation_scores_v1';
    const PREF_KEY = 'nanyi_dictation_prefs_v1';

    let dictSectionId = null;
    let dictPack = null;
    let dictSegments = [];
    let dictIndex = 0;
    let dictScores = []; // parallel to segments; null = not yet scored
    let dictTokens = [];
    let dictLetterPos = 0;
    let dictLetterValues = [];
    let dictChecked = false;
    let dictLooping = false;
    let dictSpeakText = '';
    let dictMode = 'sentence'; // sentence | dialogue

    function $(id) { return document.getElementById(id); }

    function defaultPrefs() {
        return { rate: 0.9, voice: 'auto', gapMs: 400, section3Mode: 'sentence' };
    }
    function loadPrefs() {
        try {
            return Object.assign(defaultPrefs(), JSON.parse(localStorage.getItem(PREF_KEY) || '{}'));
        } catch (e) {
            return defaultPrefs();
        }
    }
    function savePrefs(p) {
        localStorage.setItem(PREF_KEY, JSON.stringify(p));
    }
    function getPrefs() { return loadPrefs(); }
    function setPref(key, value) {
        const p = loadPrefs();
        p[key] = value;
        savePrefs(p);
        return p;
    }

    function scoreKey(sectionId, mode) {
        const pack = dictationBank[sectionId];
        if (pack && pack.hasDialogueMode && mode === 'dialogue') return sectionId + '@dialogue';
        return sectionId;
    }

    function loadScores() {
        try { return JSON.parse(localStorage.getItem(SCORE_KEY) || '{}'); }
        catch (e) { return {}; }
    }
    function saveScores(data) {
        localStorage.setItem(SCORE_KEY, JSON.stringify(data));
    }
    function getBest(sectionId, mode) {
        const s = loadScores()[scoreKey(sectionId, mode || 'sentence')];
        return s && typeof s.best === 'number' ? s.best : null;
    }
    function updateBest(sectionId, mode, avg) {
        const key = scoreKey(sectionId, mode);
        const all = loadScores();
        const prev = all[key];
        if (!prev || avg > prev.best) {
            all[key] = { best: avg, updatedAt: new Date().toISOString() };
            saveScores(all);
            return true;
        }
        return false;
    }

    function tokenize(text) {
        const tokens = [];
        const s = String(text || '');
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            if (/[A-Za-z]/.test(ch)) {
                tokens.push({ type: 'letter', ch: ch.toLowerCase(), display: ch });
            } else if (ch === ' ' || ch === '\t') {
                if (!tokens.length || tokens[tokens.length - 1].type !== 'gap') {
                    tokens.push({ type: 'gap' });
                }
            } else {
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
    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function hideAllMainScreens() {
        ['settings-screen', 'quiz-screen', 'results-screen', 'dictation-picker-screen', 'dictation-screen', 'dictation-results-screen']
            .forEach(id => { const el = $(id); if (el) el.classList.add('hidden'); });
        stopLoop();
    }

    function openDictationPicker() {
        hideAllMainScreens();
        syncPrefControls();
        renderPickerGrid();
        $('dictation-picker-screen').classList.remove('hidden');
    }

    function syncPrefControls() {
        const p = getPrefs();
        const rate = $('dict-pref-rate');
        const voice = $('dict-pref-voice');
        const gap = $('dict-pref-gap');
        const mode = $('dict-pref-mode');
        if (rate) rate.value = String(p.rate);
        if (voice) voice.value = p.voice;
        if (gap) gap.value = String(p.gapMs);
        if (mode) mode.value = p.section3Mode;
    }

    function onPrefChange() {
        const p = getPrefs();
        const rate = $('dict-pref-rate');
        const voice = $('dict-pref-voice');
        const gap = $('dict-pref-gap');
        const mode = $('dict-pref-mode');
        if (rate) p.rate = parseFloat(rate.value);
        if (voice) p.voice = voice.value;
        if (gap) p.gapMs = parseInt(gap.value, 10) || 400;
        if (mode) p.section3Mode = mode.value;
        savePrefs(p);
        renderPickerGrid();
    }

    function sortKeys(keys) {
        return keys.slice().sort((a, b) => {
            const A = dictationBank[a], B = dictationBank[b];
            return (A.sortGroup - B.sortGroup) || (A.sortUnit - B.sortUnit) || (A.section - B.section);
        });
    }

    function renderPickerGrid() {
        const grid = $('dictation-grid');
        if (!grid || typeof dictationBank === 'undefined') return;
        const prefs = getPrefs();
        const keys = sortKeys(Object.keys(dictationBank));
        let html = '';
        let curLabel = null;
        keys.forEach(key => {
            const item = dictationBank[key];
            const label = item.group === 'review' ? `Review ${item.sortUnit}` : `Lesson ${item.sortUnit}`;
            if (label !== curLabel) {
                if (curLabel !== null) html += '</div></div>';
                curLabel = label;
                html += `<div class="mb-4"><p class="text-sm font-bold text-stone-700 mb-2">${label}</p><div class="grid grid-cols-3 gap-2">`;
            }
            const mode = item.hasDialogueMode ? prefs.section3Mode : 'sentence';
            const segs = mode === 'dialogue' && item.dialogueSegments && item.dialogueSegments.length
                ? item.dialogueSegments : item.segments;
            const best = getBest(key, mode);
            const bestLabel = best === null ? '—' : `${best}%`;
            const unit = mode === 'dialogue' ? '段' : '句';
            const modeHint = item.hasDialogueMode
                ? (mode === 'dialogue' ? '整段' : '逐句')
                : '';
            html += `
                <button type="button" class="dict-cell" onclick="Dictation.startSection('${key}')">
                    <span class="dict-cell-id">${key}</span>
                    <span class="dict-cell-sub">${escapeHtml(item.title.split('｜')[1] || '')}${modeHint ? ' · ' + modeHint : ''}</span>
                    <span class="dict-cell-meta">${segs.length} ${unit} · 最高 ${bestLabel}</span>
                </button>`;
        });
        if (curLabel !== null) html += '</div></div>';
        grid.innerHTML = html;
    }

    function resolveSegments(pack) {
        const prefs = getPrefs();
        if (pack.hasDialogueMode && prefs.section3Mode === 'dialogue' && pack.dialogueSegments && pack.dialogueSegments.length) {
            return { mode: 'dialogue', segments: pack.dialogueSegments.slice() };
        }
        return { mode: 'sentence', segments: pack.segments.slice() };
    }

    function startSection(sectionId) {
        const pack = dictationBank[sectionId];
        if (!pack) { alert('此區段尚無句子資料'); return; }
        const resolved = resolveSegments(pack);
        if (!resolved.segments.length) { alert('此區段尚無句子資料'); return; }
        dictSectionId = sectionId;
        dictPack = pack;
        dictMode = resolved.mode;
        dictSegments = resolved.segments;
        dictIndex = 0;
        dictScores = new Array(dictSegments.length).fill(null);
        hideAllMainScreens();
        $('dictation-screen').classList.remove('hidden');
        $('dict-section-title').textContent = pack.title + (dictMode === 'dialogue' ? '（整段）' : '');
        $('dict-section-id').textContent = sectionId;
        $('dict-total').textContent = String(dictSegments.length);
        const modeRow = $('dict-mode-note');
        if (modeRow) {
            modeRow.textContent = dictMode === 'dialogue'
                ? '模式：整段對話循環（可在選課頁改回逐句）'
                : (pack.hasDialogueMode ? '模式：逐句循環（可在選課頁改整段）' : '模式：逐句循環');
        }
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
        $('dict-retry-btn').classList.add('hidden');
        $('dict-reveal').classList.add('hidden');
        renderSlots();
        startLoop(dictSpeakText);
    }

    function renderSlots(mode) {
        const box = $('dict-slots');
        let letterIdx = 0;
        let html = '';
        dictTokens.forEach((t) => {
            if (t.type === 'gap') {
                html += '<span class="word-gap" aria-hidden="true"></span>';
            } else if (t.type === 'punct') {
                html += `<span class="punct-fixed" title="標點不用輸入">${escapeHtml(t.ch)}</span>`;
            } else {
                const val = dictLetterValues[letterIdx] || '';
                let cls = 'letter-slot';
                if (mode === 'result') {
                    cls += val === t.ch ? ' correct' : ' wrong';
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

    function pickVoice(voices, pref) {
        const en = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
        const pool = en.length ? en : voices;
        if (!pool.length) return null;
        const name = (v) => (v.name || '').toLowerCase();
        if (pref === 'female') {
            return pool.find(v => /female|woman|zira|samantha|victoria|karen|moira|fiona|linda|susan/.test(name(v)))
                || pool.find(v => !/male|david|mark|daniel|james|george|fred/.test(name(v)))
                || pool[0];
        }
        if (pref === 'male') {
            return pool.find(v => /male|david|mark|daniel|james|george|fred|alex\b/.test(name(v)))
                || pool[0];
        }
        return pool.find(v => v.lang && v.lang.toLowerCase().startsWith('en-us')) || pool[0];
    }

    function stopLoop() {
        dictLooping = false;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        updateLoopButton(false);
    }

    function updateLoopButton() {
        const btn = $('dict-loop-btn');
        if (!btn) return;
        btn.textContent = dictLooping ? '⏸ 暫停循環' : '▶ 循環播放';
    }

    function startLoop(text) {
        if (!window.speechSynthesis) return;
        const prefs = getPrefs();
        dictLooping = true;
        updateLoopButton();
        window.speechSynthesis.cancel();

        const play = () => {
            if (!dictLooping) return;
            const voices = window.speechSynthesis.getVoices();
            const utterance = new SpeechSynthesisUtterance(text);
            const englishVoice = pickVoice(voices, prefs.voice);
            if (englishVoice) utterance.voice = englishVoice;
            utterance.lang = (englishVoice && englishVoice.lang) || 'en-US';
            utterance.rate = prefs.rate || 0.9;
            const gap = typeof prefs.gapMs === 'number' ? prefs.gapMs : 400;
            utterance.onend = () => {
                if (dictLooping) setTimeout(play, gap);
            };
            utterance.onerror = () => {
                if (dictLooping) setTimeout(play, Math.max(gap, 800));
            };
            window.speechSynthesis.speak(utterance);
        };
        play();
    }

    function toggleLoop() {
        if (dictLooping) stopLoop();
        else startLoop(dictSpeakText);
    }

    function replayOnce() {
        if (!window.speechSynthesis) return;
        const was = dictLooping;
        const prefs = getPrefs();
        dictLooping = false;
        window.speechSynthesis.cancel();
        const voices = window.speechSynthesis.getVoices();
        const utterance = new SpeechSynthesisUtterance(dictSpeakText);
        const englishVoice = pickVoice(voices, prefs.voice);
        if (englishVoice) utterance.voice = englishVoice;
        utterance.lang = (englishVoice && englishVoice.lang) || 'en-US';
        utterance.rate = prefs.rate || 0.9;
        utterance.onend = () => {
            if (was) startLoop(dictSpeakText);
            else updateLoopButton();
        };
        window.speechSynthesis.speak(utterance);
        updateLoopButton();
        if (was) dictLooping = false; // will restart on end
    }

    function handleKey(key) {
        if (dictChecked) return;
        const n = dictLetterValues.length;
        if (!n && key !== 'backspace') return;

        // . and ' : optional keys; punctuation is shown and not scored — ignore for filling
        if (key === '.' || key === "'") {
            return;
        }
        if (key === 'backspace') {
            if (dictLetterPos > 0 && !dictLetterValues[dictLetterPos]) dictLetterPos--;
            dictLetterValues[dictLetterPos] = '';
            renderSlots();
            return;
        }
        if (key === ' ') {
            let letterIdx = 0;
            let target = null;
            let seenCurrent = false;
            for (let i = 0; i < dictTokens.length; i++) {
                const t = dictTokens[i];
                if (t.type === 'letter') {
                    if (letterIdx === dictLetterPos) seenCurrent = true;
                    letterIdx++;
                } else if (t.type === 'gap' && seenCurrent) {
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
        let pct = 100;
        if (total) {
            let ok = 0;
            for (let i = 0; i < total; i++) {
                if ((dictLetterValues[i] || '') === expected[i]) ok++;
            }
            pct = Math.round((ok / total) * 100);
        }
        dictScores[dictIndex] = pct;
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
        $('dict-retry-btn').classList.remove('hidden');
        $('dict-next-btn').classList.remove('hidden');
        $('dict-next-btn').textContent =
            dictIndex >= dictSegments.length - 1 ? '完成本區段' : (dictMode === 'dialogue' ? '下一段' : '下一句');
    }

    /** 再練一次：重作本段，分數以最後一次對答案為準（不另計歷史最高直到區段結束） */
    function retrySegment() {
        dictScores[dictIndex] = null;
        showSegment();
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
        const scored = dictScores.filter(x => typeof x === 'number');
        const avg = scored.length
            ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length)
            : 0;
        const isNew = updateBest(dictSectionId, dictMode, avg);
        hideAllMainScreens();
        $('dictation-results-screen').classList.remove('hidden');
        $('dict-result-title').textContent =
            dictationBank[dictSectionId].title + (dictMode === 'dialogue' ? '（整段）' : '');
        $('dict-result-avg').textContent = String(avg);
        const unit = dictMode === 'dialogue' ? '段' : '句';
        $('dict-result-detail').textContent =
            `共 ${scored.length} ${unit}，平均完成度 ${avg}%` +
            (isNew ? ' · 已更新最高分！' : ` · 最高分仍為 ${getBest(dictSectionId, dictMode)}%`);
        $('dict-result-best').textContent =
            `本區段最高分：${getBest(dictSectionId, dictMode)}%（再練一次只影響區段平均，最高分只在更高時更新）`;
        const list = $('dict-result-list');
        list.innerHTML = dictScores.map((p, i) => {
            const t = dictSegments[i].text;
            const short = t.length > 48 ? t.slice(0, 46) + '…' : t;
            const score = typeof p === 'number' ? `${p}%` : '—';
            return `<div class="dict-result-row"><span>${i + 1}. ${escapeHtml(short)}</span><strong>${score}</strong></div>`;
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

    window.Dictation = {
        openPicker: openDictationPicker,
        startSection,
        toggleLoop,
        replayOnce,
        handleKey,
        checkAnswer,
        retrySegment,
        nextSegment,
        backToPicker,
        backHome,
        onPrefChange,
        isActive() {
            const scr = $('dictation-screen');
            return scr && !scr.classList.contains('hidden');
        },
        isChecked() { return dictChecked; }
    };
})();
