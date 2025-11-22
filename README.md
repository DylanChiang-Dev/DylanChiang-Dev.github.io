# Dylan Chiang 學術個人網站

這是一個基於 Hugo Blox Builder 構建的學術個人網站，用於展示個人學術成果、研究項目和專業經歷。

## 主要功能

- **個人簡介** - 展示個人背景、研究興趣和學術經歷
- **學術出版物** - 期刊論文、會議論文、碩士論文等學術成果展示
- **會議記錄** - 參與的學術會議和論壇記錄
- **演講展示** - 學術演講和報告內容
- **項目展示** - 研究項目和技術項目展示
- **教學經歷** - 課程教學和培訓經驗
- **個人博客** - 學術思考和技術分享

## 技術棧

- **Hugo** - 靜態網站生成器
- **Hugo Blox Builder** - 學術網站主題框架
- **Markdown** - 內容編寫格式
- **YAML** - 配置文件格式
- **GitHub Pages** - 網站託管服務
- **GitHub Actions** - 自動化部署

## 本地運行

### 環境要求

- Hugo Extended (推薦最新版本)
- Git
- Node.js (可選，用於擴展功能)

### 運行步驟

1. 克隆倉庫
```bash
git clone https://github.com/DylanChiang-Dev/DylanChiang-Dev.github.io.git
cd DylanChiang-Dev.github.io
```

2. 啟動本地服務器
```bash
hugo server
```

3. 在瀏覽器中訪問 `http://localhost:1313`

## 項目結構

```
├── config/          # 網站配置文件
├── content/         # 網站內容
│   ├── authors/     # 作者信息
│   ├── event/       # 會議記錄
│   ├── post/        # 博客文章
│   ├── project/     # 項目展示
│   ├── publication/ # 學術出版物
│   ├── talk/        # 演講記錄
│   └── teaching/    # 教學經歷
├── assets/          # 靜態資源
├── layouts/         # 自定義佈局
└── static/          # 靜態文件
```

## 部署信息

網站通過 GitHub Actions 自動部署到 GitHub Pages：

- **主分支**: `main`
- **部署分支**: `gh-pages`
- **網站地址**: https://dylanchiang-dev.github.io
- **自動部署**: 推送到主分支時自動觸發部署

## 內容管理

### 內容類型對應

| 內容類型 | 目錄 | 網站顯示 | 用途 |
|---------|------|---------|------|
| **論文閱讀筆記** | `content/post/` | 最新消息 | 個人化的論文閱讀心得 |
| **技術分享** | `content/post/` | 最新消息 | AI、技術、工具分享 |
| **學術論文** | `content/publication/` | 最新論文 | 正式的學術出版物 |
| **演講記錄** | `content/talk/` | 講座 | 演講、報告內容 |
| **會議記錄** | `content/event/` | 參會 | 學術會議參與 |

⚠️ **重要**: 論文閱讀筆記應放在 `content/post/`，而非 `content/publication/`

### 添加新內容

詳細步驟請參考 [貢獻指南](CONTRIBUTING.md)

**快速開始**：

1. **論文閱讀筆記**
   ```bash
   cd content/post
   mkdir paper-name-reading
   cd paper-name-reading
   # 創建 index.md（參考 CONTRIBUTING.md 模板）
   ```

2. **技術分享**
   ```bash
   cd content/post
   mkdir tech-topic-name
   # 創建 index.md
   ```

3. **學術論文**
   ```bash
   cd content/publication
   mkdir paper-short-name
   # 創建 index.md
   ```

### 命名規範

- **資料夾命名**: 全小寫英文，用 `-` 分隔（如 `rl-llm-reasoning-capacity-reading`）
- **檔案命名**: 主文件使用 `index.md`
- **圖片命名**: 描述性英文名稱，小寫短橫線分隔

### 標籤使用

我們使用三層標籤系統（詳見 [標籤指南](docs/TAGGING_GUIDE.md)）：

- **一級標籤**（必選）：內容類型（如 `論文閱讀`、`技術分享`）
- **二級標籤**（推薦）：主題領域（如 `人工智慧`、`心理學`）
- **三級標籤**（可選）：具體技術（如 `LLM`、`強化學習`）

**範例**：
```yaml
tags:
  - 論文閱讀      # 一級
  - 人工智慧      # 二級
  - LLM           # 三級
  - 強化學習      # 三級
```

### 配置修改

- **網站設置**: 修改 `config/_default/` 目錄下的配置文件
- **個人信息**: 編輯 `content/authors/admin/_index.md`
- **導航菜單**: 修改 `config/_default/menus.yaml`

## 參考文檔

- [貢獻指南](CONTRIBUTING.md) - 命名規範、Front Matter 模板、最佳實踐
- [標籤使用指南](docs/TAGGING_GUIDE.md) - 三層標籤系統詳解
- [技術文檔](CLAUDE.md) - 技術棧和開發環境說明

## 聯繫方式

如有問題或建議，請聯繫：

- **Email**: 3331322@gmail.com
- **GitHub**: [@DylanChiang-Dev](https://github.com/DylanChiang-Dev)

## 許可證

本項目基於 Hugo Blox Builder 構建，遵循相應的開源許可證。

---

*最後更新: 2025-11-22*