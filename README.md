# 南一版國中二上英文單字互動測驗

互動式英文單字／聽寫練習網站（南一版 Book 3｜超群新幹線第三冊）。

## 線上使用

https://ryantsai0119.github.io/nanyi-english-vocab-quiz/

功能包含：
- 各課單字表（可點選開啟迷你測驗）
- 全冊／分課隨機測驗（中翻英、英翻中、聽力測驗）
- **聽寫練習**：依 `1-1`／`1-2`／`1-3`…選區段，循環播放英文句、字母空格打字、完成度計分與最高分紀錄
- 答題回饋與成績結算

## 聽寫練習說明

1. 首頁測驗模式選 **聽寫練習**
2. 選區段：`L-1` 辨識句意、`L-2` 基本問答、`L-3` 言談理解（逐句）
3. 系統循環朗讀當句；依字母空格輸入（**標點與縮寫的 `'` 不用輸入**）
4. **對答案** 看該句完成％；區段結束取平均，高於歷史最高才更新

句子資料來自 `listening-transcripts/`（聽力課文轉寫）。計畫見 `DICTATION_PLAN.md`。

## 本機預覽

```bash
npx --yes serve .
```

## 重建資料

```bash
python tools/build_nanyi_b3_vocab.py      # → vocab-data.js
python tools/build_dictation_data.py      # → dictation-data.js
```

## 部署

推送到 `main` 後，GitHub Actions（`.github/workflows/pages.yml`）會發布 GitHub Pages。

## 來源

自 ERP 專案 `web/english-vocab-quiz` 拆出之獨立公開站點。
