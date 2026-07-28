---
title: "BOYA: Humanities and Social Sciences AI Research Skills Library"
summary: "With Human-in-the-loop as the core, topic selection, literature, research design, writing and submission are broken down into an AI research workflow that can be checked and relayed."
date: 2026-06-12
authors:
  - admin
tags:
  - "Open source projects"
  - Human-centered AI
  - AI Agent
  - "Humanities and Social Sciences"
  - "research tools"
featured: true
draft: false
---
BOYA is an open source AI paper workflow I designed for researchers in the humanities and social sciences. It breaks tasks such as topic selection, literature retrieval, research design, paper revision, citation checking, oral examination and submission into skills that can be used independently or run in relays, allowing AI to handle the heavy work while leaving research judgment and academic responsibility to the researcher.

<!--more-->

## What I am responsible for in the project

I am responsible for BOYA's problem definition, workflow architecture, all skill design, actual test verification and open source maintenance.

- **Requirements Translation**: Convert tacit methodological knowledge in humanities and social science research into questions, checkpoints, and output formats that can be used by researchers with non-programming backgrounds.
- **Workflow Design**: Establish a navigation portal and sixteen dedicated skills, covering research questions, literature, theoretical framework, methods, writing, review, oral examination and submission.
- **Human-computer collaboration governance**: Set up manual decision-making gates for research questions, theoretical frameworks, method selection and interpretive judgments to prevent automation from overtaking researchers.
- **Academic Integrity Mechanism**: Make "no fabrication found", "references must be made to the source" and "transparent disclosure of AI use" as hard rules in the workflow.
- **Verification system**: Use real paper materials to establish actual test cases, structured evaluations and evidence records, and continuously write down the exposed problems back to the technical rules.
- **Cross-platform maintenance**: Supports Codex, Claude Code and OpenCode, and provides Traditional Chinese, Simplified Chinese, English and Japanese portals.

## Core Innovation

### 1. Convert research methods into executable workflows

BOYA not only provides prompt words, but also breaks down each research stage into clear inputs, judgment gates, outputs and handover conditions, making AI collaboration a traceable research process.

### 2. Human-in-the-loop Hard Decision Gate

The process can assist with retrieval, sorting, checking and simulated questioning, but when encountering research questions, theory selection, method selection and proposition revision, the researcher must stop and make decisions. This is the core difference between BOYA and fully automatic essay generation tools.

### 3. Distinguish between bibliographic existence and claim establishment

`reference-check` is responsible for confirming the literature and bibliographic fields, while `claim-audit` goes back to the original text to check whether the key claims are supported to avoid mistaking the existence of a DOI as evidence of content.

### 4. Use real research materials to drive iteration

The boundaries of each skill are exposed through real research cases, and error patterns are written back into rules and evaluations. The reliability of workflow comes from checkable actual measurement records, not just functional descriptions.

## Project results

- Build **17** composable research skills with complete navigation workflows.
- Accumulated **20** real material test cases.
- Provide offline unit testing, structured regression cases and cross-model manual verification process.
- Open source under MIT License and provides usage entrances in four languages.
- It has been used for reference review of the author's master's thesis, and errors in DOI, signature and bibliographic information were found and corrections were made public.

[View BOYA official website](https://boya-website.pages.dev/) · [View GitHub source code](https://github.com/DylanChiang-Dev/BOYA-skills)