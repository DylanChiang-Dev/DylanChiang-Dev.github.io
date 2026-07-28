---
title: "experience"
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
      date_format: "January 2006"
      # Education or Experience section first?
      is_education_first: false

# Skills & Hobbies - Compact view (detailed description style)
  - block: features
    id: skills
    content:
      title: "Skills and Interests"
      subtitle: "Detailed description of style - an in-depth introduction to each skill"
      items:
        - name: "Natural language processing and large language models"
          description: "Research large-scale language models, agents and natural language processing methods, focusing on how models understand, generate and participate in complex social interactions"
          icon: brain
          icon_pack: fas
        - name: "computational social science"
          description: "Combine social science issue awareness, computational methods and social simulation to analyze digital platforms, public governance and group behavior"
          icon: globe
          icon_pack: fas
        - name: "Human-centered artificial intelligence"
          description: "Build trustworthy, human-centered AI tools for research and knowledge work that value human academic judgment, source checking, and research ethics"
          icon: balance-scale
          icon_pack: fas
    design:
      columns: 1
      view: card

  - block: collection
    id: awards
    content:
      title: "Award-winning record"
      filters:
        folders:
          - awards
      count: 10
    design:
      view: card
      columns: 1
  - block: resume-languages
    content:
      title: "language ability"
      username: admin
---
