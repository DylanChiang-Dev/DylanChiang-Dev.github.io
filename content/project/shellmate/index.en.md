---
title: "ShellMate: A Browser-Based SSH Workbench"
summary: "A full-stack engineering prototype integrating interactive SSH, terminal tabs, host groups, and command snippets through React, WebSocket, and Node.js."
date: 2026-10-03
authors:
  - admin
tags:
  - Open Source
  - Engineering
  - TypeScript
  - WebSocket
featured: false
draft: false
image:
  filename: architecture.png
  preview_only: true
  alt_text: "ShellMate connects browser terminals, host groups, tabs, and snippets to remote hosts through a WebSocket and ssh2 backend."
  caption: "A functional architecture diagram, not a screenshot of real hosts or a running interface."
---

ShellMate is a Web SSH workbench I developed for managing multiple hosts. It brings host settings, interactive terminals, and reusable commands into a deployable single-machine prototype.

<!--more-->

## My work

- **Live terminal integration**: Connected React, TypeScript, and xterm.js to Node.js/ssh2 through bidirectional WebSocket communication.
- **Hosts and tabs**: Implemented host editing, grouping, and terminal-tab switching.
- **Command snippets**: Organized reusable commands into groups and sent them to the active terminal.
- **Basic access controls**: Integrated login, JWT API authentication, password hashing, and encrypted host-password storage.
- **Backend structure**: Separated authentication, host data, snippets, SSH sessions, and WebSocket handlers, with clearer connection errors.
- **Deployment tradeoffs**: Supplied Docker/Compose deployment and lightweight JSON storage without claiming large-scale multi-user capability.

## Architecture

{{< figure src="architecture.png" alt="ShellMate host management, terminal interaction, WebSocket backend, and SSH connections." caption="A conceptual diagram containing no real hosts, addresses, accounts, or credentials. It does not expose a live SSH service." >}}

## Scope

This project demonstrates frontend, realtime communication, backend, and deployment integration. Basic safeguards are not independent security certification; finer permissions and scalable multi-user storage remain extension areas.

[GitHub source and deployment documentation](https://github.com/DylanChiang-Dev/DC-ShellMate)
