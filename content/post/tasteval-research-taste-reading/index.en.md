---
title: "Paper reading: AI is better at experiments—but does that mean better research taste?"
summary: "Reading TasteVal through the distinction between doing research efficiently, recognizing its value, and exercising the judgment needed to evaluate both."
date: 2026-10-12
authors:
  - admin
tags:
  - Paper reading
  - Artificial Intelligence
  - LLM
  - Research Taste
draft: false
featured: false
---

## Paper information

- **Paper**: [TasteVal](https://arxiv.org/abs/2610.06824v2)
- **Authors**: Oliver Jaffe and Dane Sherburn
- **Source and version**: arXiv preprint, 2610.06824v2, revised October 6, 2026
- **Reading sources**: [HTML](https://arxiv.org/html/2610.06824v2) / [PDF](https://arxiv.org/pdf/2610.06824v2)

## Design and findings

These points summarize the paper; the section links locate the supporting passages.

- **Scope**: A fixed problem and shared Coder separate experimental judgment from implementation; problem selection is not measured. ([Section 2](https://arxiv.org/html/2610.06824v2#S2))
- **Results**: Opus 5.5 has a **2.3×** compute multiplier (**95% CI 1.15–4.37**). Recent efficiency and final-performance trends double roughly every **3** and **14.6 months**, respectively. ([Section 3.1](https://arxiv.org/html/2610.06824v2#S3.SS1))
- **Novelty**: Neither models nor humans produced “Invented” proposals: those containing a structural component absent from the literature. ([Section 3.2](https://arxiv.org/html/2610.06824v2#S3.SS2))
- **Verification**: Tasks remain private, limiting external scrutiny. ([Section 4](https://arxiv.org/html/2610.06824v2#S4))

**Efficiency, result quality, and novelty are distinct. Not observing a breakthrough does not prove one impossible.**

## My understanding: doing good research and recognizing it

My first response in discussing this paper was that reaching the same result with fewer experiments can indeed reflect part of research taste. But evaluating taste still requires human judgment; efficiency alone is not the whole concept.

There are two different abilities here: **doing research well and recognizing the value of research**. Someone may understand a result without yet appreciating the choice of question, the elegance of an experiment, or why a finding matters. Some forms of research beauty become visible only after understanding the problem and method.

### Efficient research versus research that clarifies a problem

The following is a hypothetical example, not a TasteVal result.

Two researchers want to improve the same model. Researcher A tunes parameters effectively and raises the score after a few attempts. Researcher B suspects that the model exploits a shortcut in the data and designs a simple control experiment, showing that the high score does not demonstrate the capability they had assumed.

A's strength is **getting the job done efficiently**. B's strength is **identifying the crucial issue and making something unclear become clear**. B may not raise the score but may change our understanding of the problem.

That is the distinction I want to retain: **obtaining a result is not identical to understanding why it is meaningful**.

### Evaluating taste also takes judgment

An evaluator who looks only at scores might miss B's contribution. Appreciating the control experiment requires understanding which explanation it rules out and why that explanation could have misled us.

Still, this must not become “anyone who disagrees lacks taste.” Research beauty may resist complete quantification, but we should try to explain its value: What problem does it reveal? What doubt does it resolve? What understanding does it change?

**Judgment is not authority exempt from explanation; it is the ability to articulate reasons for value.**

## The question I retain

I would distinguish at least two layers of research taste: knowing which experiments are worth running, and recognizing which problems, explanations, and findings deserve attention.

This note is not a final verdict on AI's capabilities. The evaluation principle I want to keep is: **acknowledge improvements in efficiency while continuing to ask whether they bring deeper understanding**.

---

**Reading and writing note**: This article was organized through AI-assisted reading and discussion, with the personal perspective confirmed by the author. Paper findings are separated from reading reflections; the hypothetical example is not research data. This note is neither a reproduction nor an independent validation of the original study.
