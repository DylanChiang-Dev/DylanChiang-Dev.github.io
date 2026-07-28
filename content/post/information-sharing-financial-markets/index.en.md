---
title: "Paper reading: Information sharing in financial markets"
summary: "Goldstein et al. (2024) proposed a counter-intuitive theory: in financial markets, information is usually shared by investors with “less information” to investors with “more information” in order to use the other party’s transactions to reduce their own price impact."
date: 2025-04-05
authors:
  - admin
tags:
  - "Paper reading"
  - "financial economics"
  - "Information Economics"
  - "market microstructure"
draft: false
---
#paper information

**Title**: Information sharing in financial markets
**Author**: Itay Goldstein, Yan Xiong, Liyan Yang
**Journal**: Journal of Financial Economics (2024)
**Link**: [Related Links](https://doi.org/10.1016/j.jfineco.2024.103967)

---

# Summary of thesis content

## 1. Research puzzle: Why should secrets be leaked?

In financial markets, "information" is money. Logically speaking, if you know that a certain stock will rise, you should buy it secretly rather than publicizing it everywhere. However, the real world is full of “information sharing”: from early investment clubs to now Reddit (r/wallstreetbets), Twitter, and Seeking Alpha, investors are keen to exchange opinions.

This paper attempts to answer two core questions:
1. **Why** are investors willing to share expensive private information?
2. **Who** is sharing? Should experts share with novices, or should novices share with experts?

## 2. Core model and discovery

The author builds an extended model based on Kyle (1985) that includes two types of investors:
* **H (High-informed)**: A "veteran" with high information accuracy and even perfect information.
* **L (Low-informed)**: A "rookie" with low information accuracy and noisy signals.

### Shocking conclusion:
The model equilibrium shows that the direction of information flow is **from L to H**.
In other words, ** "people with less information" will take the initiative to tell information to "people with more information", while "people with more information" will choose to shut up. **

## 3. Key mechanism: Trading-Against-Error

Why is L so stupid to tell information to H who is more powerful than him? There is a subtle strategic consideration behind this:

1. **L’s Dilemma**: The information in L’s hand contains “real fundamentals” and “noise (error)”. L himself cannot tell the difference, so when he trades based on signals, the noise often pushes the price in the wrong direction (generating a price shock).
2. **H’s ability**: H has more accurate information. He can distinguish which part of L’s signal is real and which part is noise.
3. **Benefits of Sharing**:
    - When L tells H information, H will find an error in L's signal.
    - H will perform **Trade against error** against this error.
    - **Result**: H's reverse trade offsets L's erroneous order flow due to noise. This actually reduces L's price impact, allowing L to trade at a better price.

To put it simply, L shared information in order to invite H to be his opponent and help him "correct" the market price, thus making L's own transactions smoother.

## 4. The lament of the veteran (H): Did you lose money after listening to it?

The paper’s most ironic finding concerns H’s situation:
- **Ex-post**: Once L shares the information, H will of course listen because it can help him earn profits on "wrong trades".
- **Ex-ante**: However, if H had a choice, he would actually **prefer L not to share information**.

The reason is that once the information becomes public:
1. If L knows that H is helping to "correct" the price, L will become **Trade more aggressively**.
2. The Market Maker discovers that the market is filled with informed traders and will **reduce market liquidity** (increase Kyle's Lambda).
3. The harm caused by these two indirect effects to H exceeds the direct benefit he obtains from the information.

This is a **Commitment Problem**: H cannot promise "I won't listen", so he is forced into a lower-profit equilibrium.

---

#My understanding and experience

While reading this paper, I kept thinking of Reddit or stock market forums.

### 1. Why does "leek" like to post the most?
We often wonder why retail investors (L) especially like to analyze stocks at length on the Internet, while the real big institutional investors (H) usually make a fortune in silence? This paper gives a cool explanation: when retail investors share information, they are actually subconsciously seeking "verification" or "liquidity" in the market.
Although retail investors may not think that deeply (what to reduce the price impact), from the perspective of evolutionary equilibrium, retail investors shouting loudly and attracting institutional investors (whether they are copying or counter-trading) may actually make it easier for retail investors' orders to be completed.

### 2. The Curse of the Smart Man
I found the part about H particularly philosophical. H obviously has more information and stronger capabilities, but because of L's "big mouth", H is forced to get involved in a market with less liquidity and more fierce competition.
This is very much like the current financial market, where information is awash. For a top fund manager, he is forced to receive countless tweets, news, and gossip every day. Although every piece of news seems to be profitable (can be used for arbitrage), the overall result is that everyone is fighting in the Red Sea, and the profits are not as good as those in the era of opaque information.

### 3. Social media noise
The paper ends by mentioning that this can be used to explain social media. The information on the community is usually of low quality (from L), but can attract the attention of high-frequency traders or hedge funds (H). H makes money by analyzing this "noise" (such as Sentiment Analysis), while L gains a certain degree of market influence through this collective behavior.

In summary, this paper tells us: In the market, silence is golden (for H), but noise may be a survival strategy (for L). **

---

**Reading date**: 2025-04-05
**Notes organized**: Dylan Chiang