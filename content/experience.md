---
title: 'Experience'
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
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  # 選項1：Features 區塊 + Card 視圖 (推薦 - 最美觀)
  # - block: features
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     items:
  #       - icon: robot
  #         icon_pack: fas
  #         name: AI技術研究
  #         description: 85%
  #       - icon: chart-line
  #         icon_pack: fas
  #         name: 數據分析
  #         description: 90%
  #       - icon: users
  #         icon_pack: fas
  #         name: 政治工作研究
  #         description: 80%
  #       - icon: code
  #         icon_pack: fas
  #         name: 程式設計
  #         description: 80%
  #   design:
  #     columns: '2'
  #     view: masonry
      
  # 選項2：Features 區塊 + Compact 視圖
  # - block: features
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     items:
  #       - name: Python
  #         description: 熟練掌握 Python 程式設計，包含數據分析、機器學習和知識圖譜建構
  #         icon: python
  #         icon_pack: fab
  #       - name: R
  #         description: 精通 R 語言統計分析，擅長數據視覺化和統計計算建模
  #         icon: r-project
  #         icon_pack: fab
  #       - name: Statistics
  #         description: 具備紮實的統計學基礎，熟悉各種統計方法和假設檢定
  #         icon: chart-line
  #         icon_pack: fas
  #       - name: SQL
  #         description: 熟練使用 SQL 進行資料庫查詢、數據整理和分析
  #         icon: database
  #         icon_pack: fas
  #       - name: 學術論文寫作
  #         description: 具備學術寫作能力，熟悉論文撰寫和學術規範
  #         icon: pen-fancy
  #         icon_pack: fas
  #   design:
  #     columns: '1'
  #     view: compact
      
  # 選項3：Markdown 區塊 + 雙列布局
  # - block: markdown
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     text: |
  #       ## 🐍 Python
  #       熟練掌握 Python 程式設計，包含數據分析、機器學習和知識圖譜建構
  #       
  #       ## 📊 R
  #       精通 R 語言統計分析，擅長數據視覺化和統計計算建模
  #       
  #       ## 📈 Statistics
  #       具備紮實的統計學基礎，熟悉各種統計方法和假設檢定
  #       
  #       ## 🗄️ SQL
  #       熟練使用 SQL 進行資料庫查詢、數據整理和分析
  #       
  #       ## ✍️ 學術論文寫作
  #       具備學術寫作能力，熟悉論文撰寫和學術規範
  #   design:
  #     columns: '2'
       
  # 選項4：Collection 區塊 + Article Grid 視圖 (需要創建技能內容文件)
  # - block: collection
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     filters:
  #       folders:
  #         - skill  # 需要在 content/skill/ 目錄下創建技能文件
  #   design:
  #     view: article-grid
  #     columns: 3
  #     fill_image: false
       
  # 選項5：Collection 區塊 + Card 視圖 (需要創建技能內容文件)
  # - block: collection
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     filters:
  #       folders:
  #         - skill  # 需要在 content/skill/ 目錄下創建技能文件
  #   design:
  #     view: card
  #     columns: 2
       
  # 選項6：Portfolio 區塊 (展示技能作品集)
  # - block: portfolio
  #   id: skills
  #   content:
  #     title: Skills & Hobbies
  #     subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
  #     filters:
  #       # 可以按標籤篩選
  #       tag: 'skill'
  #   design:
  #     # 選擇視圖類型
  #     view: masonry  # 或 showcase, compact
  #     columns: 3
  #     flip_alt_rows: true
  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
