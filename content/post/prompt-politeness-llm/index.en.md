---
title: "Paper Reading: How Prompt Word Politeness Affects LLM Accuracy: Mind Your Tone Paper Analysis"
summary: "Penn State University research found that using rude prompt words can actually improve the accuracy of ChatGPT-4o, challenging people's traditional understanding of politeness in AI interactions"
date: 2025-10-17
authors:
  - admin
tags:
  - "AI"
  - "Prompt project"
  - LLM
  - "natural language processing"
  - "research paper"
image:
  caption: "Research on politeness in the interaction between AI and humans"
---
I recently read an interesting research paper from Penn State University called "Mind Your Tone: Investigating How Prompt Politeness Affects LLM Accuracy". This study explores how the politeness of prompt words affects the accuracy of large language models. The results are quite surprising.

## Research background and methods

The researchers created a dataset of 50 foundational questions covering the fields of mathematics, science and history. Each question was rewritten into five different tone versions:

1. **Very Polite** (Very Polite)
2. **Polite** (Polite)
3. **Neutral** (Neutral)
4. **Rude** (Rude)
5. **Very Rude**

A total of 250 unique prompt words were generated and tested using ChatGPT-4o.

## Unexpected discovery

The findings were counter-intuitive: **Impolite prompt words actually performed better than polite prompt words**.

- **Very Polite**: 80.8% accuracy
- **Courtesy**: 81.4% accuracy
- **Neutral**: 82.2% accuracy
- **rude**: 82.8% accuracy
- **Very Rude**: 84.8% accuracy

Paired samples t-test showed that these differences were statistically significant (p < 0.05).

## Example of prompt word tone

The researchers designed different prefixes for each politeness level:

**Very polite example**:
- "Can you kindly consider the following problem and provide your answer."
- "Would you be so kind as to solve the following question?"

**Very rude example**:
- "You poor creature, do you even know how to solve this?"
- "Hey gofer, figure this out."

## Differences from previous studies

This finding differs from previous research. Research by Yin et al. (2024) shows that "rude prompt words generally lead to poorer performance", but they used older models such as ChatGPT-3.5 and Llama2-70B.

The researchers speculate that **newer generations of LLM may have different response patterns to changes in tone**.

## Possible explanation mechanisms

1. **Perplexity Effect**: Mood vocabulary may affect the confusion of prompt words, thereby affecting model performance
2. **Length factor**: Polite expressions usually require more words, which may affect processing efficiency
3. **Training data bias**: The model may have been exposed to data distributions with different tones during the training process

## Research limitations and future directions

### Limitations:
- Relatively small dataset size (50 base questions)
- Mainly tested ChatGPT-4o, other models have limited results
- Only the accuracy of multiple-choice questions is evaluated, other quality indicators are not considered

### Future research:
- Expanded to more LLM models
- Explore performance differences across different task types
- Study the underlying mechanism of the influence of tone
- Develop reminder strategies that are both effective and friendly

## Ethical considerations

Although the study found that rude prompt words were more effective, the researchers emphasized that they do not recommend using hostile language in practical applications. Negative interactive experiences can impact user experience, accessibility, and inclusivity, and promote harmful communication norms.

## Conclusion

This study reveals the sensitivity of LLM to surface features of prompt words, challenging our traditional understanding of politeness in human-computer interaction. In the future, a balance needs to be found between improving model performance and maintaining a healthy interactive environment.

---

## 📄 Paper information

- **Paper Title**: Mind Your Tone: Investigating How Prompt Politeness Affects LLM Accuracy
- **Author**: Om Dobariya, Akhil Kumar
- **Institution**: Pennsylvania State University
- **arXiv link**: [https://arxiv.org/pdf/2510.04950](https://arxiv.org/pdf/2510.04950)
- **Year of Publication**: 2025