#!/usr/bin/env python3
"""Build dictation-data.js from listening-transcripts/lesson-XX.txt."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "listening-transcripts"
OUT = ROOT / "dictation-data.js"

SECTION_TITLES = {
    1: "辨識句意",
    2: "基本問答",
    3: "言談理解",
}

# Protect common abbreviations from sentence splits
ABBREV_PROTECT = [
    (re.compile(r"\bMr\."), "Mr\uE000"),
    (re.compile(r"\bMrs\."), "Mrs\uE000"),
    (re.compile(r"\bMs\."), "Ms\uE000"),
    (re.compile(r"\bDr\."), "Dr\uE000"),
    (re.compile(r"\bSt\."), "St\uE000"),
]


def protect(text: str) -> str:
    for pat, repl in ABBREV_PROTECT:
        text = pat.sub(repl, text)
    return text


def unprotect(text: str) -> str:
    return text.replace("\uE000", ".")


def split_sentences(text: str) -> list[str]:
    text = protect(re.sub(r"\s+", " ", text.strip()))
    if not text:
        return []
    parts = re.split(r"(?<=[.!?])\s+", text)
    out = []
    for p in parts:
        p = unprotect(p.strip())
        if p:
            out.append(p)
    return out


def parse_lesson(path: Path, lesson_num: int) -> dict[str, dict]:
    text = path.read_text(encoding="utf-8")
    # Split into three sections
    m1 = re.search(r"## 一、辨識句意.*?\n", text)
    m2 = re.search(r"## 二、基本問答.*?\n", text)
    m3 = re.search(r"## 三、言談理解.*?\n", text)
    if not (m1 and m2 and m3):
        raise ValueError(f"Missing sections in {path}")

    body1 = text[m1.end() : m2.start()]
    body2 = text[m2.end() : m3.start()]
    body3 = text[m3.end() :]

    bank: dict[str, dict] = {}

    def numbered_lines(body: str) -> list[str]:
        items = []
        for line in body.splitlines():
            line = line.strip()
            m = re.match(r"^(\d+)\.\s+(.+)$", line)
            if m:
                items.append(m.group(2).strip())
        return items

    # Section 1 & 2: one item per numbered sentence
    for sec, body in ((1, body1), (2, body2)):
        key = f"{lesson_num}-{sec}"
        segs = []
        for i, sentence in enumerate(numbered_lines(body), 1):
            segs.append(
                {
                    "id": f"{key}-{i:02d}",
                    "text": sentence,
                    "speak": sentence,
                }
            )
        bank[key] = {
            "id": key,
            "lesson": lesson_num,
            "section": sec,
            "title": f"Lesson {lesson_num}｜{SECTION_TITLES[sec]}",
            "segments": segs,
        }

    # Section 3: dialogue line-by-line (逐句)
    segs3: list[dict] = []
    idx = 0
    current_lines: list[str] = []

    def flush_dialogue_question(qline: str | None) -> None:
        nonlocal idx, current_lines
        for line in current_lines:
            for sent in split_sentences(line):
                idx += 1
                segs3.append(
                    {
                        "id": f"{lesson_num}-3-{idx:02d}",
                        "text": sent,
                        "speak": sent,
                    }
                )
        if qline:
            q = re.sub(r"^\*\*Question:\*\*\s*", "", qline).strip()
            q = re.sub(r"^Question:\s*", "", q, flags=re.I).strip()
            if q:
                idx += 1
                segs3.append(
                    {
                        "id": f"{lesson_num}-3-{idx:02d}",
                        "text": q,
                        "speak": q,
                    }
                )
        current_lines = []

    for line in body3.splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("### Dialogue"):
            flush_dialogue_question(None)
            continue
        if line.startswith("**Question:**") or re.match(r"^Question:", line, re.I):
            flush_dialogue_question(line)
            continue
        current_lines.append(line)
    flush_dialogue_question(None)

    key3 = f"{lesson_num}-3"
    bank[key3] = {
        "id": key3,
        "lesson": lesson_num,
        "section": 3,
        "title": f"Lesson {lesson_num}｜{SECTION_TITLES[3]}",
        "segments": segs3,
    }
    return bank


def main() -> None:
    bank: dict[str, dict] = {}
    for n in range(1, 7):
        path = SRC / f"lesson-{n:02d}.txt"
        bank.update(parse_lesson(path, n))

    # Sort keys like 1-1, 1-2, ... 6-3
    def sort_key(k: str) -> tuple[int, int]:
        a, b = k.split("-")
        return int(a), int(b)

    ordered = {k: bank[k] for k in sorted(bank, key=sort_key)}

    header = (
        "// 南一版 超群新幹線第三冊｜聽寫練習句子\n"
        "// Built from listening-transcripts/lesson-XX.txt by tools/build_dictation_data.py\n"
        "// L-3 = 言談理解逐句；縮寫 apostrophe 顯示但不計分（見前端）\n"
    )
    OUT.write_text(
        header + "const dictationBank = " + json.dumps(ordered, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    total = sum(len(v["segments"]) for v in ordered.values())
    print(f"Wrote {OUT} ({len(ordered)} sections, {total} segments)")
    for k, v in ordered.items():
        print(f"  {k}: {len(v['segments'])} — {v['title']}")


if __name__ == "__main__":
    main()
