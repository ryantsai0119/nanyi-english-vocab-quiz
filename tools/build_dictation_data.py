#!/usr/bin/env python3
"""Build dictation-data.js from listening-transcripts (lessons + reviews)."""

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
    return [unprotect(p.strip()) for p in parts if p.strip()]


def numbered_lines(body: str) -> list[str]:
    items = []
    for line in body.splitlines():
        line = line.strip()
        m = re.match(r"^(\d+)\.\s+(.+)$", line)
        if m:
            items.append(m.group(2).strip())
    return items


def parse_section3(body3: str, key_prefix: str) -> tuple[list[dict], list[dict]]:
    """Return (sentence_segments, dialogue_segments)."""
    segs: list[dict] = []
    dialogues: list[dict] = []
    idx = 0
    d_idx = 0
    current_lines: list[str] = []

    def flush(qline: str | None) -> None:
        nonlocal idx, d_idx, current_lines
        sent_texts: list[str] = []
        for line in current_lines:
            for sent in split_sentences(line):
                sent_texts.append(sent)
                idx += 1
                segs.append({"id": f"{key_prefix}-{idx:02d}", "text": sent, "speak": sent})
        q = ""
        if qline:
            q = re.sub(r"^\*\*Question:\*\*\s*", "", qline).strip()
            q = re.sub(r"^Question:\s*", "", q, flags=re.I).strip()
            if q:
                sent_texts.append(q)
                idx += 1
                segs.append({"id": f"{key_prefix}-{idx:02d}", "text": q, "speak": q})
        if sent_texts:
            d_idx += 1
            joined = " ".join(sent_texts)
            dialogues.append(
                {
                    "id": f"{key_prefix}-D{d_idx:02d}",
                    "text": joined,
                    "speak": joined,
                }
            )
        current_lines = []

    for line in body3.splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("### Dialogue"):
            flush(None)
            continue
        if line.startswith("**Question:**") or re.match(r"^Question:", line, re.I):
            flush(line)
            continue
        current_lines.append(line)
    flush(None)
    return segs, dialogues


def parse_unit(
    path: Path,
    *,
    key_prefix: str,
    title_prefix: str,
    group: str,
    sort_group: int,
    sort_unit: int,
) -> dict[str, dict]:
    text = path.read_text(encoding="utf-8")
    m1 = re.search(r"## 一、辨識句意.*?\n", text)
    m2 = re.search(r"## 二、基本問答.*?\n", text)
    m3 = re.search(r"## 三、言談理解.*?\n", text)
    if not (m1 and m2 and m3):
        raise ValueError(f"Missing sections in {path}")

    body1 = text[m1.end() : m2.start()]
    body2 = text[m2.end() : m3.start()]
    body3 = text[m3.end() :]
    bank: dict[str, dict] = {}

    for sec, body in ((1, body1), (2, body2)):
        key = f"{key_prefix}-{sec}"
        segs = [
            {"id": f"{key}-{i:02d}", "text": s, "speak": s}
            for i, s in enumerate(numbered_lines(body), 1)
        ]
        bank[key] = {
            "id": key,
            "group": group,
            "sortGroup": sort_group,
            "sortUnit": sort_unit,
            "section": sec,
            "title": f"{title_prefix}｜{SECTION_TITLES[sec]}",
            "hasDialogueMode": False,
            "segments": segs,
            "dialogueSegments": [],
        }

    key3 = f"{key_prefix}-3"
    segs3, dlg3 = parse_section3(body3, key3)
    bank[key3] = {
        "id": key3,
        "group": group,
        "sortGroup": sort_group,
        "sortUnit": sort_unit,
        "section": 3,
        "title": f"{title_prefix}｜{SECTION_TITLES[3]}",
        "hasDialogueMode": True,
        "segments": segs3,
        "dialogueSegments": dlg3,
    }
    return bank


def main() -> None:
    bank: dict[str, dict] = {}
    for n in range(1, 7):
        bank.update(
            parse_unit(
                SRC / f"lesson-{n:02d}.txt",
                key_prefix=str(n),
                title_prefix=f"Lesson {n}",
                group="lesson",
                sort_group=0,
                sort_unit=n,
            )
        )
    for n in range(1, 4):
        bank.update(
            parse_unit(
                SRC / f"review-{n:02d}.txt",
                key_prefix=f"R{n}",
                title_prefix=f"Review {n}",
                group="review",
                sort_group=1,
                sort_unit=n,
            )
        )

    def sort_key(k: str) -> tuple:
        item = bank[k]
        return (item["sortGroup"], item["sortUnit"], item["section"])

    ordered = {k: bank[k] for k in sorted(bank, key=sort_key)}

    header = (
        "// 南一版 超群新幹線第三冊｜聽寫練習句子\n"
        "// Built by tools/build_dictation_data.py\n"
        "// 預設 L-3／R*-3 逐句；dialogueSegments = 整段對話模式\n"
        "// 縮寫 apostrophe 顯示但不計分（見前端）\n"
    )
    OUT.write_text(
        header + "const dictationBank = " + json.dumps(ordered, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    total_s = sum(len(v["segments"]) for v in ordered.values())
    total_d = sum(len(v["dialogueSegments"]) for v in ordered.values())
    print(f"Wrote {OUT} ({len(ordered)} sections, {total_s} sentence segs, {total_d} dialogue segs)")
    for k, v in ordered.items():
        extra = f", dlg={len(v['dialogueSegments'])}" if v["hasDialogueMode"] else ""
        print(f"  {k}: {len(v['segments'])}{extra} — {v['title']}")


if __name__ == "__main__":
    main()
