#!/usr/bin/env python3
"""Build grammar-only MCQ bank from grammar-data.js (+ lesson templates)."""
from __future__ import annotations

import json
import random
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GRAMMAR_JS = ROOT / "grammar-data.js"
OUT_JS = ROOT / "mcq-data.js"
RNG = random.Random(20260730)


def load_js_object(path: Path, var_name: str) -> dict:
    import subprocess

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
        d = (d or "").strip()
        if not d or d == correct or d in opts:
            continue
        opts.append(d)
        if len(opts) >= k:
            break
    fillers = [
        "He go to school yesterday.",
        "She don't likes apples.",
        "They was happy last night.",
        "I am study English now.",
    ]
    i = 0
    while len(opts) < k:
        f = fillers[i % len(fillers)]
        if f not in opts:
            opts.append(f)
        i += 1
    opts = opts[:k]
    RNG.shuffle(opts)
    return opts, opts.index(correct)


def first_right(right: str) -> str:
    if " / " in right:
        return right.split(" / ")[0].strip()
    return right.strip()


def section(g: dict, typ: str):
    for s in g.get("sections") or []:
        if s.get("type") == typ:
            return s
    return None


def q_item(
    lesson: str,
    qid: str,
    stem: str,
    correct: str,
    distractors: list[str],
    explain: str,
    tags: list[str],
) -> dict | None:
    options, ans = shuffle_options(correct, distractors)
    if len(set(options)) < 2:
        return None
    return {
        "id": qid,
        "lesson": lesson,
        "type": "grammar",
        "stem": stem,
        "options": options,
        "answer": ans,
        "explain": explain,
        "tags": tags,
        "source": "grammar",
    }


# --- Per-lesson hand templates (grammar focus, 4 choices) ---

LESSON_TEMPLATES: dict[str, list[dict]] = {
    "Lesson 1": [
        {
            "stem": "選出正確的句子：昨天他很忙。",
            "correct": "He was busy yesterday.",
            "wrong": ["He were busy yesterday.", "He is busy yesterday.", "He be busy yesterday."],
            "explain": "he/she/it → was。",
            "tags": ["be-past"],
        },
        {
            "stem": "選出正確的句子：他們昨晚在家。",
            "correct": "They were at home last night.",
            "wrong": ["They was at home last night.", "They are at home last night.", "They be at home last night."],
            "explain": "they/we/you → were。",
            "tags": ["be-past"],
        },
        {
            "stem": "I / she / it 的 Be 過去式是？",
            "correct": "was",
            "wrong": ["were", "is", "are"],
            "explain": "I/he/she/it → was；you/we/they → were。",
            "tags": ["be-past"],
        },
        {
            "stem": "you / we / they 的 Be 過去式是？",
            "correct": "were",
            "wrong": ["was", "is", "am"],
            "explain": "you/we/they → were。",
            "tags": ["be-past"],
        },
        {
            "stem": "選出正確的否定句：我昨天沒念書。",
            "correct": "I didn't study for the test.",
            "wrong": ["I didn't studied for the test.", "I don't study for the test yesterday.", "I not study for the test."],
            "explain": "didn't + 原形動詞。",
            "tags": ["did-not"],
        },
        {
            "stem": "選出正確的疑問句：她昨天打電話給奶奶嗎？",
            "correct": "Did Mary call her grandma after lunch?",
            "wrong": ["Did Mary called her grandma after lunch?", "Does Mary call her grandma after lunch yesterday?", "Mary did call her grandma after lunch?"],
            "explain": "Did + 主詞 + 原形。",
            "tags": ["did-q"],
        },
        {
            "stem": "規則動詞 share 的過去式是？",
            "correct": "shared",
            "wrong": ["shareed", "sharing", "shares"],
            "explain": "字尾 e 只加 d → shared。",
            "tags": ["ved"],
        },
        {
            "stem": "規則動詞 study 的過去式是？",
            "correct": "studied",
            "wrong": ["studyed", "studying", "studies"],
            "explain": "子音 + y → y 改 i 再 + ed。",
            "tags": ["ved"],
        },
        {
            "stem": "規則動詞 stop 的過去式是？",
            "correct": "stopped",
            "wrong": ["stoped", "stopping", "stops"],
            "explain": "短母音＋子音：雙寫子音再 + ed。",
            "tags": ["ved"],
        },
        {
            "stem": "選出正確句：Andy 昨天和同學分享食物。",
            "correct": "Andy shared his food with his classmates.",
            "wrong": ["Andy share his food with his classmates.", "Andy shares his food with his classmates yesterday.", "Andy sharing his food with his classmates."],
            "explain": "過去式 shared。",
            "tags": ["ved"],
        },
        {
            "stem": "有 didn't 時，後面動詞要用？",
            "correct": "原形動詞（V）",
            "wrong": ["過去式（V-ed）", "現在分詞（V-ing）", "三單現在式（V-s）"],
            "explain": "didn't / Did 後面一律原形。",
            "tags": ["did-not"],
        },
        {
            "stem": "選出錯誤的句子：",
            "correct": "I didn't watched TV.",
            "wrong": ["I didn't watch TV.", "Did she wash her dog?", "He was busy yesterday."],
            "explain": "didn't 後不可再用 watched。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "Was / Were 疑問句的正確語序是？",
            "correct": "Was / Were + 主詞 + …?",
            "wrong": ["主詞 + Was / Were + …?", "Did + Was + 主詞…?", "Be + Did + 主詞…?"],
            "explain": "Be 動詞直接提前。",
            "tags": ["be-q"],
        },
        {
            "stem": "選出正確句：我叔叔十年前是英文老師。",
            "correct": "My uncle was an English teacher ten years ago.",
            "wrong": ["My uncle were an English teacher ten years ago.", "My uncle is an English teacher ten years ago.", "My uncle be an English teacher ten years ago."],
            "explain": "uncle（單數）→ was。",
            "tags": ["be-past"],
        },
        {
            "stem": "一般動詞過去式肯定句公式是？",
            "correct": "S + V-ed + …",
            "wrong": ["S + did + V-ed + …", "S + was + V-ed + …", "S + V-ing + …"],
            "explain": "肯定直接用過去式；否定／疑問才用 did。",
            "tags": ["ved"],
        },
        {
            "stem": "選出正確句：我昨晚看了鬼片。",
            "correct": "I watched a ghost movie last night.",
            "wrong": ["I watch a ghost movie last night.", "I watching a ghost movie last night.", "I did watched a ghost movie last night."],
            "explain": "watch → watched。",
            "tags": ["ved"],
        },
        {
            "stem": "Be 過去式否定，哪個正確？",
            "correct": "He wasn't at school.",
            "wrong": ["He didn't was at school.", "He not was at school.", "He weren't at school."],
            "explain": "be 的否定用 wasn't／weren't，不用 didn't was。",
            "tags": ["be-past"],
        },
        {
            "stem": "選出正確的疑問句：他們開心嗎？（過去）",
            "correct": "Were they happy?",
            "wrong": ["Was they happy?", "Did they were happy?", "They were happy?"],
            "explain": "they → Were。",
            "tags": ["be-q"],
        },
        {
            "stem": "口訣「過去式有 did，後面動詞要？」",
            "correct": "回原形",
            "wrong": ["再加 -ed", "改成 V-ing", "改成 was／were"],
            "explain": "Did / didn't + 原形 V。",
            "tags": ["did-not"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "Did she washed her dog yesterday?",
            "wrong": ["Did she wash her dog yesterday?", "She washed her dog yesterday.", "She didn't wash her dog yesterday."],
            "explain": "Did 後面用原形 wash。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "選出正確句：她昨天洗了狗嗎？",
            "correct": "Did she wash her dog yesterday?",
            "wrong": ["Did she washed her dog yesterday?", "Does she wash her dog yesterday?", "She did washed her dog yesterday?"],
            "explain": "Did + 原形 wash。",
            "tags": ["did-q"],
        },
        {
            "stem": "Be 過去式肯定：主詞複數用？",
            "correct": "were",
            "wrong": ["was", "is", "been"],
            "explain": "you/we/they → were。",
            "tags": ["be-past"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "He were happy yesterday.",
            "wrong": ["He was happy yesterday.", "They were happy yesterday.", "I was busy yesterday."],
            "explain": "He → was。",
            "tags": ["find-wrong"],
        },
    ],
    "Lesson 2": [
        {
            "stem": "go 的過去式是？",
            "correct": "went",
            "wrong": ["goed", "going", "goes"],
            "explain": "不規則：go → went。",
            "tags": ["irregular"],
        },
        {
            "stem": "have 的過去式是？",
            "correct": "had",
            "wrong": ["haved", "has", "having"],
            "explain": "have → had。",
            "tags": ["irregular"],
        },
        {
            "stem": "see 的過去式是？",
            "correct": "saw",
            "wrong": ["seed", "seen", "seeing"],
            "explain": "see → saw（過去分詞才是 seen）。",
            "tags": ["irregular"],
        },
        {
            "stem": "get 的過去式是？",
            "correct": "got",
            "wrong": ["getted", "gotten", "getting"],
            "explain": "get → got。",
            "tags": ["irregular"],
        },
        {
            "stem": "選出正確句：我昨天去看籃球比賽。",
            "correct": "I went to the basketball game yesterday.",
            "wrong": ["I goed to the basketball game yesterday.", "I go to the basketball game yesterday.", "I going to the basketball game yesterday."],
            "explain": "go → went。",
            "tags": ["irregular"],
        },
        {
            "stem": "不規則動詞的否定，哪個正確？",
            "correct": "I didn't go shopping.",
            "wrong": ["I didn't went shopping.", "I don't went shopping.", "I not go shopping yesterday."],
            "explain": "即使是不規則，否定仍 didn't + 原形。",
            "tags": ["did-not"],
        },
        {
            "stem": "「為什麼」開頭的正確語序？",
            "correct": "Why + 助動詞 + 主詞 + 動詞…?",
            "wrong": ["Why + 主詞 + 助動詞 + 動詞…?", "Why + 動詞 + 主詞…?", "Why to + 主詞 + 動詞…?"],
            "explain": "Why did she leave?／Why was he late?",
            "tags": ["why"],
        },
        {
            "stem": "選出正確句：她為什麼沒跟我們逛街？",
            "correct": "Why didn't Sue go shopping with us?",
            "wrong": ["Why Sue didn't went shopping with us?", "Why Sue don't go shopping with us?", "Why didn't Sue went shopping with us?"],
            "explain": "Why + didn't + 原形 go。",
            "tags": ["why"],
        },
        {
            "stem": "表「因為」用哪個？",
            "correct": "because",
            "wrong": ["so", "but", "or"],
            "explain": "because = 因為；so = 所以。",
            "tags": ["because-so"],
        },
        {
            "stem": "表「所以」用哪個？",
            "correct": "so",
            "wrong": ["because", "why", "or"],
            "explain": "so 接結果子句。",
            "tags": ["because-so"],
        },
        {
            "stem": "選出正確句：天氣很好，所以他們去公園。",
            "correct": "The weather was nice, so they walked the dog in the park.",
            "wrong": [
                "The weather was nice because they walked the dog in the park.",
                "The weather was nice, because so they walked the dog.",
                "The weather was nice, so they walk the dog in the park.",
            ],
            "explain": "「所以」用 so；後面也要用過去式。",
            "tags": ["because-so"],
        },
        {
            "stem": "because 後面要接？",
            "correct": "完整子句（含主詞＋動詞）",
            "wrong": ["只有動詞", "只有名詞", "to + V"],
            "explain": "because he was tired（不是 because tired）。",
            "tags": ["because-so"],
        },
        {
            "stem": "選出錯誤用法：",
            "correct": "Because so I was tired.",
            "wrong": ["I was tired, so I went to bed.", "I went to bed because I was tired.", "Why did he cry?"],
            "explain": "because 與 so 不要疊用。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "選出正確句：他很害怕，因為他看了電影。",
            "correct": "He was scared because he watched a movie.",
            "wrong": [
                "He was scared because watched a movie.",
                "He was scared so he watched a movie.（若語意是「因為」）",
                "He was scared because he watch a movie.",
            ],
            "explain": "because 後要有主詞 he。",
            "tags": ["because-so"],
        },
        {
            "stem": "選出正確疑問：他為什麼哭？",
            "correct": "Why is he crying? / Why did he cry?",
            "wrong": ["Why he cry?", "Why he crying?", "Why did he cried?"],
            "explain": "Why 後面要有助動詞／be。",
            "tags": ["why"],
        },
        {
            "stem": "不規則動詞肯定句公式？",
            "correct": "S + 過去式（went / had / saw…）",
            "wrong": ["S + did + 過去式", "S + to + 過去式", "S + was + 過去式（一般動詞）"],
            "explain": "肯定直接用過去式。",
            "tags": ["irregular"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "I didn't went to the park.",
            "wrong": ["I didn't go to the park.", "I went to the park.", "Did you go to the park?"],
            "explain": "didn't 後用 go，不是 went。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "take 的過去式是？",
            "correct": "took",
            "wrong": ["taked", "taken", "taking"],
            "explain": "take → took。",
            "tags": ["irregular"],
        },
        {
            "stem": "come 的過去式是？",
            "correct": "came",
            "wrong": ["comed", "comeed", "coming"],
            "explain": "come → came。",
            "tags": ["irregular"],
        },
        {
            "stem": "make 的過去式是？",
            "correct": "made",
            "wrong": ["maked", "making", "makes"],
            "explain": "make → made。",
            "tags": ["irregular"],
        },
    ],
    "Lesson 3": [
        {
            "stem": "過去進行式公式是？",
            "correct": "S + was / were + V-ing",
            "wrong": ["S + did + V-ing", "S + was / were + V-ed", "S + V-ing + was"],
            "explain": "be 的過去＋現在分詞。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出正確句：我那時正在講電話。",
            "correct": "I was talking on the phone.",
            "wrong": ["I was talk on the phone.", "I were talking on the phone.", "I talking on the phone."],
            "explain": "was + talking。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出正確句：他們那時正在跳舞。",
            "correct": "They were dancing.",
            "wrong": ["They was dancing.", "They were dance.", "They dancing."],
            "explain": "they → were + V-ing。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出正確句：昨晚七點你在做什麼？",
            "correct": "What were you doing at seven last night?",
            "wrong": ["What did you doing at seven last night?", "What was you doing at seven last night?", "What you were doing at seven last night?"],
            "explain": "What + were + you + doing…",
            "tags": ["past-continuous"],
        },
        {
            "stem": "when 子句常接哪種時態（突然插入的事）？",
            "correct": "過去式",
            "wrong": ["過去進行式為主", "現在簡單式", "未來式"],
            "explain": "when 常接較短／突然的過去式。",
            "tags": ["when"],
        },
        {
            "stem": "while 子句常接？",
            "correct": "過去進行（較長、正在進行）",
            "wrong": ["只有未來式", "只有原形動詞", "只有現在完成"],
            "explain": "while + was/were + V-ing。",
            "tags": ["while"],
        },
        {
            "stem": "選出正確句：我們經過時，有些學生正在爬樹。",
            "correct": "Some students were climbing a tree when we passed by.",
            "wrong": [
                "Some students climbed a tree when we were pass by.",
                "Some students were climb a tree when we passed by.",
                "Some students was climbing a tree when we passed by.",
            ],
            "explain": "正在爬 = were climbing；經過 = passed。",
            "tags": ["when"],
        },
        {
            "stem": "Before 的意思是？",
            "correct": "在…之前",
            "wrong": ["在…之後", "當…的時候", "因為"],
            "explain": "before = 之前；after = 之後。",
            "tags": ["before-after"],
        },
        {
            "stem": "After 的意思是？",
            "correct": "在…之後",
            "wrong": ["在…之前", "雖然", "所以"],
            "explain": "after = 之後。",
            "tags": ["before-after"],
        },
        {
            "stem": "選出正確句：她喝完熱茶之後吃了麵包。",
            "correct": "After she drank a cup of hot tea, she ate some bread.",
            "wrong": [
                "Before she drank a cup of hot tea, she ate some bread.",
                "After she drink a cup of hot tea, she ate some bread.",
                "After she drank a cup of hot tea, she eat some bread.",
            ],
            "explain": "先喝再吃 → After；子句也用過去式。",
            "tags": ["before-after"],
        },
        {
            "stem": "選出正確句：男孩出門前，爸爸回來了。",
            "correct": "Before the boy went out, his father came back.",
            "wrong": [
                "After the boy went out, his father came back.（若語意是「出門前」）",
                "Before the boy go out, his father came back.",
                "Before the boy went out, his father come back.",
            ],
            "explain": "before + 過去式。",
            "tags": ["before-after"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "I was talk on the phone.",
            "wrong": ["I was talking on the phone.", "They were singing in the garden.", "What were you doing?"],
            "explain": "要 V-ing：talking。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "過去進行否定，哪個正確？",
            "correct": "She wasn't sleeping.",
            "wrong": ["She didn't was sleeping.", "She not was sleeping.", "She weren't sleeping."],
            "explain": "wasn't / weren't + V-ing。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出正確疑問：那時他們在唱歌嗎？",
            "correct": "Were they singing?",
            "wrong": ["Was they singing?", "Did they singing?", "They were singing?"],
            "explain": "Were + 主詞 + V-ing。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "After she drink tea, she ate bread.",
            "wrong": ["After she drank tea, she ate bread.", "Before she went out, he came back.", "I was talking before lunch."],
            "explain": "時間子句要用過去式 drank。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "口訣：正在做用？打斷它的那下常用？",
            "correct": "-ing；when + 過去式",
            "wrong": ["-ed；while + 原形", "to V；after + 未來", "did；because + 名詞"],
            "explain": "過去進行 + when + 過去式很常見。",
            "tags": ["when"],
        },
        {
            "stem": "選出正確句：午餐前我和 Jack 正在講電話。",
            "correct": "I was talking on it with Jack before lunch.",
            "wrong": ["I talking on it with Jack before lunch.", "I was talk on it with Jack before lunch.", "I were talking on it with Jack before lunch."],
            "explain": "was + talking。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "選出正確句：他們在花園裡又唱又跳。",
            "correct": "They were singing and dancing in the garden.",
            "wrong": ["They was singing and dancing in the garden.", "They were sing and dance in the garden.", "They singing and dancing in the garden."],
            "explain": "were + V-ing。",
            "tags": ["past-continuous"],
        },
        {
            "stem": "When I ______, he left.（我到達時）",
            "correct": "arrived",
            "wrong": ["was arrive", "arriving", "am arrived"],
            "explain": "when 子句常用過去式 arrived。",
            "tags": ["when"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "They was dancing.",
            "wrong": ["They were dancing.", "She was climbing.", "We were talking."],
            "explain": "they → were。",
            "tags": ["find-wrong"],
        },
    ],
    "Lesson 4": [
        {
            "stem": "want / plan / decide / need 後面通常接？",
            "correct": "to V",
            "wrong": ["V-ing（為唯一正確）", "V-ed", "原形且不加 to"],
            "explain": "want to go；decide to leave。",
            "tags": ["to-v"],
        },
        {
            "stem": "enjoy / finish / practice / give up 後面通常接？",
            "correct": "V-ing",
            "wrong": ["to V（為唯一正確）", "V-ed", "was + V"],
            "explain": "enjoy swimming；finish doing。",
            "tags": ["ving"],
        },
        {
            "stem": "選出正確句：我想要說英文像你一樣。",
            "correct": "I want to speak English like you.",
            "wrong": ["I want speaking English like you.", "I want speak English like you.", "I want to speaking English like you."],
            "explain": "want + to V。",
            "tags": ["to-v"],
        },
        {
            "stem": "選出正確句：Judy 週末喜歡去衝浪。",
            "correct": "Judy loves going surfing on weekends.",
            "wrong": ["Judy loves go surfing on weekends.", "Judy loves to going surfing on weekends.", "Judy love going surfing on weekends."],
            "explain": "love + V-ing（或 to V）；第三人稱 loves。",
            "tags": ["ving"],
        },
        {
            "stem": "虛主詞句型「做…很…」常用？",
            "correct": "It is + adj. + to V …",
            "wrong": ["Is it + V-ing + adj.", "It are + adj. + to V", "There is + adj. + to V"],
            "explain": "It is fun to travel…",
            "tags": ["it-to"],
        },
        {
            "stem": "選出正確句：到別的國家旅行和工作很有趣。",
            "correct": "It is fun to travel and work in another country.",
            "wrong": [
                "It is fun traveling and work in another country.（較不完整／不一致）",
                "It are fun to travel and work in another country.",
                "Is fun to travel and work in another country.",
            ],
            "explain": "It is + adj. + to V。",
            "tags": ["it-to"],
        },
        {
            "stem": "Why not 後面接？",
            "correct": "原形動詞",
            "wrong": ["to V", "V-ing", "V-ed"],
            "explain": "Why not make a plan…?",
            "tags": ["why-not"],
        },
        {
            "stem": "選出正確句：何不訂個計畫並準備？",
            "correct": "Why not make a plan and prepare for it?",
            "wrong": ["Why not to make a plan and prepare for it?", "Why not making a plan and prepare for it?", "Why not made a plan and prepare for it?"],
            "explain": "Why not + 原形。",
            "tags": ["why-not"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "I want speaking English like you.",
            "wrong": ["I want to speak English like you.", "She decided to leave.", "He needs to study."],
            "explain": "want 後用 to V。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "Judy loves go surfing on weekends.",
            "wrong": ["Judy loves going surfing on weekends.", "He enjoys swimming.", "They finished doing homework."],
            "explain": "loves 後不可直接 go，要用 going／to go。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "practice 後面常見接法？",
            "correct": "practice + V-ing / 名詞",
            "wrong": ["practice + to V（唯一）", "practice + V-ed", "practice + did"],
            "explain": "practice speaking／practice English。",
            "tags": ["ving"],
        },
        {
            "stem": "選出正確句：每天跟老師練習英文。",
            "correct": "Practice English with your teacher every day.",
            "wrong": ["Practice to English with your teacher every day.", "Practicing to English with your teacher every day.", "Practiced English with your teacher every day.（若為祈使）"],
            "explain": "祈使句用原形 Practice。",
            "tags": ["ving"],
        },
        {
            "stem": "like / love / hate 後面？",
            "correct": "to V 或 V-ing 多半都可以",
            "wrong": ["只能接 V-ed", "只能接 was", "不能接動詞"],
            "explain": "like to swim／like swimming 常可互通。",
            "tags": ["to-v", "ving"],
        },
        {
            "stem": "選出正確句：他過得很開心。",
            "correct": "He enjoyed his life.",
            "wrong": ["He enjoyed to his life.", "He enjoy his life yesterday.", "He enjoying his life."],
            "explain": "enjoy + 名詞；過去式 enjoyed。",
            "tags": ["ving"],
        },
        {
            "stem": "It is important ______ early.",
            "correct": "to get up",
            "wrong": ["getting up to", "get uped", "got up"],
            "explain": "It is adj. + to V。",
            "tags": ["it-to"],
        },
        {
            "stem": "She decided ______ the truth.",
            "correct": "to tell",
            "wrong": ["telling", "told", "tell"],
            "explain": "decide + to V。",
            "tags": ["to-v"],
        },
        {
            "stem": "He finished ______ the book.",
            "correct": "reading",
            "wrong": ["to read", "readed", "reads"],
            "explain": "finish + V-ing。",
            "tags": ["ving"],
        },
        {
            "stem": "They gave up ______ candy.",
            "correct": "eating",
            "wrong": ["to eat", "ate", "eats"],
            "explain": "give up + V-ing。",
            "tags": ["ving"],
        },
        {
            "stem": "I need ______ harder.",
            "correct": "to study",
            "wrong": ["studying（此句較不自然為唯一正解）", "studied", "studyed"],
            "explain": "need + to V。",
            "tags": ["to-v"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "It are hard to learn English.",
            "wrong": ["It is hard to learn English.", "It is easy to ride a bike.", "It is important to sleep well."],
            "explain": "It is，不是 It are。",
            "tags": ["find-wrong"],
        },
    ],
    "Lesson 5": [
        {
            "stem": "比較級短形容詞常見變化？",
            "correct": "adj. + -er (+ than)",
            "wrong": ["more + adj. + -est", "adj. + -est + than", "as + adj."],
            "explain": "taller than；bigger than。",
            "tags": ["comparative"],
        },
        {
            "stem": "最高級短形容詞常見變化？",
            "correct": "the + adj. + -est",
            "wrong": ["more + adj. + than", "adj. + -er", "as adj. as"],
            "explain": "the tallest。",
            "tags": ["superlative"],
        },
        {
            "stem": "長形容詞比較級常用？",
            "correct": "more + adj. + than",
            "wrong": ["adj. + -er + than（長形容詞）", "the most + adj. + than", "as more adj."],
            "explain": "more interesting than…",
            "tags": ["comparative"],
        },
        {
            "stem": "長形容詞最高級常用？",
            "correct": "the most + adj.",
            "wrong": ["more + adj. + the", "the + adj. + -er", "most + adj. + than"],
            "explain": "the most beautiful。",
            "tags": ["superlative"],
        },
        {
            "stem": "同等比較用？",
            "correct": "as + adj. + as",
            "wrong": ["more + adj. + as", "the + adj. + as", "adj. + than + as"],
            "explain": "as tall as。",
            "tags": ["as-as"],
        },
        {
            "stem": "選出正確句：Tom 比我高。",
            "correct": "Tom is taller than I am. / Tom is taller than me.",
            "wrong": ["Tom is more taller than me.", "Tom is tallest than me.", "Tom is as taller as me."],
            "explain": "比較級 taller than，不要再加 more。",
            "tags": ["comparative"],
        },
        {
            "stem": "選出正確句：這是最有趣的書。",
            "correct": "This is the most interesting book.",
            "wrong": ["This is the more interesting book.", "This is most interesting book.", "This is the interestinger book."],
            "explain": "長形容詞：the most + adj。",
            "tags": ["superlative"],
        },
        {
            "stem": "good 的比較級／最高級是？",
            "correct": "better / best",
            "wrong": ["gooder / goodest", "more good / most good", "weller / wellest"],
            "explain": "不規則：good → better → best。",
            "tags": ["irregular-adj"],
        },
        {
            "stem": "bad 的比較級／最高級是？",
            "correct": "worse / worst",
            "wrong": ["badder / baddest", "more bad / most bad", "worser / worstest"],
            "explain": "bad → worse → worst。",
            "tags": ["irregular-adj"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "She is more taller than her sister.",
            "wrong": ["She is taller than her sister.", "This is the biggest apple.", "He is as kind as his father."],
            "explain": "不要 more + taller 雙重比較。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "big 的比較級是？",
            "correct": "bigger",
            "wrong": ["biger", "more big", "biggest（比較級）"],
            "explain": "短母音＋子音雙寫：bigger。",
            "tags": ["comparative"],
        },
        {
            "stem": "happy 的比較級是？",
            "correct": "happier",
            "wrong": ["happyier", "more happier", "happyer"],
            "explain": "y → i + er。",
            "tags": ["comparative"],
        },
        {
            "stem": "選出正確句：他和哥哥一樣高。",
            "correct": "He is as tall as his brother.",
            "wrong": ["He is as taller as his brother.", "He is tall as his brother.", "He is so tall as his brother.（美式較少用於肯定）"],
            "explain": "as + 原級 + as。",
            "tags": ["as-as"],
        },
        {
            "stem": "最高級前面常加？",
            "correct": "the",
            "wrong": ["a", "an", "than"],
            "explain": "the best／the tallest。",
            "tags": ["superlative"],
        },
        {
            "stem": "選出正確句：這是三者中最便宜的。",
            "correct": "This is the cheapest of the three.",
            "wrong": ["This is cheaper of the three.", "This is the most cheap of the three.", "This is cheapest than the three."],
            "explain": "三者以上用最高級 + the。",
            "tags": ["superlative"],
        },
        {
            "stem": "much / many 的比較級是？",
            "correct": "more",
            "wrong": ["mucher", "manier", "most（比較級）"],
            "explain": "more／most。",
            "tags": ["irregular-adj"],
        },
        {
            "stem": "little（少）的比較級是？",
            "correct": "less",
            "wrong": ["littler", "least（比較級）", "fewer（不可數 little 的對應須分清）"],
            "explain": "little → less → least（不可數）。",
            "tags": ["irregular-adj"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "He is the most tallest boy.",
            "wrong": ["He is the tallest boy.", "She is better than before.", "This is the worst day."],
            "explain": "不要 most + tallest。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "far 的比較級常見寫法？",
            "correct": "farther / further",
            "wrong": ["farrer", "more far", "farest（比較級）"],
            "explain": "farther／further 皆可見。",
            "tags": ["irregular-adj"],
        },
        {
            "stem": "選出正確句：英文比數學更有趣（用 long adj.）。",
            "correct": "English is more interesting than math.",
            "wrong": ["English is interestinger than math.", "English is the more interesting than math.", "English is most interesting than math."],
            "explain": "more + interesting + than。",
            "tags": ["comparative"],
        },
    ],
    "Lesson 6": [
        {
            "stem": "be going to 表未來，公式是？",
            "correct": "S + be + going to + V",
            "wrong": ["S + going to + be + V", "S + will + going to + V", "S + be + go to + V-ing"],
            "explain": "I am going to study.",
            "tags": ["going-to"],
        },
        {
            "stem": "will 表未來，公式是？",
            "correct": "S + will + V",
            "wrong": ["S + will + to V", "S + will + V-ing", "S + will + V-ed"],
            "explain": "will 後接原形。",
            "tags": ["will"],
        },
        {
            "stem": "選出正確句：待會你要做什麼？",
            "correct": "What are you going to do later?",
            "wrong": ["What will you going to do later?", "What are you go to do later?", "What do you going to do later?"],
            "explain": "be + going to + V；不要 will going to。",
            "tags": ["going-to"],
        },
        {
            "stem": "反身代名詞：he →",
            "correct": "himself",
            "wrong": ["herself", "himselfs", "him"],
            "explain": "he → himself。",
            "tags": ["reflexive"],
        },
        {
            "stem": "反身代名詞：they →",
            "correct": "themselves",
            "wrong": ["themself", "theirselves", "themselveses"],
            "explain": "they → themselves。",
            "tags": ["reflexive"],
        },
        {
            "stem": "反身代名詞：you（複數）→",
            "correct": "yourselves",
            "wrong": ["yourselfs", "youselves", "yourself（若明確複數情境）"],
            "explain": "複數 you → yourselves。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出正確句：他獨自去的。",
            "correct": "He went by himself.",
            "wrong": ["He went by him.", "He went by his self.", "He went by he."],
            "explain": "by himself。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出正確句：今晚你們玩得開心嗎？",
            "correct": "Did you enjoy yourselves tonight?",
            "wrong": ["Did you enjoy yourself tonight?（若對象是複數 you）", "Did you enjoy you tonight?", "Did you enjoy themselves tonight?"],
            "explain": "複數 you → yourselves。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "What will you going to do later?",
            "wrong": ["What are you going to do later?", "I will help you.", "She is going to call me."],
            "explain": "不可 will + going to。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "I / you / he 對應反身？",
            "correct": "myself / yourself / himself",
            "wrong": ["me / you / him", "mine / yours / his", "my / your / his"],
            "explain": "反身代名詞 -self／-selves。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出正確句：我明天會幫你。",
            "correct": "I will help you tomorrow.",
            "wrong": ["I will helping you tomorrow.", "I will to help you tomorrow.", "I will helped you tomorrow."],
            "explain": "will + 原形 help。",
            "tags": ["will"],
        },
        {
            "stem": "選出正確句：她打算下週旅行。",
            "correct": "She is going to travel next week.",
            "wrong": ["She is go to travel next week.", "She going to travel next week.", "She will going to travel next week."],
            "explain": "is + going to + V。",
            "tags": ["going-to"],
        },
        {
            "stem": "we 的反身代名詞？",
            "correct": "ourselves",
            "wrong": ["ourself", "ourselveses", "us"],
            "explain": "we → ourselves。",
            "tags": ["reflexive"],
        },
        {
            "stem": "she 的反身代名詞？",
            "correct": "herself",
            "wrong": ["himself", "sheself", "her"],
            "explain": "she → herself。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出正確句：請照顧好自己。",
            "correct": "Please take care of yourself.",
            "wrong": ["Please take care of you.", "Please take care of your self.", "Please take care of yourselveself."],
            "explain": "對一人說用 yourself。",
            "tags": ["reflexive"],
        },
        {
            "stem": "be going to 的否定？",
            "correct": "isn't / aren't / am not + going to + V",
            "wrong": ["don't going to + V", "won't going to + V", "not go to + V"],
            "explain": "be 的否定 + going to。",
            "tags": ["going-to"],
        },
        {
            "stem": "will 的否定？",
            "correct": "will not (won't) + V",
            "wrong": ["don't will + V", "isn't will + V", "won't to V"],
            "explain": "won't + 原形。",
            "tags": ["will"],
        },
        {
            "stem": "選出錯誤句：",
            "correct": "He went by him.",
            "wrong": ["He went by himself.", "She did it herself.", "We enjoyed ourselves."],
            "explain": "應用 himself。",
            "tags": ["find-wrong"],
        },
        {
            "stem": "It 的反身代名詞？",
            "correct": "itself",
            "wrong": ["it", "its", "himself"],
            "explain": "it → itself。",
            "tags": ["reflexive"],
        },
        {
            "stem": "選出正確句：他們自己做了晚餐。",
            "correct": "They cooked dinner themselves.",
            "wrong": ["They cooked dinner themself.", "They cooked dinner theirselves.", "They cooked dinner them."],
            "explain": "themselves。",
            "tags": ["reflexive"],
        },
    ],
}


def make_from_templates(lesson: str) -> list[dict]:
    out = []
    for i, t in enumerate(LESSON_TEMPLATES.get(lesson, []), start=1):
        item = q_item(
            lesson,
            f"L{lesson.split()[-1]}-TPL-{i:03d}",
            t["stem"],
            t["correct"],
            t["wrong"],
            t["explain"],
            t.get("tags") or [],
        )
        if item:
            out.append(item)
    return out


def make_from_traps(lesson: str, g: dict) -> list[dict]:
    traps_sec = section(g, "traps")
    if not traps_sec:
        return []
    traps = traps_sec.get("traps") or []
    wrongs = [t["wrong"] for t in traps]
    rights = [first_right(t["right"]) for t in traps]
    out = []
    for i, t in enumerate(traps, start=1):
        right = first_right(t["right"])
        item = q_item(
            lesson,
            f"L{lesson.split()[-1]}-TRP-{i:03d}",
            "下列哪一句正確？",
            right,
            [t["wrong"]] + [w for w in wrongs if w != t["wrong"]],
            t.get("note") or f"正確：{right}",
            ["trap"],
        )
        if item:
            out.append(item)
        item2 = q_item(
            lesson,
            f"L{lesson.split()[-1]}-WRG-{i:03d}",
            "下列哪一句有錯誤？",
            t["wrong"],
            [right] + [w for w in wrongs if w != t["wrong"]] + rights,
            t.get("note") or f"錯誤：{t['wrong']}；應為：{right}",
            ["find-wrong"],
        )
        if item2:
            out.append(item2)
    return out


def make_from_examples(lesson: str, g: dict) -> list[dict]:
    ex_sec = section(g, "examples")
    if not ex_sec:
        return []
    items = ex_sec.get("items") or []
    ens = [it["en"] for it in items]
    out = []
    for i, it in enumerate(items, start=1):
        note = it.get("note") or ""
        stem = f"哪一句符合說明「{note}」？" if note else "選出正確的例句："
        item = q_item(
            lesson,
            f"L{lesson.split()[-1]}-EX-{i:03d}",
            stem,
            it["en"],
            [e for e in ens if e != it["en"]],
            note or it["en"],
            ["example"],
        )
        if item:
            out.append(item)
    return out


def make_from_grammar_quiz(lesson: str, g: dict) -> list[dict]:
    quiz_sec = section(g, "quiz")
    if not quiz_sec:
        return []
    out = []
    for i, q in enumerate(quiz_sec.get("quiz") or [], start=1):
        opts = list(q.get("options") or [])
        ans = int(q.get("answer", 0))
        correct = opts[ans] if 0 <= ans < len(opts) else opts[0]
        distractors = [o for j, o in enumerate(opts) if j != ans]
        # expand distractors with light mutations
        for o in list(distractors):
            distractors.append(o.replace(" was ", " were "))
            distractors.append(o.replace(" were ", " was "))
            distractors.append(o.replace(" didn't ", " don't "))
            distractors.append(o.replace("Did ", "Does "))
        item = q_item(
            lesson,
            f"L{lesson.split()[-1]}-GQ-{i:03d}",
            q["q"],
            correct,
            distractors,
            q.get("explain") or "",
            ["grammar-quiz"],
        )
        if item:
            out.append(item)
    return out


def build_lesson(lesson: str, g: dict) -> list[dict]:
    qs: list[dict] = []
    qs.extend(make_from_templates(lesson))
    qs.extend(make_from_traps(lesson, g))
    qs.extend(make_from_examples(lesson, g))
    qs.extend(make_from_grammar_quiz(lesson, g))

    seen = set()
    uniq = []
    for q in qs:
        # also de-dupe near-identical stems+correct
        key = (q["stem"], q["options"][q["answer"]])
        if q["id"] in seen or key in seen:
            continue
        seen.add(q["id"])
        seen.add(key)
        uniq.append(q)

    RNG.shuffle(uniq)
    return uniq


def emit_js(bank: dict) -> str:
    payload = json.dumps(bank, ensure_ascii=False, indent=2)
    counts = {k: len(v) for k, v in bank.items()}
    header = (
        "/**\n"
        " * 文法選擇題題庫（原創；對齊南一第三冊 L1–L6 文法重點；非官方原卷）\n"
        f" * 題數：{counts}\n"
        " * 重建：python tools/build_mcq_data.py\n"
        " */\n"
        "const mcqBank = "
    )
    return header + payload + ";\n"


def main() -> None:
    grammar_bank = load_js_object(GRAMMAR_JS, "grammarBank")
    bank = {}
    for lesson, g in grammar_bank.items():
        bank[lesson] = build_lesson(lesson, g)
    OUT_JS.write_text(emit_js(bank), encoding="utf-8")
    total = sum(len(v) for v in bank.values())
    print("Wrote", OUT_JS)
    for k, v in bank.items():
        types = {}
        for q in v:
            types[q["type"]] = types.get(q["type"], 0) + 1
        print(f"  {k}: {len(v)} {types}")
    print("  TOTAL:", total)


if __name__ == "__main__":
    main()
