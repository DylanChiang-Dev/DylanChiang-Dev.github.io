---
title: "Paper reading: LLMs CAN GET 'BRAIN ROT'! - Research on cognitive decline in large language models"
summary: "Research from the University of Texas at Austin, Purdue University and other institutions proposed and verified the LLM Brain Rot hypothesis, and found that continued exposure to spam online text will lead to cognitive decline in large language models, including changes in reasoning ability, long text understanding, security and personality traits."
date: 2025-10-31
authors:
  - admin
tags:
  - "AI"
  - "large language model"
  - LLM
  - "Data quality"
  - "cognitive science"
  - "research paper"
  - arXiv
image:
  caption: "Schematic diagram of LLM Brain Rot experimental design"
---
I recently read the important research paper "LLMs CAN GET "BRAIN ROT"!" from institutions such as the University of Texas at Austin, Purdue University, and Texas A&M University. This study proposed and verified the "LLM Brain Rot Hypothesis" for the first time, and found that continued exposure to spam online text will lead to long-lasting cognitive decline in large language models. This is a very warning discovery.

## Research background and assumptions

### Source of inspiration

"Brain Rot" was named the word of the year by Oxford Dictionary in 2024. It is used to describe the cognitive decline caused by modern people's addiction to a large amount of trivial and unchallenging online content. This study shows that the impact of Internet addiction on human cognition is mainly reflected in three dimensions:

- **Attention Capacity**: The constant flow of online information undermines the ability to concentrate
- **Memory Process**: Rich online information changes the way knowledge is stored and retrieved
- **Social Cognition**: Online interactions reshape self-concept and affect self-esteem

### Research questions

Since large language models acquire human-like cognitive capabilities by learning trillions of data on the Internet, will they also experience a similar "Brain Rot" phenomenon? The research team established the **LLM Brain Rot Hypothesis**: Continuous pre-training on junk web text will lead to long-lasting cognitive decline in large language models.

## Experimental design and methods

### Garbage data definition

To test the hypothesis, the research team constructed spam and control datasets from social media (Twitter/X) and proposed two orthogonal spam data measures:

**M1 (Engagement)**: Based on the popularity of tweets (number of likes, retweets, replies) and length (number of tokens), select short but highly popular content as spam data

**M2 (Semantic Quality)**: Based on content semantic quality, including:
- Conspiracy theories, exaggerated claims or unfounded assertions
- Sensational headlines and clickbait language
- Superficial topic content
- Attractive style

### Experimental model

The study was conducted on four pre-trained and instruction-tuned models:
- Llama3 8B Instruct
- Qwen2.5 7B Instruct
- Qwen2.5 0.5B Instruct
- Qwen3 4B Instruct

### Benchmark test

The study assessed multiple dimensions of cognitive function:

| Cognitive Function | Benchmark Testing | Assessment Content |
|---------|---------|---------|
| **Reasoning Skills** | ARC Challenge | Scientific Problem Solving Skills |
| **Long Context Understanding** | RULER | Long-term memory retrieval and comprehension |
| **Ethics** | HH-RLHF, AdvBench | Safety Compliance Ability |
| **Personality Traits** | TRAIT | The Big Five and the Dark Triad |

## Key findings

### 1. Garbage intervention leads to cognitive decline

The study found that the junk intervention produced non-trivial effects on reasoning and long-context ability (Hedges' g > 0.3). In particular, the M1 (engagement) intervention caused more significant impairments in functional cognition (reasoning or long context) and safety.

### 2. Dose response effect

Experiments on Llama3 8B Instruct show that when the proportion of garbage data increases from 0% to 100%:

- **ARC-Challenge (COT)**: 74.9 → 57.2 (down 17.7 points)
- **RULER-CWE**: 84.4 → 52.3 (down 32.1 points)

This demonstrates a clear dose-response relationship between junk data and cognitive decline.

### 3. Changes in personality traits

Litter intervention not only affects cognitive abilities, but also changes LLM's personality traits:

**Negative changes**:
- Increased levels of psychosis
- Enhance narcissism and Machiavellian traits
- Decreased agreeableness

**Positive changes**:
- Increased openness and extraversion (in some cases)

### 4. Differences between M1 and M2

The study found that M1 (engagement) and M2 (semantic quality) interventions produced distinct effects. The M1 intervention resulted in more negative effects, especially on safety and personality traits, demonstrating that engagement is a new dimension independent of semantic quality.

## Failure mode analysis

###Thought-Skipping

By analyzing the reasoning process of LLM in the ARC task, the study identified five typical failure modes, three of which are related to "thinking jumps":

1. **No thinking**: The model answers directly without thinking.
2. **No plan**: The model starts thinking without developing a step-by-step plan.
3. **Jump Steps**: Starting reasoning but not completing all planning steps

More than 98% of failure cases are related to thinking jumps. In M1 garbage intervention, 84% of failures belong to the "no thinking" type.

### Popularity vs Length
Research has found that popularity (a non-semantic indicator) is a better indicator of the Brain Rot effect than length:
- Popularity plays a more critical role in reasoning tasks
- Length is more important in long context understanding
- Both have different effects on different tasks

## Mitigation attempts and persistence

### 1. Reflective Reasoning

Try two reflection methods to fix mental jumps:

- **Self-Reflect**: Model self-reflection (limited effect)
- **Ext-Reflect**: Provide feedback using an external strong model (GPT-4o-mini)

The results show that even with strong external reflection, the model cannot fully recover to baseline levels.

### 2. Posterior instruction tuning

The study also tested extended instruction tuning and continuous control training:

- Even with 4.8x more garbage intervention instruction tuning data
- Still unable to completely reverse the Brain Rot effect
- Significant gaps with benchmarks remain: ARC-C COT (17.3%), RULER (9%), AdvBench (17.4%)

This shows that the Brain Rot effect has been deeply internalized and existing mitigation methods cannot fundamentally solve the problem.

## Significance and Enlightenment

### 1. Warning on LLM training

This study provides the first significant evidence of data quality as a causal driver of LLM capability degradation, re-considering continuous pre-training data management as a safety issue during training.

### 2. "Cognitive health check" is required

The findings call for routine "cognitive health checks" for deployed LLMs, similar to health monitoring in the medical field.

### 3. The urgency of data curation

As LLM continues to scale and ingest ever larger amounts of network data, careful data curation and quality control are critical to preventing cumulative damage.

## Thinking and Reflection

This research reveals a disturbing reality: the social media content we are exposed to every day may not only affect human cognition, but also impair the "cognitive" capabilities of AI models. While LLMs obviously do not have the same "grey matter" or "neurons" as humans, they do have parameters and attention mechanisms that can be similarly "overfitted" or "distracted" by certain data patterns.

The most worrying finding in the study is that the Brain Rot effect persists even with posterior tuning using large-scale clean data. This implies that we need to fundamentally rethink data collection and pre-training practices, focusing not only on model performance, but also on the "cognitive health" of the model over the long term.

## Conclusion

"LLMs CAN GET "BRAIN ROT"!" This research contributes valuable insights to the field of AI security, and is the first to systematically prove the negative impact of spam online text on large language models. The research not only verified the LLM Brain Rot hypothesis, but also revealed the fine mechanism of cognitive decline, pointing out the direction for future AI safety research.

With the rapid development of AI, we must face the importance of data quality, establish stricter data curation standards, and develop an effective AI "cognitive health" monitoring mechanism. Only in this way can we ensure that AI systems maintain their due "cognitive purity" while serving humans.

---

**Paper Information**:
- **Title**: LLMs CAN GET "BRAIN ROT"!
- **Authors**: Shuo Xing, Junyuan Hong, Yifan Wang, Runjin Chen, etc.
- **Institution**: University of Texas at Austin, Purdue University, Texas A&M University
- **Published**: arXiv:2510.13928v1 [cs.CL] October 15, 2025
- **Paper address**: https://arxiv.org/abs/2510.13928
- **Project Page**: https://llm-brain-rot.github.io/