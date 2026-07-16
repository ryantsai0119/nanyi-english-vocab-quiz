#!/usr/bin/env python3
"""Build vocab-data.js for 南一版國中二上／八上 (Book 3) from Jutor public vocabulary sheet."""

from __future__ import annotations

import csv
import json
import re
import urllib.request
from pathlib import Path

SHEET_ID = "1wSHAL3piJGEJ8EnoyK_W9kkvL42GQYId35UEhMzHTZY"
CSV_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid=0"
OUT = Path(__file__).resolve().parents[1] / "vocab-data.js"
# 國中二上 = 八上 = Book 3（不是 Book 2／七下）
LABEL_RE = re.compile(r"^N-J-114B3-U(\d+)$")


def clean_zh(zh: str) -> str:
    zh = zh.strip()
    zh = re.sub(r"^\([^)]+\)\s*", "", zh)
    zh = re.sub(r"\s*\(=.*?\)\s*", "", zh)
    return zh.strip()


def blank_sentence(example: str, word: str) -> str:
    if not example:
        return "Fill in: ___"
    pat = re.compile(r"\b" + re.escape(word) + r"\b", re.I)
    if pat.search(example):
        return pat.sub("___", example, count=1)
    if word in example:
        return example.replace(word, "___", 1)
    return example + " ___"


def main() -> None:
    with urllib.request.urlopen(CSV_URL, timeout=60) as resp:
        text = resp.read().decode("utf-8")

    lessons: dict[str, list[dict[str, str]]] = {}
    seen_per_lesson: dict[str, set[str]] = {}
    for row in csv.DictReader(text.splitlines()):
        m = LABEL_RE.fullmatch(row["Label"])
        if not m:
            continue
        key = f"Lesson {m.group(1)}"
        word = row["英文"].strip()
        wkey = word.lower()
        seen = seen_per_lesson.setdefault(key, set())
        if wkey in seen:
            continue
        seen.add(wkey)
        lessons.setdefault(key, []).append(
            {
                "en": word,
                "zh": clean_zh(row["中譯"]),
                "phonetic": (row.get("音標") or "").strip(),
                "sentence": blank_sentence(row["例句"].strip(), word),
            }
        )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    header = (
        "// 南一版 國中英語第三冊（八上／國中二上）｜N-J-114B3-U1–U6\n"
        "// Source: Junyi Jutor vocabulary sheet (publisher=南一, book=3)\n"
        "// 115 學年度沿用 108 課綱同一套八上教材\n"
    )
    OUT.write_text(
        header + "const wordBank = " + json.dumps(lessons, ensure_ascii=False, indent=4) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT} ({sum(len(v) for v in lessons.values())} unique words)")
    for k, v in lessons.items():
        print(f"  {k}: {len(v)}")


if __name__ == "__main__":
    main()
