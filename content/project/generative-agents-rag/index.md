---
title: "Generative Agents：研究復現、模型遷移與法律 RAG 擴充"
summary: "基於 Stanford Generative Agents，完成模型服務遷移、三人互動情境與法律知識檢索整合；原框架與個人擴充明確區分。"
date: 2026-10-03
authors:
  - admin
tags:
  - 研究復現
  - AI Agent
  - RAG
  - 計算社會科學
featured: true
draft: false
image:
  filename: architecture.png
  preview_only: true
  alt_text: "生成式代理人擴充架構示意：法律文檔經分塊及向量檢索後注入代理人情境，並用三人互動測試整合。"
  caption: "研究復現與 RAG 擴充示意；原始 Generative Agents 框架來自 Stanford。"
---

這是一項基於 Stanford Generative Agents 的課程實作與研究復現。我以既有代理人模擬框架為基礎，進行模型服務遷移、互動情境設計及法律知識 RAG 整合，觀察外部知識如何進入代理人的思考與對話流程。

<!--more-->

## 我做了哪些擴充

- **模型服務遷移**：調整聊天模型呼叫與設定，將原有服務接入火山引擎／Doubao；另處理多模態 Embedding 端點，避免把向量介面當成聊天介面。
- **三人互動情境**：配置角色、初始位置與會面設定，用較小的多人情境觀察對話、場景及知識觸發，不直接套用整個原始示範。
- **地圖與角色一致性**：同步調整場景區域、角色的居住及空間記憶、生成位置，避免前後端資料指向不同地點。
- **法律文檔索引**：加入文本分塊、Embedding 索引及原文／向量映射，以 JSON 與 NumPy 保存及處理資料。
- **檢索與 Context 整合**：以餘弦相似度檢索 Top-K 文檔，組合查詢與檢索內容；在代理人認知流程中加入法律關鍵詞觸發。
- **整合檢查與記錄**：保存檢索測試、觸發檢查及多人對話記錄，區分系統能運作與模型行為是否經實證驗證。

## 擴充架構

{{< figure src="architecture.png" alt="文檔分塊、向量檢索、Context 注入與三個代理人互動的架構示意。" caption="依公開實作繪製的架構示意，不是模擬執行截圖；原框架歸屬與本人的整合工作分開呈現。" >}}

## 來源與研究邊界

原始代理人框架及其研究來自 Stanford Generative Agents，我不將原有記憶、反思或規劃機制歸為個人發明。本頁展示的是復現、模型介面適配、情境設定與 RAG 擴充，不宣稱已證明模擬行為等同真實人類，或取得未測量的回答品質提升。

## 公開資源

[我的擴充倉庫與實作記錄](https://github.com/DylanChiang-Dev/DC-generative_agents) · [原始 Generative Agents](https://github.com/joonspk-research/generative_agents)
