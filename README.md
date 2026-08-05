# 南一版國中二上英文單字互動測驗

互動式英文單字／聽寫練習網站（南一版 Book 3｜超群新幹線第三冊）。

視覺：Hallmark **Atelier**（Catalogue 宏結構）——冷骨色紙面、Cormorant／Noto 襯線標題、單一酒紅強調色。樣式拆在 `tokens.css` + `styles.css`。

## 線上使用

https://ryantsai0119.github.io/nanyi-english-vocab-quiz/

功能包含：
- 各課單字表（可點選開啟迷你測驗）
- **課程學習**：文法速成（PTT 風、中文說明＋英文例句）＋課文區段（英／中／語音）
- 全冊／分課隨機測驗（中翻英、英翻中、聽力測驗）
- **文法選擇題**：各課文法題庫隨機抽題、選後顯示解析、結束計分（原創文法題，非考單字、非官方原卷）
- **聽寫練習**：依 `1-1`／`1-2`／`1-3`…選區段，循環播放英文句、字母空格打字、完成度計分與最高分紀錄
- 答題回饋與成績結算

## 聽寫練習說明

1. 首頁測驗模式選 **聽寫練習**
2. 選區段：`1-1`…`6-3`，以及複習 `R1-1`…`R3-3`
3. 播放設定：語速／偏男女聲／循環間隔；言談理解可選 **逐句**（預設）或 **整段對話**
4. 循環朗讀；依字母空格輸入（**`.` 與 `'` 鍵盤可按、畫面會顯示，但不計分**）
5. **對答案** 看完成％；可 **再練一次**（以最後一次為準）；區段結束取平均，更高才更新最高分

句子資料來自 `listening-transcripts/`。計畫見 `DICTATION_PLAN.md`、`LEARNING_PLAN.md`。

## 課程學習說明

1. 首頁 Tab 選 **課程學習**（在「各課單字表」旁）
2. 選 Lesson 1–6；預設開 **文法**（一句話重點、句型、例子、地雷、小測驗）
3. 切 **課文**：每課 4 區段，英＋中；可逐句／整段朗讀（瀏覽器語音）
4. 「已讀」進度存在本機 localStorage

## 本機預覽

```bash
npx --yes serve .
```

## 重建資料

```bash
python tools/build_nanyi_b3_vocab.py      # → vocab-data.js
python tools/build_dictation_data.py      # → dictation-data.js
python tools/build_mcq_data.py            # → mcq-data.js（文法選擇題）
```

## 部署

推送到 `main` 後，GitHub Actions（`.github/workflows/pages.yml`）會發布 GitHub Pages。

## 來源

自 ERP 專案 `web/english-vocab-quiz` 拆出之獨立公開站點。
