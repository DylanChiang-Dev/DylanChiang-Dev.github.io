---
title: "論文閱讀：提示詞禮貌程度如何影響 LLM 準確度：Mind Your Tone 論文解析"
summary: "賓州州立大學研究發現，使用無禮提示詞反而能提升 ChatGPT-4o 的準確度，挑戰了人們對 AI 互動禮貌性的傳統認知"
date: 2025-10-17
authors:
  - admin
tags:
  - 人工智慧
  - 提示工程
  - LLM
  - 自然語言處理
  - 研究論文
image:
  caption: 'AI 與人類互動的禮貌性研究'
---

近日閱讀了一篇來自賓州州立大學的有趣研究論文《Mind Your Tone: Investigating How Prompt Politeness Affects LLM Accuracy》，這項研究探討了提示詞的禮貌程度如何影響大型語言模型的準確度，結果相當令人意外。

## 研究背景與方法

研究人員創建了一個包含 50 個基礎問題的數據集，涵蓋數學、科學和歷史領域。每個問題都被改寫成五種不同語氣的版本：

1. **非常禮貌** (Very Polite)
2. **禮貌** (Polite)
3. **中性** (Neutral)
4. **無禮** (Rude)
5. **非常無禮** (Very Rude)

總共生成了 250 個獨特的提示詞，並使用 ChatGPT-4o 進行測試。

## 意外的發現

研究結果與直覺相反：**無禮的提示詞反而比禮貌的提示詞表現更好**。

- **非常禮貌**：80.8% 準確率
- **禮貌**：81.4% 準確率
- **中性**：82.2% 準確率
- **無禮**：82.8% 準確率
- **非常無禮**：84.8% 準確率

配對樣本 t 檢驗顯示，這些差異具有統計顯著性 (p < 0.05)。

## 提示詞語氣示例

研究者為每個禮貌等級設計了不同的前綴詞：

**非常禮貌示例**：
- "Can you kindly consider the following problem and provide your answer."
- "Would you be so kind as to solve the following question?"

**非常無禮示例**：
- "You poor creature, do you even know how to solve this?"
- "Hey gofer, figure this out."

## 與先前研究的差異

這項發現與之前的研究有所不同。Yin 等人 (2024) 的研究顯示「無禮提示詞通常導致較差的表現」，但他們使用的是 ChatGPT-3.5 和 Llama2-70B 等較早期的模型。

研究人員推測，**新一代的 LLM 可能對語氣變化有不同的反應模式**。

## 可能的解釋機制

1. **困惑度效應**：語氣詞彙可能影響提示詞的困惑度，進而影響模型表現
2. **長度因素**：禮貌表達通常需要更多文字，可能影響處理效率
3. **訓練數據偏差**：模型可能在訓練過程中接觸過不同語氣的數據分佈

## 研究限制與未來方向

### 限制：
- 數據集規模相對較小 (50 個基礎問題)
- 主要測試 ChatGPT-4o，其他模型結果有限
- 僅評估選擇題準確度，未考慮其他品質指標

### 未來研究：
- 擴展到更多 LLM 模型
- 探索不同任務類型的表現差異
- 研究語氣影響的底層機制
- 開發既有效又友善的提示策略

## 倫理考量

雖然研究發現無禮提示詞效果更好，但研究者**強調不建議在實際應用中使用敵對性語言**。負面的互動體驗可能影響用戶體驗、可及性和包容性，並助長有害的溝通規範。

## 結論

這項研究揭示了 LLM 對提示詞表面特徵的敏感性，挑戰了我們對人機互動禮貌性的傳統認知。未來需要在提升模型性能與維護健康互動環境之間找到平衡點。

---

## 📄 論文資訊

- **論文標題**：Mind Your Tone: Investigating How Prompt Politeness Affects LLM Accuracy
- **作者**：Om Dobariya, Akhil Kumar
- **機構**：賓州州立大學 (Pennsylvania State University)
- **arXiv 連結**：[https://arxiv.org/pdf/2510.04950](https://arxiv.org/pdf/2510.04950)
- **發表年份**：2025