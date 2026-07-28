---
title: "DC-WeMark：本地優先的微信公眾號 Markdown 排版工具"
summary: "以 Rust 與 WebAssembly 打造純瀏覽器排版引擎，讓 Markdown 寫作、即時預覽與公眾號發布在本機完成。"
date: 2026-07-11
authors:
  - admin
tags:
  - 開源項目
  - Rust
  - WebAssembly
  - TypeScript
  - Local-first
featured: true
draft: false
---

DC-WeMark 是一款面向微信公眾號作者的開源 Markdown 排版工具。使用者可以在左側撰寫 Markdown、於右側即時預覽，並將保留樣式的富文字一鍵貼入公眾號編輯器。整個處理流程都在瀏覽器本機完成，不需要帳號、後端或文章上傳。

<!--more-->

## 我在項目中負責的工作

這是由我主導設計與開發的獨立開源項目。我負責從問題定義、技術架構到產品交付的完整流程。

- **產品設計**：聚焦 Markdown 作者進入公眾號編輯器時的格式損失、反覆調整與內容隱私問題，確立「排版、預覽、複製」的單一工作流。
- **核心引擎**：以 Rust 和 `comrak` 解析 Markdown AST，將主題規則轉換為公眾號可接受的 inline CSS，並編譯為 WebAssembly。
- **前端體驗**：使用 Vite 與原生 TypeScript 完成雙欄編輯、同步捲動、手機預覽、檔案匯入匯出、草稿保存與剪貼簿相容處理。
- **設計系統**：建立 48 款原創排版主題，並提供字體、字號、強調色和複製背景等可調參數。
- **工程交付**：補齊 Rust 單元測試、Playwright 端到端測試、Docker 自架方案，以及 Cloudflare Pages 的持續部署流程。

## 核心創新

### 1. 將排版核心放進 WebAssembly

Markdown 解析、主題套用與相容性處理都由 Rust 核心完成，再透過 WebAssembly 在瀏覽器執行。同一套核心未來也能延伸至 CLI 或桌面端，而不必重新實作排版規則。

### 2. 內容不離開使用者裝置

系統沒有伺服器邏輯、資料庫或帳號服務。文章從輸入到複製始終保留在本機，兼顧敏感內容的隱私與離線可用性。

### 3. 針對公眾號編輯器的相容輸出

一般網頁 CSS 無法直接保留在公眾號編輯器中。DC-WeMark 將樣式逐一內聯到元素，過濾不支援的標籤與屬性，並以 `text/html` 寫入剪貼簿，讓貼上後的版式盡可能保持一致。

### 4. 小體積、低依賴的產品架構

前端不依賴大型 UI 框架，部署產物是可由任何靜態服務託管的檔案。這讓線上版本、自架版本與未來多端重用都保持簡單。

## 技術架構

- **排版核心**：Rust、comrak、WebAssembly
- **前端**：Vite、TypeScript、HTML、CSS
- **品質保障**：Rust tests、Playwright E2E
- **部署**：Cloudflare Pages、Docker、nginx
- **授權**：MIT License

[線上使用 DC-WeMark](https://dc-wemark.pages.dev/) · [查看 GitHub 原始碼](https://github.com/DylanChiang-Dev/DC-WeMark)
