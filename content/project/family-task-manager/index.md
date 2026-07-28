---
title: "家庭任務管理系統：Cloudflare 全棧協作平台"
summary: "以 React、Hono、D1 與 Cloudflare Workers 打造的家庭協作系統，整合任務、日曆、週期安排與團隊通知。"
date: 2025-10-02
authors:
  - admin
tags:
  - 開源項目
  - TypeScript
  - React
  - Cloudflare
  - 全棧開發
featured: true
draft: false
---

家庭任務管理系統是一套面向家庭與小型團隊的開源協作平台。它將任務、日曆、靈感箱、週期安排、成員分工與通知整合在同一個介面，並以 Cloudflare 的邊緣服務完成前後端與資料層部署。

<!--more-->

## 我在項目中負責的工作

這是由我主導設計、開發與維護的全棧開源項目。我完成了從早期 PHP 版本到端到端 TypeScript 架構的整體重構。

- **產品定義**：從家庭成員共同管理日常任務的需求出發，設計工作台、任務、日曆、靈感箱、分類、成員與個人設定等核心流程。
- **架構重構**：將 PHP 與 MySQL 單體系統重構為 React、Hono、Cloudflare Workers、D1、KV 和 R2 組成的邊緣原生架構。
- **資料與 API**：設計團隊、任務、分類、評論、通知、週期任務與日程區塊的資料模型、驗證規則和 API。
- **複雜任務邏輯**：實作週期任務生成、時間窗口、積壓任務、日曆檢視與排程更新，處理跨層資料一致性。
- **身份與權限**：建置 JWT 存取權杖、KV refresh session、團隊隔離與角色權限。
- **工程品質**：採用 monorepo、前後端共享 Zod schema、型別檢查、單元測試與 Cloudflare 自動部署。

## 核心創新

### 1. 從個人待辦轉向家庭協作

系統不只管理單一使用者的清單，而是以家庭或小型團隊為單位，支援成員指派、分類、評論、通知與多視角工作台。

### 2. 以時間語義統一多種任務

一般任務、週期任務、時間窗口、行程與靈感箱各自有不同的生命週期。系統透過共享資料契約與日曆視圖，讓不同任務能在一致的操作模型中管理。

### 3. 端到端 TypeScript 契約

前端、後端與共享套件位於同一個 pnpm workspace，並以 Zod schema 和型別共享降低 API 欄位漂移，使輸入驗證與型別安全從介面一路延伸至資料層。

### 4. 邊緣原生的低維運架構

前端部署於 Cloudflare Pages，API 運行於 Workers，資料使用 D1、KV 與 R2。這套架構減少傳統伺服器維護，同時保留資料庫、快取、檔案與排程能力。

## 技術架構

- **前端**：React、TypeScript、Vite、Tailwind CSS、shadcn/ui、PWA
- **後端**：Hono、Cloudflare Workers、Zod
- **資料層**：Cloudflare D1、Drizzle ORM、KV、R2
- **工程化**：pnpm workspace、Vitest、MSW、Cloudflare Pages
- **授權**：MIT License

[開啟線上版本](https://dc-family-task-manager.pages.dev/) · [查看 GitHub 原始碼](https://github.com/DylanChiang-Dev/DC-family-task-manager)
