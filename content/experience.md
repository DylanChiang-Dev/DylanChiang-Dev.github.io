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

  # Skills & Hobbies - Compact 視圖 (詳細描述風格)
  - block: features
    id: skills
    content:
      title: 技能與興趣
      subtitle: 詳細描述風格 - 深入介紹每項技能
      items:
        - name: 自然語言處理與大型語言模型
          description: 研究大型語言模型、智能體與自然語言處理方法，關注模型如何理解、生成並參與複雜的社會互動
          icon: brain
          icon_pack: fas
        - name: 計算社會科學
          description: 結合社會科學問題意識、計算方法與社會模擬，分析數位平台、公共治理與群體行為
          icon: globe
          icon_pack: fas
        - name: 以人為本的人工智慧
          description: 為研究與知識工作打造可信、以人為中心的 AI 工具，重視人的學術判斷、來源查核與研究倫理
          icon: balance-scale
          icon_pack: fas
    design:
      columns: 1
      view: card

  - block: collection
    id: awards
    content:
      title: 獲獎記錄
      filters:
        folders:
          - awards
      count: 10
    design:
      view: card
      columns: 1
  - block: resume-languages
    content:
      title: 語言能力
      username: admin
---
