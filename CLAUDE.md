# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 項目概述

這是一個基於 Hugo Blox Builder 構建的學術個人網站，展示蔣濤（Dylan Chiang）的學術成果、研究項目和專業經歷。網站支援繁體中文內容，並部署在 GitHub Pages 上。

## 核心技術棧

- **Hugo Extended 0.148.2** - 靜態網站生成器
- **Hugo Blox Builder** - 學術網站主題框架
- **Tailwind CSS v4** - CSS 框架（通過 pnpm 管理）
- **Node.js 20** - 用於 CSS 構建和資源處理
- **pnpm 10.14.0** - 包管理器

## 常用開發命令

```bash
# 本地開發服務器
hugo server

# 使用 npm scripts
npm run dev  # 啟動開發服務器

# 構建生產版本
npm run build  # 構建並壓縮
# 或直接使用 Hugo
hugo --minify

# 依賴管理
pnpm install  # 安裝依賴
```

## 項目架構

### 內容結構
```
content/
├── authors/admin/     # 作者個人信息和頭像
├── post/             # 博客文章（學術新聞等）
├── publication/      # 學術出版物
├── project/          # 項目展示
├── talk/             # 演講記錄
├── event/            # 會議記錄
├── teaching/         # 教學經歷
└── _index.md         # 首頁內容
```

### 配置文件
- `config/_default/hugo.yaml` - 主要 Hugo 配置，包含語言設定（zh-tw）
- `config/_default/params.yaml` - 網站參數和外觀配置
- `config/_default/menus.yaml` - 導航菜單配置
- `hugoblox.yaml` - Hugo Blox 主題版本配置

### 靜態資源
- `assets/` - SCSS、圖片等源資源
- `static/` - 直接複製到最終網站的靜態文件
- `layouts/partials/hooks/` - 自定義模板掛鉤

## 部署工作流

### GitHub Pages 自動部署
- **觸發條件**: 推送到 `main` 分支
- **部署分支**: `gh-pages`
- **網站地址**: https://dylanchiang-dev.github.io
- **構建流程**:
  1. 安裝 Node.js 和 pnpm 依賴
  2. 使用 Hugo Extended 構建
  3. 可選：生成 Pagefind 搜索索引
  4. 部署到 GitHub Pages

### Netlify 配置（備用）
- 支持預覽部署和分支部署
- 自動資源緩存優化

## 內容管理要點

### 添加新內容
- 所有內容使用 Markdown 格式
- 每個內容類型都有對應的 `_index.md` 檔案
- 支援圖片、PDF、音頻等多媒體資源
- 建議為每個新內容創建獨立文件夾

### 語言和本地化
- 主要語言: `zh-tw`（繁體中文）
- 啟用 CJK 語言支援
- 日期格式和本地化配置在 `params.yaml` 中

## 開發注意事項

- **本地測試**: 使用 `hugo server` 進行實時預覽
- **圖片優化**: Hugo 自動處理圖片壓縮和尺寸調整
- **緩存**: 構建過程使用多層緩存提升性能
- **版本控制**: Git 信息可用於 .GitInfo 和 .Lastmod
- **搜索功能**: 可選集成 Pagefind 搜索

## 文件命名約定

- 內容文件使用 `index.md`
- 媒體文件建議使用英文命名
- 配置文件使用 YAML 格式
- 避免使用特殊字符和空格