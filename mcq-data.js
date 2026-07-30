/**
 * 文法選擇題題庫（原創；對齊南一第三冊 L1–L6 文法重點；非官方原卷）
 * 題數：{'Lesson 1': 40, 'Lesson 2': 37, 'Lesson 3': 37, 'Lesson 4': 37, 'Lesson 5': 37, 'Lesson 6': 37}
 * 重建：python tools/build_mcq_data.py
 */
const mcqBank = {
  "Lesson 1": [
    {
      "id": "L1-EX-005",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「疑問句用 Did + 原形」？",
      "options": [
        "My uncle was an English teacher ten years ago.",
        "Did Mary call her grandma after lunch?",
        "Andy shared his food with his classmates.",
        "They were at home last night."
      ],
      "answer": 1,
      "explain": "疑問句用 Did + 原形",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TRP-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He were happy yesterday.",
        "Did she cook dinner?",
        "I didn't watched TV.",
        "Did she cooked dinner?"
      ],
      "answer": 1,
      "explain": "Did 後面原形",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-GQ-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "我昨天沒洗碗。",
      "options": [
        "I didn't wash the dishes.",
        "He go to school yesterday.",
        "I didn't washed the dishes.",
        "I don't washed the dishes."
      ],
      "answer": 0,
      "explain": "didn't 後面用原形 wash。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-EX-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「主詞複數 → were」？",
      "options": [
        "Andy shared his food with his classmates.",
        "They were at home last night.",
        "My uncle was an English teacher ten years ago.",
        "I watched a ghost movie last night."
      ],
      "answer": 1,
      "explain": "主詞複數 → were",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-EX-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「主詞單數 → was」？",
      "options": [
        "I watched a ghost movie last night.",
        "Andy shared his food with his classmates.",
        "They were at home last night.",
        "My uncle was an English teacher ten years ago."
      ],
      "answer": 3,
      "explain": "主詞單數 → was",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-020",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "Did she washed her dog yesterday?",
        "She didn't wash her dog yesterday.",
        "She washed her dog yesterday.",
        "Did she wash her dog yesterday?"
      ],
      "answer": 0,
      "explain": "Did 後面用原形 wash。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TRP-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He was happy yesterday.",
        "Did she cooked dinner?",
        "I didn't watched TV.",
        "He were happy yesterday."
      ],
      "answer": 0,
      "explain": "He 用 was",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-010",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確句：Andy 昨天和同學分享食物。",
      "options": [
        "Andy shared his food with his classmates.",
        "Andy share his food with his classmates.",
        "Andy shares his food with his classmates yesterday.",
        "Andy sharing his food with his classmates."
      ],
      "answer": 0,
      "explain": "過去式 shared。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-WRG-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He were happy yesterday.",
        "I didn't watched TV.",
        "Did she cook dinner?",
        "Did she cooked dinner?"
      ],
      "answer": 3,
      "explain": "Did 後面原形",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TRP-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She studyed hard.",
        "She studied hard.",
        "He were happy yesterday.",
        "I didn't watched TV."
      ],
      "answer": 1,
      "explain": "y→i+ed",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-007",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "規則動詞 share 的過去式是？",
      "options": [
        "shareed",
        "shares",
        "shared",
        "sharing"
      ],
      "answer": 2,
      "explain": "字尾 e 只加 d → shared。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-WRG-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He were happy yesterday.",
        "He was happy yesterday.",
        "I didn't watched TV.",
        "Did she cooked dinner?"
      ],
      "answer": 0,
      "explain": "He 用 was",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-005",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確的否定句：我昨天沒念書。",
      "options": [
        "I didn't study for the test.",
        "I don't study for the test yesterday.",
        "I not study for the test.",
        "I didn't studied for the test."
      ],
      "answer": 0,
      "explain": "didn't + 原形動詞。",
      "tags": [
        "did-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-016",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確句：我昨晚看了鬼片。",
      "options": [
        "I watching a ghost movie last night.",
        "I did watched a ghost movie last night.",
        "I watch a ghost movie last night.",
        "I watched a ghost movie last night."
      ],
      "answer": 3,
      "explain": "watch → watched。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-WRG-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He were happy yesterday.",
        "Did she cooked dinner?",
        "I didn't watch TV.",
        "I didn't watched TV."
      ],
      "answer": 3,
      "explain": "有 didn't 就用原形",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-EX-006",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「否定：didn't + 原形（不是 studied）」？",
      "options": [
        "My uncle was an English teacher ten years ago.",
        "Andy shared his food with his classmates.",
        "I didn't study for the test.",
        "They were at home last night."
      ],
      "answer": 2,
      "explain": "否定：didn't + 原形（不是 studied）",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-EX-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「watch → watched」？",
      "options": [
        "I watched a ghost movie last night.",
        "They were at home last night.",
        "Andy shared his food with his classmates.",
        "My uncle was an English teacher ten years ago."
      ],
      "answer": 0,
      "explain": "watch → watched",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-009",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "規則動詞 stop 的過去式是？",
      "options": [
        "stopping",
        "stoped",
        "stopped",
        "stops"
      ],
      "answer": 2,
      "explain": "短母音＋子音：雙寫子音再 + ed。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-013",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "Was / Were 疑問句的正確語序是？",
      "options": [
        "Did + Was + 主詞…?",
        "Was / Were + 主詞 + …?",
        "Be + Did + 主詞…?",
        "主詞 + Was / Were + …?"
      ],
      "answer": 1,
      "explain": "Be 動詞直接提前。",
      "tags": [
        "be-q"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-011",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "有 didn't 時，後面動詞要用？",
      "options": [
        "現在分詞（V-ing）",
        "過去式（V-ed）",
        "原形動詞（V）",
        "三單現在式（V-s）"
      ],
      "answer": 2,
      "explain": "didn't / Did 後面一律原形。",
      "tags": [
        "did-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-006",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確的疑問句：她昨天打電話給奶奶嗎？",
      "options": [
        "Does Mary call her grandma after lunch yesterday?",
        "Mary did call her grandma after lunch?",
        "Did Mary call her grandma after lunch?",
        "Did Mary called her grandma after lunch?"
      ],
      "answer": 2,
      "explain": "Did + 主詞 + 原形。",
      "tags": [
        "did-q"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-015",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "一般動詞過去式肯定句公式是？",
      "options": [
        "S + was + V-ed + …",
        "S + did + V-ed + …",
        "S + V-ing + …",
        "S + V-ed + …"
      ],
      "answer": 3,
      "explain": "肯定直接用過去式；否定／疑問才用 did。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "you / we / they 的 Be 過去式是？",
      "options": [
        "is",
        "were",
        "was",
        "am"
      ],
      "answer": 1,
      "explain": "you/we/they → were。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-019",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "口訣「過去式有 did，後面動詞要？」",
      "options": [
        "回原形",
        "改成 V-ing",
        "再加 -ed",
        "改成 was／were"
      ],
      "answer": 0,
      "explain": "Did / didn't + 原形 V。",
      "tags": [
        "did-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-WRG-004",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She studyed hard.",
        "I didn't watched TV.",
        "She studied hard.",
        "He were happy yesterday."
      ],
      "answer": 0,
      "explain": "y→i+ed",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-018",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確的疑問句：他們開心嗎？（過去）",
      "options": [
        "They were happy?",
        "Did they were happy?",
        "Was they happy?",
        "Were they happy?"
      ],
      "answer": 3,
      "explain": "they → Were。",
      "tags": [
        "be-q"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-EX-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "哪一句符合說明「規則動詞 share → shared」？",
      "options": [
        "Andy shared his food with his classmates.",
        "I watched a ghost movie last night.",
        "My uncle was an English teacher ten years ago.",
        "They were at home last night."
      ],
      "answer": 0,
      "explain": "規則動詞 share → shared",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-017",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "Be 過去式否定，哪個正確？",
      "options": [
        "He wasn't at school.",
        "He not was at school.",
        "He didn't was at school.",
        "He weren't at school."
      ],
      "answer": 0,
      "explain": "be 的否定用 wasn't／weren't，不用 didn't was。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-GQ-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "她昨天洗了狗嗎？",
      "options": [
        "Did she washed her dog yesterday?",
        "Does she washed her dog yesterday?",
        "He go to school yesterday.",
        "Did she wash her dog yesterday?"
      ],
      "answer": 3,
      "explain": "Did + 原形 wash。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確的句子：他們昨晚在家。",
      "options": [
        "They be at home last night.",
        "They was at home last night.",
        "They are at home last night.",
        "They were at home last night."
      ],
      "answer": 3,
      "explain": "they/we/you → were。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-GQ-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "昨天他很忙。（選正確句）",
      "options": [
        "He go to school yesterday.",
        "He were busy yesterday.",
        "She don't likes apples.",
        "He was busy yesterday."
      ],
      "answer": 3,
      "explain": "He → was。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-014",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確句：我叔叔十年前是英文老師。",
      "options": [
        "My uncle was an English teacher ten years ago.",
        "My uncle be an English teacher ten years ago.",
        "My uncle were an English teacher ten years ago.",
        "My uncle is an English teacher ten years ago."
      ],
      "answer": 0,
      "explain": "uncle（單數）→ was。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-001",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確的句子：昨天他很忙。",
      "options": [
        "He is busy yesterday.",
        "He was busy yesterday.",
        "He be busy yesterday.",
        "He were busy yesterday."
      ],
      "answer": 1,
      "explain": "he/she/it → was。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-012",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出錯誤的句子：",
      "options": [
        "I didn't watch TV.",
        "He was busy yesterday.",
        "Did she wash her dog?",
        "I didn't watched TV."
      ],
      "answer": 3,
      "explain": "didn't 後不可再用 watched。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-008",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "規則動詞 study 的過去式是？",
      "options": [
        "studies",
        "studying",
        "studyed",
        "studied"
      ],
      "answer": 3,
      "explain": "子音 + y → y 改 i 再 + ed。",
      "tags": [
        "ved"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-021",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出正確句：她昨天洗了狗嗎？",
      "options": [
        "She did washed her dog yesterday?",
        "Did she washed her dog yesterday?",
        "Does she wash her dog yesterday?",
        "Did she wash her dog yesterday?"
      ],
      "answer": 3,
      "explain": "Did + 原形 wash。",
      "tags": [
        "did-q"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-003",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "I / she / it 的 Be 過去式是？",
      "options": [
        "is",
        "were",
        "are",
        "was"
      ],
      "answer": 3,
      "explain": "I/he/she/it → was；you/we/they → were。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-022",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "Be 過去式肯定：主詞複數用？",
      "options": [
        "been",
        "were",
        "was",
        "is"
      ],
      "answer": 1,
      "explain": "you/we/they → were。",
      "tags": [
        "be-past"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TRP-002",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't watched TV.",
        "He were happy yesterday.",
        "I didn't watch TV.",
        "Did she cooked dinner?"
      ],
      "answer": 2,
      "explain": "有 didn't 就用原形",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L1-TPL-023",
      "lesson": "Lesson 1",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "He were happy yesterday.",
        "He was happy yesterday.",
        "They were happy yesterday.",
        "I was busy yesterday."
      ],
      "answer": 0,
      "explain": "He → was。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    }
  ],
  "Lesson 2": [
    {
      "id": "L2-GQ-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "她為什麼沒跟我們逛街？",
      "options": [
        "Why Sue don't went shopping with us?",
        "Why didn't Sue go shopping with us?",
        "Why Sue didn't went shopping with us?",
        "He go to school yesterday."
      ],
      "answer": 1,
      "explain": "Why + didn't + 原形 go。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-GQ-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "我昨天去看籃球比賽。",
      "options": [
        "He go to school yesterday.",
        "I goed to the basketball game yesterday.",
        "She don't likes apples.",
        "I went to the basketball game yesterday."
      ],
      "answer": 3,
      "explain": "go → went。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TRP-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He was scared because he watched a movie.",
        "I didn't went to the game.",
        "Why he cry?",
        "He was scared because watched a movie."
      ],
      "answer": 0,
      "explain": "because 後面要完整子句（含主詞）",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-006",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「because = 因為」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "John was scared because he watched a ghost movie.",
        "She got 50 points on the test.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 1,
      "explain": "because = 因為",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-005",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「so = 所以」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago.",
        "The weather was nice, so they walked the dog.",
        "She got 50 points on the test."
      ],
      "answer": 2,
      "explain": "so = 所以",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "get 的過去式是？",
      "options": [
        "getted",
        "got",
        "gotten",
        "getting"
      ],
      "answer": 1,
      "explain": "get → got。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-009",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "表「因為」用哪個？",
      "options": [
        "so",
        "or",
        "because",
        "but"
      ],
      "answer": 2,
      "explain": "because = 因為；so = 所以。",
      "tags": [
        "because-so"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TRP-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't went to the game.",
        "Why he cry?",
        "I didn't go to the game.",
        "Because so I was tired."
      ],
      "answer": 2,
      "explain": "didn't + 原形",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "go 的過去式是？",
      "options": [
        "going",
        "goed",
        "went",
        "goes"
      ],
      "answer": 2,
      "explain": "不規則：go → went。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-014",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出正確句：他很害怕，因為他看了電影。",
      "options": [
        "He was scared because he watch a movie.",
        "He was scared so he watched a movie.（若語意是「因為」）",
        "He was scared because watched a movie.",
        "He was scared because he watched a movie."
      ],
      "answer": 3,
      "explain": "because 後要有主詞 he。",
      "tags": [
        "because-so"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-011",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出正確句：天氣很好，所以他們去公園。",
      "options": [
        "The weather was nice, so they walk the dog in the park.",
        "The weather was nice, so they walked the dog in the park.",
        "The weather was nice, because so they walked the dog.",
        "The weather was nice because they walked the dog in the park."
      ],
      "answer": 1,
      "explain": "「所以」用 so；後面也要用過去式。",
      "tags": [
        "because-so"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「規則 visit → visited」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "Karen visited her grandparents two days ago.",
        "She got 50 points on the test.",
        "Why didn't Sue go shopping with us?"
      ],
      "answer": 1,
      "explain": "規則 visit → visited",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-020",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "make 的過去式是？",
      "options": [
        "made",
        "maked",
        "makes",
        "making"
      ],
      "answer": 0,
      "explain": "make → made。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-019",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "come 的過去式是？",
      "options": [
        "came",
        "comeed",
        "comed",
        "coming"
      ],
      "answer": 0,
      "explain": "come → came。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-GQ-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "天氣很好，所以他們去公園遛狗。",
      "options": [
        "The weather was nice because they walked the dog in the park.",
        "The weather was nice, so they walked the dog in the park.",
        "The weather were nice because they walked the dog in the park.",
        "He go to school yesterday."
      ],
      "answer": 1,
      "explain": "「所以」用 so；because 是「因為」。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「Why + didn't + 原形」？",
      "options": [
        "Why didn't Sue go shopping with us?",
        "Karen visited her grandparents two days ago.",
        "She got 50 points on the test.",
        "Jesse had a bad day yesterday."
      ],
      "answer": 0,
      "explain": "Why + didn't + 原形",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「get → got」？",
      "options": [
        "Why didn't Sue go shopping with us?",
        "Jesse had a bad day yesterday.",
        "She got 50 points on the test.",
        "Karen visited her grandparents two days ago."
      ],
      "answer": 2,
      "explain": "get → got",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-WRG-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Why he cry?",
        "Because so I was tired.",
        "I didn't went to the game.",
        "I was tired, so I went to bed."
      ],
      "answer": 1,
      "explain": "because 與 so 不要疊用",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "have 的過去式是？",
      "options": [
        "haved",
        "having",
        "had",
        "has"
      ],
      "answer": 2,
      "explain": "have → had。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-010",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "表「所以」用哪個？",
      "options": [
        "because",
        "or",
        "so",
        "why"
      ],
      "answer": 2,
      "explain": "so 接結果子句。",
      "tags": [
        "because-so"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-WRG-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Why is he crying?",
        "I didn't went to the game.",
        "Because so I was tired.",
        "Why he cry?"
      ],
      "answer": 3,
      "explain": "Why 後面要有動詞變化",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-005",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出正確句：我昨天去看籃球比賽。",
      "options": [
        "I going to the basketball game yesterday.",
        "I went to the basketball game yesterday.",
        "I goed to the basketball game yesterday.",
        "I go to the basketball game yesterday."
      ],
      "answer": 1,
      "explain": "go → went。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-016",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "不規則動詞肯定句公式？",
      "options": [
        "S + did + 過去式",
        "S + was + 過去式（一般動詞）",
        "S + to + 過去式",
        "S + 過去式（went / had / saw…）"
      ],
      "answer": 3,
      "explain": "肯定直接用過去式。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-017",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "Did you go to the park?",
        "I didn't go to the park.",
        "I didn't went to the park.",
        "I went to the park."
      ],
      "answer": 2,
      "explain": "didn't 後用 go，不是 went。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TRP-002",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't went to the game.",
        "Because so I was tired.",
        "Why is he crying?",
        "Why he cry?"
      ],
      "answer": 2,
      "explain": "Why 後面要有動詞變化",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-EX-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "哪一句符合說明「have → had」？",
      "options": [
        "Jesse had a bad day yesterday.",
        "She got 50 points on the test.",
        "Karen visited her grandparents two days ago.",
        "Why didn't Sue go shopping with us?"
      ],
      "answer": 0,
      "explain": "have → had",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-013",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出錯誤用法：",
      "options": [
        "Why did he cry?",
        "I went to bed because I was tired.",
        "Because so I was tired.",
        "I was tired, so I went to bed."
      ],
      "answer": 2,
      "explain": "because 與 so 不要疊用。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-007",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "「為什麼」開頭的正確語序？",
      "options": [
        "Why + 助動詞 + 主詞 + 動詞…?",
        "Why + 動詞 + 主詞…?",
        "Why + 主詞 + 助動詞 + 動詞…?",
        "Why to + 主詞 + 動詞…?"
      ],
      "answer": 0,
      "explain": "Why did she leave?／Why was he late?",
      "tags": [
        "why"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-012",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "because 後面要接？",
      "options": [
        "只有動詞",
        "完整子句（含主詞＋動詞）",
        "只有名詞",
        "to + V"
      ],
      "answer": 1,
      "explain": "because he was tired（不是 because tired）。",
      "tags": [
        "because-so"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-018",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "take 的過去式是？",
      "options": [
        "took",
        "taking",
        "taken",
        "taked"
      ],
      "answer": 0,
      "explain": "take → took。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-015",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出正確疑問：他為什麼哭？",
      "options": [
        "Why he crying?",
        "Why is he crying? / Why did he cry?",
        "Why did he cried?",
        "Why he cry?"
      ],
      "answer": 1,
      "explain": "Why 後面要有助動詞／be。",
      "tags": [
        "why"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-008",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "選出正確句：她為什麼沒跟我們逛街？",
      "options": [
        "Why didn't Sue go shopping with us?",
        "Why Sue don't go shopping with us?",
        "Why didn't Sue went shopping with us?",
        "Why Sue didn't went shopping with us?"
      ],
      "answer": 0,
      "explain": "Why + didn't + 原形 go。",
      "tags": [
        "why"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-WRG-004",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Why he cry?",
        "I didn't went to the game.",
        "He was scared because watched a movie.",
        "He was scared because he watched a movie."
      ],
      "answer": 2,
      "explain": "because 後面要完整子句（含主詞）",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "see 的過去式是？",
      "options": [
        "seen",
        "saw",
        "seed",
        "seeing"
      ],
      "answer": 1,
      "explain": "see → saw（過去分詞才是 seen）。",
      "tags": [
        "irregular"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TRP-003",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I didn't went to the game.",
        "Why he cry?",
        "Because so I was tired.",
        "I was tired, so I went to bed."
      ],
      "answer": 3,
      "explain": "because 與 so 不要疊用",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-TPL-006",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "不規則動詞的否定，哪個正確？",
      "options": [
        "I don't went shopping.",
        "I didn't go shopping.",
        "I not go shopping yesterday.",
        "I didn't went shopping."
      ],
      "answer": 1,
      "explain": "即使是不規則，否定仍 didn't + 原形。",
      "tags": [
        "did-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L2-WRG-001",
      "lesson": "Lesson 2",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I didn't go to the game.",
        "Because so I was tired.",
        "I didn't went to the game.",
        "Why he cry?"
      ],
      "answer": 2,
      "explain": "didn't + 原形",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    }
  ],
  "Lesson 3": [
    {
      "id": "L3-EX-005",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「過去進行 + before」？",
      "options": [
        "Before the boy went out, his father came back.",
        "I was talking on it with Jack before lunch.",
        "Some students were climbing a tree when we passed by.",
        "What were you doing at seven last night?"
      ],
      "answer": 1,
      "explain": "過去進行 + before",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-010",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：她喝完熱茶之後吃了麵包。",
      "options": [
        "Before she drank a cup of hot tea, she ate some bread.",
        "After she drank a cup of hot tea, she eat some bread.",
        "After she drank a cup of hot tea, she ate some bread.",
        "After she drink a cup of hot tea, she ate some bread."
      ],
      "answer": 2,
      "explain": "先喝再吃 → After；子句也用過去式。",
      "tags": [
        "before-after"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-015",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "After she drank tea, she ate bread.",
        "Before she went out, he came back.",
        "I was talking before lunch.",
        "After she drink tea, she ate bread."
      ],
      "answer": 3,
      "explain": "時間子句要用過去式 drank。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-EX-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「正在爬／我們經過」？",
      "options": [
        "After she drank a cup of tea, she ate some bread.",
        "What were you doing at seven last night?",
        "Some students were climbing a tree when we passed by.",
        "Before the boy went out, his father came back."
      ],
      "answer": 2,
      "explain": "正在爬／我們經過",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-GQ-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "她喝完熱茶之後吃了麵包。",
      "options": [
        "She don't likes apples.",
        "He go to school yesterday.",
        "After she drank a cup of hot tea, she ate some bread.",
        "Before she drank a cup of hot tea, she ate some bread."
      ],
      "answer": 2,
      "explain": "先喝再吃 → After。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TRP-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "They was dancing.",
        "I was talk on the phone.",
        "After she drink tea, she ate bread.",
        "After she drank tea, she ate bread."
      ],
      "answer": 3,
      "explain": "時間子句也要過去式",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-GQ-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "我們經過時，有些學生正在爬樹。",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "He go to school yesterday.",
        "Some students climbed a tree when we were pass by.",
        "Some students climbed a tree when we was pass by."
      ],
      "answer": 0,
      "explain": "正在爬 = were climbing；經過 = passed。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-WRG-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "When I was arrive, he left.",
        "I was talk on the phone.",
        "When I arrived, he left.",
        "They was dancing."
      ],
      "answer": 0,
      "explain": "when 子句常用過去式",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-006",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "while 子句常接？",
      "options": [
        "只有現在完成",
        "過去進行（較長、正在進行）",
        "只有未來式",
        "只有原形動詞"
      ],
      "answer": 1,
      "explain": "while + was/were + V-ing。",
      "tags": [
        "while"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-014",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確疑問：那時他們在唱歌嗎？",
      "options": [
        "Was they singing?",
        "Did they singing?",
        "Were they singing?",
        "They were singing?"
      ],
      "answer": 2,
      "explain": "Were + 主詞 + V-ing。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-WRG-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "They was dancing.",
        "After she drink tea, she ate bread.",
        "I was talk on the phone.",
        "After she drank tea, she ate bread."
      ],
      "answer": 1,
      "explain": "時間子句也要過去式",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-WRG-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "They were dancing.",
        "They was dancing.",
        "When I was arrive, he left.",
        "I was talk on the phone."
      ],
      "answer": 1,
      "explain": "they → were",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-007",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：我們經過時，有些學生正在爬樹。",
      "options": [
        "Some students were climb a tree when we passed by.",
        "Some students were climbing a tree when we passed by.",
        "Some students climbed a tree when we were pass by.",
        "Some students was climbing a tree when we passed by."
      ],
      "answer": 1,
      "explain": "正在爬 = were climbing；經過 = passed。",
      "tags": [
        "when"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-008",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "Before 的意思是？",
      "options": [
        "在…之後",
        "因為",
        "當…的時候",
        "在…之前"
      ],
      "answer": 3,
      "explain": "before = 之前；after = 之後。",
      "tags": [
        "before-after"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-017",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：午餐前我和 Jack 正在講電話。",
      "options": [
        "I was talking on it with Jack before lunch.",
        "I were talking on it with Jack before lunch.",
        "I was talk on it with Jack before lunch.",
        "I talking on it with Jack before lunch."
      ],
      "answer": 0,
      "explain": "was + talking。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-016",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "口訣：正在做用？打斷它的那下常用？",
      "options": [
        "did；because + 名詞",
        "to V；after + 未來",
        "-ed；while + 原形",
        "-ing；when + 過去式"
      ],
      "answer": 3,
      "explain": "過去進行 + when + 過去式很常見。",
      "tags": [
        "when"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TRP-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "When I arrived, he left.",
        "I was talk on the phone.",
        "They was dancing.",
        "When I was arrive, he left."
      ],
      "answer": 0,
      "explain": "when 子句常用過去式",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-EX-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「before：較早的事先說」？",
      "options": [
        "What were you doing at seven last night?",
        "Some students were climbing a tree when we passed by.",
        "After she drank a cup of tea, she ate some bread.",
        "Before the boy went out, his father came back."
      ],
      "answer": 3,
      "explain": "before：較早的事先說",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-018",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：他們在花園裡又唱又跳。",
      "options": [
        "They was singing and dancing in the garden.",
        "They were sing and dance in the garden.",
        "They were singing and dancing in the garden.",
        "They singing and dancing in the garden."
      ],
      "answer": 2,
      "explain": "were + V-ing。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-WRG-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I was talk on the phone.",
        "When I was arrive, he left.",
        "I was talking on the phone.",
        "They was dancing."
      ],
      "answer": 0,
      "explain": "要 V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-020",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "They were dancing.",
        "They was dancing.",
        "She was climbing.",
        "We were talking."
      ],
      "answer": 1,
      "explain": "they → were。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-011",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：男孩出門前，爸爸回來了。",
      "options": [
        "Before the boy went out, his father come back.",
        "Before the boy go out, his father came back.",
        "After the boy went out, his father came back.（若語意是「出門前」）",
        "Before the boy went out, his father came back."
      ],
      "answer": 3,
      "explain": "before + 過去式。",
      "tags": [
        "before-after"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "過去進行式公式是？",
      "options": [
        "S + was / were + V-ed",
        "S + was / were + V-ing",
        "S + V-ing + was",
        "S + did + V-ing"
      ],
      "answer": 1,
      "explain": "be 的過去＋現在分詞。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-009",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "After 的意思是？",
      "options": [
        "在…之前",
        "雖然",
        "在…之後",
        "所以"
      ],
      "answer": 2,
      "explain": "after = 之後。",
      "tags": [
        "before-after"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-019",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "When I ______, he left.（我到達時）",
      "options": [
        "am arrived",
        "arrived",
        "was arrive",
        "arriving"
      ],
      "answer": 1,
      "explain": "when 子句常用過去式 arrived。",
      "tags": [
        "when"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-EX-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「after：先喝茶再吃麵包」？",
      "options": [
        "After she drank a cup of tea, she ate some bread.",
        "Before the boy went out, his father came back.",
        "Some students were climbing a tree when we passed by.",
        "What were you doing at seven last night?"
      ],
      "answer": 0,
      "explain": "after：先喝茶再吃麵包",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-012",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "They were singing in the garden.",
        "I was talking on the phone.",
        "I was talk on the phone.",
        "What were you doing?"
      ],
      "answer": 2,
      "explain": "要 V-ing：talking。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-EX-006",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「were + V-ing」？",
      "options": [
        "Some students were climbing a tree when we passed by.",
        "Before the boy went out, his father came back.",
        "They were singing and dancing in the garden.",
        "What were you doing at seven last night?"
      ],
      "answer": 2,
      "explain": "were + V-ing",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-EX-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "哪一句符合說明「問那時正在做什麼」？",
      "options": [
        "After she drank a cup of tea, she ate some bread.",
        "Before the boy went out, his father came back.",
        "What were you doing at seven last night?",
        "Some students were climbing a tree when we passed by."
      ],
      "answer": 2,
      "explain": "問那時正在做什麼",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-013",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "過去進行否定，哪個正確？",
      "options": [
        "She didn't was sleeping.",
        "She wasn't sleeping.",
        "She not was sleeping.",
        "She weren't sleeping."
      ],
      "answer": 1,
      "explain": "wasn't / weren't + V-ing。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TRP-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "They were dancing.",
        "They was dancing.",
        "I was talk on the phone.",
        "When I was arrive, he left."
      ],
      "answer": 0,
      "explain": "they → were",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TRP-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I was talk on the phone.",
        "When I was arrive, he left.",
        "I was talking on the phone.",
        "They was dancing."
      ],
      "answer": 2,
      "explain": "要 V-ing",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-004",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：昨晚七點你在做什麼？",
      "options": [
        "What was you doing at seven last night?",
        "What you were doing at seven last night?",
        "What did you doing at seven last night?",
        "What were you doing at seven last night?"
      ],
      "answer": 3,
      "explain": "What + were + you + doing…",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-003",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：他們那時正在跳舞。",
      "options": [
        "They was dancing.",
        "They dancing.",
        "They were dancing.",
        "They were dance."
      ],
      "answer": 2,
      "explain": "they → were + V-ing。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-005",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "when 子句常接哪種時態（突然插入的事）？",
      "options": [
        "現在簡單式",
        "過去進行式為主",
        "過去式",
        "未來式"
      ],
      "answer": 2,
      "explain": "when 常接較短／突然的過去式。",
      "tags": [
        "when"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-TPL-002",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "選出正確句：我那時正在講電話。",
      "options": [
        "I was talking on the phone.",
        "I were talking on the phone.",
        "I talking on the phone.",
        "I was talk on the phone."
      ],
      "answer": 0,
      "explain": "was + talking。",
      "tags": [
        "past-continuous"
      ],
      "source": "grammar"
    },
    {
      "id": "L3-GQ-001",
      "lesson": "Lesson 3",
      "type": "grammar",
      "stem": "昨晚七點你在做什麼？",
      "options": [
        "She don't likes apples.",
        "What did you doing at seven last night?",
        "What were you doing at seven last night?",
        "He go to school yesterday."
      ],
      "answer": 2,
      "explain": "過去進行：were + doing。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    }
  ],
  "Lesson 4": [
    {
      "id": "L4-TPL-005",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "虛主詞句型「做…很…」常用？",
      "options": [
        "It are + adj. + to V",
        "Is it + V-ing + adj.",
        "There is + adj. + to V",
        "It is + adj. + to V …"
      ],
      "answer": 3,
      "explain": "It is fun to travel…",
      "tags": [
        "it-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-006",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：到別的國家旅行和工作很有趣。",
      "options": [
        "Is fun to travel and work in another country.",
        "It is fun traveling and work in another country.（較不完整／不一致）",
        "It are fun to travel and work in another country.",
        "It is fun to travel and work in another country."
      ],
      "answer": 3,
      "explain": "It is + adj. + to V。",
      "tags": [
        "it-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「practice 後常接 V-ing（祈使也可接名詞）」？",
      "options": [
        "Judy loves going surfing on weekends.",
        "Why not make a plan and prepare for it?",
        "Practice English with your teacher every day.",
        "I want to speak English like you."
      ],
      "answer": 2,
      "explain": "practice 後常接 V-ing（祈使也可接名詞）",
      "tags": [
        "example"
      ],
      "source": "grammar"
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
      "source": "grammar"
    },
    {
      "id": "L4-TRP-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She enjoys to surf.",
        "Is fun to travel.",
        "I want going to Japan.",
        "I want to go to Japan."
      ],
      "answer": 3,
      "explain": "want + to V",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-GQ-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "Judy 週末喜歡去衝浪。",
      "options": [
        "Judy loves go surfing on weekends.",
        "Judy loves going surfing on weekends.",
        "He go to school yesterday.",
        "She don't likes apples."
      ],
      "answer": 1,
      "explain": "loves + V-ing。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-WRG-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I finished doing my homework.",
        "She enjoys to surf.",
        "I finished to do my homework.",
        "I want going to Japan."
      ],
      "answer": 2,
      "explain": "finish + V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-WRG-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She enjoys surfing.",
        "Is fun to travel.",
        "I want going to Japan.",
        "She enjoys to surf."
      ],
      "answer": 3,
      "explain": "enjoy + V-ing",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「Why not + 原形」？",
      "options": [
        "I want to speak English like you.",
        "Why not make a plan and prepare for it?",
        "Practice English with your teacher every day.",
        "Judy loves going surfing on weekends."
      ],
      "answer": 1,
      "explain": "Why not + 原形",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-007",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "Why not 後面接？",
      "options": [
        "V-ed",
        "原形動詞",
        "to V",
        "V-ing"
      ],
      "answer": 1,
      "explain": "Why not make a plan…?",
      "tags": [
        "why-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：Judy 週末喜歡去衝浪。",
      "options": [
        "Judy love going surfing on weekends.",
        "Judy loves to going surfing on weekends.",
        "Judy loves go surfing on weekends.",
        "Judy loves going surfing on weekends."
      ],
      "answer": 3,
      "explain": "love + V-ing（或 to V）；第三人稱 loves。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-014",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：他過得很開心。",
      "options": [
        "He enjoying his life.",
        "He enjoyed to his life.",
        "He enjoy his life yesterday.",
        "He enjoyed his life."
      ],
      "answer": 3,
      "explain": "enjoy + 名詞；過去式 enjoyed。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-WRG-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I want going to Japan.",
        "She enjoys to surf.",
        "Is fun to travel.",
        "I want to go to Japan."
      ],
      "answer": 0,
      "explain": "want + to V",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-009",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "I want speaking English like you.",
        "He needs to study.",
        "I want to speak English like you.",
        "She decided to leave."
      ],
      "answer": 0,
      "explain": "want 後用 to V。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TRP-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I want going to Japan.",
        "Is fun to travel.",
        "She enjoys surfing.",
        "She enjoys to surf."
      ],
      "answer": 2,
      "explain": "enjoy + V-ing",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-017",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "He finished ______ the book.",
      "options": [
        "to read",
        "readed",
        "reads",
        "reading"
      ],
      "answer": 3,
      "explain": "finish + V-ing。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-018",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "They gave up ______ candy.",
      "options": [
        "to eat",
        "eating",
        "ate",
        "eats"
      ],
      "answer": 1,
      "explain": "give up + V-ing。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "want / plan / decide / need 後面通常接？",
      "options": [
        "V-ing（為唯一正確）",
        "原形且不加 to",
        "V-ed",
        "to V"
      ],
      "answer": 3,
      "explain": "want to go；decide to leave。",
      "tags": [
        "to-v"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「want + to V」？",
      "options": [
        "Judy loves going surfing on weekends.",
        "Why not make a plan and prepare for it?",
        "Practice English with your teacher every day.",
        "I want to speak English like you."
      ],
      "answer": 3,
      "explain": "want + to V",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-010",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "Judy loves going surfing on weekends.",
        "He enjoys swimming.",
        "They finished doing homework.",
        "Judy loves go surfing on weekends."
      ],
      "answer": 3,
      "explain": "loves 後不可直接 go，要用 going／to go。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-006",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「It is adj. to V」？",
      "options": [
        "I want to speak English like you.",
        "Judy loves going surfing on weekends.",
        "Practice English with your teacher every day.",
        "It is fun to travel and work in another country."
      ],
      "answer": 3,
      "explain": "It is adj. to V",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-016",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "She decided ______ the truth.",
      "options": [
        "telling",
        "to tell",
        "tell",
        "told"
      ],
      "answer": 1,
      "explain": "decide + to V。",
      "tags": [
        "to-v"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TRP-004",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I finished doing my homework.",
        "I want going to Japan.",
        "I finished to do my homework.",
        "She enjoys to surf."
      ],
      "answer": 0,
      "explain": "finish + V-ing",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「love + V-ing」？",
      "options": [
        "Why not make a plan and prepare for it?",
        "Judy loves going surfing on weekends.",
        "I want to speak English like you.",
        "Practice English with your teacher every day."
      ],
      "answer": 1,
      "explain": "love + V-ing",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-013",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "like / love / hate 後面？",
      "options": [
        "只能接 was",
        "不能接動詞",
        "只能接 V-ed",
        "to V 或 V-ing 多半都可以"
      ],
      "answer": 3,
      "explain": "like to swim／like swimming 常可互通。",
      "tags": [
        "to-v",
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-008",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：何不訂個計畫並準備？",
      "options": [
        "Why not make a plan and prepare for it?",
        "Why not making a plan and prepare for it?",
        "Why not made a plan and prepare for it?",
        "Why not to make a plan and prepare for it?"
      ],
      "answer": 0,
      "explain": "Why not + 原形。",
      "tags": [
        "why-not"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-019",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "I need ______ harder.",
      "options": [
        "to study",
        "studying（此句較不自然為唯一正解）",
        "studied",
        "studyed"
      ],
      "answer": 0,
      "explain": "need + to V。",
      "tags": [
        "to-v"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-011",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "practice 後面常見接法？",
      "options": [
        "practice + did",
        "practice + V-ing / 名詞",
        "practice + to V（唯一）",
        "practice + V-ed"
      ],
      "answer": 1,
      "explain": "practice speaking／practice English。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-EX-005",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "哪一句符合說明「enjoy + 名詞；enjoy + V-ing 也常見」？",
      "options": [
        "Practice English with your teacher every day.",
        "He enjoyed his life.",
        "I want to speak English like you.",
        "Judy loves going surfing on weekends."
      ],
      "answer": 1,
      "explain": "enjoy + 名詞；enjoy + V-ing 也常見",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：我想要說英文像你一樣。",
      "options": [
        "I want speak English like you.",
        "I want to speaking English like you.",
        "I want to speak English like you.",
        "I want speaking English like you."
      ],
      "answer": 2,
      "explain": "want + to V。",
      "tags": [
        "to-v"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-012",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出正確句：每天跟老師練習英文。",
      "options": [
        "Practice English with your teacher every day.",
        "Practice to English with your teacher every day.",
        "Practicing to English with your teacher every day.",
        "Practiced English with your teacher every day.（若為祈使）"
      ],
      "answer": 0,
      "explain": "祈使句用原形 Practice。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-020",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "It is important to sleep well.",
        "It is easy to ride a bike.",
        "It are hard to learn English.",
        "It is hard to learn English."
      ],
      "answer": 2,
      "explain": "It is，不是 It are。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-002",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "enjoy / finish / practice / give up 後面通常接？",
      "options": [
        "V-ing",
        "to V（為唯一正確）",
        "was + V",
        "V-ed"
      ],
      "answer": 0,
      "explain": "enjoy swimming；finish doing。",
      "tags": [
        "ving"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-GQ-001",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "我想說英文像你一樣。",
      "options": [
        "I want speaking English like you.",
        "I want to speak English like you.",
        "She don't likes apples.",
        "He go to school yesterday."
      ],
      "answer": 1,
      "explain": "want + to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-TPL-015",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "It is important ______ early.",
      "options": [
        "get uped",
        "got up",
        "getting up to",
        "to get up"
      ],
      "answer": 3,
      "explain": "It is adj. + to V。",
      "tags": [
        "it-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-WRG-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "Is fun to travel.",
        "I want going to Japan.",
        "It is fun to travel.",
        "She enjoys to surf."
      ],
      "answer": 0,
      "explain": "記得虛主詞 It",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L4-GQ-003",
      "lesson": "Lesson 4",
      "type": "grammar",
      "stem": "在別的國家旅行又工作很酷。",
      "options": [
        "It is cool to travel and work in a different country.",
        "Is cool travel and work in a different country.",
        "He go to school yesterday.",
        "She don't likes apples."
      ],
      "answer": 0,
      "explain": "It is adj. to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    }
  ],
  "Lesson 5": [
    {
      "id": "L5-EX-005",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「人 + spend + 時間 + V-ing」？",
      "options": [
        "I spent two hours shopping in the mall.",
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea.",
        "The girl paid 8 dollars and 40 cents for the chocolates."
      ],
      "answer": 0,
      "explain": "人 + spend + 時間 + V-ing",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-010",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "She is taller than her sister.",
        "This is the biggest apple.",
        "He is as kind as his father.",
        "She is more taller than her sister."
      ],
      "answer": 3,
      "explain": "不要 more + taller 雙重比較。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-WRG-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I paid the book NT$100.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book.",
        "The book cost me NT$100."
      ],
      "answer": 2,
      "explain": "人不用 cost 當「花費」主詞",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-WRG-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I paid NT$100 for the book.",
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book.",
        "I paid the book NT$100."
      ],
      "answer": 3,
      "explain": "pay + 錢 + for + 物",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-017",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "little（少）的比較級是？",
      "options": [
        "least（比較級）",
        "littler",
        "fewer（不可數 little 的對應須分清）",
        "less"
      ],
      "answer": 3,
      "explain": "little → less → least（不可數）。",
      "tags": [
        "irregular-adj"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-008",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "good 的比較級／最高級是？",
      "options": [
        "more good / most good",
        "weller / wellest",
        "better / best",
        "gooder / goodest"
      ],
      "answer": 2,
      "explain": "不規則：good → better → best。",
      "tags": [
        "irregular-adj"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-019",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "far 的比較級常見寫法？",
      "options": [
        "farrer",
        "farther / further",
        "farest（比較級）",
        "more far"
      ],
      "answer": 1,
      "explain": "farther／further 皆可見。",
      "tags": [
        "irregular-adj"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-013",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出正確句：他和哥哥一樣高。",
      "options": [
        "He is as tall as his brother.",
        "He is tall as his brother.",
        "He is as taller as his brother.",
        "He is so tall as his brother.（美式較少用於肯定）"
      ],
      "answer": 0,
      "explain": "as + 原級 + as。",
      "tags": [
        "as-as"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-GQ-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "她為兩包巧克力付了 8.4 美元。",
      "options": [
        "He go to school yesterday.",
        "She paid $8.40 for the two bags of chocolates.",
        "She spent $8.40 for the two bags of chocolates.",
        "She don't likes apples."
      ],
      "answer": 1,
      "explain": "pay + 錢 + for；spend 搭配 on 較常見。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-EX-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「It takes + 時間 + to V」？",
      "options": [
        "How long does it take to get to your school by bus?",
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea.",
        "The girl paid 8 dollars and 40 cents for the chocolates."
      ],
      "answer": 2,
      "explain": "It takes + 時間 + to V",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-WRG-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "She spent NT$100 on the bag.",
        "It spends 10 minutes to get there.",
        "She spent NT$100 to the bag.",
        "I cost NT$100 for the book."
      ],
      "answer": 2,
      "explain": "spend … on",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-006",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出正確句：Tom 比我高。",
      "options": [
        "Tom is as taller as me.",
        "Tom is taller than I am. / Tom is taller than me.",
        "Tom is tallest than me.",
        "Tom is more taller than me."
      ],
      "answer": 1,
      "explain": "比較級 taller than，不要再加 more。",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-014",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "最高級前面常加？",
      "options": [
        "the",
        "than",
        "a",
        "an"
      ],
      "answer": 0,
      "explain": "the best／the tallest。",
      "tags": [
        "superlative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TRP-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "She spent NT$100 on the bag.",
        "I cost NT$100 for the book.",
        "She spent NT$100 to the bag.",
        "It spends 10 minutes to get there."
      ],
      "answer": 0,
      "explain": "spend … on",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-WRG-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "It spends 10 minutes to get there.",
        "I cost NT$100 for the book.",
        "I paid the book NT$100.",
        "It takes 10 minutes to get there."
      ],
      "answer": 0,
      "explain": "花時間用 take",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-009",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "bad 的比較級／最高級是？",
      "options": [
        "worser / worstest",
        "more bad / most bad",
        "worse / worst",
        "badder / baddest"
      ],
      "answer": 2,
      "explain": "bad → worse → worst。",
      "tags": [
        "irregular-adj"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-GQ-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "買杯冰紅茶只要幾分鐘。",
      "options": [
        "He go to school yesterday.",
        "She don't likes apples.",
        "It only spends a few minutes to buy an iced black tea.",
        "It only takes a few minutes to buy an iced black tea."
      ],
      "answer": 3,
      "explain": "It takes + 時間 + to V。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "長形容詞比較級常用？",
      "options": [
        "as more adj.",
        "more + adj. + than",
        "the most + adj. + than",
        "adj. + -er + than（長形容詞）"
      ],
      "answer": 1,
      "explain": "more interesting than…",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "比較級短形容詞常見變化？",
      "options": [
        "more + adj. + -est",
        "adj. + -est + than",
        "as + adj.",
        "adj. + -er (+ than)"
      ],
      "answer": 3,
      "explain": "taller than；bigger than。",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-EX-006",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「標價／應付金額口語」？",
      "options": [
        "It only takes a few minutes to buy an iced black tea.",
        "That's NT$750.",
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "My new phone case cost me about NT$2,000."
      ],
      "answer": 1,
      "explain": "標價／應付金額口語",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TRP-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "It spends 10 minutes to get there.",
        "I paid NT$100 for the book.",
        "I paid the book NT$100.",
        "I cost NT$100 for the book."
      ],
      "answer": 1,
      "explain": "pay + 錢 + for + 物",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-EX-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「問花多久」？",
      "options": [
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea.",
        "How long does it take to get to your school by bus?",
        "The girl paid 8 dollars and 40 cents for the chocolates."
      ],
      "answer": 2,
      "explain": "問花多久",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-GQ-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "這個手機殼花了我大約兩千元。",
      "options": [
        "My new phone case cost me about NT$2,000.",
        "I cost about NT$2,000 my new phone case.",
        "She don't likes apples.",
        "He go to school yesterday."
      ],
      "answer": 0,
      "explain": "物 + cost + 人 + 錢。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-EX-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「pay + 錢 + for」？",
      "options": [
        "My new phone case cost me about NT$2,000.",
        "How long does it take to get to your school by bus?",
        "It only takes a few minutes to buy an iced black tea.",
        "The girl paid 8 dollars and 40 cents for the chocolates."
      ],
      "answer": 3,
      "explain": "pay + 錢 + for",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-018",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "He is the tallest boy.",
        "This is the worst day.",
        "He is the most tallest boy.",
        "She is better than before."
      ],
      "answer": 2,
      "explain": "不要 most + tallest。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TRP-001",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I paid the book NT$100.",
        "The book cost me NT$100.",
        "I cost NT$100 for the book.",
        "It spends 10 minutes to get there."
      ],
      "answer": 1,
      "explain": "人不用 cost 當「花費」主詞",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-011",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "big 的比較級是？",
      "options": [
        "biger",
        "bigger",
        "biggest（比較級）",
        "more big"
      ],
      "answer": 1,
      "explain": "短母音＋子音雙寫：bigger。",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-012",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "happy 的比較級是？",
      "options": [
        "happyier",
        "happyer",
        "more happier",
        "happier"
      ],
      "answer": 3,
      "explain": "y → i + er。",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-015",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出正確句：這是三者中最便宜的。",
      "options": [
        "This is cheaper of the three.",
        "This is the cheapest of the three.",
        "This is cheapest than the three.",
        "This is the most cheap of the three."
      ],
      "answer": 1,
      "explain": "三者以上用最高級 + the。",
      "tags": [
        "superlative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-005",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "同等比較用？",
      "options": [
        "more + adj. + as",
        "as + adj. + as",
        "adj. + than + as",
        "the + adj. + as"
      ],
      "answer": 1,
      "explain": "as tall as。",
      "tags": [
        "as-as"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-007",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出正確句：這是最有趣的書。",
      "options": [
        "This is most interesting book.",
        "This is the most interesting book.",
        "This is the interestinger book.",
        "This is the more interesting book."
      ],
      "answer": 1,
      "explain": "長形容詞：the most + adj。",
      "tags": [
        "superlative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "最高級短形容詞常見變化？",
      "options": [
        "adj. + -er",
        "more + adj. + than",
        "the + adj. + -est",
        "as adj. as"
      ],
      "answer": 2,
      "explain": "the tallest。",
      "tags": [
        "superlative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-020",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "選出正確句：英文比數學更有趣（用 long adj.）。",
      "options": [
        "English is more interesting than math.",
        "English is the more interesting than math.",
        "English is interestinger than math.",
        "English is most interesting than math."
      ],
      "answer": 0,
      "explain": "more + interesting + than。",
      "tags": [
        "comparative"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-EX-003",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "哪一句符合說明「物 + cost + 人 + 錢」？",
      "options": [
        "The girl paid 8 dollars and 40 cents for the chocolates.",
        "How long does it take to get to your school by bus?",
        "My new phone case cost me about NT$2,000.",
        "It only takes a few minutes to buy an iced black tea."
      ],
      "answer": 2,
      "explain": "物 + cost + 人 + 錢",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-016",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "much / many 的比較級是？",
      "options": [
        "mucher",
        "more",
        "manier",
        "most（比較級）"
      ],
      "answer": 1,
      "explain": "more／most。",
      "tags": [
        "irregular-adj"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TRP-002",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "I cost NT$100 for the book.",
        "I paid the book NT$100.",
        "It spends 10 minutes to get there.",
        "It takes 10 minutes to get there."
      ],
      "answer": 3,
      "explain": "花時間用 take",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L5-TPL-004",
      "lesson": "Lesson 5",
      "type": "grammar",
      "stem": "長形容詞最高級常用？",
      "options": [
        "most + adj. + than",
        "the + adj. + -er",
        "more + adj. + the",
        "the most + adj."
      ],
      "answer": 3,
      "explain": "the most beautiful。",
      "tags": [
        "superlative"
      ],
      "source": "grammar"
    }
  ],
  "Lesson 6": [
    {
      "id": "L6-TRP-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Enjoy yourselves!",
        "Enjoy yourselfs!",
        "He went by hisself.",
        "I will going to the party."
      ],
      "answer": 0,
      "explain": "複數用 yourselves",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-WRG-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "I will go to the party.",
        "He went by hisself.",
        "Enjoy yourselfs!",
        "I will going to the party."
      ],
      "answer": 3,
      "explain": "will + 原形；或 be going to",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-EX-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「will 問未來」？",
      "options": [
        "What are you going to do later?",
        "Did you enjoy yourselves tonight?",
        "Will you go to the movies with us tomorrow?",
        "I'm going to study for the test."
      ],
      "answer": 2,
      "explain": "will 問未來",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-WRG-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He went by hisself.",
        "I will going to the party.",
        "He went by himself.",
        "Enjoy yourselfs!"
      ],
      "answer": 0,
      "explain": "himself 不是 hisself",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-017",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "will 的否定？",
      "options": [
        "will not (won't) + V",
        "won't to V",
        "don't will + V",
        "isn't will + V"
      ],
      "answer": 0,
      "explain": "won't + 原形。",
      "tags": [
        "will"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-010",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "I / you / he 對應反身？",
      "options": [
        "mine / yours / his",
        "my / your / his",
        "me / you / him",
        "myself / yourself / himself"
      ],
      "answer": 3,
      "explain": "反身代名詞 -self／-selves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-008",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：今晚你們玩得開心嗎？",
      "options": [
        "Did you enjoy you tonight?",
        "Did you enjoy yourselves tonight?",
        "Did you enjoy themselves tonight?",
        "Did you enjoy yourself tonight?（若對象是複數 you）"
      ],
      "answer": 1,
      "explain": "複數 you → yourselves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-WRG-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He went by hisself.",
        "Enjoy yourselfs!",
        "I will going to the party.",
        "Enjoy yourselves!"
      ],
      "answer": 1,
      "explain": "複數用 yourselves",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-015",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：請照顧好自己。",
      "options": [
        "Please take care of yourselveself.",
        "Please take care of yourself.",
        "Please take care of your self.",
        "Please take care of you."
      ],
      "answer": 1,
      "explain": "對一人說用 yourself。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "be going to 表未來，公式是？",
      "options": [
        "S + be + go to + V-ing",
        "S + going to + be + V",
        "S + will + going to + V",
        "S + be + going to + V"
      ],
      "answer": 3,
      "explain": "I am going to study.",
      "tags": [
        "going-to"
      ],
      "source": "grammar"
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
      "source": "grammar"
    },
    {
      "id": "L6-TPL-020",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：他們自己做了晚餐。",
      "options": [
        "They cooked dinner theirselves.",
        "They cooked dinner them.",
        "They cooked dinner themselves.",
        "They cooked dinner themself."
      ],
      "answer": 2,
      "explain": "themselves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-018",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "We enjoyed ourselves.",
        "He went by him.",
        "She did it herself.",
        "He went by himself."
      ],
      "answer": 1,
      "explain": "應用 himself。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-019",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "It 的反身代名詞？",
      "options": [
        "itself",
        "himself",
        "its",
        "it"
      ],
      "answer": 0,
      "explain": "it → itself。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-GQ-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "他是自己一個人去看電影的。",
      "options": [
        "He go to school yesterday.",
        "She don't likes apples.",
        "He went by him.",
        "He went by himself."
      ],
      "answer": 3,
      "explain": "by himself = 獨自。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TRP-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He went by hisself.",
        "I will going to the party.",
        "She is going to buys a dress.",
        "She is going to buy a dress."
      ],
      "answer": 3,
      "explain": "going to + 原形",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-014",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "she 的反身代名詞？",
      "options": [
        "himself",
        "her",
        "sheself",
        "herself"
      ],
      "answer": 3,
      "explain": "she → herself。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-GQ-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "你等一下要做什麼？",
      "options": [
        "What are you going to do later?",
        "He go to school yesterday.",
        "What will you going to do later?",
        "She don't likes apples."
      ],
      "answer": 0,
      "explain": "be going to + 原形；不要 will going to 混用。",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-EX-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「複數 you → yourselves」？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "Will you go to the movies with us tomorrow?",
        "What are you going to do later?",
        "I'm going to study for the test."
      ],
      "answer": 0,
      "explain": "複數 you → yourselves",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-EX-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「已有打算」？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "Will you go to the movies with us tomorrow?",
        "I'm going to study for the test.",
        "What are you going to do later?"
      ],
      "answer": 2,
      "explain": "已有打算",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：待會你要做什麼？",
      "options": [
        "What are you go to do later?",
        "What are you going to do later?",
        "What do you going to do later?",
        "What will you going to do later?"
      ],
      "answer": 1,
      "explain": "be + going to + V；不要 will going to。",
      "tags": [
        "going-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-012",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：她打算下週旅行。",
      "options": [
        "She is go to travel next week.",
        "She will going to travel next week.",
        "She going to travel next week.",
        "She is going to travel next week."
      ],
      "answer": 3,
      "explain": "is + going to + V。",
      "tags": [
        "going-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "反身代名詞：he →",
      "options": [
        "himself",
        "herself",
        "him",
        "himselfs"
      ],
      "answer": 0,
      "explain": "he → himself。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-005",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "反身代名詞：they →",
      "options": [
        "themselves",
        "themselveses",
        "themself",
        "theirselves"
      ],
      "answer": 0,
      "explain": "they → themselves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-EX-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「be going to 問計畫」？",
      "options": [
        "Did you enjoy yourselves tonight?",
        "What are you going to do later?",
        "Will you go to the movies with us tomorrow?",
        "I'm going to study for the test."
      ],
      "answer": 1,
      "explain": "be going to 問計畫",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-011",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：我明天會幫你。",
      "options": [
        "I will help you tomorrow.",
        "I will helped you tomorrow.",
        "I will helping you tomorrow.",
        "I will to help you tomorrow."
      ],
      "answer": 0,
      "explain": "will + 原形 help。",
      "tags": [
        "will"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "will 表未來，公式是？",
      "options": [
        "S + will + V",
        "S + will + to V",
        "S + will + V-ed",
        "S + will + V-ing"
      ],
      "answer": 0,
      "explain": "will 後接原形。",
      "tags": [
        "will"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-007",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出正確句：他獨自去的。",
      "options": [
        "He went by himself.",
        "He went by him.",
        "He went by his self.",
        "He went by he."
      ],
      "answer": 0,
      "explain": "by himself。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-WRG-004",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句有錯誤？",
      "options": [
        "He went by hisself.",
        "She is going to buys a dress.",
        "I will going to the party.",
        "She is going to buy a dress."
      ],
      "answer": 1,
      "explain": "going to + 原形",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TRP-001",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "Enjoy yourselfs!",
        "He went by hisself.",
        "I will go to the party.",
        "I will going to the party."
      ],
      "answer": 2,
      "explain": "will + 原形；或 be going to",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TRP-002",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "下列哪一句正確？",
      "options": [
        "He went by hisself.",
        "I will going to the party.",
        "Enjoy yourselfs!",
        "He went by himself."
      ],
      "answer": 3,
      "explain": "himself 不是 hisself",
      "tags": [
        "trap"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-006",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "反身代名詞：you（複數）→",
      "options": [
        "yourselfs",
        "yourselves",
        "youselves",
        "yourself（若明確複數情境）"
      ],
      "answer": 1,
      "explain": "複數 you → yourselves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-013",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "we 的反身代名詞？",
      "options": [
        "ourself",
        "ourselveses",
        "us",
        "ourselves"
      ],
      "answer": 3,
      "explain": "we → ourselves。",
      "tags": [
        "reflexive"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-009",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "選出錯誤句：",
      "options": [
        "She is going to call me.",
        "I will help you.",
        "What are you going to do later?",
        "What will you going to do later?"
      ],
      "answer": 3,
      "explain": "不可 will + going to。",
      "tags": [
        "find-wrong"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-TPL-016",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "be going to 的否定？",
      "options": [
        "not go to + V",
        "don't going to + V",
        "isn't / aren't / am not + going to + V",
        "won't going to + V"
      ],
      "answer": 2,
      "explain": "be 的否定 + going to。",
      "tags": [
        "going-to"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-EX-006",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "哪一句符合說明「will 問未來同行者」？",
      "options": [
        "I'm going to study for the test.",
        "Will you go to the movies with us tomorrow?",
        "What are you going to do later?",
        "Who will go to the potluck with you?"
      ],
      "answer": 3,
      "explain": "will 問未來同行者",
      "tags": [
        "example"
      ],
      "source": "grammar"
    },
    {
      "id": "L6-GQ-003",
      "lesson": "Lesson 6",
      "type": "grammar",
      "stem": "你們今晚玩得開心嗎？",
      "options": [
        "Does you enjoy yourself tonight?",
        "He go to school yesterday.",
        "Did you enjoy yourself tonight?",
        "Did you enjoy yourselves tonight?"
      ],
      "answer": 3,
      "explain": "你們（複數）→ yourselves。（若確定只有一人可用 yourself）",
      "tags": [
        "grammar-quiz"
      ],
      "source": "grammar"
    }
  ]
};
