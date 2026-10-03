---
title: "Quotabase-Lite：報價與收據管理系統"
summary: "以 PHP 與關聯式資料庫整合客戶、商品、報價狀態、A4 列印及收據查驗，將實際業務流程轉成可操作的網頁系統。"
date: 2026-10-03
authors:
  - admin
tags:
  - 開源項目
  - 工程實作
  - PHP
  - 業務系統
featured: false
draft: false
image:
  filename: workflow.png
  preview_only: true
  alt_text: "Quotabase-Lite 業務流程示意：客戶與商品資料進入報價，接續狀態、列印及收據查驗。"
  caption: "公開功能的流程示意，不是真實客戶、報價單或收據。"
---

Quotabase-Lite 是面向中小企業報價工作的開源網頁系統。我將客戶、商品／服務、報價單、狀態及收據整理成連貫流程，使用原生前端、PHP 與 MySQL／MariaDB 保持架構精簡。

<!--more-->

## 我做了哪些工作

- **業務資料與操作流程**：整合客戶管理、產品／服務目錄、報價建立與狀態追蹤，讓資料可以在相關操作之間接續使用。
- **金額與交易處理**：以整數分儲存金額，避免直接以浮點數表示金額；結合資料庫交易處理相關寫入。
- **前後端實作**：以 PHP、少量 Composer 依賴及原生 HTML／CSS／JavaScript 實作，整理 Tab 導覽及深色模式。
- **輸入與存取防護**：使用 PDO 預處理、CSRF 驗證及輸出轉義等基礎機制；本頁不將這些機制當成完整安全稽核的結論。
- **列印與收據**：實作 A4 列印頁、個人收據及 QR／hash 核對入口，讓保存、列印及資料檢視接上業務流程。
- **匯出與部署**：提供 CSV／JSON 匯出與安裝部署說明，保留零框架架構的易理解性及可維護範圍。

## 業務流程示意

{{< figure src="workflow.png" alt="Quotabase-Lite 的客戶、商品、報價、狀態、列印與收據流程。" caption="依公開功能繪製的示意，不含客戶姓名、金額、交易編號或真實文件；不是產品介面截圖。" >}}

## 展示邊界

本頁展示業務建模、資料處理與產品實作，不沿用尚未重新核驗的效能數字，也不將收據核對功能延伸為法規符合性或法律效力的保證。

[GitHub 程式碼與功能說明](https://github.com/DylanChiang-Dev/DC-quotabase)
