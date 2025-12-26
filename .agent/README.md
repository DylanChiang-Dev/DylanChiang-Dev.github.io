# .agent 目錄

此目錄用於存放 AI 工具生成的配置文件、文檔和工作流。

## 目錄結構

```
.agent/
├── docs/           # AI 生成的開發文檔和指南
├── workflows/      # AI 工作流配置（可供 AI 工具讀取執行）
├── prompts/        # 自定義提示詞模板
└── README.md       # 本說明文件
```

## 文件說明

### docs/
存放由 AI 工具（如 Trae、Claude、Cursor 等）生成的開發文檔，包括：
- Hugo Blox 頁面構建器指南
- Skills & Hobbies 配置指南
- 演講板塊添加指南

### workflows/
存放可由 AI 執行的工作流配置，格式為 YAML frontmatter + Markdown：
```yaml
---
description: 工作流描述
---
具體執行步驟
```

### prompts/
存放可複用的提示詞模板（可選）。

---

*此目錄結構統一管理來自不同 AI 工具的配置，便於維護和版本控制。*
