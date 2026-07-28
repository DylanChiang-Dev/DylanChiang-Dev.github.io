---
title: "DC-WeMark: Local-first WeChat public account Markdown typesetting tool"
summary: "Use Rust and WebAssembly to build a pure browser typesetting engine, allowing Markdown writing, real-time preview and public account publishing to be completed locally."
date: 2026-07-11
authors:
  - admin
tags:
  - "Open source projects"
  - Rust
  - WebAssembly
  - TypeScript
  - Local-first
featured: true
draft: false
---
DC-WeMark is an open source Markdown typesetting tool for WeChat public account authors. Users can write Markdown on the left, preview it in real time on the right, and paste style-preserving rich text into the official account editor with one click. The entire processing process is completed locally in the browser, and no account, backend or article upload is required.

<!--more-->

## What I am responsible for in the project

This is an independent open source project designed and developed by me. I am responsible for the complete process from problem definition, technical architecture to product delivery.

- **Product Design**: Focus on format loss, repeated adjustments and content privacy issues when Markdown authors enter the public account editor, and establish a single workflow of "typesetting, previewing, and copying".
- **Core Engine**: Parse Markdown AST with Rust and `comrak`, convert theme rules into inline CSS acceptable to public accounts, and compile to WebAssembly.
- **Front-end experience**: Use Vite and native TypeScript to complete dual-column editing, synchronous scrolling, mobile preview, file import and export, draft saving, and clipboard compatibility.
- **Design System**: Create 48 original typography themes and provide adjustable parameters such as font, font size, accent color and copy background.
- **Project Delivery**: Complete Rust unit testing, Playwright end-to-end testing, Docker self-racking solution, and Cloudflare Pages' continuous deployment process.

## Core Innovation

### 1. Put the typesetting core into WebAssembly

Markdown parsing, theme application and compatibility processing are all completed by the Rust core, and then executed in the browser through WebAssembly. The same core set can be extended to the CLI or desktop in the future without having to re-implement the layout rules.

### 2. Content does not leave the user’s device

The system has no server logic, database, or account services. Articles are always retained locally from input to copy, taking into account the privacy and offline availability of sensitive content.

### 3. Compatible output for official account editor

General web page CSS cannot be saved directly in the official account editor. DC-WeMark inlines styles into elements one by one, filters unsupported tags and attributes, and writes them to the clipboard using `text/html` to make the pasted layout as consistent as possible.

### 4. Small size, low dependency product architecture

The front end does not rely on a large UI framework, and the deployment artifacts are files that can be hosted by any static service. This keeps the online version, self-hosted version, and future multi-device reuse simple.

## Technical architecture

- **Typesetting Core**: Rust, comrak, WebAssembly
- **Front-end**: Vite, TypeScript, HTML, CSS
- **Quality Assurance**: Rust tests, Playwright E2E
- **Deployment**: Cloudflare Pages, Docker, nginx
- **Authorization**: MIT License

[Use DC-WeMark online](https://dc-wemark.pages.dev/) · [View GitHub source code](https://github.com/DylanChiang-Dev/DC-WeMark)