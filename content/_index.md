---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 下載履歷
        url: uploads/resume.pdf
    design:
      css_class: dark
      # Avatar customization
      avatar:
        size: medium  # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '我的研究'
      subtitle: ''
      text: |-
        我專注於生成式人工智慧在政治工作領域的應用研究，致力於探索AI技術如何改變傳統政治工作模式。我的碩士論文以「生成式人工智慧使用行為之研究：以立法委員助理為例」為主題，深入分析政治工作者對AI技術的接受度與使用行為。

        研究領域涵蓋AI應用模式分析、技術接受度理論、政治工作數位化轉型等面向。透過結合定性與定量研究方法，我致力於建構政治工作者使用生成式AI的理論框架，為政治領域的數位創新提供學術基礎。
        
        歡迎與我討論AI在政治工作中的應用與發展 😃
    design:
      columns: '1'
  # - block: collection
  #   id: papers
  #   content:
  #     title: 精選論文
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: compact
  #     columns: 1
  - block: collection
    id: papers
    content:
      title: 最新論文
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: 近期與即將到來的演講
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1
  - block: collection
    id: news
    content:
      title: 最新消息
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 建立您自己的學術網站
      text: |-
        此網站由 Hugo Blox Builder 生成 - 這是一個免費、基於 Hugo 的開源網站建構器，受到 250,000+ 位像您一樣的學者信賴。

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        輕鬆使用區塊建構任何內容 - 無需程式碼！
        
        從登陸頁面、第二大腦、課程到學術履歷、會議和技術部落格。
      button:
        text: 開始使用
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
