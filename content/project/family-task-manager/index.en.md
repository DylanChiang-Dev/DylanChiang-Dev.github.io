---
title: "Home task management system: Cloudflare full-stack collaboration platform"
summary: "A home collaboration system built with React, Hono, D1 and Cloudflare Workers that integrates tasks, calendars, schedules and team notifications."
date: 2025-10-02
authors:
  - admin
tags:
  - "Open source projects"
  - TypeScript
  - React
  - Cloudflare
  - "Full stack development"
featured: true
draft: false
---
The family task management system is an open source collaboration platform for families and small teams. It integrates tasks, calendars, inspiration boxes, periodic schedules, member divisions and notifications into the same interface, and uses Cloudflare's edge services to complete front-end and data layer deployment.

<!--more-->

## What I am responsible for in the project

This is a full-stack open source project designed, developed and maintained by me. I completed a complete refactoring from an early PHP version to an end-to-end TypeScript architecture.

- **Product Definition**: Starting from the needs of family members to jointly manage daily tasks, core processes such as workbench, tasks, calendar, inspiration box, classification, member and personal settings are designed.
- **Architecture Refactoring**: Refactor the PHP and MySQL monolithic systems into an edge-native architecture composed of React, Hono, Cloudflare Workers, D1, KV and R2.
- **Data and API**: Design data models, validation rules and APIs for teams, tasks, categories, comments, notifications, periodic tasks and schedule blocks.
- **Complex task logic**: Implement periodic task generation, time window, backlog tasks, calendar view and schedule update, and handle cross-layer data consistency.
- **Identity and Permissions**: Create JWT access tokens, KV refresh sessions, team isolation and role permissions.
- **Engineering quality**: using monorepo, front-end and back-end shared Zod schema, type checking, unit testing and Cloudflare automatic deployment.

## Core Innovation

### 1. Shift from personal to-do to family collaboration

The system not only manages the list of a single user, but also supports member assignment, classification, comments, notifications and multi-view workbench based on family or small team units.

### 2. Unify multiple tasks with time semantics

General tasks, periodic tasks, time windows, itineraries and inspiration boxes each have different life cycles. The system allows different tasks to be managed in a consistent operating model by sharing data contracts and calendar views.

### 3. End-to-end TypeScript contract

The front-end, back-end and shared packages are located in the same pnpm workspace, and Zod schema and type sharing are used to reduce API field drift, allowing input validation and type safety to extend from the interface to the data layer.

### 4. Edge-native low-dimensional operation architecture

The frontend is deployed on Cloudflare Pages, the API runs on Workers, and the data uses D1, KV and R2. This architecture reduces traditional server maintenance while retaining database, cache, file and scheduling capabilities.

## Technical architecture

- **Front-end**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, PWA
- **Backend**: Hono, Cloudflare Workers, Zod
- **Data layer**: Cloudflare D1, Drizzle ORM, KV, R2
- **Engineering**: pnpm workspace, Vitest, MSW, Cloudflare Pages
- **Authorization**: MIT License

[Open online version](https://dc-family-task-manager.pages.dev/) · [View GitHub source code](https://github.com/DylanChiang-Dev/DC-family-task-manager)