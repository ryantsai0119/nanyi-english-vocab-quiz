/**
 * 課程選擇題題庫（原創／自動產自單字＋文法；非南一官方原卷）
 * 題數：{'Lesson 1': 137, 'Lesson 2': 128, 'Lesson 3': 131, 'Lesson 4': 143, 'Lesson 5': 158, 'Lesson 6': 167}
 * 重建：python tools/build_mcq_data.py
 */
const mcqBank = {
  "Lesson 1": [
    {
      "id": "L1-VZH-007",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「以前」的英文是？",
      "options": [
        "study",
        "jog",
        "ago",
        "story"
      ],
      "answer": 2,
      "explain": "以前 → ago",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-010",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI ___ sick, so I stayed home.",
      "options": [
        "music",
        "was",
        "ghost",
        "were"
      ],
      "answer": 1,
      "explain": "空格是 was（是 (am 和 is 的過去式)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-005",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe hero's ___ made everyone sad.",
      "options": [
        "dead",
        "death",
        "was",
        "yesterday"
      ],
      "answer": 1,
      "explain": "空格是 death（死亡）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-031",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「之後；晚點」的英文是？",
      "options": [
        "fear",
        "ago",
        "must",
        "later"
      ],
      "answer": 3,
      "explain": "之後；晚點 → later",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「規則動詞 share → shared」？",
      "options": [
        "They were at home last night.",
        "My uncle was an English teacher ten years ago.",
        "Andy shared his food with his classmates.",
        "I watched a ghost movie last night."
      ],
      "answer": 2,
      "explain": "規則動詞 share → shared",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-014",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “sweet” mean?",
      "options": [
        "回憶；記憶",
        "貼心的；甜的",
        "放置",
        "餐"
      ],
      "answer": 1,
      "explain": "sweet → 貼心的；甜的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-GQ-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "昨天他很忙。（選正確句）",
      "options": [
        "He was busy yesterday.",
        "He were busy yesterday.",
        "He were busy yesterday. (x)",
        "(incorrect) 3"
      ],
      "answer": 0,
      "explain": "He → was。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L1-CLZ-032",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nEating too much ___ is not good.",
      "options": [
        "death",
        "last",
        "after all",
        "candy"
      ],
      "answer": 3,
      "explain": "空格是 candy（糖果）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-036",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「清掃」的英文是？",
      "options": [
        "look after",
        "remind ... of",
        "place",
        "sweep"
      ],
      "answer": 3,
      "explain": "清掃 → sweep",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-038",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「感人的」的英文是？",
      "options": [
        "last",
        "together",
        "dead",
        "touching"
      ],
      "answer": 3,
      "explain": "感人的 → touching",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-006",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「否定：didn't + 原形（不是 studied）」？",
      "options": [
        "I didn't study for the test.",
        "Andy shared his food with his classmates.",
        "My uncle was an English teacher ten years ago.",
        "They were at home last night."
      ],
      "answer": 0,
      "explain": "否定：didn't + 原形（不是 studied）",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VZH-006",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「一些」的英文是？",
      "options": [
        "a few",
        "relative",
        "candy",
        "sweet"
      ],
      "answer": 0,
      "explain": "一些 → a few",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-024",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe put a ___ on the birthday cake.",
      "options": [
        "candle",
        "share",
        "remember",
        "jog"
      ],
      "answer": 0,
      "explain": "空格是 candle（蠟燭）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-021",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe sat in a ___ and sang songs.",
      "options": [
        "circle",
        "dead",
        "death",
        "jog"
      ],
      "answer": 0,
      "explain": "空格是 circle（圓圈）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-005",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “death” mean?",
      "options": [
        "死亡",
        "是 (am 和 is 的過去式)",
        "想起",
        "糖果"
      ],
      "answer": 0,
      "explain": "death → 死亡",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-030",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “ghost” mean?",
      "options": [
        "放置",
        "故事",
        "鬼",
        "之後；晚點"
      ],
      "answer": 2,
      "explain": "ghost → 鬼",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-038",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “touching” mean?",
      "options": [
        "過世",
        "充滿活力的",
        "一些",
        "感人的"
      ],
      "answer": 3,
      "explain": "touching → 感人的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-009",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「是 (are 的過去式)」的英文是？",
      "options": [
        "music",
        "tomb",
        "were",
        "story"
      ],
      "answer": 2,
      "explain": "是 (are 的過去式) → were",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-GQ-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "她昨天洗了狗嗎？",
      "options": [
        "Did she wash her dog yesterday?",
        "Did she washed her dog yesterday?",
        "Did she washed her dog yesterday? (x)",
        "Not Did she washed her dog yesterday?"
      ],
      "answer": 0,
      "explain": "Did + 原形 wash。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L1-CLZ-011",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou ___ finish your homework first.",
      "options": [
        "was",
        "ghost",
        "story",
        "must"
      ],
      "answer": 3,
      "explain": "空格是 must（一定；必須 aux.）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-001",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「研讀」的英文是？",
      "options": [
        "yesterday",
        "music",
        "study",
        "after all"
      ],
      "answer": 2,
      "explain": "研讀 → study",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-011",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「一定；必須 aux.」的英文是？",
      "options": [
        "place",
        "must",
        "watch",
        "flower"
      ],
      "answer": 1,
      "explain": "一定；必須 aux. → must",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-002",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「慢跑」的英文是？",
      "options": [
        "candle",
        "ghost",
        "jog",
        "music"
      ],
      "answer": 2,
      "explain": "慢跑 → jog",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-013",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe can do our homework ___.",
      "options": [
        "dead",
        "remind ... of",
        "together",
        "later"
      ],
      "answer": 2,
      "explain": "空格是 together（一起）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-023",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “flower” mean?",
      "options": [
        "墳墓",
        "昨天",
        "花",
        "故事"
      ],
      "answer": 2,
      "explain": "flower → 花",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-015",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “remind ... of” mean?",
      "options": [
        "之後；晚點",
        "鬼",
        "觀看",
        "想起"
      ],
      "answer": 3,
      "explain": "remind ... of → 想起",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-009",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey ___ very happy to see you.",
      "options": [
        "candle",
        "tomb",
        "flower",
        "were"
      ],
      "answer": 3,
      "explain": "空格是 were（是 (are 的過去式)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-001",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou need to ___ hard for the test.",
      "options": [
        "circle",
        "study",
        "remember",
        "look after"
      ],
      "answer": 1,
      "explain": "空格是 study（研讀）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-012",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “pass away” mean?",
      "options": [
        "是 (are 的過去式)",
        "過世",
        "父母親",
        "一定；必須 aux."
      ],
      "answer": 1,
      "explain": "pass away → 過世",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-031",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI will call you back ___.",
      "options": [
        "last",
        "later",
        "were",
        "death"
      ],
      "answer": 1,
      "explain": "空格是 later（之後；晚點）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-024",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「蠟燭」的英文是？",
      "options": [
        "music",
        "candle",
        "relative",
        "watch"
      ],
      "answer": 1,
      "explain": "蠟燭 → candle",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-029",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “relative” mean?",
      "options": [
        "種植",
        "慢跑",
        "親戚；親屬",
        "研讀"
      ],
      "answer": 2,
      "explain": "relative → 親戚；親屬",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-017",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ my cat for me?",
      "options": [
        "plant",
        "look after",
        "candy",
        "were"
      ],
      "answer": 1,
      "explain": "空格是 look after（照顧）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-021",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “circle” mean?",
      "options": [
        "圓圈",
        "想起",
        "照顧",
        "前一個的"
      ],
      "answer": 0,
      "explain": "circle → 圓圈",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-TRP-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Did she cook dinner?",
        "He were happy yesterday.",
        "I didn't watched TV.",
        "Did she cooked dinner?"
      ],
      "answer": 0,
      "explain": "Did 後面原形",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-034",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “share” mean?",
      "options": [
        "慢跑",
        "故事",
        "過世",
        "分享"
      ],
      "answer": 3,
      "explain": "share → 分享",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-023",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「花」的英文是？",
      "options": [
        "study",
        "flower",
        "remind ... of",
        "share"
      ],
      "answer": 1,
      "explain": "花 → flower",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-013",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “together” mean?",
      "options": [
        "想起",
        "死亡的",
        "一起",
        "照顧"
      ],
      "answer": 2,
      "explain": "together → 一起",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-018",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “after all” mean?",
      "options": [
        "以前",
        "畢竟",
        "記得",
        "過世"
      ],
      "answer": 1,
      "explain": "after all → 畢竟",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-038",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt was a very ___ movie.",
      "options": [
        "last",
        "jog",
        "touching",
        "must"
      ],
      "answer": 2,
      "explain": "空格是 touching（感人的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-029",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMany ___s came to my birthday party.",
      "options": [
        "yesterday",
        "must",
        "memory",
        "relative"
      ],
      "answer": 3,
      "explain": "空格是 relative（親戚；親屬）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-031",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “later” mean?",
      "options": [
        "畢竟",
        "一定；必須 aux.",
        "之後；晚點",
        "父母親"
      ],
      "answer": 2,
      "explain": "later → 之後；晚點",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-TRP-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He were happy yesterday.",
        "I didn't watched TV.",
        "Did she cooked dinner?",
        "I didn't watch TV."
      ],
      "answer": 3,
      "explain": "有 didn't 就用原形",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-022",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “plant” mean?",
      "options": [
        "種植",
        "死亡",
        "昨天",
        "以前"
      ],
      "answer": 0,
      "explain": "plant → 種植",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-028",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「死亡的」的英文是？",
      "options": [
        "ago",
        "lively",
        "dead",
        "later"
      ],
      "answer": 2,
      "explain": "死亡的 → dead",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-006",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “a few” mean?",
      "options": [
        "鬼",
        "花",
        "一定；必須 aux.",
        "一些"
      ],
      "answer": 3,
      "explain": "a few → 一些",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-016",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「回憶；記憶」的英文是？",
      "options": [
        "ghost",
        "memory",
        "later",
        "look after"
      ],
      "answer": 1,
      "explain": "回憶；記憶 → memory",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-GQ-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "我昨天沒洗碗。",
      "options": [
        "I didn't washed the dishes.",
        "I didn't wash the dishes.",
        "I didn't washed the dishes. (x)",
        "Not I didn't washed the dishes."
      ],
      "answer": 1,
      "explain": "didn't 後面用原形 wash。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L1-VZH-035",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「故事」的英文是？",
      "options": [
        "together",
        "a few",
        "music",
        "story"
      ],
      "answer": 3,
      "explain": "故事 → story",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-026",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「放置」的英文是？",
      "options": [
        "place",
        "candle",
        "must",
        "lively"
      ],
      "answer": 0,
      "explain": "放置 → place",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-017",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “look after” mean?",
      "options": [
        "一些",
        "花",
        "照顧",
        "是 (are 的過去式)"
      ],
      "answer": 2,
      "explain": "look after → 照顧",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-TRP-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She studyed hard.",
        "I didn't watched TV.",
        "She studied hard.",
        "He were happy yesterday."
      ],
      "answer": 2,
      "explain": "y→i+ed",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-028",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “dead” mean?",
      "options": [
        "死亡的",
        "圓圈",
        "照顧",
        "前一個的"
      ],
      "answer": 0,
      "explain": "dead → 死亡的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-012",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHer dog passed away last week. ___",
      "options": [
        "pass away",
        "plant",
        "tomb",
        "remember"
      ],
      "answer": 0,
      "explain": "空格是 pass away（過世）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「watch → watched」？",
      "options": [
        "My uncle was an English teacher ten years ago.",
        "Andy shared his food with his classmates.",
        "They were at home last night.",
        "I watched a ghost movie last night."
      ],
      "answer": 3,
      "explain": "watch → watched",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VZH-019",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「裝扮」的英文是？",
      "options": [
        "flower",
        "music",
        "plant",
        "dress up"
      ],
      "answer": 3,
      "explain": "裝扮 → dress up",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-027",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “remember” mean?",
      "options": [
        "種植",
        "充滿活力的",
        "蠟燭",
        "記得"
      ],
      "answer": 3,
      "explain": "remember → 記得",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-WRG-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He were happy yesterday.",
        "I didn't watched TV.",
        "I didn't watch TV.",
        "Did she cooked dinner?"
      ],
      "answer": 1,
      "explain": "有 didn't 就用原形",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VZH-025",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「墳墓」的英文是？",
      "options": [
        "after all",
        "relative",
        "a few",
        "tomb"
      ],
      "answer": 3,
      "explain": "墳墓 → tomb",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-030",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe is afraid of telling ___ stories.",
      "options": [
        "death",
        "circle",
        "ghost",
        "last"
      ],
      "answer": 2,
      "explain": "空格是 ghost（鬼）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「主詞單數 → was」？",
      "options": [
        "Andy shared his food with his classmates.",
        "They were at home last night.",
        "My uncle was an English teacher ten years ago.",
        "I watched a ghost movie last night."
      ],
      "answer": 2,
      "explain": "主詞單數 → was",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-CLZ-034",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ your snack with me?",
      "options": [
        "fear",
        "together",
        "look after",
        "share"
      ],
      "answer": 3,
      "explain": "空格是 share（分享）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-WRG-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I didn't watched TV.",
        "He were happy yesterday.",
        "She studied hard.",
        "She studyed hard."
      ],
      "answer": 3,
      "explain": "y→i+ed",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-CLZ-026",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease ___ the books on the shelf.",
      "options": [
        "place",
        "meal",
        "story",
        "death"
      ],
      "answer": 0,
      "explain": "空格是 place（放置）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-016",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “memory” mean?",
      "options": [
        "花",
        "回憶；記憶",
        "是 (am 和 is 的過去式)",
        "貼心的；甜的"
      ],
      "answer": 1,
      "explain": "memory → 回憶；記憶",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-021",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「圓圈」的英文是？",
      "options": [
        "circle",
        "memory",
        "look after",
        "touching"
      ],
      "answer": 0,
      "explain": "圓圈 → circle",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-030",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「鬼」的英文是？",
      "options": [
        "story",
        "ghost",
        "candle",
        "dress up"
      ],
      "answer": 1,
      "explain": "鬼 → ghost",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-025",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “tomb” mean?",
      "options": [
        "墳墓",
        "充滿活力的",
        "死亡",
        "父母親"
      ],
      "answer": 0,
      "explain": "tomb → 墳墓",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-000",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「昨天」的英文是？",
      "options": [
        "yesterday",
        "later",
        "memory",
        "sweep"
      ],
      "answer": 0,
      "explain": "昨天 → yesterday",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-018",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「畢竟」的英文是？",
      "options": [
        "after all",
        "yesterday",
        "later",
        "circle"
      ],
      "answer": 0,
      "explain": "畢竟 → after all",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-008",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “parents” mean?",
      "options": [
        "父母親",
        "花",
        "充滿活力的",
        "照顧"
      ],
      "answer": 0,
      "explain": "parents → 父母親",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-WRG-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Did she cooked dinner?",
        "He was happy yesterday.",
        "I didn't watched TV.",
        "He were happy yesterday."
      ],
      "answer": 3,
      "explain": "He 用 was",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-032",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “candy” mean?",
      "options": [
        "昨天",
        "感人的",
        "糖果",
        "充滿活力的"
      ],
      "answer": 2,
      "explain": "candy → 糖果",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-WRG-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He were happy yesterday.",
        "I didn't watched TV.",
        "Did she cooked dinner?",
        "Did she cook dinner?"
      ],
      "answer": 2,
      "explain": "Did 後面原形",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VEN-036",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “sweep” mean?",
      "options": [
        "分享",
        "清掃",
        "放置",
        "花"
      ],
      "answer": 1,
      "explain": "sweep → 清掃",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-004",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「前一個的」的英文是？",
      "options": [
        "relative",
        "touching",
        "a few",
        "last"
      ],
      "answer": 3,
      "explain": "前一個的 → last",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-023",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThere is a beautiful ___ in the vase.",
      "options": [
        "flower",
        "together",
        "study",
        "look after"
      ],
      "answer": 0,
      "explain": "空格是 flower（花）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-016",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI have a good ___ for names.",
      "options": [
        "candle",
        "ghost",
        "story",
        "memory"
      ],
      "answer": 3,
      "explain": "空格是 memory（回憶；記憶）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-010",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “was” mean?",
      "options": [
        "一起",
        "親戚；親屬",
        "圓圈",
        "是 (am 和 is 的過去式)"
      ],
      "answer": 3,
      "explain": "was → 是 (am 和 is 的過去式)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-035",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy mom reads a ___ to me every night.",
      "options": [
        "dress up",
        "story",
        "lively",
        "jog"
      ],
      "answer": 1,
      "explain": "空格是 story（故事）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-014",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThat is a very ___ story.",
      "options": [
        "sweet",
        "ghost",
        "meal",
        "must"
      ],
      "answer": 0,
      "explain": "空格是 sweet（貼心的；甜的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-039",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「害怕」的英文是？",
      "options": [
        "last",
        "remind ... of",
        "flower",
        "fear"
      ],
      "answer": 3,
      "explain": "害怕 → fear",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-034",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「分享」的英文是？",
      "options": [
        "share",
        "relative",
        "story",
        "a few"
      ],
      "answer": 0,
      "explain": "分享 → share",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-028",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThere is a ___ tree in the yard.",
      "options": [
        "dead",
        "death",
        "relative",
        "touching"
      ],
      "answer": 0,
      "explain": "空格是 dead（死亡的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-022",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy grandpa likes to ___ vegetables.",
      "options": [
        "lively",
        "plant",
        "later",
        "tomb"
      ],
      "answer": 1,
      "explain": "空格是 plant（種植）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-036",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe needs to ___ the floor now.",
      "options": [
        "touching",
        "sweep",
        "candy",
        "yesterday"
      ],
      "answer": 1,
      "explain": "空格是 sweep（清掃）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-037",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「充滿活力的」的英文是？",
      "options": [
        "dead",
        "tomb",
        "lively",
        "dress up"
      ],
      "answer": 2,
      "explain": "充滿活力的 → lively",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-022",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「種植」的英文是？",
      "options": [
        "plant",
        "study",
        "tomb",
        "was"
      ],
      "answer": 0,
      "explain": "種植 → plant",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-015",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「想起」的英文是？",
      "options": [
        "remind ... of",
        "must",
        "relative",
        "together"
      ],
      "answer": 0,
      "explain": "想起 → remind ... of",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-037",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe party was very ___ and fun.",
      "options": [
        "look after",
        "sweep",
        "lively",
        "together"
      ],
      "answer": 2,
      "explain": "空格是 lively（充滿活力的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-000",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “yesterday” mean?",
      "options": [
        "蠟燭",
        "圓圈",
        "一起",
        "昨天"
      ],
      "answer": 3,
      "explain": "yesterday → 昨天",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-027",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「記得」的英文是？",
      "options": [
        "together",
        "remember",
        "pass away",
        "place"
      ],
      "answer": 1,
      "explain": "記得 → remember",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-009",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “were” mean?",
      "options": [
        "記得",
        "貼心的；甜的",
        "父母親",
        "是 (are 的過去式)"
      ],
      "answer": 3,
      "explain": "were → 是 (are 的過去式)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-032",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「糖果」的英文是？",
      "options": [
        "after all",
        "candy",
        "flower",
        "study"
      ],
      "answer": 1,
      "explain": "糖果 → candy",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-004",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “last” mean?",
      "options": [
        "前一個的",
        "糖果",
        "貼心的；甜的",
        "是 (are 的過去式)"
      ],
      "answer": 0,
      "explain": "last → 前一個的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-013",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「一起」的英文是？",
      "options": [
        "study",
        "share",
        "together",
        "must"
      ],
      "answer": 2,
      "explain": "一起 → together",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「主詞複數 → were」？",
      "options": [
        "They were at home last night.",
        "My uncle was an English teacher ten years ago.",
        "Andy shared his food with his classmates.",
        "I watched a ghost movie last night."
      ],
      "answer": 0,
      "explain": "主詞複數 → were",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-CLZ-008",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy ___ are both teachers.",
      "options": [
        "flower",
        "dress up",
        "remember",
        "parents"
      ],
      "answer": 3,
      "explain": "空格是 parents（父母親）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-007",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “ago” mean?",
      "options": [
        "以前",
        "一些",
        "裝扮",
        "鬼"
      ],
      "answer": 0,
      "explain": "ago → 以前",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-012",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「過世」的英文是？",
      "options": [
        "pass away",
        "watch",
        "candle",
        "dress up"
      ],
      "answer": 0,
      "explain": "過世 → pass away",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-003",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “watch” mean?",
      "options": [
        "糖果",
        "觀看",
        "回憶；記憶",
        "裝扮"
      ],
      "answer": 1,
      "explain": "watch → 觀看",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-TRP-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't watched TV.",
        "He was happy yesterday.",
        "Did she cooked dinner?",
        "He were happy yesterday."
      ],
      "answer": 1,
      "explain": "He 用 was",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-CLZ-027",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nDo you ___ my phone number?",
      "options": [
        "look after",
        "remember",
        "ghost",
        "must"
      ],
      "answer": 1,
      "explain": "空格是 remember（記得）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-033",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe had a wonderful ___ at that restaurant.",
      "options": [
        "meal",
        "was",
        "pass away",
        "death"
      ],
      "answer": 0,
      "explain": "空格是 meal（餐）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-026",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “place” mean?",
      "options": [
        "放置",
        "昨天",
        "照顧",
        "一些"
      ],
      "answer": 0,
      "explain": "place → 放置",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-004",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe went to the beach ___ summer.",
      "options": [
        "meal",
        "place",
        "dead",
        "last"
      ],
      "answer": 3,
      "explain": "空格是 last（前一個的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-037",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “lively” mean?",
      "options": [
        "充滿活力的",
        "一定；必須 aux.",
        "記得",
        "蠟燭"
      ],
      "answer": 0,
      "explain": "lively → 充滿活力的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-039",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “fear” mean?",
      "options": [
        "花",
        "害怕",
        "之後；晚點",
        "一些"
      ],
      "answer": 1,
      "explain": "fear → 害怕",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-EX-005",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「疑問句用 Did + 原形」？",
      "options": [
        "They were at home last night.",
        "Did Mary call her grandma after lunch?",
        "Andy shared his food with his classmates.",
        "My uncle was an English teacher ten years ago."
      ],
      "answer": 1,
      "explain": "疑問句用 Did + 原形",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L1-VZH-003",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「觀看」的英文是？",
      "options": [
        "sweet",
        "watch",
        "later",
        "plant"
      ],
      "answer": 1,
      "explain": "觀看 → watch",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-006",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI have ___ questions to ask you.",
      "options": [
        "a few",
        "music",
        "fear",
        "dead"
      ],
      "answer": 0,
      "explain": "空格是 a few（一些）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-020",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「音樂」的英文是？",
      "options": [
        "together",
        "last",
        "sweet",
        "music"
      ],
      "answer": 3,
      "explain": "音樂 → music",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-002",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “jog” mean?",
      "options": [
        "一定；必須 aux.",
        "慢跑",
        "音樂",
        "想起"
      ],
      "answer": 1,
      "explain": "jog → 慢跑",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-011",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “must” mean?",
      "options": [
        "昨天",
        "一些",
        "放置",
        "一定；必須 aux."
      ],
      "answer": 3,
      "explain": "must → 一定；必須 aux.",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-019",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “dress up” mean?",
      "options": [
        "裝扮",
        "照顧",
        "充滿活力的",
        "感人的"
      ],
      "answer": 0,
      "explain": "dress up → 裝扮",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-008",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「父母親」的英文是？",
      "options": [
        "look after",
        "after all",
        "parents",
        "later"
      ],
      "answer": 2,
      "explain": "父母親 → parents",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-019",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe will ___ for the Halloween party.",
      "options": [
        "sweep",
        "music",
        "must",
        "dress up"
      ],
      "answer": 3,
      "explain": "空格是 dress up（裝扮）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-003",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's ___ a movie this weekend.",
      "options": [
        "story",
        "watch",
        "dead",
        "plant"
      ],
      "answer": 1,
      "explain": "空格是 watch（觀看）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-025",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey visited their grandfather's ___.",
      "options": [
        "death",
        "tomb",
        "fear",
        "plant"
      ],
      "answer": 1,
      "explain": "空格是 tomb（墳墓）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-000",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI played basketball with my friends ___.",
      "options": [
        "relative",
        "sweet",
        "circle",
        "yesterday"
      ],
      "answer": 3,
      "explain": "空格是 yesterday（昨天）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-001",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “study” mean?",
      "options": [
        "慢跑",
        "墳墓",
        "研讀",
        "父母親"
      ],
      "answer": 2,
      "explain": "study → 研讀",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-020",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “music” mean?",
      "options": [
        "記得",
        "音樂",
        "故事",
        "放置"
      ],
      "answer": 1,
      "explain": "music → 音樂",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-024",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “candle” mean?",
      "options": [
        "糖果",
        "蠟燭",
        "以前",
        "畢竟"
      ],
      "answer": 1,
      "explain": "candle → 蠟燭",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-018",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt's just a game, ___.",
      "options": [
        "story",
        "ghost",
        "share",
        "after all"
      ],
      "answer": 3,
      "explain": "空格是 after all（畢竟）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-017",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「照顧」的英文是？",
      "options": [
        "look after",
        "place",
        "plant",
        "together"
      ],
      "answer": 0,
      "explain": "照顧 → look after",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-005",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「死亡」的英文是？",
      "options": [
        "memory",
        "touching",
        "dress up",
        "death"
      ],
      "answer": 3,
      "explain": "死亡 → death",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-010",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「是 (am 和 is 的過去式)」的英文是？",
      "options": [
        "circle",
        "watch",
        "last",
        "was"
      ],
      "answer": 3,
      "explain": "是 (am 和 is 的過去式) → was",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-033",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “meal” mean?",
      "options": [
        "照顧",
        "一定；必須 aux.",
        "一些",
        "餐"
      ],
      "answer": 3,
      "explain": "meal → 餐",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-002",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy father likes to ___ in the park.",
      "options": [
        "was",
        "jog",
        "touching",
        "after all"
      ],
      "answer": 1,
      "explain": "空格是 jog（慢跑）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-014",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「貼心的；甜的」的英文是？",
      "options": [
        "sweet",
        "ago",
        "flower",
        "tomb"
      ],
      "answer": 0,
      "explain": "貼心的；甜的 → sweet",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-029",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「親戚；親屬」的英文是？",
      "options": [
        "later",
        "relative",
        "story",
        "plant"
      ],
      "answer": 1,
      "explain": "親戚；親屬 → relative",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-015",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis song reminds me of my childhood. ___",
      "options": [
        "was",
        "candy",
        "candle",
        "remind ... of"
      ],
      "answer": 3,
      "explain": "空格是 remind ... of（想起）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VEN-035",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "What does “story” mean?",
      "options": [
        "是 (are 的過去式)",
        "故事",
        "昨天",
        "回憶；記憶"
      ],
      "answer": 1,
      "explain": "story → 故事",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-039",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe has a great ___ of heights.",
      "options": [
        "must",
        "sweep",
        "look after",
        "fear"
      ],
      "answer": 3,
      "explain": "空格是 fear（害怕）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-VZH-033",
      "lesson": "Lesson 1",
      "type": "vocab",
      "stem": "「餐」的英文是？",
      "options": [
        "must",
        "place",
        "meal",
        "ago"
      ],
      "answer": 2,
      "explain": "餐 → meal",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-020",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe loves listening to classical ___.",
      "options": [
        "touching",
        "ghost",
        "music",
        "dead"
      ],
      "answer": 2,
      "explain": "空格是 music（音樂）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L1-CLZ-007",
      "lesson": "Lesson 1",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe moved to Taipei three years ___.",
      "options": [
        "ago",
        "flower",
        "candle",
        "place"
      ],
      "answer": 0,
      "explain": "空格是 ago（以前）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    }
  ],
  "Lesson 2": [
    {
      "id": "L2-VEN-011",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “terrible” mean?",
      "options": [
        "結婚",
        "糟糕的",
        "購買",
        "因為"
      ],
      "answer": 1,
      "explain": "terrible → 糟糕的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-004",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “get married” mean?",
      "options": [
        "購買",
        "婚姻",
        "結婚",
        "忍受"
      ],
      "answer": 2,
      "explain": "get married → 結婚",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-027",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「小孩」的英文是？",
      "options": [
        "poor",
        "children",
        "buy",
        "choose"
      ],
      "answer": 1,
      "explain": "小孩 → children",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-EX-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「get → got」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "Why didn't Sue go shopping with us?",
        "She got 50 points on the test.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 2,
      "explain": "get → got",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-029",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI can't see anything ___ my glasses.",
      "options": [
        "without",
        "math",
        "curious",
        "terrible"
      ],
      "answer": 0,
      "explain": "空格是 without（沒有）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-016",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “ending” mean?",
      "options": [
        "結局",
        "折斷；破裂",
        "結婚",
        "婚姻"
      ],
      "answer": 0,
      "explain": "ending → 結局",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-019",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI want to ___ a gift for my mom.",
      "options": [
        "buy",
        "curious",
        "happen",
        "nobody"
      ],
      "answer": 0,
      "explain": "空格是 buy（購買）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-035",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “take action” mean?",
      "options": [
        "採取行動",
        "哭泣",
        "貧窮的；可憐的",
        "巧克力"
      ],
      "answer": 0,
      "explain": "take action → 採取行動",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-009",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “happen” mean?",
      "options": [
        "發生",
        "貧窮的；可憐的",
        "不再",
        "購買"
      ],
      "answer": 0,
      "explain": "happen → 發生",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-021",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「摘採」的英文是？",
      "options": [
        "buy",
        "why",
        "pick",
        "become"
      ],
      "answer": 2,
      "explain": "摘採 → pick",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-008",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “poor” mean?",
      "options": [
        "不再",
        "婚姻",
        "成為；變成",
        "貧窮的；可憐的"
      ],
      "answer": 3,
      "explain": "poor → 貧窮的；可憐的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-025",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “computer” mean?",
      "options": [
        "手臂",
        "鞋子",
        "電腦",
        "發生"
      ],
      "answer": 2,
      "explain": "computer → 電腦",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-000",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “math” mean?",
      "options": [
        "手臂",
        "折斷；破裂",
        "選擇",
        "數學"
      ],
      "answer": 3,
      "explain": "math → 數學",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-013",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “finish” mean?",
      "options": [
        "手臂",
        "折斷；破裂",
        "完成",
        "害怕的"
      ],
      "answer": 2,
      "explain": "finish → 完成",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-004",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「結婚」的英文是？",
      "options": [
        "buy",
        "terrible",
        "get married",
        "marriage"
      ],
      "answer": 2,
      "explain": "結婚 → get married",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-021",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's go to the farm to ___ strawberries.",
      "options": [
        "scared",
        "cry",
        "pick",
        "chocolate"
      ],
      "answer": 2,
      "explain": "空格是 pick（摘採）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-018",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI need to buy a new pair of shoes. ___",
      "options": [
        "choose",
        "happen",
        "computer",
        "shoe(s)"
      ],
      "answer": 3,
      "explain": "空格是 shoe(s)（鞋子）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-026",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “choose” mean?",
      "options": [
        "沒有人",
        "害怕的",
        "嗯；那麼 (發語詞) int.",
        "選擇"
      ],
      "answer": 3,
      "explain": "choose → 選擇",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-TRP-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Why he cry?",
        "I didn't went to the game.",
        "He was scared because he watched a movie.",
        "He was scared because watched a movie."
      ],
      "answer": 2,
      "explain": "because 後面要完整子句（含主詞）",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-010",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe accidentally ___ the ball over the fence.",
      "options": [
        "arm",
        "hit",
        "computer",
        "math"
      ],
      "answer": 1,
      "explain": "空格是 hit（打 (過去式為 hit)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-017",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “stand” mean?",
      "options": [
        "數學",
        "忍受",
        "貧窮的；可憐的",
        "為什麼"
      ],
      "answer": 1,
      "explain": "stand → 忍受",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-014",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “not...anymore” mean?",
      "options": [
        "電腦",
        "成為；變成",
        "不再",
        "購買"
      ],
      "answer": 2,
      "explain": "not...anymore → 不再",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-020",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “pair” mean?",
      "options": [
        "打 (過去式為 hit)",
        "沒有",
        "數學",
        "一雙"
      ],
      "answer": 3,
      "explain": "pair → 一雙",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-023",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nBe careful not to ___ the glass.",
      "options": [
        "break",
        "take action",
        "pair",
        "children"
      ],
      "answer": 0,
      "explain": "空格是 break（折斷；破裂）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-005",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「為什麼」的英文是？",
      "options": [
        "take action",
        "chocolate",
        "why",
        "not...anymore"
      ],
      "answer": 2,
      "explain": "為什麼 → why",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-010",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「打 (過去式為 hit)」的英文是？",
      "options": [
        "because",
        "pair",
        "ever",
        "hit"
      ],
      "answer": 3,
      "explain": "打 (過去式為 hit) → hit",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-010",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “hit” mean?",
      "options": [
        "打 (過去式為 hit)",
        "沒有",
        "害怕的",
        "發生"
      ],
      "answer": 0,
      "explain": "hit → 打 (過去式為 hit)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-025",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「電腦」的英文是？",
      "options": [
        "not...anymore",
        "computer",
        "finish",
        "ever"
      ],
      "answer": 1,
      "explain": "電腦 → computer",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-006",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey ___ fresh bread at that store.",
      "options": [
        "baby",
        "sell",
        "finish",
        "stand"
      ],
      "answer": 1,
      "explain": "空格是 sell（賣）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-GQ-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "天氣很好，所以他們去公園遛狗。",
      "options": [
        "The weather was nice, so they walked the dog in the park.",
        "The weather was nice because they walked the dog in the park.",
        "The weather were nice because they walked the dog in the park.",
        "Not The weather was nice because they walked"
      ],
      "answer": 0,
      "explain": "「所以」用 so；because 是「因為」。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L2-EX-006",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「because = 因為」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago.",
        "She got 50 points on the test.",
        "John was scared because he watched a ghost movie."
      ],
      "answer": 3,
      "explain": "because = 因為",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-022",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nDo you want a piece of ___ cake?",
      "options": [
        "get married",
        "chocolate",
        "terrible",
        "not...anymore"
      ],
      "answer": 1,
      "explain": "空格是 chocolate（巧克力）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-032",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「哭泣」的英文是？",
      "options": [
        "cry",
        "marriage",
        "sell",
        "scared"
      ],
      "answer": 0,
      "explain": "哭泣 → cry",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-019",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「購買」的英文是？",
      "options": [
        "become",
        "buy",
        "chocolate",
        "take action"
      ],
      "answer": 1,
      "explain": "購買 → buy",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-031",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe wants to ___ a doctor in the future.",
      "options": [
        "ever",
        "nobody",
        "hit",
        "become"
      ],
      "answer": 3,
      "explain": "空格是 become（成為；變成）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-001",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「考試；測驗」的英文是？",
      "options": [
        "happen",
        "scared",
        "test",
        "math"
      ],
      "answer": 2,
      "explain": "考試；測驗 → test",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-008",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ dog was lost and hungry.",
      "options": [
        "test",
        "become",
        "because",
        "poor"
      ],
      "answer": 3,
      "explain": "空格是 poor（貧窮的；可憐的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-002",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「猜；猜測」的英文是？",
      "options": [
        "nobody",
        "guess",
        "arm",
        "break"
      ],
      "answer": 1,
      "explain": "猜；猜測 → guess",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-WRG-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I was tired, so I went to bed.",
        "Why he cry?",
        "I didn't went to the game.",
        "Because so I was tired."
      ],
      "answer": 3,
      "explain": "because 與 so 不要疊用",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-026",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou must ___ one of these two books.",
      "options": [
        "choose",
        "ever",
        "arm",
        "test"
      ],
      "answer": 0,
      "explain": "空格是 choose（選擇）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-WRG-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He was scared because he watched a movie.",
        "I didn't went to the game.",
        "He was scared because watched a movie.",
        "Why he cry?"
      ],
      "answer": 2,
      "explain": "because 後面要完整子句（含主詞）",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VEN-034",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “scared” mean?",
      "options": [
        "為什麼",
        "害怕的",
        "沒有人",
        "鞋子"
      ],
      "answer": 1,
      "explain": "scared → 害怕的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-014",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「不再」的英文是？",
      "options": [
        "scared",
        "chocolate",
        "not...anymore",
        "happen"
      ],
      "answer": 2,
      "explain": "不再 → not...anymore",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-031",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “become” mean?",
      "options": [
        "曾經",
        "完成",
        "考試；測驗",
        "成為；變成"
      ],
      "answer": 3,
      "explain": "become → 成為；變成",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-031",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「成為；變成」的英文是？",
      "options": [
        "poor",
        "because",
        "choose",
        "become"
      ],
      "answer": 3,
      "explain": "成為；變成 → become",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-027",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe park is full of happy ___.",
      "options": [
        "children",
        "because",
        "break",
        "age"
      ],
      "answer": 0,
      "explain": "空格是 children（小孩）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-EX-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「規則 visit → visited」？",
      "options": [
        "Karen visited her grandparents two days ago.",
        "Why didn't Sue go shopping with us?",
        "She got 50 points on the test.",
        "Jesse had a bad day yesterday."
      ],
      "answer": 0,
      "explain": "規則 visit → visited",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VEN-022",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “chocolate” mean?",
      "options": [
        "不再",
        "因為",
        "忍受",
        "巧克力"
      ],
      "answer": 3,
      "explain": "chocolate → 巧克力",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-014",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI don't live in that house anymore. ___",
      "options": [
        "not...anymore",
        "without",
        "chocolate",
        "take action"
      ],
      "answer": 0,
      "explain": "空格是 not...anymore（不再）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-TRP-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't went to the game.",
        "Why he cry?",
        "I was tired, so I went to bed.",
        "Because so I was tired."
      ],
      "answer": 2,
      "explain": "because 與 so 不要疊用",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VZH-035",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「採取行動」的英文是？",
      "options": [
        "why",
        "hit",
        "computer",
        "take action"
      ],
      "answer": 3,
      "explain": "採取行動 → take action",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-006",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “sell” mean?",
      "options": [
        "完成",
        "成為；變成",
        "鞋子",
        "賣"
      ],
      "answer": 3,
      "explain": "sell → 賣",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-023",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「折斷；破裂」的英文是？",
      "options": [
        "choose",
        "chocolate",
        "buy",
        "break"
      ],
      "answer": 3,
      "explain": "折斷；破裂 → break",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-030",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy little sister is a cute ___.",
      "options": [
        "take action",
        "baby",
        "poor",
        "ending"
      ],
      "answer": 1,
      "explain": "空格是 baby（嬰兒）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-021",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “pick” mean?",
      "options": [
        "購買",
        "為什麼",
        "成為；變成",
        "摘採"
      ],
      "answer": 3,
      "explain": "pick → 摘採",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-TRP-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Why he cry?",
        "I didn't went to the game.",
        "I didn't go to the game.",
        "Because so I was tired."
      ],
      "answer": 2,
      "explain": "didn't + 原形",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VEN-036",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “marriage” mean?",
      "options": [
        "貧窮的；可憐的",
        "考試；測驗",
        "婚姻",
        "年齡"
      ],
      "answer": 2,
      "explain": "marriage → 婚姻",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-006",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「賣」的英文是？",
      "options": [
        "because",
        "break",
        "hit",
        "sell"
      ],
      "answer": 3,
      "explain": "賣 → sell",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-009",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「發生」的英文是？",
      "options": [
        "happen",
        "stand",
        "scared",
        "baby"
      ],
      "answer": 0,
      "explain": "發生 → happen",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-004",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy sister will ___ next year.",
      "options": [
        "hit",
        "get married",
        "stand",
        "because"
      ],
      "answer": 1,
      "explain": "空格是 get married（結婚）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-024",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「手臂」的英文是？",
      "options": [
        "baby",
        "poor",
        "guess",
        "arm"
      ],
      "answer": 3,
      "explain": "手臂 → arm",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-029",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「沒有」的英文是？",
      "options": [
        "cry",
        "nobody",
        "without",
        "because"
      ],
      "answer": 2,
      "explain": "沒有 → without",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-009",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat will ___ if we are late?",
      "options": [
        "baby",
        "pair",
        "happen",
        "age"
      ],
      "answer": 2,
      "explain": "空格是 happen（發生）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-032",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “cry” mean?",
      "options": [
        "哭泣",
        "好奇的",
        "手臂",
        "折斷；破裂"
      ],
      "answer": 0,
      "explain": "cry → 哭泣",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-011",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「糟糕的」的英文是？",
      "options": [
        "cry",
        "marriage",
        "choose",
        "terrible"
      ],
      "answer": 3,
      "explain": "糟糕的 → terrible",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-018",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「鞋子」的英文是？",
      "options": [
        "cry",
        "shoe(s)",
        "take action",
        "math"
      ],
      "answer": 1,
      "explain": "鞋子 → shoe(s)",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-016",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「結局」的英文是？",
      "options": [
        "test",
        "become",
        "ending",
        "computer"
      ],
      "answer": 2,
      "explain": "結局 → ending",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-034",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe is ___ of the big dog.",
      "options": [
        "chocolate",
        "become",
        "scared",
        "marriage"
      ],
      "answer": 2,
      "explain": "空格是 scared（害怕的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-EX-005",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「so = 所以」？",
      "options": [
        "The weather was nice, so they walked the dog.",
        "She got 50 points on the test.",
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 0,
      "explain": "so = 所以",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VZH-017",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「忍受」的英文是？",
      "options": [
        "stand",
        "curious",
        "age",
        "baby"
      ],
      "answer": 0,
      "explain": "忍受 → stand",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-024",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe hurt his left ___ during the game.",
      "options": [
        "choose",
        "arm",
        "computer",
        "scared"
      ],
      "answer": 1,
      "explain": "空格是 arm（手臂）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-005",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “why” mean?",
      "options": [
        "發生",
        "小孩",
        "為什麼",
        "結婚"
      ],
      "answer": 2,
      "explain": "why → 為什麼",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-015",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe little cat is ___ about everything.",
      "options": [
        "marriage",
        "curious",
        "guess",
        "scared"
      ],
      "answer": 1,
      "explain": "空格是 curious（好奇的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-012",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHave you ___ been to another country?",
      "options": [
        "shoe(s)",
        "buy",
        "take action",
        "ever"
      ],
      "answer": 3,
      "explain": "空格是 ever（曾經）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-011",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI had a ___ day at work.",
      "options": [
        "take action",
        "terrible",
        "finish",
        "scared"
      ],
      "answer": 1,
      "explain": "空格是 terrible（糟糕的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-024",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “arm” mean?",
      "options": [
        "貧窮的；可憐的",
        "電腦",
        "手臂",
        "結婚"
      ],
      "answer": 2,
      "explain": "arm → 手臂",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-EX-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「Why + didn't + 原形」？",
      "options": [
        "She got 50 points on the test.",
        "Why didn't Sue go shopping with us?",
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 1,
      "explain": "Why + didn't + 原形",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-000",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ is my favorite subject at school.",
      "options": [
        "shoe(s)",
        "math",
        "arm",
        "not...anymore"
      ],
      "answer": 1,
      "explain": "空格是 math（數學）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-025",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI use my ___ for school work.",
      "options": [
        "pair",
        "computer",
        "test",
        "without"
      ],
      "answer": 1,
      "explain": "空格是 computer（電腦）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-003",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “well” mean?",
      "options": [
        "不再",
        "嗯；那麼 (發語詞) int.",
        "電腦",
        "年齡"
      ],
      "answer": 1,
      "explain": "well → 嗯；那麼 (發語詞) int.",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-023",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “break” mean?",
      "options": [
        "沒有人",
        "曾經",
        "為什麼",
        "折斷；破裂"
      ],
      "answer": 3,
      "explain": "break → 折斷；破裂",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-000",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「數學」的英文是？",
      "options": [
        "test",
        "math",
        "ending",
        "pick"
      ],
      "answer": 1,
      "explain": "數學 → math",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-005",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ were you late for school today?",
      "options": [
        "shoe(s)",
        "not...anymore",
        "why",
        "happen"
      ],
      "answer": 2,
      "explain": "空格是 why（為什麼）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-035",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe must ___ to protect our planet.",
      "options": [
        "not...anymore",
        "take action",
        "arm",
        "nobody"
      ],
      "answer": 1,
      "explain": "空格是 take action（採取行動）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-036",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey have a very happy ___.",
      "options": [
        "choose",
        "nobody",
        "finish",
        "marriage"
      ],
      "answer": 3,
      "explain": "空格是 marriage（婚姻）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-012",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「曾經」的英文是？",
      "options": [
        "get married",
        "ever",
        "math",
        "arm"
      ],
      "answer": 1,
      "explain": "曾經 → ever",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-033",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ knows the answer to the question.",
      "options": [
        "take action",
        "nobody",
        "sell",
        "without"
      ],
      "answer": 1,
      "explain": "空格是 nobody（沒有人）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-030",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「嬰兒」的英文是？",
      "options": [
        "chocolate",
        "baby",
        "without",
        "arm"
      ],
      "answer": 1,
      "explain": "嬰兒 → baby",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-022",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「巧克力」的英文是？",
      "options": [
        "well",
        "chocolate",
        "become",
        "shoe(s)"
      ],
      "answer": 1,
      "explain": "巧克力 → chocolate",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-002",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “guess” mean?",
      "options": [
        "採取行動",
        "為什麼",
        "賣",
        "猜；猜測"
      ],
      "answer": 3,
      "explain": "guess → 猜；猜測",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-029",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “without” mean?",
      "options": [
        "沒有人",
        "嗯；那麼 (發語詞) int.",
        "糟糕的",
        "沒有"
      ],
      "answer": 3,
      "explain": "without → 沒有",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-EX-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「have → had」？",
      "options": [
        "Why didn't Sue go shopping with us?",
        "She got 50 points on the test.",
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 2,
      "explain": "have → had",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VEN-019",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “buy” mean?",
      "options": [
        "購買",
        "數學",
        "一雙",
        "電腦"
      ],
      "answer": 0,
      "explain": "buy → 購買",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-002",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ what's in the box?",
      "options": [
        "scared",
        "baby",
        "guess",
        "cry"
      ],
      "answer": 2,
      "explain": "空格是 guess（猜；猜測）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-034",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「害怕的」的英文是？",
      "options": [
        "terrible",
        "chocolate",
        "why",
        "scared"
      ],
      "answer": 3,
      "explain": "害怕的 → scared",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-003",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「嗯；那麼 (發語詞) int.」的英文是？",
      "options": [
        "well",
        "shoe(s)",
        "age",
        "chocolate"
      ],
      "answer": 0,
      "explain": "嗯；那麼 (發語詞) int. → well",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-020",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI found a ___ of socks under the bed.",
      "options": [
        "get married",
        "break",
        "buy",
        "pair"
      ],
      "answer": 3,
      "explain": "空格是 pair（一雙）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-015",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「好奇的」的英文是？",
      "options": [
        "guess",
        "curious",
        "cry",
        "children"
      ],
      "answer": 1,
      "explain": "好奇的 → curious",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-012",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “ever” mean?",
      "options": [
        "完成",
        "結婚",
        "曾經",
        "哭泣"
      ],
      "answer": 2,
      "explain": "ever → 曾經",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-033",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「沒有人」的英文是？",
      "options": [
        "well",
        "break",
        "chocolate",
        "nobody"
      ],
      "answer": 3,
      "explain": "沒有人 → nobody",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-017",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI can't ___ the noise from the street.",
      "options": [
        "arm",
        "stand",
        "age",
        "baby"
      ],
      "answer": 1,
      "explain": "空格是 stand（忍受）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-033",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “nobody” mean?",
      "options": [
        "沒有人",
        "考試；測驗",
        "發生",
        "採取行動"
      ],
      "answer": 0,
      "explain": "nobody → 沒有人",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-003",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___, let me think about your question.",
      "options": [
        "well",
        "poor",
        "break",
        "baby"
      ],
      "answer": 0,
      "explain": "空格是 well（嗯；那麼 (發語詞) int.）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-030",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “baby” mean?",
      "options": [
        "手臂",
        "猜；猜測",
        "考試；測驗",
        "嬰兒"
      ],
      "answer": 3,
      "explain": "baby → 嬰兒",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-013",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease ___ your dinner before you play.",
      "options": [
        "finish",
        "become",
        "ending",
        "math"
      ],
      "answer": 0,
      "explain": "空格是 finish（完成）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-007",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「因為」的英文是？",
      "options": [
        "hit",
        "cry",
        "terrible",
        "because"
      ],
      "answer": 3,
      "explain": "因為 → because",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-018",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “shoe(s)” mean?",
      "options": [
        "鞋子",
        "結局",
        "糟糕的",
        "貧窮的；可憐的"
      ],
      "answer": 0,
      "explain": "shoe(s) → 鞋子",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-001",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “test” mean?",
      "options": [
        "鞋子",
        "考試；測驗",
        "手臂",
        "年齡"
      ],
      "answer": 1,
      "explain": "test → 考試；測驗",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-028",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “age” mean?",
      "options": [
        "打 (過去式為 hit)",
        "年齡",
        "忍受",
        "鞋子"
      ],
      "answer": 1,
      "explain": "age → 年齡",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-032",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe sad movie made me ___.",
      "options": [
        "nobody",
        "buy",
        "cry",
        "choose"
      ],
      "answer": 2,
      "explain": "空格是 cry（哭泣）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-026",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「選擇」的英文是？",
      "options": [
        "hit",
        "finish",
        "curious",
        "choose"
      ],
      "answer": 3,
      "explain": "選擇 → choose",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-028",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat is the average ___ of the students?",
      "options": [
        "age",
        "cry",
        "finish",
        "take action"
      ],
      "answer": 0,
      "explain": "空格是 age（年齡）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-013",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「完成」的英文是？",
      "options": [
        "chocolate",
        "finish",
        "test",
        "pick"
      ],
      "answer": 1,
      "explain": "完成 → finish",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-CLZ-007",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI was late ___ I missed the bus.",
      "options": [
        "because",
        "get married",
        "break",
        "why"
      ],
      "answer": 0,
      "explain": "空格是 because（因為）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-WRG-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Why he cry?",
        "Why is he crying?",
        "Because so I was tired.",
        "I didn't went to the game."
      ],
      "answer": 0,
      "explain": "Why 後面要有動詞變化",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VEN-015",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “curious” mean?",
      "options": [
        "結局",
        "選擇",
        "好奇的",
        "數學"
      ],
      "answer": 2,
      "explain": "curious → 好奇的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-007",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “because” mean?",
      "options": [
        "巧克力",
        "猜；猜測",
        "哭泣",
        "因為"
      ],
      "answer": 3,
      "explain": "because → 因為",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-028",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「年齡」的英文是？",
      "options": [
        "math",
        "sell",
        "marriage",
        "age"
      ],
      "answer": 3,
      "explain": "年齡 → age",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-TRP-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Why is he crying?",
        "Because so I was tired.",
        "I didn't went to the game.",
        "Why he cry?"
      ],
      "answer": 0,
      "explain": "Why 後面要有動詞變化",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-VZH-036",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「婚姻」的英文是？",
      "options": [
        "nobody",
        "finish",
        "marriage",
        "chocolate"
      ],
      "answer": 2,
      "explain": "婚姻 → marriage",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-GQ-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "我昨天去看籃球比賽。",
      "options": [
        "I went to the basketball game yesterday.",
        "I goed to the basketball game yesterday.",
        "I goed to the basketball game yesterday. (x)",
        "Not I goed to the basketball game yesterday."
      ],
      "answer": 0,
      "explain": "go → went。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L2-VZH-008",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「貧窮的；可憐的」的英文是？",
      "options": [
        "computer",
        "poor",
        "sell",
        "marriage"
      ],
      "answer": 1,
      "explain": "貧窮的；可憐的 → poor",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-GQ-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "她為什麼沒跟我們逛街？",
      "options": [
        "Why didn't Sue go shopping with us?",
        "Why Sue didn't went shopping with us?",
        "Why Sue didn't went shopping with us? (x)",
        "Not Why Sue didn't went shopping with us?"
      ],
      "answer": 0,
      "explain": "Why + didn't + 原形 go。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L2-CLZ-016",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe movie has a very happy ___.",
      "options": [
        "stand",
        "ending",
        "curious",
        "why"
      ],
      "answer": 1,
      "explain": "空格是 ending（結局）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-WRG-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I didn't went to the game.",
        "Because so I was tired.",
        "I didn't go to the game.",
        "Why he cry?"
      ],
      "answer": 0,
      "explain": "didn't + 原形",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L2-CLZ-001",
      "lesson": "Lesson 2",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe have a big English ___ tomorrow.",
      "options": [
        "finish",
        "computer",
        "why",
        "test"
      ],
      "answer": 3,
      "explain": "空格是 test（考試；測驗）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VEN-027",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "What does “children” mean?",
      "options": [
        "貧窮的；可憐的",
        "小孩",
        "巧克力",
        "猜；猜測"
      ],
      "answer": 1,
      "explain": "children → 小孩",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L2-VZH-020",
      "lesson": "Lesson 2",
      "type": "vocab",
      "stem": "「一雙」的英文是？",
      "options": [
        "chocolate",
        "marriage",
        "pair",
        "take action"
      ],
      "answer": 2,
      "explain": "一雙 → pair",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    }
  ],
  "Lesson 3": [
    {
      "id": "L3-CLZ-007",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis question is too ___ for me.",
      "options": [
        "deaf",
        "difficult",
        "surprised",
        "possible"
      ],
      "answer": 1,
      "explain": "空格是 difficult（困難的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「before：較早的事先說」？",
      "options": [
        "Before the boy went out, his father came back.",
        "Some students were climbing a tree when we passed by.",
        "What were you doing at seven last night?",
        "After she drank a cup of tea, she ate some bread."
      ],
      "answer": 0,
      "explain": "before：較早的事先說",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-015",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「感到疲倦的」的英文是？",
      "options": [
        "before",
        "cellphone",
        "tired",
        "bottom"
      ],
      "answer": 2,
      "explain": "感到疲倦的 → tired",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-016",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe ___ arrived at our destination.",
      "options": [
        "cellphone",
        "finally",
        "snake",
        "butterfly"
      ],
      "answer": 1,
      "explain": "空格是 finally（終於）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-020",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe can ___ very fast on the keyboard.",
      "options": [
        "in time",
        "type",
        "cellphone",
        "deaf"
      ],
      "answer": 1,
      "explain": "空格是 type（打字）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-000",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ lives in a beautiful castle.",
      "options": [
        "pass by",
        "laugh",
        "king",
        "surprised"
      ],
      "answer": 2,
      "explain": "空格是 king（國王）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-019",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe is very afraid of ___s.",
      "options": [
        "snake",
        "deep",
        "type",
        "die"
      ],
      "answer": 0,
      "explain": "空格是 snake（蛇）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-006",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “before” mean?",
      "options": [
        "經過",
        "在...之前",
        "耳聾的",
        "一遍又一遍"
      ],
      "answer": 1,
      "explain": "before → 在...之前",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-010",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “possible” mean?",
      "options": [
        "可能的",
        "突然地",
        "蝙蝠",
        "一遍又一遍"
      ],
      "answer": 0,
      "explain": "possible → 可能的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-018",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “surprised” mean?",
      "options": [
        "感到驚訝的",
        "耳聾的",
        "洞",
        "聽見"
      ],
      "answer": 0,
      "explain": "surprised → 感到驚訝的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-029",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “cry” mean?",
      "options": [
        "抵達",
        "叫喊",
        "在...旁邊",
        "經過"
      ],
      "answer": 1,
      "explain": "cry → 叫喊",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-017",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “arrive” mean?",
      "options": [
        "耳聾的",
        "抵達",
        "路",
        "經過"
      ],
      "answer": 1,
      "explain": "arrive → 抵達",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-TRP-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I was talk on the phone.",
        "They was dancing.",
        "After she drank tea, she ate bread.",
        "After she drink tea, she ate bread."
      ],
      "answer": 2,
      "explain": "時間子句也要過去式",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-CLZ-015",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI feel very ___ after a long day.",
      "options": [
        "cellphone",
        "surprised",
        "tired",
        "way"
      ],
      "answer": 2,
      "explain": "空格是 tired（感到疲倦的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-028",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「耳聾的」的英文是？",
      "options": [
        "cellphone",
        "finally",
        "laugh",
        "deaf"
      ],
      "answer": 3,
      "explain": "耳聾的 → deaf",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-007",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “difficult” mean?",
      "options": [
        "聽見",
        "抵達",
        "感到疲倦的",
        "困難的"
      ],
      "answer": 3,
      "explain": "difficult → 困難的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-002",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「濕的」的英文是？",
      "options": [
        "snake",
        "rat",
        "bottom",
        "wet"
      ],
      "answer": 3,
      "explain": "濕的 → wet",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-013",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “bottom” mean?",
      "options": [
        "耳聾的",
        "及時",
        "底部",
        "蟾蜍"
      ],
      "answer": 2,
      "explain": "bottom → 底部",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-032",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “in time” mean?",
      "options": [
        "老鼠",
        "鼓勵...",
        "經過",
        "及時"
      ],
      "answer": 3,
      "explain": "in time → 及時",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-021",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease turn off your ___ in class.",
      "options": [
        "pass by",
        "in time",
        "tired",
        "cellphone"
      ],
      "answer": 3,
      "explain": "空格是 cellphone（手機）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-013",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「底部」的英文是？",
      "options": [
        "mud",
        "way",
        "go by",
        "bottom"
      ],
      "answer": 3,
      "explain": "底部 → bottom",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-004",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “deep” mean?",
      "options": [
        "突然地",
        "路",
        "耳聾的",
        "深的"
      ],
      "answer": 3,
      "explain": "deep → 深的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-WRG-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "They was dancing.",
        "When I arrived, he left.",
        "I was talk on the phone.",
        "When I was arrive, he left."
      ],
      "answer": 3,
      "explain": "when 子句常用過去式",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-004",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「深的」的英文是？",
      "options": [
        "hear",
        "deep",
        "king",
        "laugh"
      ],
      "answer": 1,
      "explain": "深的 → deep",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-GQ-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "她喝完熱茶之後吃了麵包。",
      "options": [
        "After she drank a cup of hot tea, she ate some bread.",
        "Before she drank a cup of hot tea, she ate some bread.",
        "Before she drank a cup of hot tea, she ate some bread. (x)",
        "Not Before she drank a cup of hot tea, she a"
      ],
      "answer": 0,
      "explain": "先喝再吃 → After。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L3-VEN-022",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “hear” mean?",
      "options": [
        "無助的",
        "聽見",
        "母雞",
        "訊息"
      ],
      "answer": 1,
      "explain": "hear → 聽見",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-001",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「路」的英文是？",
      "options": [
        "king",
        "over and over",
        "way",
        "laugh"
      ],
      "answer": 2,
      "explain": "路 → way",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-033",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「鼓勵...」的英文是？",
      "options": [
        "rat",
        "wet",
        "cheer ... on",
        "bottom"
      ],
      "answer": 2,
      "explain": "鼓勵... → cheer ... on",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-003",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「泥土」的英文是？",
      "options": [
        "mud",
        "beside",
        "butterfly",
        "climb"
      ],
      "answer": 0,
      "explain": "泥土 → mud",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-031",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「一遍又一遍」的英文是？",
      "options": [
        "climb",
        "surprised",
        "bottom",
        "over and over"
      ],
      "answer": 3,
      "explain": "一遍又一遍 → over and over",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-011",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「經過」的英文是？",
      "options": [
        "deep",
        "laugh",
        "snake",
        "pass by"
      ],
      "answer": 3,
      "explain": "經過 → pass by",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-012",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe likes to ___ trees in his free time.",
      "options": [
        "climb",
        "way",
        "go by",
        "mud"
      ],
      "answer": 0,
      "explain": "空格是 climb（攀爬）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-021",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “cellphone” mean?",
      "options": [
        "母雞",
        "濕的",
        "手機",
        "感到驚訝的"
      ],
      "answer": 2,
      "explain": "cellphone → 手機",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-012",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “climb” mean?",
      "options": [
        "及時",
        "蛇",
        "經過",
        "攀爬"
      ],
      "answer": 3,
      "explain": "climb → 攀爬",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-WRG-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "After she drink tea, she ate bread.",
        "I was talk on the phone.",
        "After she drank tea, she ate bread.",
        "They was dancing."
      ],
      "answer": 0,
      "explain": "時間子句也要過去式",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-027",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「訊息」的英文是？",
      "options": [
        "message",
        "possible",
        "beside",
        "toad"
      ],
      "answer": 0,
      "explain": "訊息 → message",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-015",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “tired” mean?",
      "options": [
        "感到疲倦的",
        "終於",
        "狐狸",
        "蛇"
      ],
      "answer": 0,
      "explain": "tired → 感到疲倦的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-008",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI saw a colorful ___ in the garden.",
      "options": [
        "tired",
        "king",
        "butterfly",
        "die"
      ],
      "answer": 2,
      "explain": "空格是 butterfly（蝴蝶）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-017",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「抵達」的英文是？",
      "options": [
        "die",
        "cellphone",
        "beside",
        "arrive"
      ],
      "answer": 3,
      "explain": "抵達 → arrive",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-035",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “fox” mean?",
      "options": [
        "母雞",
        "狐狸",
        "死亡",
        "抵達"
      ],
      "answer": 1,
      "explain": "fox → 狐狸",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-024",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「突然地」的英文是？",
      "options": [
        "suddenly",
        "fox",
        "laugh",
        "die"
      ],
      "answer": 0,
      "explain": "突然地 → suddenly",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-020",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “type” mean?",
      "options": [
        "經過",
        "手機",
        "在...之前",
        "打字"
      ],
      "answer": 3,
      "explain": "type → 打字",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「問那時正在做什麼」？",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "After she drank a cup of tea, she ate some bread.",
        "Before the boy went out, his father came back.",
        "What were you doing at seven last night?"
      ],
      "answer": 3,
      "explain": "問那時正在做什麼",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VEN-025",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “hole” mean?",
      "options": [
        "深的",
        "在...旁邊",
        "洞",
        "狐狸"
      ],
      "answer": 2,
      "explain": "hole → 洞",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-TRP-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "They was dancing.",
        "I was talk on the phone.",
        "I was talking on the phone.",
        "When I was arrive, he left."
      ],
      "answer": 2,
      "explain": "要 V-ing",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VEN-014",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “die” mean?",
      "options": [
        "死亡",
        "一遍又一遍",
        "底部",
        "突然地"
      ],
      "answer": 0,
      "explain": "die → 死亡",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-009",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe funny joke made everyone ___.",
      "options": [
        "laugh",
        "pass by",
        "tired",
        "fox"
      ],
      "answer": 0,
      "explain": "空格是 laugh（大笑）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-027",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “message” mean?",
      "options": [
        "訊息",
        "打字",
        "叫喊",
        "蝙蝠"
      ],
      "answer": 0,
      "explain": "message → 訊息",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-013",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy keys fell to the ___ of the pool.",
      "options": [
        "message",
        "possible",
        "bottom",
        "cellphone"
      ],
      "answer": 2,
      "explain": "空格是 bottom（底部）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-033",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy family will be there to cheer me on. ___",
      "options": [
        "way",
        "rat",
        "cheer ... on",
        "fox"
      ],
      "answer": 2,
      "explain": "空格是 cheer ... on（鼓勵...）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-019",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “snake” mean?",
      "options": [
        "突然地",
        "深的",
        "蛇",
        "打字"
      ],
      "answer": 2,
      "explain": "snake → 蛇",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-001",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “way” mean?",
      "options": [
        "死亡",
        "感到疲倦的",
        "困難的",
        "路"
      ],
      "answer": 3,
      "explain": "way → 路",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-028",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe has been ___ since he was born.",
      "options": [
        "helpless",
        "deaf",
        "possible",
        "difficult"
      ],
      "answer": 1,
      "explain": "空格是 deaf（耳聾的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-030",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nTime seems to ___ so quickly.",
      "options": [
        "go by",
        "over and over",
        "tired",
        "fox"
      ],
      "answer": 0,
      "explain": "空格是 go by（經過）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-GQ-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "我們經過時，有些學生正在爬樹。",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "Some students climbed a tree when we were pass by.",
        "Some students climbed a tree when we were pass by. (x)",
        "Some students climbed a tree when we was pass by."
      ],
      "answer": 0,
      "explain": "正在爬 = were climbing；經過 = passed。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L3-VEN-002",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “wet” mean?",
      "options": [
        "母雞",
        "濕的",
        "蝴蝶",
        "手機"
      ],
      "answer": 1,
      "explain": "wet → 濕的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-018",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI was very ___ to see her there.",
      "options": [
        "message",
        "snake",
        "surprised",
        "difficult"
      ],
      "answer": 2,
      "explain": "空格是 surprised（感到驚訝的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-000",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “king” mean?",
      "options": [
        "感到疲倦的",
        "一遍又一遍",
        "蟾蜍",
        "國王"
      ],
      "answer": 3,
      "explain": "king → 國王",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-TRP-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "When I was arrive, he left.",
        "I was talk on the phone.",
        "They were dancing.",
        "They was dancing."
      ],
      "answer": 2,
      "explain": "they → were",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-037",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「母雞」的英文是？",
      "options": [
        "hen",
        "bottom",
        "way",
        "rat"
      ],
      "answer": 0,
      "explain": "母雞 → hen",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-001",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you show me the ___ to the station?",
      "options": [
        "deaf",
        "go by",
        "cry",
        "way"
      ],
      "answer": 3,
      "explain": "空格是 way（路）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-018",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「感到驚訝的」的英文是？",
      "options": [
        "bottom",
        "tired",
        "type",
        "surprised"
      ],
      "answer": 3,
      "explain": "感到驚訝的 → surprised",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-011",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “pass by” mean?",
      "options": [
        "深的",
        "無助的",
        "母雞",
        "經過"
      ],
      "answer": 3,
      "explain": "pass by → 經過",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-005",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「過去進行 + before」？",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "I was talking on it with Jack before lunch.",
        "What were you doing at seven last night?",
        "Before the boy went out, his father came back."
      ],
      "answer": 1,
      "explain": "過去進行 + before",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-035",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「狐狸」的英文是？",
      "options": [
        "fox",
        "over and over",
        "in time",
        "die"
      ],
      "answer": 0,
      "explain": "狐狸 → fox",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-020",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「打字」的英文是？",
      "options": [
        "type",
        "fox",
        "cellphone",
        "before"
      ],
      "answer": 0,
      "explain": "打字 → type",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-032",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe arrived just ___ for the movie.",
      "options": [
        "laugh",
        "in time",
        "fox",
        "king"
      ],
      "answer": 1,
      "explain": "空格是 in time（及時）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-009",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「大笑」的英文是？",
      "options": [
        "deaf",
        "go by",
        "snake",
        "laugh"
      ],
      "answer": 3,
      "explain": "大笑 → laugh",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-017",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat time does the train ___?",
      "options": [
        "deaf",
        "deep",
        "cry",
        "arrive"
      ],
      "answer": 3,
      "explain": "空格是 arrive（抵達）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-037",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ laid five small eggs.",
      "options": [
        "finally",
        "hen",
        "type",
        "butterfly"
      ],
      "answer": 1,
      "explain": "空格是 hen（母雞）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-024",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “suddenly” mean?",
      "options": [
        "突然地",
        "濕的",
        "打字",
        "泥土"
      ],
      "answer": 0,
      "explain": "suddenly → 突然地",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-036",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy cat caught a big ___ yesterday.",
      "options": [
        "rat",
        "tired",
        "difficult",
        "die"
      ],
      "answer": 0,
      "explain": "空格是 rat（老鼠）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-019",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「蛇」的英文是？",
      "options": [
        "hen",
        "bat",
        "difficult",
        "snake"
      ],
      "answer": 3,
      "explain": "蛇 → snake",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-007",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「困難的」的英文是？",
      "options": [
        "difficult",
        "rat",
        "cry",
        "bottom"
      ],
      "answer": 0,
      "explain": "困難的 → difficult",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-037",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “hen” mean?",
      "options": [
        "母雞",
        "聽見",
        "經過",
        "狐狸"
      ],
      "answer": 0,
      "explain": "hen → 母雞",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-014",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy goldfish might ___ without water.",
      "options": [
        "difficult",
        "go by",
        "die",
        "hear"
      ],
      "answer": 2,
      "explain": "空格是 die（死亡）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-005",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “beside” mean?",
      "options": [
        "蝙蝠",
        "攀爬",
        "突然地",
        "在...旁邊"
      ],
      "answer": 3,
      "explain": "beside → 在...旁邊",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-024",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___, the lights went out in the room.",
      "options": [
        "wet",
        "type",
        "mud",
        "suddenly"
      ],
      "answer": 3,
      "explain": "空格是 suddenly（突然地）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-002",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy clothes are all ___ from the rain.",
      "options": [
        "over and over",
        "wet",
        "deaf",
        "climb"
      ],
      "answer": 1,
      "explain": "空格是 wet（濕的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-025",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「洞」的英文是？",
      "options": [
        "hen",
        "hole",
        "mud",
        "fox"
      ],
      "answer": 1,
      "explain": "洞 → hole",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-000",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「國王」的英文是？",
      "options": [
        "surprised",
        "type",
        "king",
        "hen"
      ],
      "answer": 2,
      "explain": "國王 → king",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-004",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nBe careful, the river is very ___.",
      "options": [
        "helpless",
        "deep",
        "tired",
        "finally"
      ],
      "answer": 1,
      "explain": "空格是 deep（深的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-023",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「蟾蜍」的英文是？",
      "options": [
        "beside",
        "deaf",
        "toad",
        "bat"
      ],
      "answer": 2,
      "explain": "蟾蜍 → toad",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-023",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA ___ is sitting on a big leaf.",
      "options": [
        "cry",
        "toad",
        "climb",
        "cheer ... on"
      ],
      "answer": 1,
      "explain": "空格是 toad（蟾蜍）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-022",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ the music from next door?",
      "options": [
        "deaf",
        "hear",
        "way",
        "deep"
      ],
      "answer": 1,
      "explain": "空格是 hear（聽見）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-022",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「聽見」的英文是？",
      "options": [
        "hear",
        "butterfly",
        "hen",
        "cellphone"
      ],
      "answer": 0,
      "explain": "聽見 → hear",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-021",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「手機」的英文是？",
      "options": [
        "cellphone",
        "finally",
        "laugh",
        "rat"
      ],
      "answer": 0,
      "explain": "手機 → cellphone",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-033",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “cheer ... on” mean?",
      "options": [
        "母雞",
        "抵達",
        "鼓勵...",
        "濕的"
      ],
      "answer": 2,
      "explain": "cheer ... on → 鼓勵...",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-WRG-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "They was dancing.",
        "When I was arrive, he left.",
        "I was talk on the phone.",
        "They were dancing."
      ],
      "answer": 0,
      "explain": "they → were",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-CLZ-025",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThere is a big ___ in the ground.",
      "options": [
        "mud",
        "beside",
        "wet",
        "hole"
      ],
      "answer": 3,
      "explain": "空格是 hole（洞）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「正在爬／我們經過」？",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "After she drank a cup of tea, she ate some bread.",
        "Before the boy went out, his father came back.",
        "What were you doing at seven last night?"
      ],
      "answer": 0,
      "explain": "正在爬／我們經過",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-CLZ-011",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA police car just passed by. ___",
      "options": [
        "pass by",
        "hole",
        "before",
        "cellphone"
      ],
      "answer": 0,
      "explain": "空格是 pass by（經過）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-035",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA ___ has a long nose and a bushy tail.",
      "options": [
        "wet",
        "before",
        "toad",
        "fox"
      ],
      "answer": 3,
      "explain": "空格是 fox（狐狸）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-029",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI heard a loud ___ for help.",
      "options": [
        "finally",
        "cry",
        "before",
        "hen"
      ],
      "answer": 1,
      "explain": "空格是 cry（叫喊）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-008",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「蝴蝶」的英文是？",
      "options": [
        "hear",
        "pass by",
        "surprised",
        "butterfly"
      ],
      "answer": 3,
      "explain": "蝴蝶 → butterfly",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-016",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「終於」的英文是？",
      "options": [
        "finally",
        "wet",
        "cry",
        "mud"
      ],
      "answer": 0,
      "explain": "終於 → finally",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-016",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “finally” mean?",
      "options": [
        "終於",
        "及時",
        "國王",
        "感到驚訝的"
      ],
      "answer": 0,
      "explain": "finally → 終於",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-014",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「死亡」的英文是？",
      "options": [
        "butterfly",
        "hear",
        "go by",
        "die"
      ],
      "answer": 3,
      "explain": "死亡 → die",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-026",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「無助的」的英文是？",
      "options": [
        "beside",
        "bat",
        "hear",
        "helpless"
      ],
      "answer": 3,
      "explain": "無助的 → helpless",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-003",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “mud” mean?",
      "options": [
        "在...之前",
        "叫喊",
        "路",
        "泥土"
      ],
      "answer": 3,
      "explain": "mud → 泥土",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「after：先喝茶再吃麵包」？",
      "options": [
        "What were you doing at seven last night?",
        "After she drank a cup of tea, she ate some bread.",
        "Some students were climbing a tree when we passed by.",
        "Before the boy went out, his father came back."
      ],
      "answer": 1,
      "explain": "after：先喝茶再吃麵包",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-CLZ-026",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe little kitten looked sad and ___.",
      "options": [
        "bottom",
        "wet",
        "helpless",
        "king"
      ],
      "answer": 2,
      "explain": "空格是 helpless（無助的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-TRP-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I was talk on the phone.",
        "When I was arrive, he left.",
        "They was dancing.",
        "When I arrived, he left."
      ],
      "answer": 3,
      "explain": "when 子句常用過去式",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-CLZ-034",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA ___ flies silently in the dark night.",
      "options": [
        "surprised",
        "arrive",
        "bat",
        "suddenly"
      ],
      "answer": 2,
      "explain": "空格是 bat（蝙蝠）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-036",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “rat” mean?",
      "options": [
        "攀爬",
        "抵達",
        "洞",
        "老鼠"
      ],
      "answer": 3,
      "explain": "rat → 老鼠",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-005",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「在...旁邊」的英文是？",
      "options": [
        "cry",
        "beside",
        "bat",
        "laugh"
      ],
      "answer": 1,
      "explain": "在...旁邊 → beside",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-026",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “helpless” mean?",
      "options": [
        "母雞",
        "無助的",
        "聽見",
        "攀爬"
      ],
      "answer": 1,
      "explain": "helpless → 無助的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-EX-006",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「were + V-ing」？",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "They were singing and dancing in the garden.",
        "What were you doing at seven last night?",
        "Before the boy went out, his father came back."
      ],
      "answer": 1,
      "explain": "were + V-ing",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L3-VZH-032",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「及時」的英文是？",
      "options": [
        "difficult",
        "in time",
        "tired",
        "die"
      ],
      "answer": 1,
      "explain": "及時 → in time",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-012",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「攀爬」的英文是？",
      "options": [
        "king",
        "go by",
        "way",
        "climb"
      ],
      "answer": 3,
      "explain": "攀爬 → climb",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-003",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThere was a lot of ___ on his shoes.",
      "options": [
        "climb",
        "tired",
        "cellphone",
        "mud"
      ],
      "answer": 3,
      "explain": "空格是 mud（泥土）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-006",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「在...之前」的英文是？",
      "options": [
        "bottom",
        "over and over",
        "before",
        "toad"
      ],
      "answer": 2,
      "explain": "在...之前 → before",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-029",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「叫喊」的英文是？",
      "options": [
        "fox",
        "rat",
        "cry",
        "hear"
      ],
      "answer": 2,
      "explain": "叫喊 → cry",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-027",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI got a text ___ from my friend.",
      "options": [
        "bat",
        "in time",
        "cry",
        "message"
      ],
      "answer": 3,
      "explain": "空格是 message（訊息）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-034",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「蝙蝠」的英文是？",
      "options": [
        "bat",
        "butterfly",
        "helpless",
        "bottom"
      ],
      "answer": 0,
      "explain": "蝙蝠 → bat",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-036",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「老鼠」的英文是？",
      "options": [
        "king",
        "deep",
        "rat",
        "surprised"
      ],
      "answer": 2,
      "explain": "老鼠 → rat",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-010",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIs it ___ to finish this today?",
      "options": [
        "deaf",
        "king",
        "possible",
        "arrive"
      ],
      "answer": 2,
      "explain": "空格是 possible（可能的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-GQ-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "昨晚七點你在做什麼？",
      "options": [
        "What were you doing at seven last night?",
        "What did you doing at seven last night?",
        "What did you doing at seven last night? (x)",
        "Not What did you doing at seven last night?"
      ],
      "answer": 0,
      "explain": "過去進行：were + doing。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L3-VEN-009",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “laugh” mean?",
      "options": [
        "大笑",
        "手機",
        "可能的",
        "路"
      ],
      "answer": 0,
      "explain": "laugh → 大笑",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-031",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “over and over” mean?",
      "options": [
        "在...旁邊",
        "一遍又一遍",
        "濕的",
        "聽見"
      ],
      "answer": 1,
      "explain": "over and over → 一遍又一遍",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-006",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nBrush your teeth ___ you go to bed.",
      "options": [
        "snake",
        "beside",
        "rat",
        "before"
      ],
      "answer": 3,
      "explain": "空格是 before（在...之前）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-010",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「可能的」的英文是？",
      "options": [
        "possible",
        "pass by",
        "type",
        "finally"
      ],
      "answer": 0,
      "explain": "可能的 → possible",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-034",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “bat” mean?",
      "options": [
        "感到驚訝的",
        "經過",
        "一遍又一遍",
        "蝙蝠"
      ],
      "answer": 3,
      "explain": "bat → 蝙蝠",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-030",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “go by” mean?",
      "options": [
        "一遍又一遍",
        "終於",
        "經過",
        "鼓勵..."
      ],
      "answer": 2,
      "explain": "go by → 經過",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-005",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe library is right ___ the park.",
      "options": [
        "laugh",
        "hen",
        "wet",
        "beside"
      ],
      "answer": 3,
      "explain": "空格是 beside（在...旁邊）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VZH-030",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "「經過」的英文是？",
      "options": [
        "rat",
        "go by",
        "before",
        "fox"
      ],
      "answer": 1,
      "explain": "經過 → go by",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-028",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “deaf” mean?",
      "options": [
        "老鼠",
        "蛇",
        "耳聾的",
        "母雞"
      ],
      "answer": 2,
      "explain": "deaf → 耳聾的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-008",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “butterfly” mean?",
      "options": [
        "蝴蝶",
        "可能的",
        "大笑",
        "攀爬"
      ],
      "answer": 0,
      "explain": "butterfly → 蝴蝶",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-VEN-023",
      "lesson": "Lesson 3",
      "type": "vocab",
      "stem": "What does “toad” mean?",
      "options": [
        "死亡",
        "蝙蝠",
        "蛇",
        "蟾蜍"
      ],
      "answer": 3,
      "explain": "toad → 蟾蜍",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-CLZ-031",
      "lesson": "Lesson 3",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe read the letter ___.",
      "options": [
        "over and over",
        "cry",
        "bat",
        "climb"
      ],
      "answer": 0,
      "explain": "空格是 over and over（一遍又一遍）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L3-WRG-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "They was dancing.",
        "I was talking on the phone.",
        "When I was arrive, he left.",
        "I was talk on the phone."
      ],
      "answer": 3,
      "explain": "要 V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    }
  ],
  "Lesson 4": [
    {
      "id": "L4-VEN-010",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “want” mean?",
      "options": [
        "推銷員；業務員",
        "重要的",
        "想要",
        "成長 (過去式為 grew)"
      ],
      "answer": 2,
      "explain": "want → 想要",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-035",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「開始 (過去式為 began)」的英文是？",
      "options": [
        "unhappy",
        "camp",
        "begin",
        "hope"
      ],
      "answer": 2,
      "explain": "開始 (過去式為 began) → begin",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-012",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “prepare” mean?",
      "options": [
        "漁夫；漁人",
        "推銷員；業務員",
        "保持 (過去式為 kept)",
        "準備"
      ],
      "answer": 3,
      "explain": "prepare → 準備",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-037",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI ___ to see you again soon.",
      "options": [
        "live",
        "hope",
        "beach",
        "progress"
      ],
      "answer": 1,
      "explain": "空格是 hope（希望）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-GQ-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "Judy 週末喜歡去衝浪。",
      "options": [
        "Judy loves going surfing on weekends.",
        "Judy loves go surfing on weekends.",
        "Judy loves go surfing on weekends. (x)",
        "Not Judy loves go surfing on weekends."
      ],
      "answer": 0,
      "explain": "loves + V-ing。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L4-VZH-033",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「帆船；航行」的英文是？",
      "options": [
        "sail",
        "prepare",
        "factory",
        "understand"
      ],
      "answer": 0,
      "explain": "帆船；航行 → sail",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-015",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “important” mean?",
      "options": [
        "重要的",
        "經驗",
        "成長 (過去式為 grew)",
        "海龜"
      ],
      "answer": 0,
      "explain": "important → 重要的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-013",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “keep” mean?",
      "options": [
        "友善的",
        "珊瑚礁",
        "衝浪",
        "保持 (過去式為 kept)"
      ],
      "answer": 3,
      "explain": "keep → 保持 (過去式為 kept)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-011",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou ___ go to bed early tonight.",
      "options": [
        "should",
        "sea turtle",
        "waiter",
        "end"
      ],
      "answer": 0,
      "explain": "空格是 should（應該 aux.）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-037",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “hope” mean?",
      "options": [
        "工廠",
        "希望",
        "不快樂的",
        "保持 (過去式為 kept)"
      ],
      "answer": 1,
      "explain": "hope → 希望",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-007",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「新鮮的」的英文是？",
      "options": [
        "job",
        "waitress",
        "learn",
        "fresh"
      ],
      "answer": 3,
      "explain": "新鮮的 → fresh",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-030",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “understand” mean?",
      "options": [
        "準備",
        "了解 (過去式為 understood)",
        "女服務生",
        "帆船；航行"
      ],
      "answer": 1,
      "explain": "understand → 了解 (過去式為 understood)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-TRP-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I want going to Japan.",
        "She enjoys surfing.",
        "She enjoys to surf.",
        "Is fun to travel."
      ],
      "answer": 1,
      "explain": "enjoy + V-ing",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-CLZ-006",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's get some fresh ___ outside.",
      "options": [
        "Give me a break!",
        "air",
        "unhappy",
        "salesman"
      ],
      "answer": 1,
      "explain": "空格是 air（空氣；空中）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-017",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “amazing” mean?",
      "options": [
        "經驗",
        "非常好；令人驚喜的",
        "開始 (過去式為 began)",
        "漁夫；漁人"
      ],
      "answer": 1,
      "explain": "amazing → 非常好；令人驚喜的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-003",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “waiter” mean?",
      "options": [
        "口音",
        "男服務生",
        "工作",
        "生活；居住"
      ],
      "answer": 1,
      "explain": "waiter → 男服務生",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-008",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “sea turtle” mean?",
      "options": [
        "海龜",
        "練習",
        "工作",
        "結束"
      ],
      "answer": 0,
      "explain": "sea turtle → 海龜",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-004",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “live” mean?",
      "options": [
        "希望",
        "工廠",
        "生活；居住",
        "保持 (過去式為 kept)"
      ],
      "answer": 2,
      "explain": "live → 生活；居住",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-008",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe saw a big ___ in the ocean.",
      "options": [
        "sea turtle",
        "worker",
        "practice",
        "factory"
      ],
      "answer": 0,
      "explain": "空格是 sea turtle（海龜）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-021",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “No kidding!” mean?",
      "options": [
        "重要的",
        "學習",
        "不是開玩笑的！",
        "準備"
      ],
      "answer": 2,
      "explain": "No kidding! → 不是開玩笑的！",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-WRG-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She enjoys to surf.",
        "Is fun to travel.",
        "I want to go to Japan.",
        "I want going to Japan."
      ],
      "answer": 3,
      "explain": "want + to V",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-CLZ-028",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nOur new neighbor is very ___.",
      "options": [
        "as",
        "surf",
        "Give me a break!",
        "friendly"
      ],
      "answer": 3,
      "explain": "空格是 friendly（友善的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-000",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “cousin” mean?",
      "options": [
        "友善的",
        "希望",
        "了解 (過去式為 understood)",
        "堂、表兄弟姊妹"
      ],
      "answer": 3,
      "explain": "cousin → 堂、表兄弟姊妹",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-001",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “job” mean?",
      "options": [
        "工作",
        "經驗",
        "清澈的",
        "帆船；航行"
      ],
      "answer": 0,
      "explain": "job → 工作",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-039",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「文化」的英文是？",
      "options": [
        "culture",
        "air",
        "learn",
        "leave"
      ],
      "answer": 0,
      "explain": "文化 → culture",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-022",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “farm” mean?",
      "options": [
        "非常好；令人驚喜的",
        "女服務生",
        "農場",
        "成長 (過去式為 grew)"
      ],
      "answer": 2,
      "explain": "farm → 農場",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-026",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “salesman” mean?",
      "options": [
        "珊瑚礁",
        "進步",
        "推銷員；業務員",
        "漁夫；漁人"
      ],
      "answer": 2,
      "explain": "salesman → 推銷員；業務員",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-037",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「希望」的英文是？",
      "options": [
        "hope",
        "keep",
        "cousin",
        "learn"
      ],
      "answer": 0,
      "explain": "希望 → hope",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-002",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “as” mean?",
      "options": [
        "留下 (過去式為 left)",
        "以...的身分",
        "女服務生",
        "海灘"
      ],
      "answer": 1,
      "explain": "as → 以...的身分",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-020",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「饒了我吧!」的英文是？",
      "options": [
        "hope",
        "Give me a break!",
        "should",
        "sail"
      ],
      "answer": 1,
      "explain": "饒了我吧! → Give me a break!",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-015",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt is ___ to eat a healthy breakfast.",
      "options": [
        "important",
        "sea turtle",
        "No kidding!",
        "cousin"
      ],
      "answer": 0,
      "explain": "空格是 important（重要的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-034",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「露營」的英文是？",
      "options": [
        "begin",
        "camp",
        "amazing",
        "keep"
      ],
      "answer": 1,
      "explain": "露營 → camp",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-EX-005",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「enjoy + 名詞；enjoy + V-ing 也常見」？",
      "options": [
        "Judy loves going surfing on weekends.",
        "He enjoyed his life.",
        "I want to speak English like you.",
        "Practice English with your teacher every day."
      ],
      "answer": 1,
      "explain": "enjoy + 名詞；enjoy + V-ing 也常見",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-028",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「友善的」的英文是？",
      "options": [
        "keep",
        "hope",
        "friendly",
        "progress"
      ],
      "answer": 2,
      "explain": "友善的 → friendly",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-002",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe works ___ a nurse in a hospital.",
      "options": [
        "beach",
        "worker",
        "understand",
        "as"
      ],
      "answer": 3,
      "explain": "空格是 as（以...的身分）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-023",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「工人」的英文是？",
      "options": [
        "worker",
        "want",
        "friendly",
        "live"
      ],
      "answer": 0,
      "explain": "工人 → worker",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-021",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou won the game? ___",
      "options": [
        "beach",
        "No kidding!",
        "factory",
        "culture"
      ],
      "answer": 1,
      "explain": "空格是 No kidding!（不是開玩笑的！）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-024",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “waitress” mean?",
      "options": [
        "進步",
        "不快樂的",
        "女服務生",
        "漁夫；漁人"
      ],
      "answer": 2,
      "explain": "waitress → 女服務生",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-007",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “fresh” mean?",
      "options": [
        "新鮮的",
        "海龜",
        "成長 (過去式為 grew)",
        "練習"
      ],
      "answer": 0,
      "explain": "fresh → 新鮮的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-033",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “sail” mean?",
      "options": [
        "口音",
        "帆船；航行",
        "友善的",
        "漁夫；漁人"
      ],
      "answer": 1,
      "explain": "sail → 帆船；航行",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-TRP-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She enjoys to surf.",
        "I finished to do my homework.",
        "I finished doing my homework.",
        "I want going to Japan."
      ],
      "answer": 2,
      "explain": "finish + V-ing",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-CLZ-009",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's play on the ___ this afternoon.",
      "options": [
        "camp",
        "practice",
        "beach",
        "surf"
      ],
      "answer": 2,
      "explain": "空格是 beach（海灘）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-002",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「以...的身分」的英文是？",
      "options": [
        "as",
        "friendly",
        "prepare",
        "important"
      ],
      "answer": 0,
      "explain": "以...的身分 → as",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-016",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI want to ___ how to swim.",
      "options": [
        "begin",
        "friendly",
        "culture",
        "learn"
      ],
      "answer": 3,
      "explain": "空格是 learn（學習）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-032",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “surf” mean?",
      "options": [
        "饒了我吧!",
        "堂、表兄弟姊妹",
        "衝浪",
        "清澈的"
      ],
      "answer": 2,
      "explain": "surf → 衝浪",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-039",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI am interested in Japanese ___.",
      "options": [
        "amazing",
        "culture",
        "air",
        "hope"
      ],
      "answer": 1,
      "explain": "空格是 culture（文化）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-033",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey want to ___ around the world.",
      "options": [
        "sail",
        "surf",
        "experience",
        "fresh"
      ],
      "answer": 0,
      "explain": "空格是 sail（帆船；航行）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-036",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「結束」的英文是？",
      "options": [
        "Give me a break!",
        "important",
        "culture",
        "end"
      ],
      "answer": 3,
      "explain": "結束 → end",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-030",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI don't ___ this difficult question.",
      "options": [
        "leave",
        "learn",
        "understand",
        "prepare"
      ],
      "answer": 2,
      "explain": "空格是 understand（了解 (過去式為 understood)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-031",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease don't ___ your bag here.",
      "options": [
        "experience",
        "leave",
        "end",
        "camp"
      ],
      "answer": 1,
      "explain": "空格是 leave（留下 (過去式為 left)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-038",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「不快樂的」的英文是？",
      "options": [
        "unhappy",
        "grow",
        "leave",
        "amazing"
      ],
      "answer": 0,
      "explain": "不快樂的 → unhappy",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-006",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “air” mean?",
      "options": [
        "空氣；空中",
        "不是開玩笑的！",
        "文化",
        "經驗"
      ],
      "answer": 0,
      "explain": "air → 空氣；空中",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-041",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe speaks English with a British ___.",
      "options": [
        "accent",
        "farm",
        "air",
        "cousin"
      ],
      "answer": 0,
      "explain": "空格是 accent（口音）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-025",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “factory” mean?",
      "options": [
        "空氣；空中",
        "工廠",
        "農場",
        "不是開玩笑的！"
      ],
      "answer": 1,
      "explain": "factory → 工廠",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-005",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nDo you have any work ___?",
      "options": [
        "salesman",
        "farm",
        "No kidding!",
        "experience"
      ],
      "answer": 3,
      "explain": "空格是 experience（經驗）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-038",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe was ___ about her test score.",
      "options": [
        "sail",
        "live",
        "unhappy",
        "camp"
      ],
      "answer": 2,
      "explain": "空格是 unhappy（不快樂的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-026",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA ___ came to our door today.",
      "options": [
        "beach",
        "waitress",
        "salesman",
        "experience"
      ],
      "answer": 2,
      "explain": "空格是 salesman（推銷員；業務員）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-EX-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「want + to V」？",
      "options": [
        "Judy loves going surfing on weekends.",
        "Practice English with your teacher every day.",
        "I want to speak English like you.",
        "Why not make a plan and prepare for it?"
      ],
      "answer": 2,
      "explain": "want + to V",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-017",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「非常好；令人驚喜的」的英文是？",
      "options": [
        "coral reef",
        "worker",
        "amazing",
        "understand"
      ],
      "answer": 2,
      "explain": "非常好；令人驚喜的 → amazing",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-020",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “Give me a break!” mean?",
      "options": [
        "饒了我吧!",
        "口音",
        "以...的身分",
        "空氣；空中"
      ],
      "answer": 0,
      "explain": "Give me a break! → 饒了我吧!",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-039",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “culture” mean?",
      "options": [
        "文化",
        "工作",
        "露營",
        "準備"
      ],
      "answer": 0,
      "explain": "culture → 文化",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-005",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “experience” mean?",
      "options": [
        "衝浪",
        "工作",
        "以...的身分",
        "經驗"
      ],
      "answer": 3,
      "explain": "experience → 經驗",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-018",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMany colorful fish live in the ___.",
      "options": [
        "keep",
        "coral reef",
        "want",
        "factory"
      ],
      "answer": 1,
      "explain": "空格是 coral reef（珊瑚礁）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-027",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ went out to sea early.",
      "options": [
        "fisherman",
        "salesman",
        "practice",
        "air"
      ],
      "answer": 0,
      "explain": "空格是 fisherman（漁夫；漁人）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-EX-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「love + V-ing」？",
      "options": [
        "I want to speak English like you.",
        "Judy loves going surfing on weekends.",
        "Practice English with your teacher every day.",
        "Why not make a plan and prepare for it?"
      ],
      "answer": 1,
      "explain": "love + V-ing",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-011",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「應該 aux.」的英文是？",
      "options": [
        "friendly",
        "factory",
        "should",
        "want"
      ],
      "answer": 2,
      "explain": "應該 aux. → should",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-032",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe loves to ___ at the beach.",
      "options": [
        "farm",
        "learn",
        "waiter",
        "surf"
      ],
      "answer": 3,
      "explain": "空格是 surf（衝浪）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-035",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe school year will ___ next week.",
      "options": [
        "cousin",
        "experience",
        "begin",
        "unhappy"
      ],
      "answer": 2,
      "explain": "空格是 begin（開始 (過去式為 began)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-GQ-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "我想說英文像你一樣。",
      "options": [
        "I want to speak English like you.",
        "I want speaking English like you.",
        "I want speaking English like you. (x)",
        "Not I want speaking English like you."
      ],
      "answer": 0,
      "explain": "want + to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L4-CLZ-012",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy mom is preparing dinner in the kitchen. ___",
      "options": [
        "prepare",
        "begin",
        "friendly",
        "job"
      ],
      "answer": 0,
      "explain": "空格是 prepare（準備）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-003",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「男服務生」的英文是？",
      "options": [
        "accent",
        "waiter",
        "begin",
        "camp"
      ],
      "answer": 1,
      "explain": "男服務生 → waiter",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-018",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “coral reef” mean?",
      "options": [
        "不快樂的",
        "珊瑚礁",
        "結束",
        "口音"
      ],
      "answer": 1,
      "explain": "coral reef → 珊瑚礁",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-000",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI am going to visit my ___ this weekend.",
      "options": [
        "cousin",
        "job",
        "live",
        "end"
      ],
      "answer": 0,
      "explain": "空格是 cousin（堂、表兄弟姊妹）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-022",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「農場」的英文是？",
      "options": [
        "waitress",
        "air",
        "farm",
        "salesman"
      ],
      "answer": 2,
      "explain": "農場 → farm",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-017",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe view from the top was ___.",
      "options": [
        "important",
        "fisherman",
        "leave",
        "amazing"
      ],
      "answer": 3,
      "explain": "空格是 amazing（非常好；令人驚喜的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-EX-006",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「It is adj. to V」？",
      "options": [
        "Practice English with your teacher every day.",
        "I want to speak English like you.",
        "It is fun to travel and work in another country.",
        "Judy loves going surfing on weekends."
      ],
      "answer": 2,
      "explain": "It is adj. to V",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-CLZ-010",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat do you ___ to eat for dinner?",
      "options": [
        "clear",
        "learn",
        "want",
        "farm"
      ],
      "answer": 2,
      "explain": "空格是 want（想要）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-025",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「工廠」的英文是？",
      "options": [
        "factory",
        "worker",
        "important",
        "beach"
      ],
      "answer": 0,
      "explain": "工廠 → factory",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-029",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「成長 (過去式為 grew)」的英文是？",
      "options": [
        "grow",
        "want",
        "cousin",
        "salesman"
      ],
      "answer": 0,
      "explain": "成長 (過去式為 grew) → grow",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-019",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe water in the lake is so ___.",
      "options": [
        "air",
        "fresh",
        "clear",
        "waitress"
      ],
      "answer": 2,
      "explain": "空格是 clear（清澈的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-006",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「空氣；空中」的英文是？",
      "options": [
        "want",
        "air",
        "surf",
        "important"
      ],
      "answer": 1,
      "explain": "空氣；空中 → air",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-036",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “end” mean?",
      "options": [
        "空氣；空中",
        "準備",
        "結束",
        "開始 (過去式為 began)"
      ],
      "answer": 2,
      "explain": "end → 結束",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-034",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “camp” mean?",
      "options": [
        "漁夫；漁人",
        "不快樂的",
        "口音",
        "露營"
      ],
      "answer": 3,
      "explain": "camp → 露營",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-041",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「口音」的英文是？",
      "options": [
        "Give me a break!",
        "begin",
        "accent",
        "air"
      ],
      "answer": 2,
      "explain": "口音 → accent",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-010",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「想要」的英文是？",
      "options": [
        "practice",
        "want",
        "unhappy",
        "leave"
      ],
      "answer": 1,
      "explain": "想要 → want",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-TRP-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Is fun to travel.",
        "She enjoys to surf.",
        "I want going to Japan.",
        "It is fun to travel."
      ],
      "answer": 3,
      "explain": "記得虛主詞 It",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-EX-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「practice 後常接 V-ing（祈使也可接名詞）」？",
      "options": [
        "I want to speak English like you.",
        "Judy loves going surfing on weekends.",
        "Practice English with your teacher every day.",
        "Why not make a plan and prepare for it?"
      ],
      "answer": 2,
      "explain": "practice 後常接 V-ing（祈使也可接名詞）",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-004",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「生活；居住」的英文是？",
      "options": [
        "salesman",
        "live",
        "Give me a break!",
        "fisherman"
      ],
      "answer": 1,
      "explain": "生活；居住 → live",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-026",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「推銷員；業務員」的英文是？",
      "options": [
        "waiter",
        "salesman",
        "clear",
        "camp"
      ],
      "answer": 1,
      "explain": "推銷員；業務員 → salesman",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-038",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “unhappy” mean?",
      "options": [
        "保持 (過去式為 kept)",
        "帆船；航行",
        "不快樂的",
        "推銷員；業務員"
      ],
      "answer": 2,
      "explain": "unhappy → 不快樂的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-001",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「工作」的英文是？",
      "options": [
        "job",
        "end",
        "unhappy",
        "practice"
      ],
      "answer": 0,
      "explain": "工作 → job",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-018",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「珊瑚礁」的英文是？",
      "options": [
        "live",
        "accent",
        "important",
        "coral reef"
      ],
      "answer": 3,
      "explain": "珊瑚礁 → coral reef",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-024",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ is taking our order now.",
      "options": [
        "friendly",
        "unhappy",
        "waitress",
        "job"
      ],
      "answer": 2,
      "explain": "空格是 waitress（女服務生）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-030",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「了解 (過去式為 understood)」的英文是？",
      "options": [
        "understand",
        "progress",
        "leave",
        "live"
      ],
      "answer": 0,
      "explain": "了解 (過去式為 understood) → understand",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-011",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “should” mean?",
      "options": [
        "珊瑚礁",
        "想要",
        "非常好；令人驚喜的",
        "應該 aux."
      ],
      "answer": 3,
      "explain": "should → 應該 aux.",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-025",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy dad works in a big car ___.",
      "options": [
        "factory",
        "surf",
        "camp",
        "grow"
      ],
      "answer": 0,
      "explain": "空格是 factory（工廠）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-041",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “accent” mean?",
      "options": [
        "口音",
        "堂、表兄弟姊妹",
        "練習",
        "海龜"
      ],
      "answer": 0,
      "explain": "accent → 口音",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-034",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe are going to ___ in the mountains.",
      "options": [
        "as",
        "salesman",
        "factory",
        "camp"
      ],
      "answer": 3,
      "explain": "空格是 camp（露營）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-TRP-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I want to go to Japan.",
        "I want going to Japan.",
        "Is fun to travel.",
        "She enjoys to surf."
      ],
      "answer": 0,
      "explain": "want + to V",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-009",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「海灘」的英文是？",
      "options": [
        "beach",
        "cousin",
        "unhappy",
        "fisherman"
      ],
      "answer": 0,
      "explain": "海灘 → beach",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-WRG-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She enjoys surfing.",
        "I want going to Japan.",
        "She enjoys to surf.",
        "Is fun to travel."
      ],
      "answer": 2,
      "explain": "enjoy + V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VEN-016",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “learn” mean?",
      "options": [
        "口音",
        "學習",
        "空氣；空中",
        "進步"
      ],
      "answer": 1,
      "explain": "learn → 學習",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-WRG-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I want going to Japan.",
        "Is fun to travel.",
        "It is fun to travel.",
        "She enjoys to surf."
      ],
      "answer": 1,
      "explain": "記得虛主詞 It",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-GQ-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "在別的國家旅行又工作很酷。",
      "options": [
        "It is cool to travel and work in a different country.",
        "Is cool travel and work in a different country.",
        "Is cool travel and work in a different country. (x)",
        "Not Is cool travel and work in a different c"
      ],
      "answer": 0,
      "explain": "It is adj. to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L4-WRG-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She enjoys to surf.",
        "I want going to Japan.",
        "I finished to do my homework.",
        "I finished doing my homework."
      ],
      "answer": 2,
      "explain": "finish + V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VEN-023",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “worker” mean?",
      "options": [
        "工人",
        "帆船；航行",
        "了解 (過去式為 understood)",
        "保持 (過去式為 kept)"
      ],
      "answer": 0,
      "explain": "worker → 工人",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-040",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou have made great ___ in English.",
      "options": [
        "factory",
        "learn",
        "surf",
        "progress"
      ],
      "answer": 3,
      "explain": "空格是 progress（進步）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-040",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「進步」的英文是？",
      "options": [
        "friendly",
        "waitress",
        "hope",
        "progress"
      ],
      "answer": 3,
      "explain": "進步 → progress",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-027",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “fisherman” mean?",
      "options": [
        "露營",
        "漁夫；漁人",
        "不快樂的",
        "女服務生"
      ],
      "answer": 1,
      "explain": "fisherman → 漁夫；漁人",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-022",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy uncle lives and works on a ___.",
      "options": [
        "beach",
        "Give me a break!",
        "worker",
        "farm"
      ],
      "answer": 3,
      "explain": "空格是 farm（農場）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-020",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nGive me a break, this homework is too hard. ___",
      "options": [
        "farm",
        "live",
        "Give me a break!",
        "beach"
      ],
      "answer": 2,
      "explain": "空格是 Give me a break!（饒了我吧!）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-014",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou need to ___ playing the piano daily.",
      "options": [
        "practice",
        "cousin",
        "factory",
        "salesman"
      ],
      "answer": 0,
      "explain": "空格是 practice（練習）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-013",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease ___ quiet in the library.",
      "options": [
        "No kidding!",
        "factory",
        "accent",
        "keep"
      ],
      "answer": 3,
      "explain": "空格是 keep（保持 (過去式為 kept)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-023",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe is a hard ___ at the factory.",
      "options": [
        "farm",
        "culture",
        "worker",
        "sea turtle"
      ],
      "answer": 2,
      "explain": "空格是 worker（工人）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-036",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe movie will ___ in ten minutes.",
      "options": [
        "as",
        "fisherman",
        "live",
        "end"
      ],
      "answer": 3,
      "explain": "空格是 end（結束）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-014",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “practice” mean?",
      "options": [
        "生活；居住",
        "練習",
        "以...的身分",
        "應該 aux."
      ],
      "answer": 1,
      "explain": "practice → 練習",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-016",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「學習」的英文是？",
      "options": [
        "hope",
        "progress",
        "learn",
        "sail"
      ],
      "answer": 2,
      "explain": "學習 → learn",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-009",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “beach” mean?",
      "options": [
        "海灘",
        "工作",
        "不是開玩笑的！",
        "結束"
      ],
      "answer": 0,
      "explain": "beach → 海灘",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-029",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “grow” mean?",
      "options": [
        "不快樂的",
        "口音",
        "成長 (過去式為 grew)",
        "衝浪"
      ],
      "answer": 2,
      "explain": "grow → 成長 (過去式為 grew)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-019",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「清澈的」的英文是？",
      "options": [
        "important",
        "progress",
        "worker",
        "clear"
      ],
      "answer": 3,
      "explain": "清澈的 → clear",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-000",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「堂、表兄弟姊妹」的英文是？",
      "options": [
        "want",
        "camp",
        "unhappy",
        "cousin"
      ],
      "answer": 3,
      "explain": "堂、表兄弟姊妹 → cousin",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-035",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “begin” mean?",
      "options": [
        "開始 (過去式為 began)",
        "了解 (過去式為 understood)",
        "漁夫；漁人",
        "希望"
      ],
      "answer": 0,
      "explain": "begin → 開始 (過去式為 began)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-040",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “progress” mean?",
      "options": [
        "準備",
        "不快樂的",
        "進步",
        "饒了我吧!"
      ],
      "answer": 2,
      "explain": "progress → 進步",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-008",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「海龜」的英文是？",
      "options": [
        "sea turtle",
        "understand",
        "learn",
        "should"
      ],
      "answer": 0,
      "explain": "海龜 → sea turtle",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-021",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「不是開玩笑的！」的英文是？",
      "options": [
        "No kidding!",
        "sea turtle",
        "live",
        "coral reef"
      ],
      "answer": 0,
      "explain": "不是開玩笑的！ → No kidding!",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-028",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “friendly” mean?",
      "options": [
        "新鮮的",
        "友善的",
        "練習",
        "進步"
      ],
      "answer": 1,
      "explain": "friendly → 友善的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-012",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「準備」的英文是？",
      "options": [
        "worker",
        "prepare",
        "farm",
        "No kidding!"
      ],
      "answer": 1,
      "explain": "準備 → prepare",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-027",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「漁夫；漁人」的英文是？",
      "options": [
        "progress",
        "fisherman",
        "cousin",
        "prepare"
      ],
      "answer": 1,
      "explain": "漁夫；漁人 → fisherman",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-015",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「重要的」的英文是？",
      "options": [
        "important",
        "accent",
        "learn",
        "practice"
      ],
      "answer": 0,
      "explain": "重要的 → important",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-019",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “clear” mean?",
      "options": [
        "經驗",
        "清澈的",
        "不是開玩笑的！",
        "練習"
      ],
      "answer": 1,
      "explain": "clear → 清澈的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-EX-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「Why not + 原形」？",
      "options": [
        "Why not make a plan and prepare for it?",
        "Practice English with your teacher every day.",
        "Judy loves going surfing on weekends.",
        "I want to speak English like you."
      ],
      "answer": 0,
      "explain": "Why not + 原形",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L4-VZH-013",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「保持 (過去式為 kept)」的英文是？",
      "options": [
        "experience",
        "keep",
        "waitress",
        "cousin"
      ],
      "answer": 1,
      "explain": "保持 (過去式為 kept) → keep",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-031",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「留下 (過去式為 left)」的英文是？",
      "options": [
        "leave",
        "fisherman",
        "beach",
        "hope"
      ],
      "answer": 0,
      "explain": "留下 (過去式為 left) → leave",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-029",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlants need sun and water to ___.",
      "options": [
        "amazing",
        "grow",
        "clear",
        "want"
      ],
      "answer": 1,
      "explain": "空格是 grow（成長 (過去式為 grew)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-004",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhere do you ___ in this city?",
      "options": [
        "No kidding!",
        "fresh",
        "clear",
        "live"
      ],
      "answer": 3,
      "explain": "空格是 live（生活；居住）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-032",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「衝浪」的英文是？",
      "options": [
        "progress",
        "surf",
        "begin",
        "No kidding!"
      ],
      "answer": 1,
      "explain": "衝浪 → surf",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-005",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「經驗」的英文是？",
      "options": [
        "beach",
        "No kidding!",
        "experience",
        "sail"
      ],
      "answer": 2,
      "explain": "經驗 → experience",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-007",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI like to eat ___ fruit and vegetables.",
      "options": [
        "fresh",
        "end",
        "worker",
        "Give me a break!"
      ],
      "answer": 0,
      "explain": "空格是 fresh（新鮮的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-014",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「練習」的英文是？",
      "options": [
        "important",
        "understand",
        "practice",
        "learn"
      ],
      "answer": 2,
      "explain": "練習 → practice",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-003",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ brought us our drinks.",
      "options": [
        "Give me a break!",
        "hope",
        "waiter",
        "learn"
      ],
      "answer": 2,
      "explain": "空格是 waiter（男服務生）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VEN-031",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "What does “leave” mean?",
      "options": [
        "留下 (過去式為 left)",
        "女服務生",
        "帆船；航行",
        "保持 (過去式為 kept)"
      ],
      "answer": 0,
      "explain": "leave → 留下 (過去式為 left)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-VZH-024",
      "lesson": "Lesson 4",
      "type": "vocab",
      "stem": "「女服務生」的英文是？",
      "options": [
        "waitress",
        "clear",
        "Give me a break!",
        "should"
      ],
      "answer": 0,
      "explain": "女服務生 → waitress",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L4-CLZ-001",
      "lesson": "Lesson 4",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe is looking for a new ___.",
      "options": [
        "job",
        "accent",
        "unhappy",
        "surf"
      ],
      "answer": 0,
      "explain": "空格是 job（工作）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    }
  ],
  "Lesson 5": [
    {
      "id": "L5-VZH-025",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「祈求；禱告」的英文是？",
      "options": [
        "pray",
        "cent",
        "how much",
        "print"
      ],
      "answer": 0,
      "explain": "祈求；禱告 → pray",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-043",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「旅行」的英文是？",
      "options": [
        "department store",
        "reach",
        "far",
        "travel"
      ],
      "answer": 3,
      "explain": "旅行 → travel",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-045",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “besides” mean?",
      "options": [
        "此外",
        "遠的",
        "某人",
        "遊客"
      ],
      "answer": 0,
      "explain": "besides → 此外",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-004",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「發送；寄 (過去式為 sent)」的英文是？",
      "options": [
        "far",
        "send",
        "low",
        "reach"
      ],
      "answer": 1,
      "explain": "發送；寄 (過去式為 sent) → send",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-016",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「廁所」的英文是？",
      "options": [
        "cheap",
        "umbrella",
        "dollar",
        "restroom"
      ],
      "answer": 3,
      "explain": "廁所 → restroom",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-044",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou can sit ___ you like.",
      "options": [
        "cent",
        "rich",
        "anywhere",
        "comfortable"
      ],
      "answer": 2,
      "explain": "空格是 anywhere（往任何地方）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-024",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's go shopping at the ___.",
      "options": [
        "take",
        "department store",
        "cheap",
        "cent"
      ],
      "answer": 1,
      "explain": "空格是 department store（百貨公司）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-006",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI need to ___ for my ticket.",
      "options": [
        "visitor",
        "of course",
        "restroom",
        "pay"
      ],
      "answer": 3,
      "explain": "空格是 pay（付錢 (過去式為 paid)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-039",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe country is ___ in natural resources.",
      "options": [
        "besides",
        "be proud of",
        "rich",
        "someone"
      ],
      "answer": 2,
      "explain": "空格是 rich（豐富的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-WRG-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "It spends 10 minutes to get there.",
        "I paid the book NT$100.",
        "I paid NT$100 for the book.",
        "I cost NT$100 for the book."
      ],
      "answer": 1,
      "explain": "pay + 錢 + for + 物",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VEN-003",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “dollar” mean?",
      "options": [
        "元",
        "祈求；禱告",
        "外國人",
        "方便的"
      ],
      "answer": 0,
      "explain": "dollar → 元",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-035",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “little” mean?",
      "options": [
        "不多；少許",
        "發送；寄 (過去式為 sent)",
        "花費 (時間)",
        "抵達；觸及"
      ],
      "answer": 0,
      "explain": "little → 不多；少許",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-027",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「外國人」的英文是？",
      "options": [
        "foreigner",
        "convenience store",
        "how much",
        "stay"
      ],
      "answer": 0,
      "explain": "外國人 → foreigner",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-039",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「豐富的」的英文是？",
      "options": [
        "think of",
        "comfortable",
        "rich",
        "price"
      ],
      "answer": 2,
      "explain": "豐富的 → rich",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-EX-006",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「標價／應付金額口語」？",
      "options": [
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea.",
        "That's NT$750."
      ],
      "answer": 3,
      "explain": "標價／應付金額口語",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-EX-005",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「人 + spend + 時間 + V-ing」？",
      "options": [
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "I spent two hours shopping in the mall.",
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea."
      ],
      "answer": 1,
      "explain": "人 + spend + 時間 + V-ing",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-CLZ-000",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan I take a ___ of you?",
      "options": [
        "print",
        "visitor",
        "travel",
        "photo"
      ],
      "answer": 3,
      "explain": "空格是 photo（照片）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-020",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe need to pay the electricity ___.",
      "options": [
        "bill",
        "pay",
        "most",
        "expensive"
      ],
      "answer": 0,
      "explain": "空格是 bill（帳單）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-014",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「方便的」的英文是？",
      "options": [
        "convenient",
        "comfortable",
        "spend",
        "little"
      ],
      "answer": 0,
      "explain": "方便的 → convenient",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-024",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “department store” mean?",
      "options": [
        "帳單",
        "百貨公司",
        "包裹",
        "貴的"
      ],
      "answer": 1,
      "explain": "department store → 百貨公司",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-019",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “print” mean?",
      "options": [
        "往任何地方",
        "印；印刷",
        "擔心；憂慮 n.;",
        "便利商店"
      ],
      "answer": 1,
      "explain": "print → 印；印刷",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-003",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「元」的英文是？",
      "options": [
        "scenery",
        "cent",
        "dollar",
        "umbrella"
      ],
      "answer": 2,
      "explain": "元 → dollar",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-007",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「價錢」的英文是？",
      "options": [
        "expensive",
        "department store",
        "price",
        "koala"
      ],
      "answer": 2,
      "explain": "價錢 → price",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-024",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「百貨公司」的英文是？",
      "options": [
        "umbrella",
        "little",
        "stay",
        "department store"
      ],
      "answer": 3,
      "explain": "百貨公司 → department store",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-041",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「無尾熊」的英文是？",
      "options": [
        "rich",
        "koala",
        "temple",
        "photo"
      ],
      "answer": 1,
      "explain": "無尾熊 → koala",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-023",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI will ___ at home this weekend.",
      "options": [
        "reach",
        "stay",
        "worry",
        "little"
      ],
      "answer": 1,
      "explain": "空格是 stay（待；停留）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-GQ-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "她為兩包巧克力付了 8.4 美元。",
      "options": [
        "She paid $8.40 for the two bags of chocolates.",
        "She spent $8.40 for the two bags of chocolates.",
        "She spent $8.40 for the two bags of chocolates. (x)",
        "Not She spent $8.40 for the two bags of choc"
      ],
      "answer": 0,
      "explain": "pay + 錢 + for；spend 搭配 on 較常見。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L5-CLZ-014",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLiving near a station is very ___.",
      "options": [
        "most",
        "convenient",
        "foreign",
        "city"
      ],
      "answer": 1,
      "explain": "空格是 convenient（方便的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-013",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt is raining; you need an ___.",
      "options": [
        "restroom",
        "umbrella",
        "of course",
        "convenient"
      ],
      "answer": 1,
      "explain": "空格是 umbrella（雨傘）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-017",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「城鎮」的英文是？",
      "options": [
        "pray",
        "town",
        "spend",
        "stay"
      ],
      "answer": 1,
      "explain": "城鎮 → town",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-008",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「低的」的英文是？",
      "options": [
        "how much",
        "besides",
        "low",
        "cent"
      ],
      "answer": 2,
      "explain": "低的 → low",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-044",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「往任何地方」的英文是？",
      "options": [
        "someone",
        "of course",
        "anywhere",
        "dollar"
      ],
      "answer": 2,
      "explain": "往任何地方 → anywhere",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-006",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “pay” mean?",
      "options": [
        "遠的",
        "豐富的",
        "舒適的",
        "付錢 (過去式為 paid)"
      ],
      "answer": 3,
      "explain": "pay → 付錢 (過去式為 paid)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-009",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “spend” mean?",
      "options": [
        "待；停留",
        "以...為傲",
        "花費 (過去式為 spent)",
        "大部分的"
      ],
      "answer": 2,
      "explain": "spend → 花費 (過去式為 spent)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-004",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “send” mean?",
      "options": [
        "某人",
        "想到",
        "便宜的",
        "發送；寄 (過去式為 sent)"
      ],
      "answer": 3,
      "explain": "send → 發送；寄 (過去式為 sent)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-032",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「貴的」的英文是？",
      "options": [
        "convenience store",
        "town",
        "expensive",
        "pay"
      ],
      "answer": 2,
      "explain": "貴的 → expensive",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-038",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ with these heavy boxes?",
      "options": [
        "of course",
        "restroom",
        "lend a hand",
        "department store"
      ],
      "answer": 2,
      "explain": "空格是 lend a hand（幫忙）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-004",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI will ___ you a letter tomorrow.",
      "options": [
        "send",
        "of course",
        "bill",
        "anywhere"
      ],
      "answer": 0,
      "explain": "空格是 send（發送；寄 (過去式為 sent)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-043",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe plan to ___ to Japan next year.",
      "options": [
        "travel",
        "cost",
        "city",
        "temple"
      ],
      "answer": 0,
      "explain": "空格是 travel（旅行）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-041",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe cute ___ is sleeping in the tree.",
      "options": [
        "city",
        "koala",
        "rich",
        "most"
      ],
      "answer": 1,
      "explain": "空格是 koala（無尾熊）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-012",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nDon't ___, everything will be fine.",
      "options": [
        "spend",
        "of course",
        "worry",
        "how much"
      ],
      "answer": 2,
      "explain": "空格是 worry（擔心；憂慮 n.;）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-017",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI grew up in a small ___.",
      "options": [
        "little",
        "spend",
        "town",
        "pay"
      ],
      "answer": 2,
      "explain": "空格是 town（城鎮）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-005",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「包裹」的英文是？",
      "options": [
        "umbrella",
        "pay",
        "package",
        "convenient"
      ],
      "answer": 2,
      "explain": "包裹 → package",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-013",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「雨傘」的英文是？",
      "options": [
        "comfortable",
        "umbrella",
        "package",
        "reach"
      ],
      "answer": 1,
      "explain": "雨傘 → umbrella",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-009",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「花費 (過去式為 spent)」的英文是？",
      "options": [
        "think of",
        "spend",
        "of course",
        "take"
      ],
      "answer": 1,
      "explain": "花費 (過去式為 spent) → spend",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-040",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “be proud of” mean?",
      "options": [
        "豐富的",
        "想到",
        "以...為傲",
        "抵達；觸及"
      ],
      "answer": 2,
      "explain": "be proud of → 以...為傲",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-039",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “rich” mean?",
      "options": [
        "花費 (時間)",
        "無尾熊",
        "豐富的",
        "便宜的"
      ],
      "answer": 2,
      "explain": "rich → 豐富的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-001",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you help me? ___!",
      "options": [
        "someone",
        "department store",
        "draw",
        "of course"
      ],
      "answer": 3,
      "explain": "空格是 of course（當然）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-031",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “reach” mean?",
      "options": [
        "方便的",
        "抵達；觸及",
        "雨傘",
        "低的"
      ],
      "answer": 1,
      "explain": "reach → 抵達；觸及",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-033",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nTaipei is a busy and exciting ___.",
      "options": [
        "city",
        "travel",
        "comfortable",
        "convenient"
      ],
      "answer": 0,
      "explain": "空格是 city（城市）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-021",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「多少錢」的英文是？",
      "options": [
        "send",
        "pray",
        "of course",
        "how much"
      ],
      "answer": 3,
      "explain": "多少錢 → how much",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-036",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “most” mean?",
      "options": [
        "大部分的",
        "包裹",
        "遊客",
        "花費 (過去式為 spent)"
      ],
      "answer": 0,
      "explain": "most → 大部分的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-035",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「不多；少許」的英文是？",
      "options": [
        "umbrella",
        "temple",
        "comfortable",
        "little"
      ],
      "answer": 3,
      "explain": "不多；少許 → little",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-011",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe food at that market is ___.",
      "options": [
        "cheap",
        "convenient",
        "besides",
        "lend a hand"
      ],
      "answer": 0,
      "explain": "空格是 cheap（便宜的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-014",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “convenient” mean?",
      "options": [
        "照片",
        "以...為傲",
        "方便的",
        "元"
      ],
      "answer": 2,
      "explain": "convenient → 方便的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-000",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「照片」的英文是？",
      "options": [
        "someone",
        "pray",
        "photo",
        "stay"
      ],
      "answer": 2,
      "explain": "照片 → photo",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-042",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「景色」的英文是？",
      "options": [
        "photo",
        "of course",
        "little",
        "scenery"
      ],
      "answer": 3,
      "explain": "景色 → scenery",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-023",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “stay” mean?",
      "options": [
        "往任何地方",
        "廁所",
        "待；停留",
        "舒適的"
      ],
      "answer": 2,
      "explain": "stay → 待；停留",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-036",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「大部分的」的英文是？",
      "options": [
        "far",
        "most",
        "foreign",
        "convenience store"
      ],
      "answer": 1,
      "explain": "大部分的 → most",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-013",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “umbrella” mean?",
      "options": [
        "貴的",
        "雨傘",
        "舒適的",
        "旅行"
      ],
      "answer": 1,
      "explain": "umbrella → 雨傘",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-TRP-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I cost NT$100 for the book.",
        "I paid NT$100 for the book.",
        "It spends 10 minutes to get there.",
        "I paid the book NT$100."
      ],
      "answer": 1,
      "explain": "pay + 錢 + for + 物",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VZH-038",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「幫忙」的英文是？",
      "options": [
        "town",
        "umbrella",
        "lend a hand",
        "someone"
      ],
      "answer": 2,
      "explain": "幫忙 → lend a hand",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-030",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe likes to learn ___ languages.",
      "options": [
        "cent",
        "far",
        "foreign",
        "travel"
      ],
      "answer": 2,
      "explain": "空格是 foreign（外國的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-034",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “comfortable” mean?",
      "options": [
        "舒適的",
        "外國的",
        "不多；少許",
        "此外"
      ],
      "answer": 0,
      "explain": "comfortable → 舒適的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-030",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「外國的」的英文是？",
      "options": [
        "cost",
        "town",
        "foreign",
        "pray"
      ],
      "answer": 2,
      "explain": "外國的 → foreign",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-018",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “convenience store” mean?",
      "options": [
        "便利商店",
        "照片",
        "景色",
        "發送；寄 (過去式為 sent)"
      ],
      "answer": 0,
      "explain": "convenience store → 便利商店",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-044",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “anywhere” mean?",
      "options": [
        "往任何地方",
        "擔心；憂慮 n.;",
        "元",
        "貴的"
      ],
      "answer": 0,
      "explain": "anywhere → 往任何地方",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-040",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「以...為傲」的英文是？",
      "options": [
        "spend",
        "be proud of",
        "cost",
        "cent"
      ],
      "answer": 1,
      "explain": "以...為傲 → be proud of",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-EX-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「It takes + 時間 + to V」？",
      "options": [
        "How long does it take to get to your school by bus?",
        "It only takes a few minutes to buy an iced black tea.",
        "My new phone case cost me about NT$2,000.",
        "The girl paid 8 dollars and 40 cents for the chocolates."
      ],
      "answer": 1,
      "explain": "It takes + 時間 + to V",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-CLZ-037",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ is knocking at the front door.",
      "options": [
        "someone",
        "how much",
        "rich",
        "travel"
      ],
      "answer": 0,
      "explain": "空格是 someone（某人）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-034",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis sofa is very ___ to sit on.",
      "options": [
        "print",
        "department store",
        "comfortable",
        "dollar"
      ],
      "answer": 2,
      "explain": "空格是 comfortable（舒適的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-029",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「遊客」的英文是？",
      "options": [
        "send",
        "visitor",
        "city",
        "far"
      ],
      "answer": 1,
      "explain": "遊客 → visitor",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-012",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “worry” mean?",
      "options": [
        "擔心；憂慮 n.;",
        "花費 (時間)",
        "低的",
        "分 (貨幣單位)"
      ],
      "answer": 0,
      "explain": "worry → 擔心；憂慮 n.;",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-042",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ from the train was beautiful.",
      "options": [
        "be proud of",
        "rich",
        "city",
        "scenery"
      ],
      "answer": 3,
      "explain": "空格是 scenery（景色）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-025",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey ___ for peace in the world.",
      "options": [
        "temple",
        "package",
        "pray",
        "spend"
      ],
      "answer": 2,
      "explain": "空格是 pray（祈求；禱告）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-006",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「付錢 (過去式為 paid)」的英文是？",
      "options": [
        "stay",
        "spend",
        "pay",
        "anywhere"
      ],
      "answer": 2,
      "explain": "付錢 (過去式為 paid) → pay",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-022",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt will ___ about an hour to get there.",
      "options": [
        "city",
        "take",
        "rich",
        "of course"
      ],
      "answer": 1,
      "explain": "空格是 take（花費 (時間)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-010",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nAn apple costs about fifty ___s.",
      "options": [
        "bill",
        "temple",
        "cent",
        "worry"
      ],
      "answer": 2,
      "explain": "空格是 cent（分 (貨幣單位)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-027",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMany ___s come to Taiwan to work.",
      "options": [
        "koala",
        "department store",
        "foreigner",
        "far"
      ],
      "answer": 2,
      "explain": "空格是 foreigner（外國人）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-046",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe beautiful music can ___ a large crowd.",
      "options": [
        "besides",
        "city",
        "restroom",
        "draw"
      ],
      "answer": 3,
      "explain": "空格是 draw（吸引）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-005",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThere is a big ___ for you.",
      "options": [
        "think of",
        "worry",
        "package",
        "print"
      ],
      "answer": 2,
      "explain": "空格是 package（包裹）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-021",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “how much” mean?",
      "options": [
        "貴的",
        "多少錢",
        "遠的",
        "舒適的"
      ],
      "answer": 1,
      "explain": "how much → 多少錢",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-037",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「某人」的英文是？",
      "options": [
        "far",
        "temple",
        "someone",
        "reach"
      ],
      "answer": 2,
      "explain": "某人 → someone",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-029",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “visitor” mean?",
      "options": [
        "想到",
        "景色",
        "包裹",
        "遊客"
      ],
      "answer": 3,
      "explain": "visitor → 遊客",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-007",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ of gas is going up.",
      "options": [
        "send",
        "besides",
        "expensive",
        "price"
      ],
      "answer": 3,
      "explain": "空格是 price（價錢）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-011",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「便宜的」的英文是？",
      "options": [
        "foreigner",
        "cheap",
        "how much",
        "stay"
      ],
      "answer": 1,
      "explain": "便宜的 → cheap",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-WRG-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "The book cost me NT$100.",
        "I paid the book NT$100.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book."
      ],
      "answer": 3,
      "explain": "人不用 cost 當「花費」主詞",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VZH-015",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「遠的」的英文是？",
      "options": [
        "how much",
        "far",
        "print",
        "convenient"
      ],
      "answer": 1,
      "explain": "遠的 → far",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-018",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI bought a drink at the ___.",
      "options": [
        "convenience store",
        "of course",
        "restroom",
        "temple"
      ],
      "answer": 0,
      "explain": "空格是 convenience store（便利商店）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-046",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “draw” mean?",
      "options": [
        "花費 (時間)",
        "吸引",
        "遠的",
        "包裹"
      ],
      "answer": 1,
      "explain": "draw → 吸引",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-027",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “foreigner” mean?",
      "options": [
        "往任何地方",
        "外國人",
        "便利商店",
        "雨傘"
      ],
      "answer": 1,
      "explain": "foreigner → 外國人",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-019",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「印；印刷」的英文是？",
      "options": [
        "someone",
        "cheap",
        "temple",
        "print"
      ],
      "answer": 3,
      "explain": "印；印刷 → print",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-009",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI ___ too much money on clothes.",
      "options": [
        "foreigner",
        "most",
        "pray",
        "spend"
      ],
      "answer": 3,
      "explain": "空格是 spend（花費 (過去式為 spent)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-020",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「帳單」的英文是？",
      "options": [
        "dollar",
        "someone",
        "koala",
        "bill"
      ],
      "answer": 3,
      "explain": "帳單 → bill",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-041",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “koala” mean?",
      "options": [
        "景色",
        "多少錢",
        "無尾熊",
        "某人"
      ],
      "answer": 2,
      "explain": "koala → 無尾熊",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-GQ-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "這個手機殼花了我大約兩千元。",
      "options": [
        "My new phone case cost me about NT$2,000.",
        "I cost about NT$2,000 my new phone case.",
        "I cost about NT$2,000 my new phone case. (x)",
        "Not I cost about NT$2,000 my new phone case."
      ],
      "answer": 0,
      "explain": "物 + cost + 人 + 錢。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L5-VEN-026",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “temple” mean?",
      "options": [
        "多少錢",
        "印；印刷",
        "外國人",
        "寺廟"
      ],
      "answer": 3,
      "explain": "temple → 寺廟",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-046",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「吸引」的英文是？",
      "options": [
        "draw",
        "comfortable",
        "spend",
        "be proud of"
      ],
      "answer": 0,
      "explain": "吸引 → draw",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-043",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “travel” mean?",
      "options": [
        "當然",
        "花費 (過去式為 spent)",
        "方便的",
        "旅行"
      ],
      "answer": 3,
      "explain": "travel → 旅行",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-001",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “of course” mean?",
      "options": [
        "城鎮",
        "便宜的",
        "照片",
        "當然"
      ],
      "answer": 3,
      "explain": "of course → 當然",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-EX-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「物 + cost + 人 + 錢」？",
      "options": [
        "My new phone case cost me about NT$2,000.",
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "How long does it take to get to your school by bus?",
        "It only takes a few minutes to buy an iced black tea."
      ],
      "answer": 0,
      "explain": "物 + cost + 人 + 錢",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VZH-018",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「便利商店」的英文是？",
      "options": [
        "dollar",
        "far",
        "convenience store",
        "pay"
      ],
      "answer": 2,
      "explain": "便利商店 → convenience store",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-040",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou should ___ your hard work.",
      "options": [
        "send",
        "be proud of",
        "convenient",
        "besides"
      ],
      "answer": 1,
      "explain": "空格是 be proud of（以...為傲）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-026",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe beautiful ___ is on the mountain.",
      "options": [
        "besides",
        "package",
        "be proud of",
        "temple"
      ],
      "answer": 3,
      "explain": "空格是 temple（寺廟）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-000",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “photo” mean?",
      "options": [
        "外國人",
        "吸引",
        "照片",
        "發送；寄 (過去式為 sent)"
      ],
      "answer": 2,
      "explain": "photo → 照片",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-002",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHow much did your new shoes ___?",
      "options": [
        "umbrella",
        "cost",
        "visitor",
        "low"
      ],
      "answer": 1,
      "explain": "空格是 cost（花費 (過去式為 cost)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-030",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “foreign” mean?",
      "options": [
        "豐富的",
        "外國的",
        "外國人",
        "城鎮"
      ],
      "answer": 1,
      "explain": "foreign → 外國的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-029",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe museum is open to all ___s.",
      "options": [
        "cent",
        "little",
        "visitor",
        "pray"
      ],
      "answer": 2,
      "explain": "空格是 visitor（遊客）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-031",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe will ___ the city in an hour.",
      "options": [
        "town",
        "pray",
        "rich",
        "reach"
      ],
      "answer": 3,
      "explain": "空格是 reach（抵達；觸及）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-003",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis book is only one ___.",
      "options": [
        "koala",
        "lend a hand",
        "dollar",
        "pay"
      ],
      "answer": 2,
      "explain": "空格是 dollar（元）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-026",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「寺廟」的英文是？",
      "options": [
        "stay",
        "print",
        "draw",
        "temple"
      ],
      "answer": 3,
      "explain": "寺廟 → temple",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-028",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「想到」的英文是？",
      "options": [
        "think of",
        "far",
        "pay",
        "city"
      ],
      "answer": 0,
      "explain": "想到 → think of",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-016",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhere is the public ___, please?",
      "options": [
        "worry",
        "send",
        "pray",
        "restroom"
      ],
      "answer": 3,
      "explain": "空格是 restroom（廁所）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-010",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「分 (貨幣單位)」的英文是？",
      "options": [
        "someone",
        "cent",
        "take",
        "print"
      ],
      "answer": 1,
      "explain": "分 (貨幣單位) → cent",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-017",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “town” mean?",
      "options": [
        "想到",
        "當然",
        "城鎮",
        "舒適的"
      ],
      "answer": 2,
      "explain": "town → 城鎮",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-007",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “price” mean?",
      "options": [
        "價錢",
        "舒適的",
        "低的",
        "豐富的"
      ],
      "answer": 0,
      "explain": "price → 價錢",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-032",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “expensive” mean?",
      "options": [
        "舒適的",
        "幫忙",
        "抵達；觸及",
        "貴的"
      ],
      "answer": 3,
      "explain": "expensive → 貴的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-TRP-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I paid the book NT$100.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book.",
        "It takes 10 minutes to get there."
      ],
      "answer": 3,
      "explain": "花時間用 take",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VEN-038",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “lend a hand” mean?",
      "options": [
        "城鎮",
        "廁所",
        "幫忙",
        "某人"
      ],
      "answer": 2,
      "explain": "lend a hand → 幫忙",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-037",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “someone” mean?",
      "options": [
        "某人",
        "貴的",
        "景色",
        "便宜的"
      ],
      "answer": 0,
      "explain": "someone → 某人",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-GQ-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "買杯冰紅茶只要幾分鐘。",
      "options": [
        "It only takes a few minutes to buy an iced black tea.",
        "It only spends a few minutes to buy an iced black tea.",
        "It only spends a few minutes to buy an iced black tea. (x)",
        "Not It only spends a few minutes to buy an i"
      ],
      "answer": 0,
      "explain": "It takes + 時間 + to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L5-VZH-023",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「待；停留」的英文是？",
      "options": [
        "convenient",
        "spend",
        "stay",
        "town"
      ],
      "answer": 2,
      "explain": "待；停留 → stay",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-WRG-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "It spends 10 minutes to get there.",
        "She spent NT$100 on the bag.",
        "She spent NT$100 to the bag.",
        "I cost NT$100 for the book."
      ],
      "answer": 2,
      "explain": "spend … on",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-CLZ-008",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis store sells things at ___ prices.",
      "options": [
        "worry",
        "department store",
        "send",
        "low"
      ],
      "answer": 3,
      "explain": "空格是 low（低的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-002",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “cost” mean?",
      "options": [
        "遠的",
        "花費 (過去式為 cost)",
        "往任何地方",
        "吸引"
      ],
      "answer": 1,
      "explain": "cost → 花費 (過去式為 cost)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-011",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “cheap” mean?",
      "options": [
        "多少錢",
        "待；停留",
        "某人",
        "便宜的"
      ],
      "answer": 3,
      "explain": "cheap → 便宜的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-015",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “far” mean?",
      "options": [
        "遠的",
        "抵達；觸及",
        "吸引",
        "價錢"
      ],
      "answer": 0,
      "explain": "far → 遠的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-042",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “scenery” mean?",
      "options": [
        "便利商店",
        "花費 (過去式為 cost)",
        "寺廟",
        "景色"
      ],
      "answer": 3,
      "explain": "scenery → 景色",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-012",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「擔心；憂慮 n.;」的英文是？",
      "options": [
        "bill",
        "most",
        "worry",
        "umbrella"
      ],
      "answer": 2,
      "explain": "擔心；憂慮 n.; → worry",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-031",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「抵達；觸及」的英文是？",
      "options": [
        "dollar",
        "reach",
        "spend",
        "convenience store"
      ],
      "answer": 1,
      "explain": "抵達；觸及 → reach",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-008",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “low” mean?",
      "options": [
        "吸引",
        "外國人",
        "景色",
        "低的"
      ],
      "answer": 3,
      "explain": "low → 低的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-019",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI need to ___ my report for school.",
      "options": [
        "cheap",
        "print",
        "foreign",
        "stay"
      ],
      "answer": 1,
      "explain": "空格是 print（印；印刷）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-028",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat do you ___ this new movie?",
      "options": [
        "far",
        "foreign",
        "think of",
        "scenery"
      ],
      "answer": 2,
      "explain": "空格是 think of（想到）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-005",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “package” mean?",
      "options": [
        "包裹",
        "外國人",
        "方便的",
        "百貨公司"
      ],
      "answer": 0,
      "explain": "package → 包裹",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-035",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI only have a ___ money left.",
      "options": [
        "think of",
        "take",
        "how much",
        "little"
      ],
      "answer": 3,
      "explain": "空格是 little（不多；少許）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-036",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ students in my class like sports.",
      "options": [
        "most",
        "worry",
        "how much",
        "foreigner"
      ],
      "answer": 0,
      "explain": "空格是 most（大部分的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-028",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “think of” mean?",
      "options": [
        "幫忙",
        "想到",
        "遠的",
        "以...為傲"
      ],
      "answer": 1,
      "explain": "think of → 想到",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-022",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「花費 (時間)」的英文是？",
      "options": [
        "take",
        "town",
        "send",
        "comfortable"
      ],
      "answer": 0,
      "explain": "花費 (時間) → take",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-032",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA new car can be very ___.",
      "options": [
        "convenience store",
        "restroom",
        "expensive",
        "draw"
      ],
      "answer": 2,
      "explain": "空格是 expensive（貴的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-016",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “restroom” mean?",
      "options": [
        "廁所",
        "大部分的",
        "以...為傲",
        "價錢"
      ],
      "answer": 0,
      "explain": "restroom → 廁所",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-WRG-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I paid the book NT$100.",
        "It takes 10 minutes to get there.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book."
      ],
      "answer": 2,
      "explain": "花時間用 take",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VEN-033",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “city” mean?",
      "options": [
        "遊客",
        "發送；寄 (過去式為 sent)",
        "照片",
        "城市"
      ],
      "answer": 3,
      "explain": "city → 城市",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-020",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “bill” mean?",
      "options": [
        "印；印刷",
        "花費 (時間)",
        "帳單",
        "方便的"
      ],
      "answer": 2,
      "explain": "bill → 帳單",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-022",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “take” mean?",
      "options": [
        "此外",
        "景色",
        "花費 (時間)",
        "寺廟"
      ],
      "answer": 2,
      "explain": "take → 花費 (時間)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-EX-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「pay + 錢 + for」？",
      "options": [
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "My new phone case cost me about NT$2,000.",
        "How long does it take to get to your school by bus?",
        "It only takes a few minutes to buy an iced black tea."
      ],
      "answer": 0,
      "explain": "pay + 錢 + for",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VZH-034",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「舒適的」的英文是？",
      "options": [
        "how much",
        "low",
        "comfortable",
        "someone"
      ],
      "answer": 2,
      "explain": "舒適的 → comfortable",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VEN-025",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “pray” mean?",
      "options": [
        "廁所",
        "想到",
        "祈求；禱告",
        "豐富的"
      ],
      "answer": 2,
      "explain": "pray → 祈求；禱告",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-001",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「當然」的英文是？",
      "options": [
        "print",
        "anywhere",
        "of course",
        "town"
      ],
      "answer": 2,
      "explain": "當然 → of course",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-033",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「城市」的英文是？",
      "options": [
        "take",
        "city",
        "little",
        "koala"
      ],
      "answer": 1,
      "explain": "城市 → city",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-015",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIs the school ___ from your house?",
      "options": [
        "comfortable",
        "how much",
        "far",
        "cent"
      ],
      "answer": 2,
      "explain": "空格是 far（遠的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-TRP-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She spent NT$100 on the bag.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book.",
        "She spent NT$100 to the bag."
      ],
      "answer": 0,
      "explain": "spend … on",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-VEN-010",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "What does “cent” mean?",
      "options": [
        "分 (貨幣單位)",
        "旅行",
        "多少錢",
        "城市"
      ],
      "answer": 0,
      "explain": "cent → 分 (貨幣單位)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-CLZ-021",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ does this beautiful dress cost?",
      "options": [
        "restroom",
        "temple",
        "how much",
        "someone"
      ],
      "answer": 2,
      "explain": "空格是 how much（多少錢）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-002",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「花費 (過去式為 cost)」的英文是？",
      "options": [
        "how much",
        "lend a hand",
        "foreign",
        "cost"
      ],
      "answer": 3,
      "explain": "花費 (過去式為 cost) → cost",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-EX-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「問花多久」？",
      "options": [
        "How long does it take to get to your school by bus?",
        "It only takes a few minutes to buy an iced black tea.",
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "My new phone case cost me about NT$2,000."
      ],
      "answer": 0,
      "explain": "問花多久",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-TRP-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "It spends 10 minutes to get there.",
        "The book cost me NT$100.",
        "I cost NT$100 for the book.",
        "I paid the book NT$100."
      ],
      "answer": 1,
      "explain": "人不用 cost 當「花費」主詞",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L5-CLZ-045",
      "lesson": "Lesson 5",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nIt's too late to go out; ___, it's raining.",
      "options": [
        "department store",
        "besides",
        "send",
        "how much"
      ],
      "answer": 1,
      "explain": "空格是 besides（此外）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L5-VZH-045",
      "lesson": "Lesson 5",
      "type": "vocab",
      "stem": "「此外」的英文是？",
      "options": [
        "besides",
        "little",
        "pray",
        "rich"
      ],
      "answer": 0,
      "explain": "此外 → besides",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    }
  ],
  "Lesson 6": [
    {
      "id": "L6-VEN-013",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “hamburger” mean?",
      "options": [
        "小心的",
        "歌手",
        "歌詞",
        "漢堡"
      ],
      "answer": 3,
      "explain": "hamburger → 漢堡",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-031",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy brother was ___ in the winter.",
      "options": [
        "own",
        "born",
        "couch",
        "order"
      ],
      "answer": 1,
      "explain": "空格是 born（出生的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-007",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat do you want to be in the ___?",
      "options": [
        "lesson",
        "lamp",
        "future",
        "case"
      ],
      "answer": 2,
      "explain": "空格是 future（未來）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-018",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMany people enjoy playing ___ reality games.",
      "options": [
        "fail",
        "virtual",
        "shape",
        "uncle"
      ],
      "answer": 1,
      "explain": "空格是 virtual（虛擬的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-047",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “company” mean?",
      "options": [
        "城堡",
        "訂單；訂購",
        "公司",
        "現代的"
      ],
      "answer": 2,
      "explain": "company → 公司",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-040",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “careful” mean?",
      "options": [
        "小心的",
        "夢想；夢 n.;",
        "公寓",
        "他們自己"
      ],
      "answer": 0,
      "explain": "careful → 小心的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-002",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe cat can clean ___ very well.",
      "options": [
        "itself",
        "forget",
        "dream",
        "heart"
      ],
      "answer": 0,
      "explain": "空格是 itself（它自己）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-036",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “heart” mean?",
      "options": [
        "領導者",
        "今晚",
        "幸虧；由於",
        "內心；心臟"
      ],
      "answer": 3,
      "explain": "heart → 內心；心臟",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-032",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “successful” mean?",
      "options": [
        "內心；心臟",
        "領導者",
        "伯伯；叔叔；姑丈；姨丈；舅舅",
        "成功的"
      ],
      "answer": 3,
      "explain": "successful → 成功的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-034",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “order” mean?",
      "options": [
        "實際上",
        "訂單；訂購",
        "歌手",
        "自己的"
      ],
      "answer": 1,
      "explain": "order → 訂單；訂購",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-005",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI want to have my ___ room.",
      "options": [
        "tonight",
        "itself",
        "own",
        "hamburger"
      ],
      "answer": 2,
      "explain": "空格是 own（自己的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-030",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “typhoon” mean?",
      "options": [
        "駕駛",
        "颱風",
        "塑形；影響",
        "燈"
      ],
      "answer": 1,
      "explain": "typhoon → 颱風",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-WRG-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I will go to the party.",
        "I will going to the party.",
        "He went by hisself.",
        "Enjoy yourselfs!"
      ],
      "answer": 1,
      "explain": "will + 原形；或 be going to",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-020",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「將；將要 aux.」的英文是？",
      "options": [
        "apartment",
        "will",
        "drive",
        "lesson"
      ],
      "answer": 1,
      "explain": "將；將要 aux. → will",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-015",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “create” mean?",
      "options": [
        "歌手",
        "創作",
        "塑形；影響",
        "成功的"
      ],
      "answer": 1,
      "explain": "create → 創作",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-013",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「漢堡」的英文是？",
      "options": [
        "hamburger",
        "thanks to",
        "heart",
        "careful"
      ],
      "answer": 0,
      "explain": "漢堡 → hamburger",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-036",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「內心；心臟」的英文是？",
      "options": [
        "honey",
        "hamburger",
        "fail",
        "heart"
      ],
      "answer": 3,
      "explain": "內心；心臟 → heart",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-043",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「他們自己」的英文是？",
      "options": [
        "leader",
        "themselves",
        "successful",
        "future"
      ],
      "answer": 1,
      "explain": "他們自己 → themselves",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-032",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「成功的」的英文是？",
      "options": [
        "successful",
        "typhoon",
        "couch",
        "singer"
      ],
      "answer": 0,
      "explain": "成功的 → successful",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-047",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy father works for a big ___.",
      "options": [
        "earthquake",
        "come true",
        "violin",
        "company"
      ],
      "answer": 3,
      "explain": "空格是 company（公司）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-038",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「教訓」的英文是？",
      "options": [
        "pizza",
        "interesting",
        "lesson",
        "born"
      ],
      "answer": 2,
      "explain": "教訓 → lesson",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-033",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「失敗；未能做到」的英文是？",
      "options": [
        "lyrics",
        "interesting",
        "fail",
        "melody"
      ],
      "answer": 2,
      "explain": "失敗；未能做到 → fail",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-014",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWhat's for ___ tonight? I am hungry.",
      "options": [
        "lamp",
        "melody",
        "digital",
        "dinner"
      ],
      "answer": 3,
      "explain": "空格是 dinner（晚餐）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-045",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nModern ___ makes life much easier.",
      "options": [
        "company",
        "free",
        "create",
        "technology"
      ],
      "answer": 3,
      "explain": "空格是 technology（科技）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-032",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe is a very ___ business woman.",
      "options": [
        "hamburger",
        "order",
        "successful",
        "shape"
      ],
      "answer": 2,
      "explain": "空格是 successful（成功的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-023",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “guitar” mean?",
      "options": [
        "吉他",
        "公司",
        "科技",
        "城堡"
      ],
      "answer": 0,
      "explain": "guitar → 吉他",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-027",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “apartment” mean?",
      "options": [
        "公寓",
        "歌詞",
        "簡單的",
        "出生的"
      ],
      "answer": 0,
      "explain": "apartment → 公寓",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-014",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “dinner” mean?",
      "options": [
        "領導者",
        "駕駛",
        "晚餐",
        "內心；心臟"
      ],
      "answer": 2,
      "explain": "dinner → 晚餐",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-017",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「旋律」的英文是？",
      "options": [
        "heart",
        "thanks to",
        "melody",
        "digital"
      ],
      "answer": 2,
      "explain": "旋律 → melody",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-021",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「空閒的」的英文是？",
      "options": [
        "themselves",
        "uncle",
        "free",
        "virtual"
      ],
      "answer": 2,
      "explain": "空閒的 → free",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-019",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nWe are living in a ___ age.",
      "options": [
        "lyrics",
        "digital",
        "couch",
        "hamburger"
      ],
      "answer": 1,
      "explain": "空格是 digital（數位的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-018",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「虛擬的」的英文是？",
      "options": [
        "forget",
        "hamburger",
        "apartment",
        "virtual"
      ],
      "answer": 3,
      "explain": "虛擬的 → virtual",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-011",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「伯伯；叔叔；姑丈；姨丈；舅舅」的英文是？",
      "options": [
        "castle",
        "shape",
        "uncle",
        "honey"
      ],
      "answer": 2,
      "explain": "伯伯；叔叔；姑丈；姨丈；舅舅 → uncle",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-033",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe was afraid to ___ the exam.",
      "options": [
        "dinner",
        "forget",
        "technology",
        "fail"
      ],
      "answer": 3,
      "explain": "空格是 fail（失敗；未能做到）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-TRP-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Enjoy yourselfs!",
        "He went by himself.",
        "I will going to the party.",
        "He went by hisself."
      ],
      "answer": 1,
      "explain": "himself 不是 hisself",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-009",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「成真」的英文是？",
      "options": [
        "come true",
        "modern",
        "digital",
        "violin"
      ],
      "answer": 0,
      "explain": "成真 → come true",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-015",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe artist likes to ___ beautiful paintings.",
      "options": [
        "create",
        "apartment",
        "digital",
        "own"
      ],
      "answer": 0,
      "explain": "空格是 create（創作）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-028",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「城堡」的英文是？",
      "options": [
        "castle",
        "own",
        "themselves",
        "fail"
      ],
      "answer": 0,
      "explain": "城堡 → castle",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-024",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「小提琴」的英文是？",
      "options": [
        "born",
        "hamburger",
        "apartment",
        "violin"
      ],
      "answer": 3,
      "explain": "小提琴 → violin",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-025",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI like to add ___ to my tea.",
      "options": [
        "lyrics",
        "guitar",
        "shape",
        "honey"
      ],
      "answer": 3,
      "explain": "空格是 honey（蜂蜜）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-005",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「自己的」的英文是？",
      "options": [
        "itself",
        "heart",
        "order",
        "own"
      ],
      "answer": 3,
      "explain": "自己的 → own",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-004",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy ___ is to travel around the world.",
      "options": [
        "will",
        "dream",
        "uncle",
        "simple"
      ],
      "answer": 1,
      "explain": "空格是 dream（夢想；夢 n.;）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-005",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “own” mean?",
      "options": [
        "自己的",
        "實際上",
        "伯伯；叔叔；姑丈；姨丈；舅舅",
        "將；將要 aux."
      ],
      "answer": 0,
      "explain": "own → 自己的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-048",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nYou have to ___ the form first.",
      "options": [
        "lyrics",
        "complete",
        "college",
        "Internet"
      ],
      "answer": 1,
      "explain": "空格是 complete（完成）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-039",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「事件；情況」的英文是？",
      "options": [
        "successful",
        "case",
        "complete",
        "violin"
      ],
      "answer": 1,
      "explain": "事件；情況 → case",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-042",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nCan you ___ me to the airport?",
      "options": [
        "hamburger",
        "own",
        "dream",
        "drive"
      ],
      "answer": 3,
      "explain": "空格是 drive（駕駛）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-015",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「創作」的英文是？",
      "options": [
        "itself",
        "create",
        "themselves",
        "own"
      ],
      "answer": 1,
      "explain": "創作 → create",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-031",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “born” mean?",
      "options": [
        "訂單；訂購",
        "現代的",
        "出生的",
        "領導者"
      ],
      "answer": 2,
      "explain": "born → 出生的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-048",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「完成」的英文是？",
      "options": [
        "complete",
        "own",
        "honey",
        "lyrics"
      ],
      "answer": 0,
      "explain": "完成 → complete",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-021",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nAre you ___ this Saturday afternoon?",
      "options": [
        "couch",
        "themselves",
        "free",
        "college"
      ],
      "answer": 2,
      "explain": "空格是 free（空閒的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-WRG-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He went by himself.",
        "Enjoy yourselfs!",
        "I will going to the party.",
        "He went by hisself."
      ],
      "answer": 3,
      "explain": "himself 不是 hisself",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-CLZ-040",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease be ___ when you cross the street.",
      "options": [
        "simple",
        "careful",
        "order",
        "couch"
      ],
      "answer": 1,
      "explain": "空格是 careful（小心的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-030",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「颱風」的英文是？",
      "options": [
        "couch",
        "modern",
        "typhoon",
        "lamp"
      ],
      "answer": 2,
      "explain": "颱風 → typhoon",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-030",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nA strong ___ is coming this weekend.",
      "options": [
        "born",
        "simple",
        "typhoon",
        "melody"
      ],
      "answer": 2,
      "explain": "空格是 typhoon（颱風）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-012",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nLet's order a large ___ for dinner.",
      "options": [
        "itself",
        "dream",
        "pizza",
        "actually"
      ],
      "answer": 2,
      "explain": "空格是 pizza（披薩）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-002",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「它自己」的英文是？",
      "options": [
        "lyrics",
        "honey",
        "itself",
        "uncle"
      ],
      "answer": 2,
      "explain": "它自己 → itself",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-022",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「燈」的英文是？",
      "options": [
        "free",
        "singer",
        "born",
        "lamp"
      ],
      "answer": 3,
      "explain": "燈 → lamp",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-035",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「領導者」的英文是？",
      "options": [
        "college",
        "careful",
        "leader",
        "typhoon"
      ],
      "answer": 2,
      "explain": "領導者 → leader",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-022",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “lamp” mean?",
      "options": [
        "簡單的",
        "完成",
        "燈",
        "夢想；夢 n.;"
      ],
      "answer": 2,
      "explain": "lamp → 燈",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-014",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「晚餐」的英文是？",
      "options": [
        "pizza",
        "born",
        "drive",
        "dinner"
      ],
      "answer": 3,
      "explain": "晚餐 → dinner",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-011",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nMy ___ lives in the countryside.",
      "options": [
        "singer",
        "careful",
        "uncle",
        "interesting"
      ],
      "answer": 2,
      "explain": "空格是 uncle（伯伯；叔叔；姑丈；姨丈；舅舅）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-044",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “shape” mean?",
      "options": [
        "披薩",
        "未來",
        "塑形；影響",
        "科技"
      ],
      "answer": 2,
      "explain": "shape → 塑形；影響",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-047",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「公司」的英文是？",
      "options": [
        "Internet",
        "singer",
        "company",
        "guitar"
      ],
      "answer": 2,
      "explain": "公司 → company",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-007",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “future” mean?",
      "options": [
        "塑形；影響",
        "公司",
        "未來",
        "晚餐"
      ],
      "answer": 2,
      "explain": "future → 未來",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-025",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “honey” mean?",
      "options": [
        "它自己",
        "塑形；影響",
        "蜂蜜",
        "小提琴"
      ],
      "answer": 2,
      "explain": "honey → 蜂蜜",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-034",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「訂單；訂購」的英文是？",
      "options": [
        "Internet",
        "order",
        "forget",
        "own"
      ],
      "answer": 1,
      "explain": "訂單；訂購 → order",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-012",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “pizza” mean?",
      "options": [
        "出生的",
        "它自己",
        "披薩",
        "颱風"
      ],
      "answer": 2,
      "explain": "pizza → 披薩",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-TRP-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She is going to buy a dress.",
        "She is going to buys a dress.",
        "I will going to the party.",
        "He went by hisself."
      ],
      "answer": 0,
      "explain": "going to + 原形",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-007",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「未來」的英文是？",
      "options": [
        "careful",
        "future",
        "guitar",
        "interesting"
      ],
      "answer": 1,
      "explain": "未來 → future",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-037",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “forget” mean?",
      "options": [
        "領導者",
        "夢想；夢 n.;",
        "忘記 (過去式為 forgot)",
        "晚餐"
      ],
      "answer": 2,
      "explain": "forget → 忘記 (過去式為 forgot)",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-004",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「夢想；夢 n.;」的英文是？",
      "options": [
        "itself",
        "typhoon",
        "dream",
        "interesting"
      ],
      "answer": 2,
      "explain": "夢想；夢 n.; → dream",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-041",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe museum is full of ___ art.",
      "options": [
        "come true",
        "modern",
        "lamp",
        "interesting"
      ],
      "answer": 1,
      "explain": "空格是 modern（現代的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-037",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「忘記 (過去式為 forgot)」的英文是？",
      "options": [
        "lyrics",
        "earthquake",
        "forget",
        "lesson"
      ],
      "answer": 2,
      "explain": "忘記 (過去式為 forgot) → forget",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-006",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nTaylor Swift is a famous American ___.",
      "options": [
        "singer",
        "couch",
        "lesson",
        "actually"
      ],
      "answer": 0,
      "explain": "空格是 singer（歌手）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-049",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “thanks to” mean?",
      "options": [
        "吉他",
        "成真",
        "今晚",
        "幸虧；由於"
      ],
      "answer": 3,
      "explain": "thanks to → 幸虧；由於",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-044",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「塑形；影響」的英文是？",
      "options": [
        "earthquake",
        "shape",
        "company",
        "lamp"
      ],
      "answer": 1,
      "explain": "塑形；影響 → shape",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-029",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe ___ shook the buildings.",
      "options": [
        "earthquake",
        "complete",
        "pizza",
        "digital"
      ],
      "answer": 0,
      "explain": "空格是 earthquake（地震）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-046",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe will go to ___ next year.",
      "options": [
        "dinner",
        "create",
        "college",
        "lyrics"
      ],
      "answer": 2,
      "explain": "空格是 college（大學）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-003",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “actually” mean?",
      "options": [
        "實際上",
        "蜂蜜",
        "今晚",
        "大學"
      ],
      "answer": 0,
      "explain": "actually → 實際上",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-001",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “Internet” mean?",
      "options": [
        "大學",
        "燈",
        "網路",
        "完成"
      ],
      "answer": 2,
      "explain": "Internet → 網路",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-016",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI love the ___ of this popular song.",
      "options": [
        "shape",
        "fail",
        "lyrics",
        "pizza"
      ],
      "answer": 2,
      "explain": "空格是 lyrics（歌詞）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-045",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「科技」的英文是？",
      "options": [
        "lesson",
        "melody",
        "technology",
        "company"
      ],
      "answer": 2,
      "explain": "科技 → technology",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-012",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「披薩」的英文是？",
      "options": [
        "pizza",
        "virtual",
        "themselves",
        "born"
      ],
      "answer": 0,
      "explain": "披薩 → pizza",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-GQ-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "他是自己一個人去看電影的。",
      "options": [
        "He went by himself.",
        "He went by him.",
        "He went by him. (x)",
        "Not He went by him."
      ],
      "answer": 0,
      "explain": "by himself = 獨自。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L6-VEN-011",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “uncle” mean?",
      "options": [
        "空閒的",
        "伯伯；叔叔；姑丈；姨丈；舅舅",
        "創作",
        "公司"
      ],
      "answer": 1,
      "explain": "uncle → 伯伯；叔叔；姑丈；姨丈；舅舅",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-042",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “drive” mean?",
      "options": [
        "忘記 (過去式為 forgot)",
        "簡單的",
        "燈",
        "駕駛"
      ],
      "answer": 3,
      "explain": "drive → 駕駛",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-039",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe police are investigating the ___.",
      "options": [
        "simple",
        "case",
        "forget",
        "earthquake"
      ],
      "answer": 1,
      "explain": "空格是 case（事件；情況）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-045",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “technology” mean?",
      "options": [
        "科技",
        "旋律",
        "吉他",
        "蜂蜜"
      ],
      "answer": 0,
      "explain": "technology → 科技",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-TRP-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He went by hisself.",
        "I will going to the party.",
        "Enjoy yourselfs!",
        "Enjoy yourselves!"
      ],
      "answer": 3,
      "explain": "複數用 yourselves",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-CLZ-043",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe children can dress ___ now.",
      "options": [
        "themselves",
        "come true",
        "heart",
        "apartment"
      ],
      "answer": 0,
      "explain": "空格是 themselves（他們自己）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-048",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “complete” mean?",
      "options": [
        "領導者",
        "伯伯；叔叔；姑丈；姨丈；舅舅",
        "完成",
        "內心；心臟"
      ],
      "answer": 2,
      "explain": "complete → 完成",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-049",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\n___ your help, I finished on time.",
      "options": [
        "fail",
        "violin",
        "thanks to",
        "apartment"
      ],
      "answer": 2,
      "explain": "空格是 thanks to（幸虧；由於）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-010",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “tonight” mean?",
      "options": [
        "它自己",
        "晚餐",
        "沙發",
        "今晚"
      ],
      "answer": 3,
      "explain": "tonight → 今晚",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-GQ-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "你等一下要做什麼？",
      "options": [
        "What are you going to do later?",
        "What will you going to do later?",
        "What will you going to do later? (x)",
        "Not What will you going to do later?"
      ],
      "answer": 0,
      "explain": "be going to + 原形；不要 will going to 混用。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L6-TRP-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I will going to the party.",
        "I will go to the party.",
        "He went by hisself.",
        "Enjoy yourselfs!"
      ],
      "answer": 1,
      "explain": "will + 原形；或 be going to",
      "tags": [
        "trap"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-CLZ-023",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe plays the ___ in a band.",
      "options": [
        "drive",
        "guitar",
        "tonight",
        "thanks to"
      ],
      "answer": 1,
      "explain": "空格是 guitar（吉他）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-004",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “dream” mean?",
      "options": [
        "夢想；夢 n.;",
        "地震",
        "空閒的",
        "颱風"
      ],
      "answer": 0,
      "explain": "dream → 夢想；夢 n.;",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-038",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI learned a valuable ___ from my mistake.",
      "options": [
        "case",
        "order",
        "lesson",
        "own"
      ],
      "answer": 2,
      "explain": "空格是 lesson（教訓）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-027",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThey live in a small ___ downtown.",
      "options": [
        "lamp",
        "apartment",
        "complete",
        "lyrics"
      ],
      "answer": 1,
      "explain": "空格是 apartment（公寓）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-028",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe old ___ is a famous tourist spot.",
      "options": [
        "thanks to",
        "castle",
        "hamburger",
        "tonight"
      ],
      "answer": 1,
      "explain": "空格是 castle（城堡）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-043",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “themselves” mean?",
      "options": [
        "他們自己",
        "旋律",
        "現代的",
        "未來"
      ],
      "answer": 0,
      "explain": "themselves → 他們自己",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-029",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “earthquake” mean?",
      "options": [
        "塑形；影響",
        "地震",
        "公寓",
        "創作"
      ],
      "answer": 1,
      "explain": "earthquake → 地震",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-021",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “free” mean?",
      "options": [
        "蜂蜜",
        "空閒的",
        "歌詞",
        "燈"
      ],
      "answer": 1,
      "explain": "free → 空閒的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-009",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “come true” mean?",
      "options": [
        "幸虧；由於",
        "忘記 (過去式為 forgot)",
        "未來",
        "成真"
      ],
      "answer": 3,
      "explain": "come true → 成真",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-017",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis song has a very beautiful ___.",
      "options": [
        "dinner",
        "melody",
        "tonight",
        "future"
      ],
      "answer": 1,
      "explain": "空格是 melody（旋律）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-006",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「will 問未來同行者」？",
      "options": [
        "What are you going to do later?",
        "Will you go to the movies with us tomorrow?",
        "Who will go to the potluck with you?",
        "I'm going to study for the test."
      ],
      "answer": 2,
      "explain": "will 問未來同行者",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-027",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「公寓」的英文是？",
      "options": [
        "simple",
        "dream",
        "come true",
        "apartment"
      ],
      "answer": 3,
      "explain": "公寓 → apartment",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-020",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “will” mean?",
      "options": [
        "晚餐",
        "歌詞",
        "將；將要 aux.",
        "簡單的"
      ],
      "answer": 2,
      "explain": "will → 將；將要 aux.",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-000",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “simple” mean?",
      "options": [
        "完成",
        "簡單的",
        "失敗；未能做到",
        "地震"
      ],
      "answer": 1,
      "explain": "simple → 簡單的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-024",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe has been playing the ___ since childhood.",
      "options": [
        "lesson",
        "singer",
        "violin",
        "shape"
      ],
      "answer": 2,
      "explain": "空格是 violin（小提琴）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-006",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「歌手」的英文是？",
      "options": [
        "future",
        "singer",
        "earthquake",
        "company"
      ],
      "answer": 1,
      "explain": "歌手 → singer",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-003",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「實際上」的英文是？",
      "options": [
        "born",
        "Internet",
        "actually",
        "digital"
      ],
      "answer": 2,
      "explain": "實際上 → actually",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-034",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI'd like to place an ___ for delivery.",
      "options": [
        "thanks to",
        "order",
        "themselves",
        "company"
      ],
      "answer": 1,
      "explain": "空格是 order（訂單；訂購）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-010",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nAre you busy ___? Let's have dinner.",
      "options": [
        "melody",
        "Internet",
        "singer",
        "tonight"
      ],
      "answer": 3,
      "explain": "空格是 tonight（今晚）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-008",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThis is a very ___ book.",
      "options": [
        "fail",
        "modern",
        "interesting",
        "come true"
      ],
      "answer": 2,
      "explain": "空格是 interesting（有趣的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-041",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「現代的」的英文是？",
      "options": [
        "heart",
        "lyrics",
        "modern",
        "lesson"
      ],
      "answer": 2,
      "explain": "現代的 → modern",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-024",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “violin” mean?",
      "options": [
        "小提琴",
        "訂單；訂購",
        "科技",
        "空閒的"
      ],
      "answer": 0,
      "explain": "violin → 小提琴",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-029",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「地震」的英文是？",
      "options": [
        "castle",
        "earthquake",
        "forget",
        "lamp"
      ],
      "answer": 1,
      "explain": "地震 → earthquake",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-002",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “itself” mean?",
      "options": [
        "塑形；影響",
        "它自己",
        "披薩",
        "失敗；未能做到"
      ],
      "answer": 1,
      "explain": "itself → 它自己",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-013",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI had a delicious ___ for lunch.",
      "options": [
        "hamburger",
        "case",
        "dream",
        "singer"
      ],
      "answer": 0,
      "explain": "空格是 hamburger（漢堡）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-046",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “college” mean?",
      "options": [
        "大學",
        "創作",
        "出生的",
        "現代的"
      ],
      "answer": 0,
      "explain": "college → 大學",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-017",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “melody” mean?",
      "options": [
        "城堡",
        "旋律",
        "創作",
        "失敗；未能做到"
      ],
      "answer": 1,
      "explain": "melody → 旋律",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-008",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “interesting” mean?",
      "options": [
        "自己的",
        "有趣的",
        "歌詞",
        "駕駛"
      ],
      "answer": 1,
      "explain": "interesting → 有趣的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-001",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI use the ___ to find information.",
      "options": [
        "case",
        "actually",
        "honey",
        "Internet"
      ],
      "answer": 3,
      "explain": "空格是 Internet（網路）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「已有打算」？",
      "options": [
        "Will you go to the movies with us tomorrow?",
        "Did you enjoy yourselves tonight?",
        "What are you going to do later?",
        "I'm going to study for the test."
      ],
      "answer": 3,
      "explain": "已有打算",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-023",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「吉他」的英文是？",
      "options": [
        "drive",
        "create",
        "guitar",
        "itself"
      ],
      "answer": 2,
      "explain": "吉他 → guitar",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-019",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “digital” mean?",
      "options": [
        "披薩",
        "數位的",
        "公寓",
        "颱風"
      ],
      "answer": 1,
      "explain": "digital → 數位的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-044",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nOur experiences ___ who we are today.",
      "options": [
        "thanks to",
        "company",
        "castle",
        "shape"
      ],
      "answer": 3,
      "explain": "空格是 shape（塑形；影響）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-001",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「網路」的英文是？",
      "options": [
        "forget",
        "Internet",
        "complete",
        "hamburger"
      ],
      "answer": 1,
      "explain": "網路 → Internet",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-035",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe was chosen as the new team ___.",
      "options": [
        "singer",
        "digital",
        "will",
        "leader"
      ],
      "answer": 3,
      "explain": "空格是 leader（領導者）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「複數 you → yourselves」？",
      "options": [
        "What are you going to do later?",
        "Will you go to the movies with us tomorrow?",
        "Did you enjoy yourselves tonight?",
        "I'm going to study for the test."
      ],
      "answer": 2,
      "explain": "複數 you → yourselves",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-026",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「沙發」的英文是？",
      "options": [
        "couch",
        "castle",
        "simple",
        "actually"
      ],
      "answer": 0,
      "explain": "沙發 → couch",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-019",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「數位的」的英文是？",
      "options": [
        "successful",
        "come true",
        "digital",
        "actually"
      ],
      "answer": 2,
      "explain": "數位的 → digital",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-038",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “lesson” mean?",
      "options": [
        "出生的",
        "歌手",
        "教訓",
        "忘記 (過去式為 forgot)"
      ],
      "answer": 2,
      "explain": "lesson → 教訓",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-031",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「出生的」的英文是？",
      "options": [
        "order",
        "own",
        "born",
        "complete"
      ],
      "answer": 2,
      "explain": "出生的 → born",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-046",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「大學」的英文是？",
      "options": [
        "careful",
        "earthquake",
        "own",
        "college"
      ],
      "answer": 3,
      "explain": "大學 → college",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-041",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “modern” mean?",
      "options": [
        "現代的",
        "披薩",
        "有趣的",
        "塑形；影響"
      ],
      "answer": 0,
      "explain": "modern → 現代的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「will 問未來」？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "I'm going to study for the test.",
        "Will you go to the movies with us tomorrow?",
        "What are you going to do later?"
      ],
      "answer": 2,
      "explain": "will 問未來",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VZH-008",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「有趣的」的英文是？",
      "options": [
        "interesting",
        "virtual",
        "melody",
        "lesson"
      ],
      "answer": 0,
      "explain": "有趣的 → interesting",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-040",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「小心的」的英文是？",
      "options": [
        "careful",
        "honey",
        "typhoon",
        "case"
      ],
      "answer": 0,
      "explain": "小心的 → careful",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-037",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease don't ___ to lock the door.",
      "options": [
        "college",
        "typhoon",
        "forget",
        "earthquake"
      ],
      "answer": 2,
      "explain": "空格是 forget（忘記 (過去式為 forgot)）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-026",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe is sitting on the ___ and reading.",
      "options": [
        "uncle",
        "lyrics",
        "complete",
        "couch"
      ],
      "answer": 3,
      "explain": "空格是 couch（沙發）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-005",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「他自己一個人去」？",
      "options": [
        "What are you going to do later?",
        "I'm going to study for the test.",
        "Will you go to the movies with us tomorrow?",
        "He went by himself."
      ],
      "answer": 3,
      "explain": "他自己一個人去",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VEN-035",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “leader” mean?",
      "options": [
        "失敗；未能做到",
        "領導者",
        "小提琴",
        "未來"
      ],
      "answer": 1,
      "explain": "leader → 領導者",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-016",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “lyrics” mean?",
      "options": [
        "旋律",
        "簡單的",
        "歌詞",
        "他們自己"
      ],
      "answer": 2,
      "explain": "lyrics → 歌詞",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-049",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「幸虧；由於」的英文是？",
      "options": [
        "honey",
        "singer",
        "thanks to",
        "leader"
      ],
      "answer": 2,
      "explain": "幸虧；由於 → thanks to",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-010",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「今晚」的英文是？",
      "options": [
        "pizza",
        "tonight",
        "come true",
        "digital"
      ],
      "answer": 1,
      "explain": "今晚 → tonight",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-000",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nThe test was very ___ and easy.",
      "options": [
        "simple",
        "dinner",
        "apartment",
        "earthquake"
      ],
      "answer": 0,
      "explain": "空格是 simple（簡單的）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-022",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nPlease turn on the ___; it's getting dark.",
      "options": [
        "lamp",
        "heart",
        "violin",
        "future"
      ],
      "answer": 0,
      "explain": "空格是 lamp（燈）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-042",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「駕駛」的英文是？",
      "options": [
        "drive",
        "successful",
        "own",
        "company"
      ],
      "answer": 0,
      "explain": "駕駛 → drive",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-009",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI hope all your wishes ___.",
      "options": [
        "come true",
        "dream",
        "Internet",
        "leader"
      ],
      "answer": 0,
      "explain": "空格是 come true（成真）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-018",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “virtual” mean?",
      "options": [
        "它自己",
        "夢想；夢 n.;",
        "自己的",
        "虛擬的"
      ],
      "answer": 3,
      "explain": "virtual → 虛擬的",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-WRG-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He went by hisself.",
        "Enjoy yourselves!",
        "I will going to the party.",
        "Enjoy yourselfs!"
      ],
      "answer": 3,
      "explain": "複數用 yourselves",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VEN-039",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “case” mean?",
      "options": [
        "事件；情況",
        "成真",
        "大學",
        "有趣的"
      ],
      "answer": 0,
      "explain": "case → 事件；情況",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-036",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nShe has a very kind and warm ___.",
      "options": [
        "case",
        "heart",
        "violin",
        "fail"
      ],
      "answer": 1,
      "explain": "空格是 heart（內心；心臟）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-028",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “castle” mean?",
      "options": [
        "將；將要 aux.",
        "城堡",
        "小提琴",
        "自己的"
      ],
      "answer": 1,
      "explain": "castle → 城堡",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-033",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “fail” mean?",
      "options": [
        "伯伯；叔叔；姑丈；姨丈；舅舅",
        "失敗；未能做到",
        "事件；情況",
        "領導者"
      ],
      "answer": 1,
      "explain": "fail → 失敗；未能做到",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-GQ-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "你們今晚玩得開心嗎？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "Did you enjoy yourself tonight?",
        "Did you enjoy yourself tonight? (x)",
        "Not Did you enjoy yourself tonight?"
      ],
      "answer": 0,
      "explain": "你們（複數）→ yourselves。（若確定只有一人可用 yourself）",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar-bank"
    },
    {
      "id": "L6-CLZ-020",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nI think it ___ rain later today.",
      "options": [
        "will",
        "forget",
        "born",
        "honey"
      ],
      "answer": 0,
      "explain": "空格是 will（將；將要 aux.）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-CLZ-003",
      "lesson": "Lesson 6",
      "type": "cloze",
      "stem": "選正確的字填入空格：\nHe looks young, but he is ___ fifty.",
      "options": [
        "actually",
        "simple",
        "virtual",
        "born"
      ],
      "answer": 0,
      "explain": "空格是 actually（實際上）。",
      "tags": [
        "cloze"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-025",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「蜂蜜」的英文是？",
      "options": [
        "will",
        "tonight",
        "create",
        "honey"
      ],
      "answer": 3,
      "explain": "蜂蜜 → honey",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VEN-026",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “couch” mean?",
      "options": [
        "沙發",
        "燈",
        "幸虧；由於",
        "小心的"
      ],
      "answer": 0,
      "explain": "couch → 沙發",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-000",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「簡單的」的英文是？",
      "options": [
        "simple",
        "case",
        "drive",
        "hamburger"
      ],
      "answer": 0,
      "explain": "簡單的 → simple",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-VZH-016",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "「歌詞」的英文是？",
      "options": [
        "Internet",
        "free",
        "lesson",
        "lyrics"
      ],
      "answer": 3,
      "explain": "歌詞 → lyrics",
      "tags": [
        "zh-en"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-WRG-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She is going to buy a dress.",
        "I will going to the party.",
        "He went by hisself.",
        "She is going to buys a dress."
      ],
      "answer": 3,
      "explain": "going to + 原形",
      "tags": [
        "find-wrong"
      ],
      "source": "auto-grammar"
    },
    {
      "id": "L6-VEN-006",
      "lesson": "Lesson 6",
      "type": "vocab",
      "stem": "What does “singer” mean?",
      "options": [
        "成功的",
        "公寓",
        "歌手",
        "成真"
      ],
      "answer": 2,
      "explain": "singer → 歌手",
      "tags": [
        "en-zh"
      ],
      "source": "auto-vocab"
    },
    {
      "id": "L6-EX-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「be going to 問計畫」？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "Will you go to the movies with us tomorrow?",
        "What are you going to do later?",
        "I'm going to study for the test."
      ],
      "answer": 2,
      "explain": "be going to 問計畫",
      "tags": [
        "example"
      ],
      "source": "auto-grammar"
    }
  ]
};
