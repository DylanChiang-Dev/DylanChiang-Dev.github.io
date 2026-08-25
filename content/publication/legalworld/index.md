---
title: "LegalWorld: A Life-Cycle Interactive Environment for Legal Agents"
authors:
  - Songhan Zuo
  - Shengbin Yue
  - Tao Chiang
  - Guanying Li
  - Yun Song
  - Xuanjing Huang
  - Zhongyu Wei
date: "2026-06-17T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-08-25T00:00:00Z"

# Publication type.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing"
publication_short: "EMNLP 2026 (Main Conference)"

abstract: |
  民事訴訟本質上是一個生命週期過程：律師在第一天撰寫的內容，會制約數月後審判中發生的事情。然而，現有法律基準多半評估彼此孤立的子任務，過去的法律智能體模擬器也常以共享的真實答案重新初始化每個情境，因而未能建模跨階段的因果依賴。我們提出 LegalWorld，一個面向法律智能體的生命週期互動環境，將中國民事訴訟建模為由五個階段（七個子情境）構成、具有因果連結的狀態鏈，並以 75,309 組配對的中國民事判決為基礎。我們搭配可重用的基礎設施（本地記憶、全域案件記憶與 Skill/Tool 函式庫），使每一個爭議在完整生命週期中保持一致。在此環境上，我們建立 LongJud-Bench，用於評估智能體跨越五個相互連結階段的能力。217 名具法律背景的評估者共提供 18,992 份評分，確認 LegalWorld 的軌跡具有程序忠實性與角色一致性；跨模型能力層級的評估也揭示了整體分數無法呈現的顯著差異，沒有任何單一基礎模型能在諮詢、撰寫與法庭辯護三種能力上同時領先。相關資源將公開釋出。

# Summary. An optional shortened abstract.
summary: "LegalWorld 將中國民事訴訟建模為具因果連結的五階段生命週期環境，並以 LongJud-Bench 評估法律智能體的跨階段能力。"

tags:
  - 法律自然語言處理
  - 大型語言模型
  - AI 智能體
  - 評測基準

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking.
hugoblox:
  ids:
    arxiv: 2606.18728

links:
  - type: preprint
    provider: arxiv
    id: 2606.18728

# Associated Projects (optional).
projects: []

# Slides (optional).
slides: ""
---

本論文收錄於 **EMNLP 2026 主會議（Main Conference）**。

## 摘要

民事訴訟本質上是一個生命週期過程：律師在第一天撰寫的內容，會制約數月後審判中發生的事情。然而，現有法律基準多半評估彼此孤立的子任務，過去的法律智能體模擬器也常以共享的真實答案重新初始化每個情境，因而未能建模跨階段的因果依賴。

本研究提出 LegalWorld，一個面向法律智能體的生命週期互動環境，將中國民事訴訟建模為由五個階段、七個子情境構成且具有因果連結的狀態鏈，並以 75,309 組配對的中國民事判決為基礎。研究同時建立 LongJud-Bench，用於評估智能體跨越五個相互連結階段的能力。

相關評估共包含 217 名具法律背景的評估者所提供的 18,992 份評分，結果確認 LegalWorld 的軌跡具有程序忠實性與角色一致性；跨模型能力層級的評估也揭示了整體分數無法呈現的差異。
