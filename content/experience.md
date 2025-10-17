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
        - name: 科技與社會研究（STS / 政治科技）
          description: 探討人工智慧、監控資本主義與數位治理等議題，分析科技在權力結構與社會治理中的政治意涵
          icon: balance-scale
          icon_pack: fas
        - name: 國家發展與大陸研究
          description: 專注於中國大陸政治發展、治理體制與政策變遷研究，關注國家建構、發展戰略與社會轉型議題，並從比較政治視角分析兩岸互動與區域發展動態
          icon: globe
          icon_pack: fas
        - name: 人工智慧應用與數位研究方法
          description: 關注生成式 AI、自然語言處理與資料視覺化在社會科學研究中的應用，具備運用開源模型與工具設計研究流程的實務經驗
          icon: brain
          icon_pack: fas
    design:
      columns: 1
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