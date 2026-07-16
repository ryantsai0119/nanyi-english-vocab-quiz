# 南一版國中二上英文單字互動測驗

互動式英文單字測驗網站（南一版 Book 3）。

## 線上使用

https://ryantsai0119.github.io/nanyi-english-vocab-quiz/

功能包含：
- 各課單字表（可點選開啟迷你測驗）
- 全冊／分課隨機測驗
- 答題回饋與成績結算

## 本機預覽

用任何靜態伺服器開啟本目錄即可，例如：

```bash
npx --yes serve .
```

或直接用瀏覽器開啟 `index.html`（部分環境對 `file://` 限制較嚴時請改用靜態伺服器）。

## 重建單字資料

```bash
python tools/build_nanyi_b3_vocab.py
```

會覆寫根目錄的 `vocab-data.js`。

## 部署

推送到 `main` 後，GitHub Actions（`.github/workflows/pages.yml`）會以 GitHub Pages 發布本倉庫根目錄。

## 來源

自 ERP 專案 `web/english-vocab-quiz` 拆出之獨立公開站點。
