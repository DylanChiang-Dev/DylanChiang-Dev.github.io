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

### 添加新內容

- **博客文章**: 在 `content/post/` 目錄下創建新文件夾
- **學術論文**: 在 `content/publication/` 目錄下添加論文信息
- **會議記錄**: 在 `content/event/` 目錄下添加會議詳情
- **項目展示**: 在 `content/project/` 目錄下添加項目信息

### 配置修改

- **網站設置**: 修改 `config/_default/` 目錄下的配置文件
- **個人信息**: 編輯 `content/authors/admin/_index.md`
- **導航菜單**: 修改 `config/_default/menus.yaml`

## 聯繫方式

如有問題或建議，請聯繫：

- **Email**: 3331322@gmail.com
- **GitHub**: [@DylanChiang-Dev](https://github.com/DylanChiang-Dev)

## 許可證

本項目基於 Hugo Blox Builder 構建，遵循相應的開源許可證。

---

*最後更新: 2024年*