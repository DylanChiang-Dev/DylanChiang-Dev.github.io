---
title: "Quotabase-Lite: Quotation and Receipt Management"
summary: "A PHP and relational-database application connecting customers, products, quotation states, A4 printing, and receipt verification into a practical business workflow."
date: 2026-10-03
authors:
  - admin
tags:
  - Open Source
  - Engineering
  - PHP
  - Business Systems
featured: false
draft: false
image:
  filename: workflow.png
  preview_only: true
  alt_text: "Quotabase-Lite connects customer and product data to quotations, status tracking, printing, and receipt verification."
  caption: "A functional workflow illustration, not a real customer quotation or receipt."
---

Quotabase-Lite is an open-source web application for small-business quotation workflows. I integrated customers, products and services, quotations, states, and receipts using native frontend code, PHP, and MySQL/MariaDB.

<!--more-->

## My work

- **Business workflow**: Connected customer management, catalog data, quotation creation, and status tracking.
- **Amounts and transactions**: Stored amounts as integer cents and used database transactions for related writes.
- **Frontend and backend**: Implemented PHP with limited Composer dependencies and native HTML/CSS/JavaScript, including tab navigation and dark mode.
- **Basic safeguards**: Used PDO prepared statements, CSRF checks, and output escaping without claiming an independent security audit.
- **Print and receipts**: Built A4 print views, personal receipts, and QR/hash verification entry points.
- **Export and deployment**: Supplied CSV/JSON exports and installation documentation within a lightweight, framework-free architecture.

## Workflow

{{< figure src="workflow.png" alt="Quotabase-Lite customers, catalog, quotation states, printing, and receipt-verification flow." caption="An original functional diagram with no real customer names, amounts, transaction IDs, or documents. It is not a product screenshot." >}}

## Boundaries

This page presents engineering work, not unverified performance benchmarks. Receipt verification is not presented as a guarantee of legal validity or regulatory compliance.

[GitHub source and features](https://github.com/DylanChiang-Dev/DC-quotabase)
