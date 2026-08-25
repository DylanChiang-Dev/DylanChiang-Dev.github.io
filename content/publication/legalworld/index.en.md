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
  Civil litigation is inherently a life-cycle process: what a lawyer drafts on day one constrains what unfolds at trial months later. Yet existing legal benchmarks evaluate isolated subtasks, and prior legal-agent simulators reinitialize each scenario from shared ground truth, leaving cross-stage causal dependencies unmodeled. We present LegalWorld, a life-cycle interactive environment that models Chinese civil litigation as a causally connected state chain of five stages (seven sub-scenarios), grounded in 75,309 paired Chinese civil judgments. We pair it with reusable infrastructure (local memory, global case memory, and a Skill/Tool library) that keeps each dispute consistent across its full life cycle. Building on this environment, we construct LongJud-Bench to evaluate agent capability across all five connected stages. 18,992 ratings from 217 legal-background evaluators confirm that LegalWorld trajectories are procedurally faithful and role-consistent; and a capability-level cross-model evaluation reveals sharp divergences that aggregate scores cannot expose, with no single backbone leading across consultation, drafting, and courtroom advocacy. Detailed resources will be released publicly.

# Summary. An optional shortened abstract.
summary: "LegalWorld models Chinese civil litigation as a causally connected five-stage life-cycle environment and introduces LongJud-Bench to evaluate legal agents across connected stages."

tags:
  - Legal NLP
  - Large Language Models
  - AI Agents
  - Benchmarks

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

This paper is included in the **EMNLP 2026 Main Conference**.

## Abstract

Civil litigation is inherently a life-cycle process: what a lawyer drafts on day one constrains what unfolds at trial months later. Yet existing legal benchmarks evaluate isolated subtasks, and prior legal-agent simulators reinitialize each scenario from shared ground truth, leaving cross-stage causal dependencies unmodeled.

We present LegalWorld, a life-cycle interactive environment that models Chinese civil litigation as a causally connected state chain of five stages and seven sub-scenarios, grounded in 75,309 paired Chinese civil judgments. We also construct LongJud-Bench to evaluate agent capability across all five connected stages.

Ratings from 217 legal-background evaluators, totaling 18,992 evaluations, confirm that LegalWorld trajectories are procedurally faithful and role-consistent. Capability-level cross-model evaluation further reveals divergences that aggregate scores cannot expose.
