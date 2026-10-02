---
title: "LegalWorld: A Life-Cycle Interactive Environment for Legal Agents"
summary: "Collaborative research / third author: primarily responsible for frontend development and interaction design, with contributions to human evaluation, system integration, and project presentation."
date: 2026-06-17
authors:
  - admin
tags:
  - Collaborative Research
  - Legal NLP
  - LLM
  - AI Agent
  - Benchmarks
featured: true
draft: false
image:
  preview_only: true
  alt_text: "An early LegalWorld frontend demonstration showing character dialogue, tool and skill panels, case stages, and the town radar."
  caption: "An early frontend demonstration, not the current live version."
---

## Project overview

LegalWorld models Chinese civil litigation as five causally connected stages and seven sub-scenarios. It carries case information and actions across stages rather than evaluating isolated legal tasks. The team also introduced LongJud-Bench to evaluate agent capabilities across connected stages.

<!--more-->

## My contributions

**Collaborative research / co-author (third author, listed as Tao Chiang) / frontend development and research support**

My primary responsibility in LegalWorld was frontend development and interaction design, turning legal-agent case workflows into an interface that users can operate, observe, and participate in. My work covered character dialogue, player-lawyer input, document and courtroom workbenches, and visualization of tools, skills, memory, and case progress. I also contributed to the human-evaluation system and data organization, frontend–backend integration, and deployment maintenance. In addition, I created public-facing pages, recorded demonstrations, and project introduction videos to support research validation and presentation.

- **Frontend and interaction design**: Built line-by-line character dialogue, player-lawyer input, document and courtroom workbenches, case debriefing, and onboarding so users can read, respond, and complete tasks within the case workflow.
- **Runtime visualization**: Presented agent tools, skills, and memory states, using the town radar and case-stage displays to help users understand the current workflow and character actions.
- **Human evaluation and research support**: Contributed to the evaluation workbench, case assignment, and score-submission workflows, and supported evaluation-data export, organization, and reconciliation.
- **System integration and project presentation**: Contributed to frontend–backend integration and deployment maintenance, and created the public landing page, recorded demonstrations, and project introduction videos to support system use and research presentation.

## Interface showcase

These frontend demonstrations were captured during development. They retain the names and Chinese interface text of an early version and do not represent the latest live system.

{{< figure src="featured.png" alt="An early LegalWorld frontend demonstration showing character dialogue, tool and skill panels, case stages, and the town radar." caption="Main interface: character dialogue, tool and skill panels, and case-progress visualization in an early-version demonstration." >}}

{{< figure src="court-workbench.png" alt="An early LegalWorld courtroom workbench demonstration, with a sample case and response prompts on the left and an input area for the user's courtroom statement on the right." caption="Courtroom workbench: sample-case context, response prompts, and user statements in one interface, shown in an early-version demonstration." >}}

## Related resources

- [Publication on this site]({{< relref "/publication/legalworld/" >}})
- [LegalWorld research project website](https://chidaic.github.io/Legal-world/)
- [Live system](http://www.fudan-disc.com/legalworld/)
- [Official source code](https://github.com/sii-research/Legal-world)
- [Preprint](https://arxiv.org/abs/2606.18728)
