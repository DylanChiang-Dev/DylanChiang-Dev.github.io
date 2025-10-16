---
title: '經歷'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: '2006年1月'
      # Education or Experience section first?
      is_education_first: false

  # 📝 Skills & Hobbies - Compact 視圖 (詳細描述風格)
  - block: features
    id: skills
    content:
      title: 📝 技能與興趣
      subtitle: 詳細描述風格 - 深入介紹每項技能
      items:
        - name: Python
          description: 熟練掌握 Python 程式設計，包含數據分析、機器學習和知識圖譜建構
          icon: python
          icon_pack: fab
        - name: R
          description: 精通 R 語言統計分析，擅長數據視覺化和統計計算建模
          icon: r-project
          icon_pack: fab
        - name: Statistics
          description: 具備紮實的統計學基礎，熟悉各種統計方法和假設檢定
          icon: chart-line
          icon_pack: fas
        - name: SQL
          description: 熟練使用 SQL 進行資料庫查詢、數據整理和分析
          icon: database
          icon_pack: fas
        - name: 學術論文寫作
          description: 具備學術寫作能力，熟悉論文撰寫和學術規範
          icon: pen-fancy
          icon_pack: fas
    design:
      columns: '1'
      view: compact

  - block: resume-awards
    content:
      title: 獲獎記錄
      username: admin
  - block: resume-languages
    content:
      title: 語言能力
      username: admin
---