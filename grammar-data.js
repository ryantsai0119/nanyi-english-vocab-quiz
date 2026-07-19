/**
 * 課程文法學習（PTT 風）
 * 說明：中文；例句：英文
 * 南一第三冊 Lesson 1–6
 */
const grammarBank = {
  "Lesson 1": {
    boardTitle: "[文法速成] L1 Be 過去式 + 規則動詞過去式",
    oneLiner: "講「過去的事」：be 改成 was/were；一般動詞加 -ed（V-ed）。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "這課開始正式進入「過去式」。以後寫日記、講昨天做了什麼，都靠它。",
          "先把兩條路分清楚：be 動詞一條路、一般動詞一條路，就不會亂。"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "Be 肯定：S + was / were + …",
          "Be 否定：S + was / were + not + …（wasn't / weren't）",
          "Be 疑問：Was / Were + S + …?",
          "一般動詞肯定：S + V-ed + …",
          "一般動詞否定：S + did not (didn't) + 原形 V",
          "一般動詞疑問：Did + S + 原形 V …?"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "My uncle was an English teacher ten years ago.", note: "主詞單數 → was" },
          { en: "They were at home last night.", note: "主詞複數 → were" },
          { en: "Andy shared his food with his classmates.", note: "規則動詞 share → shared" },
          { en: "I watched a ghost movie last night.", note: "watch → watched" },
          { en: "Did Mary call her grandma after lunch?", note: "疑問句用 Did + 原形" },
          { en: "I didn't study for the test.", note: "否定：didn't + 原形（不是 studied）" }
        ]
      },
      {
        type: "list",
        heading: "【4】變化規則／口訣",
        body: [
          "I / he / she / it → was；you / we / they → were",
          "多數動詞：直接 + ed（walk → walked）",
          "字尾 e：只加 d（share → shared）",
          "短母音＋子音：雙寫子音再 + ed（stop → stopped）",
          "子音＋y：y 改 i 再 + ed（study → studied）",
          "口訣：過去式有 did，後面動詞回原形！"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "He were happy yesterday.", right: "He was happy yesterday.", note: "He 用 was" },
          { wrong: "I didn't watched TV.", right: "I didn't watch TV.", note: "有 didn't 就用原形" },
          { wrong: "Did she cooked dinner?", right: "Did she cook dinner?", note: "Did 後面原形" },
          { wrong: "She studyed hard.", right: "She studied hard.", note: "y→i+ed" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "昨天他很忙。（選正確句）",
            options: ["He was busy yesterday.", "He were busy yesterday."],
            answer: 0,
            explain: "He → was。"
          },
          {
            q: "我昨天沒洗碗。",
            options: ["I didn't washed the dishes.", "I didn't wash the dishes."],
            answer: 1,
            explain: "didn't 後面用原形 wash。"
          },
          {
            q: "她昨天洗了狗嗎？",
            options: ["Did she wash her dog yesterday?", "Did she washed her dog yesterday?"],
            answer: 0,
            explain: "Did + 原形 wash。"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "單字表裡很多「昨天做過的動作」動詞，造句時記得改成 V-ed 或配 did。",
          "聽寫 1-1～1-3 多是過去式句子，先讀完這篇再開聽寫會順很多。"
        ]
      }
    ]
  },

  "Lesson 2": {
    boardTitle: "[文法速成] L2 不規則過去式 + why / because / so",
    oneLiner: "不規則動詞要硬背過去式；講原因用 why／because／so，但不要重複因果。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "規則動詞加 -ed 不夠用：go、have、see、get…都是不規則，考試最愛考。",
          "另外這課會練「為什麼／因為／所以」，讓你把原因講清楚。"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "不規則肯定：S + 過去式（went / had / saw…）",
          "否定／疑問仍用 did：didn't + 原形；Did + 原形",
          "問原因：Why + 助動詞 + S + V…?",
          "答原因：… because + 完整子句",
          "結果：…, so + 完整子句（所以…）"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "Jesse had a bad day yesterday.", note: "have → had" },
          { en: "She got 50 points on the test.", note: "get → got" },
          { en: "Karen visited her grandparents two days ago.", note: "規則 visit → visited" },
          { en: "Why didn't Sue go shopping with us?", note: "Why + didn't + 原形" },
          { en: "The weather was nice, so they walked the dog.", note: "so = 所以" },
          { en: "John was scared because he watched a ghost movie.", note: "because = 因為" }
        ]
      },
      {
        type: "list",
        heading: "【4】常見不規則（先背這批）",
        body: [
          "go → went｜have → had｜see → saw｜get → got",
          "make → made｜take → took｜come → came｜run → ran",
          "eat → ate｜drink → drank｜buy → bought｜find → found",
          "口訣：否定疑問有 did，不規則也回原形（didn't go，不是 didn't went）"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "I didn't went to the game.", right: "I didn't go to the game.", note: "didn't + 原形" },
          { wrong: "Why he cry?", right: "Why is he crying? / Why did he cry?", note: "Why 後面要有動詞變化" },
          { wrong: "Because so I was tired.", right: "I was tired, so I went to bed. / I went to bed because I was tired.", note: "because 與 so 不要疊用" },
          { wrong: "He was scared because watched a movie.", right: "He was scared because he watched a movie.", note: "because 後面要完整子句（含主詞）" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "我昨天去看籃球比賽。",
            options: ["I went to the basketball game yesterday.", "I goed to the basketball game yesterday."],
            answer: 0,
            explain: "go → went。"
          },
          {
            q: "天氣很好，所以他們去公園遛狗。",
            options: [
              "The weather was nice, so they walked the dog in the park.",
              "The weather was nice because they walked the dog in the park."
            ],
            answer: 0,
            explain: "「所以」用 so；because 是「因為」。"
          },
          {
            q: "她為什麼沒跟我們逛街？",
            options: ["Why didn't Sue go shopping with us?", "Why Sue didn't went shopping with us?"],
            answer: 0,
            explain: "Why + didn't + 原形 go。"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "看到 because／so／why 的句子，先畫出「原因」和「結果」。",
          "聽寫 2-1～2-3 裡很多因果句，可邊聽邊標記連結詞。"
        ]
      }
    ]
  },

  "Lesson 3": {
    boardTitle: "[文法速成] L3 過去進行式 + when / before / after",
    oneLiner: "過去某一刻「正在做」：was/were + V-ing；再用 when／before／after 排出時間順序。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "過去式講「做完了」；過去進行式講「那時正在做」。兩個常一起出現。",
          "時間連接詞 when／before／after（還有 while）幫你把故事說清楚。"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "過去進行：S + was / were + V-ing",
          "否定：wasn't / weren't + V-ing",
          "疑問：Was / Were + S + V-ing?",
          "When + 過去式，過去進行（突然插入的事）",
          "Before / After + 過去式子句，…",
          "While + 過去進行，另一動作可進行或過去式"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "What were you doing at seven last night?", note: "問那時正在做什麼" },
          { en: "Some students were climbing a tree when we passed by.", note: "正在爬／我們經過" },
          { en: "Before the boy went out, his father came back.", note: "before：較早的事先說" },
          { en: "After she drank a cup of tea, she ate some bread.", note: "after：先喝茶再吃麵包" },
          { en: "I was talking on it with Jack before lunch.", note: "過去進行 + before" },
          { en: "They were singing and dancing in the garden.", note: "were + V-ing" }
        ]
      },
      {
        type: "list",
        heading: "【4】變化規則／口訣",
        body: [
          "be 的過去（was/were）＋現在分詞 V-ing",
          "when：常接「較短／突然」的過去式",
          "while：常接「較長、正在進行」的事",
          "before = 在…之前；after = 在…之後",
          "口訣：正在做用 -ing；打斷它的那下常用 when + 過去式"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "I was talk on the phone.", right: "I was talking on the phone.", note: "要 V-ing" },
          { wrong: "They was dancing.", right: "They were dancing.", note: "they → were" },
          { wrong: "When I was arrive, he left.", right: "When I arrived, he left. / When I arrived, he was leaving.", note: "when 子句常用過去式" },
          { wrong: "After she drink tea, she ate bread.", right: "After she drank tea, she ate bread.", note: "時間子句也要過去式" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "昨晚七點你在做什麼？",
            options: ["What were you doing at seven last night?", "What did you doing at seven last night?"],
            answer: 0,
            explain: "過去進行：were + doing。"
          },
          {
            q: "我們經過時，有些學生正在爬樹。",
            options: [
              "Some students were climbing a tree when we passed by.",
              "Some students climbed a tree when we were pass by."
            ],
            answer: 0,
            explain: "正在爬 = were climbing；經過 = passed。"
          },
          {
            q: "她喝完熱茶之後吃了麵包。",
            options: [
              "After she drank a cup of hot tea, she ate some bread.",
              "Before she drank a cup of hot tea, she ate some bread."
            ],
            answer: 0,
            explain: "先喝再吃 → After。"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "聽寫 3-1～3-3 出現很多 when／before／after，先分清「誰先誰後」。",
          "造句練習：寫一件「正在做」＋一件「突然發生」。"
        ]
      }
    ]
  },

  "Lesson 4": {
    boardTitle: "[文法速成] L4 不定詞 / 動名詞 / 虛主詞 It",
    oneLiner: "to V（不定詞）與 V-ing（動名詞）常當「想做的事」；句首 It is … to V 很好用。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "這課開始大量出現 like / love / want / enjoy 後面接什麼的問題。",
          "還有「It is + 形容詞 + to V」：中文的「做…很…」英文常用虛主詞 It。"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "want / plan / decide / need + to V",
          "enjoy / finish / practice / give up + V-ing",
          "like / love / hate + to V 或 V-ing（意思多半接近）",
          "虛主詞：It is + adj. + to V …",
          "真正主詞太長時，用 It 開頭較自然"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "Judy loves going surfing on weekends.", note: "love + V-ing" },
          { en: "I want to speak English like you.", note: "want + to V" },
          { en: "Practice English with your teacher every day.", note: "practice 後常接 V-ing（祈使也可接名詞）" },
          { en: "Why not make a plan and prepare for it?", note: "Why not + 原形" },
          { en: "He enjoyed his life.", note: "enjoy + 名詞；enjoy + V-ing 也常見" },
          { en: "It is fun to travel and work in another country.", note: "It is adj. to V" }
        ]
      },
      {
        type: "list",
        heading: "【4】記憶小抄",
        body: [
          "想要／計畫／決定 → to V（want to go）",
          "享受／完成／練習 → V-ing（enjoy swimming）",
          "It is hard / easy / fun / important to V",
          "口訣：to 表「要去做」；-ing 表「這件事本身／正在經驗」"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "I want going to Japan.", right: "I want to go to Japan.", note: "want + to V" },
          { wrong: "She enjoys to surf.", right: "She enjoys surfing.", note: "enjoy + V-ing" },
          { wrong: "Is fun to travel.", right: "It is fun to travel.", note: "記得虛主詞 It" },
          { wrong: "I finished to do my homework.", right: "I finished doing my homework.", note: "finish + V-ing" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "我想說英文像你一樣。",
            options: ["I want to speak English like you.", "I want speaking English like you."],
            answer: 0,
            explain: "want + to V。"
          },
          {
            q: "Judy 週末喜歡去衝浪。",
            options: ["Judy loves going surfing on weekends.", "Judy loves go surfing on weekends."],
            answer: 0,
            explain: "loves + V-ing。"
          },
          {
            q: "在別的國家旅行又工作很酷。",
            options: [
              "It is cool to travel and work in a different country.",
              "Is cool travel and work in a different country."
            ],
            answer: 0,
            explain: "It is adj. to V。"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "單字裡的活動類動詞（surf、travel、prepare…）很適合練習 to V / V-ing。",
          "聽寫 4-x 對話常出現 working holiday、practice 等，注意後面接法。"
        ]
      }
    ]
  },

  "Lesson 5": {
    boardTitle: "[文法速成] L5 花費時間／金錢（take / spend / cost / pay）",
    oneLiner: "四個動詞主詞不同：人 spend／pay；事／物 take／cost。搞清主詞就不混。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "便利商店、車票、路程時間…這課生活句超多，但 spend／take／cost／pay 超容易對調。",
          "記住口訣：人花錢花時間用 spend；東西「要價」用 cost；花多少時間常用 It takes…"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "人 + spend + 時間／錢 + on + N / (in) V-ing",
          "It takes + 人 + 時間 + to V",
          "事物 + cost + 人 + 錢",
          "人 + pay + 錢 + for + 物品",
          "問價錢：How much does it cost?／How much did you pay?"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "It only takes a few minutes to buy an iced black tea.", note: "It takes + 時間 + to V" },
          { en: "The girl paid 8 dollars and 40 cents for the chocolates.", note: "pay + 錢 + for" },
          { en: "My new phone case cost me about NT$2,000.", note: "物 + cost + 人 + 錢" },
          { en: "How long does it take to get to your school by bus?", note: "問花多久" },
          { en: "I spent two hours shopping in the mall.", note: "人 + spend + 時間 + V-ing" },
          { en: "That's NT$750.", note: "標價／應付金額口語" }
        ]
      },
      {
        type: "list",
        heading: "【4】對照表（必背）",
        body: [
          "spend：主詞是「人」→ I spent $100 on snacks.",
          "pay：主詞是「人」→ I paid $100 for the snacks.",
          "cost：主詞是「物」→ The snacks cost (me) $100.",
          "take：常 It takes… → It takes 10 minutes to walk there.",
          "口訣：人 spend／pay；物 cost；時間 It takes"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "I cost NT$100 for the book.", right: "The book cost me NT$100. / I paid NT$100 for the book.", note: "人不用 cost 當「花費」主詞" },
          { wrong: "It spends 10 minutes to get there.", right: "It takes 10 minutes to get there.", note: "花時間用 take" },
          { wrong: "I paid the book NT$100.", right: "I paid NT$100 for the book.", note: "pay + 錢 + for + 物" },
          { wrong: "She spent NT$100 to the bag.", right: "She spent NT$100 on the bag.", note: "spend … on" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "買杯冰紅茶只要幾分鐘。",
            options: [
              "It only takes a few minutes to buy an iced black tea.",
              "It only spends a few minutes to buy an iced black tea."
            ],
            answer: 0,
            explain: "It takes + 時間 + to V。"
          },
          {
            q: "這個手機殼花了我大約兩千元。",
            options: [
              "My new phone case cost me about NT$2,000.",
              "I cost about NT$2,000 my new phone case."
            ],
            answer: 0,
            explain: "物 + cost + 人 + 錢。"
          },
          {
            q: "她為兩包巧克力付了 8.4 美元。",
            options: [
              "She paid $8.40 for the two bags of chocolates.",
              "She spent $8.40 for the two bags of chocolates."
            ],
            answer: 0,
            explain: "pay + 錢 + for；spend 搭配 on 較常見。"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "便利商店、車票、restroom 等單字，用 spend／pay／cost／take 各造一句。",
          "聽寫 5-x 出現票價、路程，聽到數字就想：主詞是人還是物？"
        ]
      }
    ]
  },

  "Lesson 6": {
    boardTitle: "[文法速成] L6 未來式 + 反身代名詞",
    oneLiner: "未來用 will 或 be going to；反身代名詞 myself…themselves 表示「自己／親自」。",
    sections: [
      {
        type: "text",
        heading: "【1】為什麼要學",
        body: [
          "談今晚、明天、週末計畫，一定會用到未來式。",
          "反身代名詞常出現在 enjoy yourself、by himself（獨自）這類生活句。"
        ]
      },
      {
        type: "list",
        heading: "【2】句型公式",
        body: [
          "will：S + will + 原形 V（決定／預測／當場答應）",
          "be going to：S + am/is/are + going to + 原形 V（已有計畫／有跡象）",
          "疑問：Will + S + V?／Is + S + going to + V?",
          "反身：主詞與受詞同一人 → myself / yourself / himself / herself / itself / ourselves / yourselves / themselves",
          "by + 反身：獨自（by himself）"
        ]
      },
      {
        type: "examples",
        heading: "【3】超好記例子",
        items: [
          { en: "What are you going to do later?", note: "be going to 問計畫" },
          { en: "Will you go to the movies with us tomorrow?", note: "will 問未來" },
          { en: "I'm going to study for the test.", note: "已有打算" },
          { en: "Did you enjoy yourselves tonight?", note: "複數 you → yourselves" },
          { en: "He went by himself.", note: "他自己一個人去" },
          { en: "Who will go to the potluck with you?", note: "will 問未來同行者" }
        ]
      },
      {
        type: "list",
        heading: "【4】反身代名詞速記",
        body: [
          "I → myself｜you（單）→ yourself｜he → himself｜she → herself｜it → itself",
          "we → ourselves｜you（複）→ yourselves｜they → themselves",
          "口訣：單數多半 -self；複數 -selves",
          "will／going to 後面都接原形，不要寫 will going / going to went"
        ]
      },
      {
        type: "traps",
        heading: "【5】常見地雷",
        traps: [
          { wrong: "I will going to the party.", right: "I will go to the party. / I am going to the party.", note: "will + 原形；或 be going to" },
          { wrong: "He went by hisself.", right: "He went by himself.", note: "himself 不是 hisself" },
          { wrong: "Enjoy yourselfs!", right: "Enjoy yourselves!", note: "複數用 yourselves" },
          { wrong: "She is going to buys a dress.", right: "She is going to buy a dress.", note: "going to + 原形" }
        ]
      },
      {
        type: "quiz",
        heading: "【6】30 秒小測驗",
        quiz: [
          {
            q: "你等一下要做什麼？",
            options: ["What are you going to do later?", "What will you going to do later?"],
            answer: 0,
            explain: "be going to + 原形；不要 will going to 混用。"
          },
          {
            q: "他是自己一個人去看電影的。",
            options: ["He went by himself.", "He went by him."],
            answer: 0,
            explain: "by himself = 獨自。"
          },
          {
            q: "你們今晚玩得開心嗎？",
            options: ["Did you enjoy yourselves tonight?", "Did you enjoy yourself tonight?"],
            answer: 0,
            explain: "你們（複數）→ yourselves。（若確定只有一人可用 yourself）"
          }
        ]
      },
      {
        type: "text",
        heading: "【7】本課怎麼接單字／聽寫",
        body: [
          "用本課活動單字寫三句 be going to、兩句 will。",
          "聽寫 6-x 出現 birthday、by himself、enjoy yourselves，聽到就對一下反身形。"
        ]
      }
    ]
  }
};
