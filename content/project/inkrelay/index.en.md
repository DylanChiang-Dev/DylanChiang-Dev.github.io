---
title: "InkRelay: Author-Led AI Content Production"
summary: "An Agent workflow connecting source material, author voice, approved core drafts, and optional image cards or text videos while preserving human publishing decisions."
date: 2026-10-03
authors:
  - admin
tags:
  - Open Source
  - AI Collaboration
  - Human-in-the-loop
  - Content Tools
featured: true
draft: false
image:
  filename: workflow.png
  preview_only: true
  alt_text: "InkRelay workflow: source material becomes a core draft, followed by author approval and optional articles, image cards, or text videos."
  caption: "An independently drawn workflow diagram, not a software screenshot."
---

InkRelay is an open-source content-production Skill I designed around an author's materials, voice, and publishing goals. It coordinates an approved core text and optional visuals rather than offering one-click writing or a fixed renderer.

<!--more-->

## My contributions

- **Long- and short-form workflows**: Sources and argument structure precede section-level drafting; short content retains one core draft across optional formats.
- **Author approval points**: Distinguish drafts, approved text, and derivative assets without treating experiments as consent to publish.
- **Cover-generation guidance**: Translate author identity, the article's argument, a single visual concept, and approved examples into prompts.
- **Platform-aware production**: Plan horizontal covers, optional square crops, 3:4 cards, and 9:16 text videos without requiring every format.
- **Tool and asset boundaries**: Orchestrate available, authorized tools without embedding personal branding, models, fonts, music, or credentials.
- **Iterative review**: Separate content checks from visual inspection; retain revisions and scenario walkthroughs without presenting them as independent model evaluations.

## Workflow diagram

{{< figure src="workflow.png" alt="InkRelay source-to-draft workflow with author approval and optional publishing formats." caption="An original workflow illustration, not a screenshot of generated content or a publishing interface." >}}

## Scope

The public project supplies a Skill and production guidance, not a bundled renderer. Actual media requires available tools and authorization; paid generation, posting, and scheduling are not automatic.

[GitHub source and documentation](https://github.com/DylanChiang-Dev/inkrelay) · [Skill entry](https://github.com/DylanChiang-Dev/inkrelay/blob/main/skills/inkrelay/SKILL.md)
