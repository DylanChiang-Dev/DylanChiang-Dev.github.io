---
title: "ShellMate：瀏覽器 SSH 與遠端維運工作台"
summary: "整合即時 SSH 終端、多分頁、主機分組與命令片段，展示 React、WebSocket、Node.js 與遠端連線的全棧實作。"
date: 2026-10-03
authors:
  - admin
tags:
  - 開源項目
  - 工程實作
  - TypeScript
  - WebSocket
featured: false
draft: false
image:
  filename: architecture.png
  preview_only: true
  alt_text: "ShellMate 架構示意：瀏覽器終端與主機、分頁、命令面板，透過 WebSocket 及 ssh2 後端連接遠端主機。"
  caption: "功能與連線架構示意，非真實主機或操作介面截圖。"
---

ShellMate 是我面向多主機維運情境開發的 Web SSH 工作台。它把主機設定、互動式終端與常用命令從分散的工具整理到同一個瀏覽器入口，是一套可部署的單機工程原型。

<!--more-->

## 我做了哪些工作

- **即時終端整合**：以 React、TypeScript 與 xterm.js 建立瀏覽器終端，透過 WebSocket 與 Node.js／ssh2 串接 SSH shell 的雙向輸入輸出。
- **多分頁與主機管理**：實作主機設定新增、編輯、刪除、分組及終端分頁，處理不同連線的介面切換。
- **命令片段工作流**：將常用指令整理為可分組、維護並送入目前終端的片段，減少重複輸入及切換筆記的負擔。
- **基本登入與資料保護**：整合 JWT API 驗證、登入介面及密碼雜湊；主機密碼加密後儲存，而不是在展示頁公開連線資料。
- **後端模組與錯誤處理**：拆分驗證、主機資料、命令、SSH session 與 WebSocket handler，將連線失敗轉成較易理解的錯誤訊息。
- **部署與儲存取捨**：提供 Docker／Compose 單機部署，以 JSON 儲存保持原型簡單；不把這項選擇描述成已具備大規模多人或高併發能力。

## 連線與介面架構

{{< figure src="architecture.png" alt="ShellMate 的主機管理、終端、WebSocket 後端與 SSH 連線架構。" caption="依公開功能繪製的原型架構圖，不含真實主機、帳號、IP 位址或憑證，也不代表已公開 SSH 服務。" >}}

## 工程定位

本專案展示介面、即時通訊、後端與部署的整合。既有基本安全機制不等於企業級安全認證或獨立稽核；更細的權限、多使用者資料管理與規模化部署仍屬後續擴充方向。

[GitHub 程式碼與部署說明](https://github.com/DylanChiang-Dev/DC-ShellMate)
