---
title: "Generative Agents: Replication, Model Migration, and Legal RAG"
summary: "An adaptation of Stanford Generative Agents with model-service migration, a three-agent interaction scenario, and legal-document retrieval, clearly separating upstream research from my extensions."
date: 2026-10-03
authors:
  - admin
tags:
  - Research Replication
  - AI Agent
  - RAG
  - Computational Social Science
featured: true
draft: false
image:
  filename: architecture.png
  preview_only: true
  alt_text: "Legal documents are chunked and retrieved as vector matches, injected into agent context, and tested in a three-agent interaction scenario."
  caption: "Replication and RAG integration diagram; the original framework is Stanford Generative Agents."
---

This course implementation builds on Stanford Generative Agents. I adapted model services, configured a focused interaction scenario, and integrated legal-document retrieval into the existing agent workflow.

<!--more-->

## My extensions

- **Model-service migration**: Adapted chat calls to Volcengine/Doubao and handled its distinct multimodal embedding interface.
- **Three-agent scenario**: Configured roles, starting locations, and a meeting setup for focused interaction checks.
- **Spatial consistency**: Aligned scene regions, character spatial memory, and spawning locations.
- **Document indexing**: Added chunking, embedding calls, and document–vector mappings using JSON and NumPy.
- **Retrieval integration**: Implemented cosine-similarity Top-K retrieval and legal-keyword triggers that inject retrieved text into agent context.
- **Integration records**: Retained retrieval checks and dialogue records without equating functional integration with validated human-like behavior.

## Architecture

{{< figure src="architecture.png" alt="Document chunking, vector retrieval, context injection, and a three-agent integration scenario." caption="An implementation diagram, not an execution screenshot; upstream research and my integration work are distinguished." >}}

## Attribution and limits

The original framework and research belong to Stanford Generative Agents. My contribution is adaptation and integration, not invention of its memory, reflection, or planning mechanisms. No unmeasured improvement in answer quality is claimed.

[My adaptation and records](https://github.com/DylanChiang-Dev/DC-generative_agents) · [Original Generative Agents](https://github.com/joonspk-research/generative_agents)
