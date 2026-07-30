#!/usr/bin/env python3
"""Build original MCQ bank from vocab-data.js + grammar-data.js (Nanyi Book 3)."""
from __future__ import annotations

import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VOCAB_JS = ROOT / "vocab-data.js"
GRAMMAR_JS = ROOT / "grammar-data.js"
OUT_JS = ROOT / "mcq-data.js"

RNG = random.Random(20260730)  # reproducible


def load_js_object(path: Path, var_name: str) -> dict:
    """Extract a top-level const/var object via Node for faithful parse."""
    import subprocess
    import tempfile

    out = Path(tempfile.gettempdir()) / f"nanyi_{var_name}.json"
    script = f"""
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync({json.dumps(str(path))}, 'utf8');
const ctx = {{}};
vm.runInNewContext(code + '\\nthis.{var_name} = {var_name};', ctx);
fs.writeFileSync({json.dumps(str(out))}, JSON.stringify(ctx.{var_name}), 'utf8');
"""
    subprocess.run(["node", "-e", script], check=True)
    return json.loads(out.read_text(encoding="utf-8"))


def shuffle_options(correct: str, distractors: list[str], k: int = 4) -> tuple[list[str], int]:
    opts = [correct]
    for d in distractors:
        d = d.strip()
        if d and d != correct and d not in opts:
            opts.append(d)
        if len(opts) >= k:
            break
    # pad if needed with generic fillers (should rarely happen)
    fillers = ["(skip)", "N/A", "—", "???"]
    i = 0
    while len(opts) < k:
        opts.append(fillers[i % len(fillers)])
        i += 1
    opts = opts[:k]
    RNG.shuffle(opts)
    return opts, opts.index(correct)


def distractor_words(words: list[dict], correct: dict, field: str, n: int = 8) -> list[str]:
    pool = [w[field] for w in words if w[field] != correct[field]]
    RNG.shuffle(pool)
    return pool[:n]


def make_vocab_zh_en(lesson: str, words: list[dict], wid: int) -> dict | None:
    w = words[wid % len(words)]
    dist = distractor_words(words, w, "en")
    if len(dist) < 3:
        return None
    options, ans = shuffle_options(w["en"], dist)
    return {
        "id": f"L{lesson.split()[-1]}-VZH-{wid:03d}",
        "lesson": lesson,
        "type": "vocab",
        "stem": f"「{w['zh']}」的英文是？",
        "options": options,
        "answer": ans,
        "explain": f"{w['zh']} → {w['en']}",
        "tags": ["zh-en"],
        "source": "auto-vocab",
    }


def make_vocab_en_zh(lesson: str, words: list[dict], wid: int) -> dict | None:
    w = words[wid % len(words)]
    dist = distractor_words(words, w, "zh")
    if len(dist) < 3:
        return None
    options, ans = shuffle_options(w["zh"], dist)
    return {
        "id": f"L{lesson.split()[-1]}-VEN-{wid:03d}",
        "lesson": lesson,
        "type": "vocab",
        "stem": f"What does “{w['en']}” mean?",
        "options": options,
        "answer": ans,
        "explain": f"{w['en']} → {w['zh']}",
        "tags": ["en-zh"],
        "source": "auto-vocab",
    }


def make_cloze(lesson: str, words: list[dict], wid: int) -> dict | None:
    w = words[wid % len(words)]
    sent = (w.get("sentence") or "").strip()
    if "___" not in sent:
        return None
    dist = distractor_words(words, w, "en")
    if len(dist) < 3:
        return None
    options, ans = shuffle_options(w["en"], dist)
    return {
        "id": f"L{lesson.split()[-1]}-CLZ-{wid:03d}",
        "lesson": lesson,
        "type": "cloze",
        "stem": f"選正確的字填入空格：\n{sent}",
        "options": options,
        "answer": ans,
        "explain": f"空格是 {w['en']}（{w['zh']}）。",
        "tags": ["cloze"],
        "source": "auto-vocab",
    }


def section(bank_lesson: dict, typ: str):
    for s in bank_lesson.get("sections") or []:
        if s.get("type") == typ:
            return s
    return None


def make_from_traps(lesson: str, g: dict, start_i: int) -> list[dict]:
    traps_sec = section(g, "traps")
    if not traps_sec:
        return []
    traps = traps_sec.get("traps") or []
    out = []
    wrongs = [t["wrong"] for t in traps]
    for i, t in enumerate(traps):
        right = t["right"]
        # if right has alternatives with "/", take first segment before " / "
        if " / " in right:
            right = right.split(" / ")[0].strip()
        dist = [w for w in wrongs if w != t["wrong"]]
        # also include this trap's wrong as distractor
        dist = [t["wrong"]] + dist
        options, ans = shuffle_options(right, dist)
        out.append(
            {
                "id": f"L{lesson.split()[-1]}-TRP-{start_i + i:03d}",
                "lesson": lesson,
                "type": "grammar",
                "stem": "下列哪一句正確？",
                "options": options,
                "answer": ans,
                "explain": t.get("note") or f"正確：{right}",
                "tags": ["trap"],
                "source": "auto-grammar",
            }
        )
        # second form: identify the wrong one
        options2, ans2 = shuffle_options(t["wrong"], [right] + [w for w in wrongs if w != t["wrong"]])
        out.append(
            {
                "id": f"L{lesson.split()[-1]}-WRG-{start_i + i:03d}",
                "lesson": lesson,
                "type": "grammar",
                "stem": "下列哪一句有錯誤？",
                "options": options2,
                "answer": ans2,
                "explain": t.get("note") or f"錯誤句：{t['wrong']}；應為：{right}",
                "tags": ["find-wrong"],
                "source": "auto-grammar",
            }
        )
    return out


def make_from_examples(lesson: str, g: dict, start_i: int) -> list[dict]:
    ex_sec = section(g, "examples")
    if not ex_sec:
        return []
    items = ex_sec.get("items") or []
    ens = [it["en"] for it in items]
    out = []
    for i, it in enumerate(items):
        note = it.get("note") or ""
        dist = [e for e in ens if e != it["en"]]
        if len(dist) < 3:
            continue
        options, ans = shuffle_options(it["en"], dist)
        stem = f"哪一句符合說明「{note}」？" if note else "選出正確的例句："
        out.append(
            {
                "id": f"L{lesson.split()[-1]}-EX-{start_i + i:03d}",
                "lesson": lesson,
                "type": "grammar",
                "stem": stem,
                "options": options,
                "answer": ans,
                "explain": note or it["en"],
                "tags": ["example"],
                "source": "auto-grammar",
            }
        )
    return out


def make_from_grammar_quiz(lesson: str, g: dict, start_i: int) -> list[dict]:
    quiz_sec = section(g, "quiz")
    if not quiz_sec:
        return []
    out = []
    for i, q in enumerate(quiz_sec.get("quiz") or []):
        opts = list(q.get("options") or [])
        ans = int(q.get("answer", 0))
        # pad to 4 with mutated distractors if only 2 options
        while len(opts) < 4:
            # create mild distractors from wrong option pattern
            base = opts[1 - ans] if len(opts) >= 2 else opts[0] + " ?"
            filler = base
            # slight variation markers
            variants = [
                filler.replace(" was ", " were ") if " was " in filler else filler + " (x)",
                filler.replace(" were ", " was ") if " were " in filler else "Not " + filler[:40],
                filler.replace(" didn't ", " don't ") if " didn't " in filler else filler.replace("Did ", "Does "),
            ]
            for v in variants:
                if v not in opts and len(opts) < 4:
                    opts.append(v)
            if len(opts) < 4:
                opts.append(f"(incorrect) {len(opts)}")
        # remap answer index after padding (answer stays at original index if we only append)
        options = opts[:4]
        # if we padded, answer index unchanged
        out.append(
            {
                "id": f"L{lesson.split()[-1]}-GQ-{start_i + i:03d}",
                "lesson": lesson,
                "type": "grammar",
                "stem": q["q"],
                "options": options,
                "answer": ans if ans < 4 else 0,
                "explain": q.get("explain") or "",
                "tags": ["grammar-quiz"],
                "source": "grammar-bank",
            }
        )
    return out


def build_lesson(lesson: str, words: list[dict], g: dict) -> list[dict]:
    qs: list[dict] = []
    qs.extend(make_from_traps(lesson, g, 1))
    qs.extend(make_from_examples(lesson, g, 1))
    qs.extend(make_from_grammar_quiz(lesson, g, 1))

    # vocab / cloze — generate enough to reach >= 40
    n = len(words)
    for i in range(n):
        for maker in (make_vocab_zh_en, make_vocab_en_zh, make_cloze):
            q = maker(lesson, words, i)
            if q:
                qs.append(q)

    # de-dupe by id
    seen = set()
    uniq = []
    for q in qs:
        if q["id"] in seen:
            continue
        seen.add(q["id"])
        uniq.append(q)

    # if still short, add more cloze/vocab with offset ids
    extra_i = 0
    while len(uniq) < 40 and extra_i < n * 3:
        widx = extra_i % n
        q = make_vocab_zh_en(lesson, words, widx)
        if q:
            q = dict(q)
            q["id"] = f"L{lesson.split()[-1]}-XTRA-{extra_i:03d}"
            if q["id"] not in seen:
                # reshuffle options for variety
                correct = q["options"][q["answer"]]
                others = [o for o in q["options"] if o != correct]
                RNG.shuffle(others)
                opts, ans = shuffle_options(correct, others + distractor_words(words, words[widx], "en"))
                q["options"] = opts
                q["answer"] = ans
                uniq.append(q)
                seen.add(q["id"])
        extra_i += 1

    RNG.shuffle(uniq)
    return uniq


def emit_js(bank: dict) -> str:
    # pretty JSON embedded as JS
    payload = json.dumps(bank, ensure_ascii=False, indent=2)
    counts = {k: len(v) for k, v in bank.items()}
    header = (
        "/**\n"
        " * 課程選擇題題庫（原創／自動產自單字＋文法；非南一官方原卷）\n"
        f" * 題數：{counts}\n"
        " * 重建：python tools/build_mcq_data.py\n"
        " */\n"
        "const mcqBank = "
    )
    return header + payload + ";\n"


def main() -> None:
    word_bank = load_js_object(VOCAB_JS, "wordBank")
    grammar_bank = load_js_object(GRAMMAR_JS, "grammarBank")
    bank = {}
    for lesson, words in word_bank.items():
        g = grammar_bank.get(lesson) or {"sections": []}
        bank[lesson] = build_lesson(lesson, words, g)
    OUT_JS.write_text(emit_js(bank), encoding="utf-8")
    total = sum(len(v) for v in bank.values())
    print("Wrote", OUT_JS)
    for k, v in bank.items():
        print(f"  {k}: {len(v)}")
    print("  TOTAL:", total)


if __name__ == "__main__":
    main()
