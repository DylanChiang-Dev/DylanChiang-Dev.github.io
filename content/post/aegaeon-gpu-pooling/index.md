---
title: "論文閱讀：Aegaeon - 市場上並發 LLM 服務的高效 GPU 池化技術"
summary: "阿里雲模型市場部署的 Aegaeon 系統通過 token 級別的自動擴展，實現了 82% 的 GPU 資源節省，支援單 GPU 同時服務高達 7 個模型"
date: 2025-10-22
authors:
  - admin
tags:
  - 人工智慧
  - 系統優化
  - GPU 計算
  - LLM 推理
  - 分散式系統
  - 研究論文
image:
  caption: 'GPU 池化技術架構圖'
---

最近閱讀了一篇即將發表在 SOSP '25 的重要論文《Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market》，這篇由北京大學和阿里巴巴集團合作完成的研究，提出了一個革命性的多模型 LLM 服務系統，大幅提升了 GPU 資源利用效率。

## 研究背景與挑戰

### 模型市場的資源浪費問題

隨著大型語言模型的快速發展，Hugging Face 等模型市場現在托管了超過一百萬個模型。然而，在實際生產環境中存在嚴重的資源浪費：

- **長尾效應明顯**：94.1% 的模型僅接收 1.35% 的請求
- **資源配置不均**：17.7% 的 GPU 用於服務平均每秒少於 0.2 個請求的"冷"模型
- **突發負載難以應對**："熱"模型（如 DeepSeek、Llama、Qwen）面臨請求突發，可能超出預留資源

### 現有方案的局限

現有的 GPU 池化解決方案主要分為兩類：

1. **多路復用 (Multiplexing)**：受 GPU 記憶體容量限制，最多支援 2-3 個模型/GPU
2. **自動擴展 (Auto-scaling)**：在請求級別進行擴展，存在頭部阻塞 (HOL) 問題

## Aegaeon 的核心創新

### Token 級別自動擴展

Aegaeon 的最大創新在於** token 級別的自動擴展機制**，與現有方案的請求級別擴展形成對比：

**請求級別擴展**：必須等待整個請求完成才能切換模型
**Token 級別擴展**：可以在 token 生成過程中預測性地切換模型

### 分離式調度架構

Aegaeon 將 GPU 池分為兩個分區：

1. **Prefill 實例**：專門處理輸入提示的初始處理
2. **Decoding 實例**：專門處理後續 token 的生成

這種分離避免了統一調度的複雜性，實現了更平衡的資源利用。

### 調度策略

**Prefill 階段調度**：
- 採用分組 FCFS (First-Come-First-Serve) 策略
- 將相同模型的請求分組，最大組大小為 8
- 優先加載到現有組，減少過度擴展

**Decoding 階段調度**：
- 使用加權輪詢 (Weighted Round-Robin) 策略
- 基於 SLO 要求分配時間配額
- 利用輸出緩衝來隱藏延遲

## 系統優化技術

### 組件重用 (Component Reuse)

Aegaeon 通過重用推理引擎組件大幅減少初始化開銷：
- 分散式執行器（Ray、NCCL）
- 分析和優化組件
- 分詞器
- 記憶體池

### 顯式記憶體管理

**自管理 VRAM 緩衝區**：
- 一次性分配所有必要的 VRAM
- 使用 bump 分配策略避免碎片
- 繞過張量庫的分配機制

**統一 KV 快取**：
- 採用 slab 分配技術
- 為每種形狀的 KV 快取維護專用池
- 有效管理記憶體碎片

### 細粒度 KV 快取同步

使用 CUDA 事件實現非同步 KV 快取傳輸：
- `cudaEventRecord`：記錄傳輸事件
- `cudaEventQuery`：查詢完成狀態
- `cudaStreamWaitEvent`：同步執行順序

## 實驗結果與性能評估

### 端到端性能

在 ShareGPT 數據集上的測試結果：

- **RPS = 0.1**：Aegaeon 支援 70 個模型，比 ServerlessLLM 高 2 倍
- **RPS = 0.5**：Aegaeon 實現 2.5 倍更高的請求到達率
- **單 GPU 效率**：支援高達 7 個模型/GPU

### 嚴格 SLO 下的表現

即使在更嚴格的 SLO 要求下：
- **0.5× SLO**：仍比基線方案多支援 50% 的模型
- **0.3× SLO**：多支援 12.5% 的模型

### 自動擴展速度

- 50% 的情況下實現近乎即時擴展（通過預取）
- 其餘情況在 1 秒內完成擴展
- 每請求的 KV 快取傳輸開銷小於 1 秒

## 生產環境部署

### 部署規模

Aegaeon 已在阿里雲模型工作室進行為期三個月的測試部署：

- **GPU 規模**：213 個 H20 GPU
- **模型數量**：47 個模型（28 個 1.8-7B，19 個 32-72B）
- **資源節省**：從原本的 1,192 個 GPU 減少到 213 個（節省 82%）

### 實際性能提升

GPU 利用率從平均 13.3%∼33.9% 提升到 48.1%，在 70 小時的監控期間沒有觀察到 SLO 違規或服務中斷。

## 技術貢獻總結

1. **首次揭示**市場上並發 LLM 服務的過度成本問題
2. **首個 token 級別自動擴展**的多模型服務解決方案
3. **首次全面優化**預測性自動擴展過程，開銷降低 97%
4. **真實生產部署驗證**，證明顯著降低 OPEX 的能力

## 未來發展方向

雖然 Aegaeon 取得了突破性進展，但在以下方面還有改進空間：

- 支援更大規模的模型集群
- 優化極低延遲場景下的性能
- 探索與多路復用技術的結合
- 擴展到更多樣化的硬體平台

## 結論

Aegaeon 代表了 LLM 推理系統設計的一個重要里程碑。通過 token 級別的自動擴展和全棧優化，它不僅解決了模型市場面臨的資源浪費問題，為雲端 AI 服務的可持續發展提供了技術基礎。

---

## 📄 論文資訊

- **論文標題**：Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market
- **作者**：Yuxing Xiang, Xue Li, Kun Qian, Yufan Yang, Diwen Zhu, Wenyuan Yu, Ennan Zhai, Xuanzhe Liu, Xin Jin, Jingren Zhou
- **機構**：北京大學、阿里巴巴集團
- **會議**：ACM SIGOPS 31st Symposium on Operating Systems Principles (SOSP '25)
- **發表年份**：2025
- **DOI**：https://doi.org/10.1145/3731569.3764815
- **PDF 連結**：[https://dl.acm.org/doi/pdf/10.1145/3731569.3764815](https://dl.acm.org/doi/pdf/10.1145/3731569.3764815)